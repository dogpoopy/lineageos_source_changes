# 🔄 Android ROM Source Tracker

> **Automatically track and visualize recent commits across Custom Android ROM repositories**

A GitHub Actions-powered tool that monitors source code changes across multiple Custom ROM projects, providing developers and enthusiasts with an up-to-date view of development activity.

## ⚙️ How It Works

- All ROM data is centralized in `roms_config.yaml`
- GitHub Actions automatically:
  - Syncs the repositories  
  - Processes commit data  
  - Updates the web interface  
- Fully self-maintaining—no manual intervention required

## 📊 Data Updates

- **Frequency:** Every 72 hours
- **Commit window:** Last 90 days each repo
- **Update time:** Runs at 00:00 UTC every 3 days

## 🚫 AOSP Source Exclusion

This tracker intentionally **excludes AOSP repositories** to save storage and respect GitHub Runner limits.

## 🔧 Adding a New ROM

To track a new ROM, add it to `roms_config.yaml` and submit a pull request:

```yaml
  - id: my-rom
    display_name: My Custom ROM
    manifest_url: https://github.com/my-rom/manifest.git
    branches:
      - main
      - development
