#!/bin/bash
rm -rf docs
cp -r public docs
git add .
git commit -m "deploy $(date)"
git push
