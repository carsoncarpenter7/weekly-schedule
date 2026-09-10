#!/usr/bin/env bash
# Sync gitignored personal profile into the committed prod file for GitHub Pages.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/personal/personal-profile.js"
DST="$ROOT/personal/personal-profile.prod.js"
if [[ ! -f "$SRC" ]]; then
  echo "Error: $SRC not found. Copy personal-profile.example.js and customize first." >&2
  exit 1
fi
{
  echo "// Deploy profile — auto-generated from personal-profile.js by scripts/prepare-deploy.sh"
  echo "// Commit this file so GitHub Pages gets your meal/food catalog."
  tail -n +2 "$SRC"
} > "$DST"
echo "Wrote $DST"
