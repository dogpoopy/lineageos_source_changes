import yaml
import json
from pathlib import Path


def load_yaml_config():
    config_file = Path("roms_config.yaml")
    
    if not config_file.exists():
        print("ERROR: roms_config.yaml not found")
        return None
    
    with open(config_file, 'r') as f:
        return yaml.safe_load(f)


def generate_ui_config():
    yaml_config = load_yaml_config()
    
    if not yaml_config:
        return False
    
    roms = yaml_config.get('roms', [])
    
    # Filter enabled ROMs only
    enabled_roms = [rom for rom in roms if rom.get('enabled', True)]
    
    # Build UI config
    ui_config = {
        "roms": []
    }
    
    for rom in enabled_roms:
        rom_id = rom['id']
        display_name = rom['display_name']
        branches = rom.get('branches', [])
        
        if not branches:
            continue
        
        ui_config['roms'].append({
            "id": rom_id,
            "displayName": display_name,
            "branches": [
                {
                    "id": branch,
                    "displayName": branch,
                    "dataPath": f"{rom_id}/{branch}.json"
                }
                for branch in branches
            ]
        })
    
    # Save to public directory
    output_file = Path("public/rom-config.json")
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump(ui_config, f, indent=2)
    
    print(f"✅ Generated UI config: {len(ui_config['roms'])} ROMs, {sum(len(r['branches']) for r in ui_config['roms'])} branches")
    return True


if __name__ == "__main__":
    success = generate_ui_config()
    exit(0 if success else 1)
