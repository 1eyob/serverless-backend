# CI/CD Screenshots

Please add the following screenshots to this directory:

## 1. GitHub Actions Workflow

**Filename:** `github-actions-workflow.png`

**What to capture:**

- Navigate to your GitHub repository
- Click on "Actions" tab
- Show a successful workflow run
- Include the workflow steps and green checkmarks

## 2. AWS Resources

**Filename:** `aws-resources.png`

**What to capture:**

- AWS Console showing created resources:
  - Lambda Functions (5 functions)
  - API Gateway
  - DynamoDB Table

## 3. API Gateway Endpoints

**Filename:** `api-gateway.png`

**What to capture:**

- AWS Console → API Gateway
- Show the REST API with all endpoints
- Include the invoke URL

## 4. DynamoDB Table

**Filename:** `dynamodb-table.png`

**What to capture:**

- AWS Console → DynamoDB
- Show the table structure
- Show items (if any test data exists)

## 5. Lambda Functions

**Filename:** `lambda-functions.png`

**What to capture:**

- AWS Console → Lambda
- Show all 5 Lambda functions
- Show function configuration for one

## 6. Successful Deployment

**Filename:** `deployment-success.png`

**What to capture:**

- Terminal showing successful `serverless deploy` output
- Include the API endpoint URLs

## 7. API Testing

**Filename:** `api-testing.png`

**What to capture:**

- Postman, curl, or browser testing
- Show successful API responses
- Include different CRUD operations

---

## Quick Capture Guide

### For GitHub Actions:

1. Push code to main/master branch
2. Go to GitHub → Actions
3. Wait for workflow to complete
4. Take screenshot

### For AWS Resources:

1. Deploy using `serverless deploy --stage dev`
2. Open AWS Console
3. Navigate to each service
4. Take screenshots

### For API Testing:

1. Get API endpoint from deployment output
2. Use Postman/curl to test endpoints
3. Capture request and response
4. Take screenshot
