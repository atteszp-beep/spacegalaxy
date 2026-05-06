#!/data/data/com.termux/files/usr/bin/bash

echo "🚀 DEPLOY TO spacegalaxy/public START..."

cd ~/scifi_aaa || exit

# ha nincs index.html → hiba
if [ ! -f "public/index.html" ]; then
  echo "❌ ERROR: public/index.html NOT FOUND"
  exit 1
fi

# git init ha kell
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/atteszp-beep/spacegalaxy.git
fi

git add public/index.html

git commit -m "update public/index.html $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes"

git branch -M main

git push -u origin main

echo "✅ DEPLOY DONE → public/index.html updated"
