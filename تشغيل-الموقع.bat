@echo off
chcp 65001 >nul
echo ========================================
echo   تشغيل موقع PRO QUANT ANALYTICS
echo ========================================
echo.

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
    echo [خطأ] Node.js غير مثبت أو غير مضاف للمسار.
    echo.
    echo 1. حمّل Node.js من: https://nodejs.org
    echo 2. ثبّته ثم أعد فتح هذا الملف.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo جاري تثبيت الحزم لأول مرة...
    call npm install
    echo.
)

echo جاري تشغيل السيرفر...
echo.
echo عندما ترى "Ready" افتح المتصفح على:
echo    http://localhost:3000
echo.
echo لإيقاف السيرفر اضغط Ctrl+C
echo ========================================
call npm run dev

pause
