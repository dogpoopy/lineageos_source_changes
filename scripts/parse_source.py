import subprocess
import sys
from datetime import datetime, timedelta, timezone
from lxml import etree
import json
import shutil
import tempfile
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# Get branch from command line argument
branch = sys.argv[1] if len(sys.argv) > 1 else "lineage-23.0"

# Config
manifest_file = Path("workspace/source_manifest.xml")
output_file = Path(f"public/data/{branch}.json")
since_date = (datetime.now(timezone.utc) - timedelta(days=30)).strftime("%Y-%m-%d")
max_workers = 6


def log(level: str, msg: str):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{level}] [{branch}] {msg}")


# Parse manifest
tree = etree.parse(str(manifest_file))
root = tree.getroot()

# Build remotes mapping
remotes = {}
default_tag = root.find("default")
if default_tag is None:
    raise ValueError("ERROR: No <default> tag found in manifest.")

default_remote = default_tag.attrib["remote"]
default_revision = default_tag.attrib["revision"]

for remote in root.findall("remote"):
    name = remote.attrib.get("name")
    fetch = remote.attrib.get("fetch")
    if name and fetch:
        if fetch == "..":
            fetch = "https://github.com/"
        remotes[name] = fetch


def process_project(project, temp_root: Path):
    name = project.attrib["name"]
    path = project.attrib.get("path", name)
    revision = project.attrib.get("revision", default_revision)
    remote_name = project.attrib.get("remote", default_remote)
    remote_fetch = remotes.get(remote_name)

    if not remote_fetch:
        log("WARN", f"Skipping {name} (unknown remote: {remote_name})")
        return None

    if "android.googlesource.com" in remote_fetch:
        log("INFO", f"Skipping {name} (googlesource)")
        return None

    if not remote_fetch.endswith("/"):
        remote_fetch += "/"

    org_prefix = remote_fetch.rstrip("/").split("/")[-1] + "/"
    repo_name = name[len(org_prefix):] if name.startswith(org_prefix) else name

    repo_url = f"{remote_fetch}{repo_name}.git"
    repo_path = temp_root / path.replace("/", "_")

    # Check if ref exists
    log("INFO", f"Checking {repo_url} for ref '{revision}'...")
    branch_check_cmd = ["git", "ls-remote", repo_url, revision]
    branch_result = subprocess.run(branch_check_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    if branch_result.returncode != 0:
        log("ERROR", f"Failed to query refs for {name}\n        {branch_result.stderr.strip()}")
        return None

    if not branch_result.stdout.strip():
        log("WARN", f"Skipping {name} (ref '{revision}' not found)")
        return None

    # Normalize branch/tag name
    clone_target = revision
    if revision.startswith("refs/heads/"):
        clone_target = revision.replace("refs/heads/", "")
    elif revision.startswith("refs/tags/"):
        clone_target = revision.replace("refs/tags/", "")

    log("INFO", f"Cloning {repo_url} (branch/tag: {clone_target})")

    clone_cmd = [
        "git", "clone", "--filter=blob:none", "--no-checkout", "--depth=50",
        "--branch", clone_target, "--single-branch", repo_url, str(repo_path)
    ]
    result = subprocess.run(clone_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if result.returncode != 0:
        log("ERROR", f"Failed to clone {name}\n        {result.stderr.strip()}")
        return None

    try:
        log_cmd = [
            "git", "-C", str(repo_path), "log",
            f'--since={since_date}',
            '--pretty=format:%h|%s|%an|%cd|%ct'
        ]
        log_output = subprocess.check_output(log_cmd, text=True).strip()

        if log_output:
            commits = []
            for line in log_output.splitlines():
                sha, message, author, date, timestamp = line.split("|", 4)
                commit_url = f"{remote_fetch}{repo_name}/commit/{sha}"
                commits.append({
                    "sha": sha,
                    "message": message,
                    "author": author,
                    "date": date,
                    "timestamp": int(timestamp),
                    "url": commit_url
                })
            
            count = len(commits)
            log("INFO", f"{name}: {count} new commits")

            return {
                "name": name,
                "path": path,
                "repo_url": f"{remote_fetch}{repo_name}",
                "commit_count": count,
                "commits": commits
            }
        else:
            log("INFO", f"No recent commits for {name}")

    except subprocess.CalledProcessError:
        log("INFO", f"No recent commits for {name}")
    finally:
        shutil.rmtree(repo_path, ignore_errors=True)

    return None


def main():
    projects_data = []
    projects = root.findall("project")

    with tempfile.TemporaryDirectory(prefix="lineageos_repos_") as temp_dir:
        temp_root = Path(temp_dir)

        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_proj = {executor.submit(process_project, proj, temp_root): proj for proj in projects}
            for future in as_completed(future_to_proj):
                result = future.result()
                if result:
                    projects_data.append(result)

    # Sort by commit count (most active first)
    projects_data.sort(key=lambda x: x["commit_count"], reverse=True)

    # Prepare output data
    output_data = {
        "branch": branch,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "since_date": since_date,
        "total_projects": len(projects_data),
        "total_commits": sum(p["commit_count"] for p in projects_data),
        "projects": projects_data
    }

    # Ensure output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)

    # Write JSON output
    with output_file.open("w", encoding="utf-8") as out:
        json.dump(output_data, out, indent=2, ensure_ascii=False)

    log("INFO", f"✅ Generated {branch}.json with {len(projects_data)} projects and {output_data['total_commits']} commits")


if __name__ == "__main__":
    main()
