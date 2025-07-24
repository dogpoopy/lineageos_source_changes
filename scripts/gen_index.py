import os
from datetime import datetime

web_dir = "web"
output_file = os.path.join(web_dir, "index.html")

# Find all HTML files in web/ except index.html
branch_files = sorted([
    f for f in os.listdir(web_dir)
    if f.endswith(".html") and f != "index.html"
])

with open(output_file, "w") as f:
    f.write(f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>📦 LineageOS Source Tracker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {{
      --bg: #ffffff;
      --text: #111111;
      --card: #f9f9f9;
      --border: #ddd;
    }}
    @media (prefers-color-scheme: dark) {{
      :root {{
        --bg: #121212;
        --text: #eeeeee;
        --card: #1e1e1e;
        --border: #333;
      }}
    }}

    body {{
      font-family: 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 2rem;
    }}

    header {{
      margin-bottom: 2rem;
    }}

    h1 {{
      font-size: 2.2rem;
      margin-bottom: 0.5rem;
    }}

    p {{
      color: #666;
      font-size: 1rem;
    }}

    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.2rem;
      margin-top: 2rem;
    }}

    .card {{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      text-align: left;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
      transition: transform 0.1s ease-in-out;
    }}

    .card:hover {{
      transform: translateY(-2px);
    }}

    .card a {{
      color: #0070f3;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: bold;
    }}

    .badge {{
      display: inline-block;
      font-size: 0.75rem;
      background: #e0e0e0;
      color: #000;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      margin-top: 0.5rem;
    }}

    .badge.lineage-23 {{ background: #4caf50; color: white; }}
    .badge.lineage-22 {{ background: #2196f3; color: white; }}

    footer {{
      margin-top: 4rem;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }}
  </style>
</head>
<body>
  <header>
    <h1>📦 LineageOS Source Tracker</h1>
    <p>Click a branch below to view recent changes over the last 30 days.</p>
  </header>

  <section class="grid">
""")

    for filename in branch_files:
        branch = filename.replace(".html", "")
        short_name = branch.replace("lineage-", "LineageOS ").replace("-", ".")
        major_version = branch.split('-')[1].split('.')[0]
        badge_class = f"badge lineage-{major_version}"

        f.write(f"""    <div class="card">
      <a href="{filename}">{short_name}</a><br>
      <span class="{badge_class}">{branch}</span>
    </div>\n""")

    f.write(f"""  </section>

  <footer>
    <p>🛠️ Last generated on <strong>{datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")}</strong></p>
  </footer>
</body>
</html>
""")

print("✅ index.html generated.")
