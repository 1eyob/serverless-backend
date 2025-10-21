#!/bin/bash

# Serverless Backend Deployment Script
# Usage: ./scripts/deploy.sh [stage]

set -e

STAGE=${1:-dev}

echo "🚀 Starting deployment to $STAGE environment..."

# Check if serverless is installed
if ! command -v serverless &> /dev/null; then
    echo "❌ Serverless Framework not found. Installing..."
    npm install -g serverless
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Deploy
echo "🌍 Deploying to AWS..."
serverless deploy --stage $STAGE --verbose

echo "✅ Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "  1. Test your API endpoints"
echo "  2. View logs: serverless logs -f create --stage $STAGE"
echo "  3. Monitor in AWS Console"

