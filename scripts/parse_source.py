import subprocess
import sys
from datetime import datetime, timedelta, timezone
from lxml import etree
import json
import shutil
import tempfile
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

identifier = sys.argv[1] if len(sys.argv) > 1 else "unknown/unknown"
rom_id, branch = identifier.split("/", 1) if "/" in identifier else (identifier, "unknown")

# Config
manifest_file = Path("workspace/source_manifest.xml")
output_file = Path(f"public/data/{rom_id}/{branch}.json")
since_date = (datetime.now(timezone.utc) - timedelta(days=90)).strftime("%Y-%m-%d")
max_workers = 6

# Domains to skip
SKIP_DOMAINS = [
    "android.googlesource.com",
    "googlesource.com"
]


def log(level: str, msg: str):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{level}] [{identifier}] {msg}")


def should_skip_remote(remote_fetch: str) -> bool:
    """Check if remote should be skipped based on domain or protocol"""
    if not remote_fetch:
        return True
    
    # Skip SSH/private repositories
    if remote_fetch.startswith("ssh://") or remote_fetch.startswith("git@"):
        return True
    
    # Skip AOSP
    for domain in SKIP_DOMAINS:
        if domain in remote_fetch:
            return True
    
    return False


def normalize_fetch_url(fetch: str) -> str:
    """Normalize fetch URL to full form"""
    if not fetch:
        return ""
    
    if fetch == "..":
        return "https://github.com/"
    
    if fetch.startswith("ssh://") or fetch.startswith("git@"):
        return fetch
    
    if not fetch.startswith("http://") and not fetch.startswith("https://"):
        fetch = f"https://{fetch}"
    
    if not fetch.endswith("/"):
        fetch += "/"
    
    return fetch


def get_repo_url(name: str, remote_fetch: str) -> str:
    """Construct repository URL from project name and remote"""
    name = name.strip("/")
    
    if "/" in name:
        parts = name.split("/")
        repo_path = name
    else:
        repo_path = name
    
    repo_url = f"{remote_fetch}{repo_path}"
    
    # Add .git if not present
    if not repo_url.endswith(".git"):
        repo_url += ".git"
    
    return repo_url


# Parse manifest
log("INFO", "Parsing manifest...")
tree = etree.parse(str(manifest_file))
root = tree.getroot()

# Build remotes mapping
remotes = {}
remote_revisions = {}
default_tag = root.find("default")
if default_tag is None:
    log("WARN", "No <default> tag found, using fallback")
    default_remote = "aosp"
    default_revision = "main"
else:
    default_remote = default_tag.attrib.get("remote", "aosp")
    default_revision = default_tag.attrib.get("revision", "main")

for remote in root.findall("remote"):
    name = remote.attrib.get("name")
    fetch = remote.attrib.get("fetch")
    revision = remote.attrib.get("revision")
    if name and fetch:
        remotes[name] = normalize_fetch_url(fetch)
        if revision:
            remote_revisions[name] = revision

log("INFO", f"Found {len(remotes)} remotes, default: {default_remote}")


def process_project(project, temp_root: Path):
    name = project.attrib.get("name")
    if not name:
        return None
    
    path = project.attrib.get("path", name)
    revision = project.attrib.get("revision")
    remote_name = project.attrib.get("remote", default_remote)
    
    remote_fetch = remotes.get(remote_name)
    
    if not remote_fetch:
        log("WARN", f"Skipping {name} (unknown remote: {remote_name})")
        return None
    
    # Skip AOSP repos and SSH/private repos
    if should_skip_remote(remote_fetch):
        log("INFO", f"Skipping {name} (AOSP/upstream/private)")
        return None
    
    if revision is None:
        if remote_name in remote_revisions:
            revision = remote_revisions[remote_name]
            log("INFO", f"Using remote default revision '{revision}' for: {name}")
        else:
            revision = default_revision
            log("INFO", f"Using global default revision '{revision}' for: {name}")
    
    repo_url = get_repo_url(name, remote_fetch)
    repo_path = temp_root / path.replace("/", "_")
    
    # Check if ref exists
    log("INFO", f"Checking {repo_url}...")
    branch_check_cmd = ["git", "ls-remote", repo_url, revision]
    branch_result = subprocess.run(
        branch_check_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=30
    )
    
    if branch_result.returncode != 0:
        log("ERROR", f"Failed to query {name}: {branch_result.stderr[:100]}")
        return None
    
    if not branch_result.stdout.strip():
        log("WARN", f"Skipping {name} (ref '{revision}' not found)")
        return None
    
    clone_target = revision
    if revision.startswith("refs/heads/"):
        clone_target = revision.replace("refs/heads/", "")
    elif revision.startswith("refs/tags/"):
        clone_target = revision.replace("refs/tags/", "")
    
    log("INFO", f"Cloning {name}...")
    
    clone_cmd = [
        "git", "clone",
        "--filter=blob:none",
        "--no-checkout",
        "--depth=200",
        "--branch", clone_target,
        "--single-branch",
        repo_url,
        str(repo_path)
    ]
    
    result = subprocess.run(
        clone_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=300
    )
    
    if result.returncode != 0:
        log("ERROR", f"Failed to clone {name}: {result.stderr[:100]}")
        return None
    
    try:
        log_cmd = [
            "git", "-C", str(repo_path), "log",
            f'--since={since_date}',
            '--pretty=format:%h%x00%s%x00%an%x00%cd%x00%ct'
        ]
        # Return raw bytes, then decode safely
        log_output_bytes = subprocess.check_output(log_cmd, text=False, timeout=30)
        log_output = log_output_bytes.decode("utf-8", errors="replace").strip()

        
        if log_output:
            commits = []
            for line in log_output.splitlines():
                parts = line.split("\x00")
                if len(parts) != 5:
                    continue
                
                sha, message, author, date, timestamp = parts
                commit_url = repo_url.replace(".git", "") + f"/commit/{sha}"
                
                commits.append({
                    "sha": sha,
                    "message": message,
                    "author": author,
                    "date": date,
                    "timestamp": int(timestamp),
                    "url": commit_url
                })
            
            count = len(commits)
            log("INFO", f"{name}: {count} commits")
            
            return {
                "name": name,
                "path": path,
                "repo_url": repo_url.replace(".git", ""),
                "remote": remote_name,
                "commit_count": count,
                "commits": commits
            }
        else:
            log("INFO", f"No recent commits for {name}")
    
    except Exception as e:
        log("ERROR", f"Error processing {name}: {str(e)}")
    finally:
        shutil.rmtree(repo_path, ignore_errors=True)
    
    return None


def main():
    projects_data = []
    projects = root.findall("project")
    
    log("INFO", f"Processing {len(projects)} projects...")
    
    with tempfile.TemporaryDirectory(prefix="rom_repos_") as temp_dir:
        temp_root = Path(temp_dir)
        
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_proj = {
                executor.submit(process_project, proj, temp_root): proj
                for proj in projects
            }
            
            for future in as_completed(future_to_proj):
                try:
                    result = future.result()
                    if result:
                        projects_data.append(result)
                except Exception as e:
                    log("ERROR", f"Future failed: {str(e)}")
    
    # Sort by commit count
    projects_data.sort(key=lambda x: x["commit_count"], reverse=True)
    
    # Prepare output
    output_data = {
        "rom_id": rom_id,
        "branch": branch,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "since_date": since_date,
        "total_projects": len(projects_data),
        "total_commits": sum(p["commit_count"] for p in projects_data),
        "projects": projects_data
    }
    
    # Ensure output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    # Write JSON
    with output_file.open("w", encoding="utf-8") as out:
        json.dump(output_data, out, indent=2, ensure_ascii=False)
    
    log("INFO", f"✅ Generated: {len(projects_data)} projects, {output_data['total_commits']} commits")


if __name__ == "__main__":
    main()
