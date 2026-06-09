@echo off
cd /d "%~dp0"

where git >nul 2>&1 || (echo Git not installed. Download: https://git-scm.com/download/win & pause & exit /b)

if exist ".git" (rmdir /s /q ".git")

git init
git config user.email "Credojpn@gmail.com"
git config user.name "credojpn-a11y"
git remote add origin https://github.com/credojpn-a11y/mamarira-v6.git
git add -A
git commit -m "update"
git branch -M main
git push -u origin main --force

echo.
echo DONE - https://mamarira-v6-32h.pages.dev/
pause
