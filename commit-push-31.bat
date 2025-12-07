@echo off
echo Adding all files first...
git add .
git commit -m "Initial commit of all files"
git push origin main

echo.
echo Creating 30 more commits...
echo.

for /L %%i in (1,1,30) do (
    echo [%%i/30] Creating commit...
    echo Commit %%i - %date% %time% >> commit-log.txt
    git add commit-log.txt
    git commit -m "Update %%i"
    git push origin main
    timeout /t 1 /nobreak >nul
)

echo.
echo Done! Created 31 total commits.
