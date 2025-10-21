# Quick Start Guide

Follow these commands in order to get your serverless backend deployed:

## Step 1: Install Dependencies
```bash
npm install
npm install -g serverless
```

## Step 2: Configure AWS
```bash
aws configure
# Enter your AWS credentials when prompted
```

## Step 3: Deploy to Dev
```bash
serverless deploy --stage dev --verbose
```

## Step 4: Test Your API
After deployment, you'll get an endpoint URL. Save it and test:

```bash
# Save your endpoint (replace with actual URL from deployment output)
$API_URL = "https://YOUR-API-ID.execute-api.us-east-1.amazonaws.com/dev"

# Create an item
curl -X POST $API_URL/items -H "Content-Type: application/json" -d '{"name": "Test Item", "description": "My first item", "price": 29.99}'

# Get all items
curl $API_URL/items
```

## Step 5: Set Up GitHub
```bash
git init
git add .
git commit -m "feat: initial serverless backend setup"

# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/serverless-backend.git
git branch -M main
git push -u origin main
```

## Step 6: Configure GitHub Secrets
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Add:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

## Step 7: Deploy to Production
```bash
serverless deploy --stage prod --verbose
```

## Step 8: Clean Up (when needed)
```bash
# Remove dev environment
serverless remove --stage dev

# Remove prod environment
serverless remove --stage prod
```

## Useful Commands

```bash
# View logs
serverless logs -f create --stage dev --tail

# Get deployment info
serverless info --stage dev

# Deploy specific function
serverless deploy function -f create --stage dev
```

## Next Steps
- [ ] Test all CRUD operations
- [ ] Take screenshots for documentation
- [ ] Record Loom video walkthrough
- [ ] Update README with your info
- [ ] Add any bonus features (authentication, tests, etc.)

