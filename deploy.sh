#!/data/data/com.termux/files/usr/bin/bash

msg="$1"

if [ -z "$msg" ; then
  msg="auto update"
fi

echo "📦 Adding files..."
git add -A

echo "💾 Committing..."
git commit -m "$msg"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done!"	
