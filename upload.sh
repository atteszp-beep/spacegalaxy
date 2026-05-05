#!/data/data/com.termux/files/usr/bin/bash

# Projekt mappa
PROJECT_DIR="$HOME/scifi_aaa"

# GitHub branch
BRANCH="main"

# Üzenet (időbélyeggel)
MSG="auto upload $(date '+%Y-%m-%d %H:%M:%S')"

echo "➡ Belépés a mappába: $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "❌ Nem található a mappa!"; exit 1; }

echo "➡ Git státusz ellenőrzés..."
git status

echo "➡ Fájlok hozzáadása..."
git add .

echo "➡ Commit készítése..."
git commit -m "$MSG"

echo "➡ Push a GitHub-ra..."
git push origin "$BRANCH"

echo "✅ Kész! Feltöltve a spacegalaxy repo-ba."	
