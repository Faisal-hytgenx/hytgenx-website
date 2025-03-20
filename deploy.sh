#!/bin/bash

# Set variables
SESSION_NAME="website"

echo "Deploying hytGenx Website"

# Stop existing tmux session if running
if tmux has-session -t $SESSION_NAME 2>/dev/null; then
  echo "🛑 Stopping existing tmux session..."
  tmux kill-session -t $SESSION_NAME
fi

# Start a new tmux session and run the app
echo "🚀 Starting application in tmux session..."
tmux new-session -d -s $SESSION_NAME "serve out"

# Verify if the session started successfully
if tmux has-session -t $SESSION_NAME 2>/dev/null; then
  echo "✅ Deployment successful! App is running in tmux session: $SESSION_NAME"
else
  echo "❌ Error: Failed to start tmux session!"
  exit 1
