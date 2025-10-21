#!/bin/bash

# API Testing Script
# Usage: ./scripts/test-api.sh [api-endpoint]

API_ENDPOINT=${1}

if [ -z "$API_ENDPOINT" ]; then
    echo "❌ Error: Please provide API endpoint"
    echo "Usage: ./scripts/test-api.sh https://your-api-endpoint.amazonaws.com/dev"
    exit 1
fi

echo "🧪 Testing API endpoints..."
echo ""

# Test 1: Create Item
echo "1️⃣  Creating item..."
CREATE_RESPONSE=$(curl -s -X POST "$API_ENDPOINT/items" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Item",
    "description": "API test item",
    "price": 99.99
  }')

echo "Response: $CREATE_RESPONSE"
ITEM_ID=$(echo $CREATE_RESPONSE | grep -o '"id":"[^"]*' | cut -d'"' -f4)
echo "Created Item ID: $ITEM_ID"
echo ""

# Test 2: Get All Items
echo "2️⃣  Getting all items..."
curl -s "$API_ENDPOINT/items" | jq .
echo ""

# Test 3: Get Single Item
echo "3️⃣  Getting single item..."
curl -s "$API_ENDPOINT/items/$ITEM_ID" | jq .
echo ""

# Test 4: Update Item
echo "4️⃣  Updating item..."
curl -s -X PUT "$API_ENDPOINT/items/$ITEM_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Test Item",
    "price": 149.99
  }' | jq .
echo ""

# Test 5: Delete Item
echo "5️⃣  Deleting item..."
curl -s -X DELETE "$API_ENDPOINT/items/$ITEM_ID" | jq .
echo ""

echo "✅ API testing completed!"

