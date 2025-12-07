#!/bin/bash

echo "Starting backend and frontend simultaneously..."

# Start the backend server in the background
npm run dev &

# Wait a moment for the backend to start
sleep 3

# Start the frontend in the background
cd Physical-AI-Humanoid-Robotics && npm run start &

echo "Both applications are now running!"
echo "Backend: localhost:3000"
echo "Frontend: localhost:3000 (in Physical-AI-Humanoid-Robotics directory)"
echo
echo "Press Ctrl+C to stop."

# Wait for both processes to finish
wait