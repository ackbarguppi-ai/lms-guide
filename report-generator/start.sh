#!/bin/bash

# Start the LMS Guide Report Generator
# This script can be called by OpenClaw to launch the report generation service

set -e

cd "$(dirname "$0")"

echo "Starting LMS Guide Report Generator..."
echo "=================================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Check environment
if [ -z "$GMAIL_USER" ]; then
  echo "⚠️  Warning: GMAIL_USER not set"
fi

if [ -z "$GMAIL_APP_PASSWORD" ]; then
  echo "⚠️  Warning: GMAIL_APP_PASSWORD not set"
fi

if [ -z "$REPORT_GENERATOR_API_KEY" ]; then
  echo "⚠️  Warning: REPORT_GENERATOR_API_KEY not set (authentication disabled)"
fi

echo ""
echo "Configuration:"
echo "  Port: ${PORT:-3001}"
echo "  Gmail User: ${GMAIL_USER:-not set}"
echo "  API Key: ${REPORT_GENERATOR_API_KEY:+set}${REPORT_GENERATOR_API_KEY:-not set}"
echo ""
echo "Starting server..."
echo "=================================================="

exec node server.js
