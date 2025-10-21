#!/bin/bash

# Serverless Backend Removal Script
# Usage: ./scripts/remove.sh [stage]

set -e

STAGE=${1:-dev}

echo "⚠️  WARNING: This will remove all resources from the $STAGE environment!"
read -p "Are you sure you want to continue? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "❌ Removal cancelled."
    exit 0
fi

echo "🗑️  Removing $STAGE environment..."
serverless remove --stage $STAGE --verbose

echo "✅ Resources removed successfully!"

