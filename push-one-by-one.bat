@echo off
setlocal enabledelayedexpansion
set count=0

echo Starting individual commits and pushes...
echo.

for /r %%f in (*.tsx *.jsx *.js *.ts *.json *.css *.md *.mjs) do (
    set /a count+=1
    echo [!count!] Committing: %%~nxf
    git add "%%f"
    git commit -m "Add %%~nxf"
    git push origin main
    timeout /t 2 /nobreak >nul
    if !count! GEQ 31 goto :done
)

:done
echo.
echo Done! Created !count! commits and pushed to GitHub.
