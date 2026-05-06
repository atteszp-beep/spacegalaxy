#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 DEPLOY START..."

# bemegy a projektbe
cd ~/scifi_aaa/public || exit

# git inicializálás (ha kell)
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/atteszp-beep/spacegalaxy.git
fi

# frissítés
git add .

git commit -m "auto deploy $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

git branch -M main

git push -u origin main

echo "✅ DEPLOY DONE"
