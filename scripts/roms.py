import subprocess
import yaml
import sys
import shutil
from pathlib import Path
from datetime import datetime


def log(level: str, msg: str, context: str = "MAIN"):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] [{level}] [{context}] {msg}")


def load_config():
    config_file = Path("roms_config.yaml")
    
    if not config_file.exists():
        log("ERROR", "roms_config.yaml not found!")
        sys.exit(1)
    
    with open(config_file, 'r') as f:
        config = yaml.safe_load(f)
    
    return config


def clean_workspace():
    workspace = Path("workspace")
    if workspace.exists():
        log("INFO", "Removing workspace...", "CLEANUP")
        shutil.rmtree(workspace, ignore_errors=True)


def process_branch(rom_id: str, rom_name: str, manifest_url: str, branch: str, groups: str):
    context = f"{rom_id}/{branch}"
    
    log("INFO", "=" * 60, context)
    log("INFO", f"Processing {rom_name} - {branch}", context)
    log("INFO", "=" * 60, context)
    
    # Step 1: Create fresh workspace
    clean_workspace()
    workspace = Path("workspace")
    workspace.mkdir(parents=True, exist_ok=True)
    log("INFO", "Created fresh workspace", context)
    
    # Step 2: repo init
    log("INFO", f"Initializing repo from {manifest_url}", context)
    
    init_cmd = [
        "repo", "init",
        "--no-repo-verify",
        "-u", manifest_url,
        "-b", branch,
        "-g", groups,
        "--depth=1"
    ]
    
    result = subprocess.run(
        init_cmd,
        cwd="workspace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=300
    )
    
    if result.returncode != 0:
        log("ERROR", f"repo init failed: {result.stderr[:200]}", context)
        return False
    
    log("INFO", "✓ repo init complete", context)
    
    # Step 3: Generate manifest
    log("INFO", "Generating manifest...", context)
    
    manifest_cmd = ["repo", "manifest", "-o", "source_manifest.xml"]
    result = subprocess.run(
        manifest_cmd,
        cwd="workspace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=60
    )
    
    if result.returncode != 0:
        log("ERROR", f"manifest generation failed: {result.stderr[:200]}", context)
        return False
    
    manifest_file = Path("workspace/source_manifest.xml")
    if not manifest_file.exists():
        log("ERROR", "Manifest file was not created", context)
        return False
    
    log("INFO", "✓ Manifest generated", context)
    
    # Step 4: Parse commits with our script
    log("INFO", "Parsing commits (this may take 10-30 minutes)...", context)
    
    # Create identifier for this ROM/branch combination
    identifier = f"{rom_id}/{branch}"
    
    parse_cmd = ["python3", "scripts/parse_source.py", identifier]
    result = subprocess.run(
        parse_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        timeout=7200  # 2 hours max
    )
    
    # Print output from parse_source.py
    if result.stdout:
        for line in result.stdout.splitlines():
            print(line)
    
    if result.returncode != 0:
        log("ERROR", "parse_source.py failed", context)
        return False
    
    # Step 5: Verify output was created
    output_file = Path(f"public/data/{rom_id}/{branch}.json")
    if not output_file.exists():
        log("ERROR", "Output JSON was not generated", context)
        return False
    
    log("INFO", f"✅ Successfully processed {rom_name} - {branch}", context)
    return True


def main():
    print("\n")
    log("INFO", "╔════════════════════════════════════════════════╗")
    log("INFO", "║   ROM Source Changes Tracker                   ║")
    log("INFO", "╚════════════════════════════════════════════════╝")
    print("\n")
    
    # Load config
    config = load_config()
    roms = config.get('roms', [])
    repo_params = config.get('repo_params', {})
    groups = repo_params.get('groups', 'default,-mips,-darwin,-notdefault')
    
    if not roms:
        log("ERROR", "No ROMs configured")
        sys.exit(1)
    
    # Filter enabled ROMs (default to True if not specified)
    enabled_roms = [rom for rom in roms if rom.get('enabled', True)]
    
    if not enabled_roms:
        log("WARN", "No ROMs are enabled")
        sys.exit(0)
    
    # Count total branches to process
    total_branches = sum(len(rom.get('branches', [])) for rom in enabled_roms)
    
    log("INFO", f"Enabled ROMs: {len(enabled_roms)}")
    log("INFO", f"Total branches to process: {total_branches}")
    print("\n")
    
    # Process each ROM and branch
    processed = 0
    failed = []
    
    for rom in enabled_roms:
        rom_id = rom['id']
        rom_name = rom['display_name']
        manifest_url = rom['manifest_url']
        branches = rom.get('branches', [])
        
        if not branches:
            log("WARN", f"{rom_name} has no branches configured", rom_id)
            continue
        
        log("INFO", f"Processing {rom_name} ({len(branches)} branches)", rom_id)
        
        for branch in branches:
            try:
                success = process_branch(rom_id, rom_name, manifest_url, branch, groups)
                
                if success:
                    processed += 1
                else:
                    failed.append(f"{rom_id}/{branch}")
                
                # Clean workspace after each branch
                clean_workspace()
                
            except Exception as e:
                log("ERROR", f"Unexpected error: {str(e)}", f"{rom_id}/{branch}")
                failed.append(f"{rom_id}/{branch}")
                clean_workspace()
    
    # Summary
    print("\n")
    log("INFO", "=" * 60)
    log("INFO", "SUMMARY")
    log("INFO", "=" * 60)
    log("INFO", f"Successfully processed: {processed}/{total_branches}")
    
    if failed:
        log("WARN", f"Failed: {len(failed)}")
        for item in failed:
            log("WARN", f"  - {item}")
    else:
        log("INFO", "All branches processed successfully! 🎉")
    
    print("\n")
    
    # Exit with error if any failed
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
