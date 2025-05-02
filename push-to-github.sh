#!/bin/bash
# Automatyczny commit i push na GitHub (repo: hypnosister-code)

git add .
git commit -m "Aktualizacja stylu, sidebarów i wpisów na blogu"
git branch | grep -q 'main' && BRANCH=main || BRANCH=master

git remote | grep -q origin || git remote add origin https://github.com/hypnosister-code/hypnosister-web.git

git push origin $BRANCH
