@echo off

set /p komentar=Komentar commit: 

git status
git add -A .
git commit -m "%komentar%"
git push