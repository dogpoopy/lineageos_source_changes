import os
import sys
import subprocess
import datetime
from lxml import etree
import shutil
import html

branch_name = sys.argv[1] if len(sys.argv) > 1 else "unknown"
branch_safe = branch_name.replace("/", "-")

manifest_file = "workspace/source_manifest.xml"
html_output_file = f"web/{branch_safe}.html"
since_date = (datetime.datetime.now(datetime.UTC) - datetime.timedelta(days=30)).strftime("%Y-%m-%d")
temp_dir = "temp_repos"

os.makedirs(temp_dir, exist_ok=True)
os.makedirs("web", exist_ok=True)

tree = etree.parse(manifest_file)
root = tree.getroot()

remotes = {}
default_tag = root.find("default")
if default_tag is None:
    raise ValueError("❌ No <default> tag found in manifest.")

default_remote = default_tag.attrib["remote"]
default_revision = default_tag.attrib["revision"]

for remote in root.findall("remote"):
    name = remote.attrib.get("name")
    fetch = remote.attrib.get("fetch")
    if name and fetch:
        if fetch == "..":
            fetch = "https://github.com/"
        remotes[name] = fetch

with open(html_output_file, "w") as out_html:
    out_html.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>📜 {branch_name} – Source Changes (Last 30 Days)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {{
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f4;
      margin: 0;
      padding: 2rem;
    }}
    header {{
      position: sticky;
      top: 0;
      background: white;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
      z-index: 10;
    }}
    h1 {{
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }}
    details {{
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #ddd;
    }}
    summary {{
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }}
    a {{
      color: #0070f3;
      text-decoration: none;
    }}
    a:hover {{
      text-decoration: underline;
    }}
    small {{
      color: #666;
    }}
    button {{
      background: #0070f3;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
    }}
    button:hover {{
      background: #005dc1;
    }}
    code {{
      background: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }}
    footer {{
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #666;
    }}
  </style>
</head>
<body>
  <header>
    <h1>📜 LineageOS – {branch_name}</h1>
    <p><strong>Manifest:</strong> <code>https://github.com/LineageOS/android.git</code></p>
    <p><strong>Showing changes in the last 30 days</strong> (since <code>{since_date}</code>)</p>
    <div>
      <button onclick="toggleAll(true)">Expand All</button>
      <button onclick="toggleAll(false)">Collapse All</button>
    </div>
  </header>

  <script>
    function toggleAll(open) {{
      document.querySelectorAll("details").forEach(d => d.open = open);
    }}
  </script>
""")

    for project in root.findall("project"):
        name = project.attrib["name"]
        path = project.attrib.get("path", name)
        revision = project.attrib.get("revision", default_revision)
        remote_name = project.attrib.get("remote", default_remote)
        remote_fetch = remotes.get(remote_name)

        if not remote_fetch:
            print(f"⚠️ Skipping {name}: unknown remote '{remote_name}'")
            continue

        if "android.googlesource.com" in remote_fetch:
            print(f"🔍 Skipping {name}: android.googlesource.com remote")
            continue

        if not remote_fetch.endswith("/"):
            remote_fetch += "/"

        org_prefix = remote_fetch.rstrip("/").split("/")[-1] + "/"
        repo_name = name[len(org_prefix):] if name.startswith(org_prefix) else name

        repo_url = f"{remote_fetch}{repo_name}.git"
        repo_path = os.path.join(temp_dir, path.replace("/", "_"))

        print(f"📦 Checking {repo_url} for ref '{revision}'...")
        branch_check_cmd = ["git", "ls-remote", repo_url, revision]
        branch_result = subprocess.run(branch_check_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        if branch_result.returncode != 0 or not branch_result.stdout.strip():
            print(f"❌ Skipping {name}: ref '{revision}' not found or error.")
            continue

        clone_target = revision.replace("refs/heads/", "").replace("refs/tags/", "")

        print(f"🌱 Ref exists — cloning {repo_url} (target: {clone_target})...")
        clone_cmd = [
            "git", "clone", "--filter=blob:none", "--no-checkout", "--depth=50",
            "--branch", clone_target, "--single-branch", repo_url, repo_path
        ]
        result = subprocess.run(clone_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode != 0:
            print(f"❌ Failed to clone {name}")
            continue

        subprocess.run(["git", "-C", repo_path, "config", "--local", "gc.auto", "0"])

        try:
            log_cmd = [
                "git", "-C", repo_path, "log",
                f'--since={since_date}',
                '--pretty=format:%h|%s|%an|%cd'
            ]
            log_output = subprocess.check_output(log_cmd, text=True).strip()

            if log_output:
                out_html.write(f"<details><summary>{html.escape(path)}</summary><br>\n")

                for line in log_output.splitlines():
                    sha, message, author, date = line.split("|", 3)
                    message_escaped = html.escape(message)

                    # Optional emoji highlight
                    highlight = ""
                    if "security" in message.lower():
                        highlight = " 🔒"
                    elif "camera" in message.lower():
                        highlight = " 📸"
                    elif "bluetooth" in message.lower():
                        highlight = " 🔵"
                    elif "kernel" in message.lower():
                        highlight = " 🧠"

                    commit_url = f"{remote_fetch}{repo_name}/commit/{sha}"
                    out_html.write(f"<p><a href='{commit_url}' target='_blank'>{sha}</a> - {message_escaped}{highlight}<br>\n")
                    out_html.write(f"<small>👤 {html.escape(author)} | 🕓 {html.escape(date)}</small></p>\n")

                out_html.write("</details>\n\n")

        except subprocess.CalledProcessError:
            print(f"⚠️ No recent commits for {name}")

        shutil.rmtree(repo_path, ignore_errors=True)

    out_html.write(f"""
  <footer>
    <hr>
    <p>📅 Auto-generated on <strong>{datetime.datetime.now().strftime('%Y-%m-%d')}</strong></p>
    <p>📜 GitHub Actions-powered source tracker by <a href="https://github.com/dogpoopy">dogpoopy</a>.</p>
  </footer>
</body>
</html>""")

print("✅ Source activity updated.")
