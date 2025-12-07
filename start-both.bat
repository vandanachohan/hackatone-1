@echo off
echo Starting backend and frontend simultaneously...

REM Start the backend server in the background
start "Backend" cmd /c "npm run dev"

REM Wait a moment for the backend to start
timeout /t 3 /nobreak >nul

REM Start the frontend in the background
start "Frontend" cmd /c "cd Physical-AI-Humanoid-Robotics && npm run start"

echo Both applications are now running!
echo Backend: localhost:3000
echo Frontend: localhost:3000 (in Physical-AI-Humanoid-Robotics directory)
echo.
echo Press Ctrl+C in either terminal to stop.