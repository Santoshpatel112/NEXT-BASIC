@echo off
for /L %%i in (1,1,31) do (
    echo Commit %%i > commit-log.txt
    git add .
    git commit -m "Update %%i"
    timeout /t 1 /nobreak >nul
)
echo Done! 31 commits created.
echo Now add your remote: git remote add origin YOUR_GITHUB_URL
echo Then push: git push -u origin main
