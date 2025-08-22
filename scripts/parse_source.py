import subprocess
from datetime import datetime, timedelta, timezone
from lxml import etree
import html
import shutil
import tempfile
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# Config
manifest_file = Path("workspace/source_manifest.xml")
output_file = Path("README.md")
since_date = (datetime.now(timezone.utc) - timedelta(days=30)).strftime("%Y-%m-%d")
max_workers = 6


def log(level: str, msg: str):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{level}] {msg}")


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
            '--pretty=format:%h|%s|%an|%cd'
        ]
        log_output = subprocess.check_output(log_cmd, text=True).strip()

        if log_output:
            commits = log_output.splitlines()
            count = len(commits)
            log("INFO", f"{name}: {count} new commits")

            section = [f"<details>\n<summary><b>{path}</b> ({count} commits)</summary>\n\n"]
            for line in commits:
                sha, message, author, date = line.split("|", 3)
                message = html.escape(message)
                commit_url = f"{remote_fetch}{repo_name}/commit/{sha}"
                section.append(f"- [{sha}]({commit_url}) {message}\n")
                section.append(f"  \n  Author: {author}  \n")
                section.append(f"  Date: {date}\n\n")
            section.append("\n</details>\n\n")
            return "".join(section)
        else:
            log("INFO", f"No recent commits for {name}")

    except subprocess.CalledProcessError:
        log("INFO", f"No recent commits for {name}")
    finally:
        shutil.rmtree(repo_path, ignore_errors=True)

    return None


def main():
    sections = []
    projects = root.findall("project")

    with tempfile.TemporaryDirectory(prefix="lineageos_repos_") as temp_dir:
        temp_root = Path(temp_dir)

        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_proj = {executor.submit(process_project, proj, temp_root): proj for proj in projects}
            for future in as_completed(future_to_proj):
                result = future.result()
                if result:
                    sections.append(result)

    # Write output
    with output_file.open("w", encoding="utf-8") as out:
        out.write("## 📜 LineageOS Source Changes (Last 30 Days)\n\n")
        for section in sections:
            out.write(section)
        out.write("---\n\n")
        out.write("_Auto-generated by GitHub Actions. Displays recent LineageOS source commit activity for development reference._\n")

    log("INFO", "✅ Source activity updated.")


if __name__ == "__main__":
    main()
