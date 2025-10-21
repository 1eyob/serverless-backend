# Serverless Backend - REST API on AWS

A production-ready Serverless Framework REST API built on AWS, featuring full CRUD operations with Lambda, API Gateway, and DynamoDB.

## 🏗️ Architecture

- **Serverless Framework** - Infrastructure as Code (IaC)
- **AWS Lambda** - Serverless compute for business logic
- **AWS API Gateway** - RESTful API endpoints
- **AWS DynamoDB** - NoSQL database with on-demand billing
- **GitHub Actions** - CI/CD pipeline for automated deployments

## 📁 Project Structure

```
serverless-backend/
├── handler/
│   ├── create.js       # Create new items
│   ├── readAll.js      # Retrieve all items
│   ├── readOne.js      # Retrieve single item by ID
│   ├── update.js       # Update existing item
│   └── delete.js       # Delete item by ID
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions CI/CD pipeline
├── serverless.yml      # Serverless Framework configuration
├── package.json        # Node.js dependencies
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- AWS Account with appropriate permissions
- Serverless Framework CLI
- AWS CLI configured with credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd serverless-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure AWS Credentials**
   ```bash
   aws configure
   ```
   Or set environment variables:
   ```bash
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   ```

### Local Development

Install Serverless Framework globally (if not already installed):

```bash
npm install -g serverless
```

## 📦 Deployment

### Deploy to Development Environment

```bash
serverless deploy --stage dev
```

### Deploy to Production Environment

```bash
serverless deploy --stage prod
```

### Deploy Specific Function

```bash
serverless deploy function -f create --stage dev
```

### Remove Deployment

```bash
serverless remove --stage dev
```

## 🔌 API Endpoints

After deployment, you'll receive an API Gateway endpoint URL:

```
https://{api-id}.execute-api.us-east-1.amazonaws.com/{stage}
```

### Endpoints

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| POST   | `/items`      | Create a new item        |
| GET    | `/items`      | Retrieve all items       |
| GET    | `/items/{id}` | Retrieve a specific item |
| PUT    | `/items/{id}` | Update an existing item  |
| DELETE | `/items/{id}` | Delete an item           |

## 📝 API Usage Examples

### Create Item

**Request:**

```bash
curl -X POST https://your-api-gateway-url/dev/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Item",
    "description": "This is a test item",
    "price": 29.99
  }'
```

**Response:**

```json
{
  "message": "Item created successfully",
  "item": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Sample Item",
    "description": "This is a test item",
    "price": 29.99,
    "createdAt": "2025-10-20T20:30:00.000Z",
    "updatedAt": "2025-10-20T20:30:00.000Z"
  }
}
```

### Get All Items

**Request:**

```bash
curl https://your-api-gateway-url/dev/items
```

**Response:**

```json
{
  "items": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Sample Item",
      "description": "This is a test item",
      "price": 29.99,
      "createdAt": "2025-10-20T20:30:00.000Z",
      "updatedAt": "2025-10-20T20:30:00.000Z"
    }
  ],
  "count": 1
}
```

### Get Single Item

**Request:**

```bash
curl https://your-api-gateway-url/dev/items/123e4567-e89b-12d3-a456-426614174000
```

**Response:**

```json
{
  "item": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Sample Item",
    "description": "This is a test item",
    "price": 29.99,
    "createdAt": "2025-10-20T20:30:00.000Z",
    "updatedAt": "2025-10-20T20:30:00.000Z"
  }
}
```

### Update Item

**Request:**

```bash
curl -X PUT https://your-api-gateway-url/dev/items/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Item",
    "price": 39.99
  }'
```

**Response:**

```json
{
  "message": "Item updated successfully",
  "item": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Updated Item",
    "description": "This is a test item",
    "price": 39.99,
    "createdAt": "2025-10-20T20:30:00.000Z",
    "updatedAt": "2025-10-20T20:35:00.000Z"
  }
}
```

### Delete Item

**Request:**

```bash
curl -X DELETE https://your-api-gateway-url/dev/items/123e4567-e89b-12d3-a456-426614174000
```

**Response:**

```json
{
  "message": "Item deleted successfully",
  "item": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Updated Item",
    "description": "This is a test item",
    "price": 39.99,
    "createdAt": "2025-10-20T20:30:00.000Z",
    "updatedAt": "2025-10-20T20:35:00.000Z"
  }
}
```

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

The project includes a GitHub Actions workflow that automatically deploys the application when code is pushed to the `main` or `master` branch.

#### Configuration Steps:

1. **Add AWS Credentials to GitHub Secrets**

   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`

2. **Workflow Triggers**

   - Automatic deployment on push to `main` or `master` branch
   - Manual deployment via workflow_dispatch

3. **Deployment Process**
   ```
   Push to main → GitHub Actions → Install Dependencies → Deploy to AWS
   ```

#### CI/CD Pipeline Screenshot Locations

Add screenshots of your CI/CD setup:

1. **GitHub Actions Workflow Run**

   - Screenshot: `.docs/screenshots/github-actions-workflow.png`
   - Shows successful deployment run

2. **AWS Resources Created**

   - Screenshot: `.docs/screenshots/aws-resources.png`
   - Shows Lambda functions, API Gateway, and DynamoDB table

3. **API Gateway Endpoints**
   - Screenshot: `.docs/screenshots/api-gateway.png`
   - Shows configured endpoints

## 🌍 Multi-Stage Deployments

The application supports multiple deployment stages (environments):

### Development Stage

```bash
serverless deploy --stage dev
```

- DynamoDB Table: `serverless-backend-dev`
- API Endpoint: `https://{api-id}.execute-api.us-east-1.amazonaws.com/dev`

### Production Stage

```bash
serverless deploy --stage prod
```

- DynamoDB Table: `serverless-backend-prod`
- API Endpoint: `https://{api-id}.execute-api.us-east-1.amazonaws.com/prod`

Each stage maintains its own:

- DynamoDB table with isolated data
- Lambda functions with separate configurations
- API Gateway endpoints

## 🏗️ Infrastructure as Code

All AWS resources are defined in `serverless.yml`:

### Resources Created:

- **Lambda Functions** (5):

  - `create` - POST /items
  - `readAll` - GET /items
  - `readOne` - GET /items/{id}
  - `update` - PUT /items/{id}
  - `delete` - DELETE /items/{id}

- **DynamoDB Table**:

  - Partition Key: `id` (String)
  - Billing Mode: PAY_PER_REQUEST (on-demand)

- **IAM Roles**:

  - Automatic role creation with least-privilege permissions
  - DynamoDB read/write access for Lambda functions

- **API Gateway**:
  - REST API with CORS enabled
  - Automatic stage creation

## 🧪 Testing

### Manual Testing with cURL

Test all endpoints using the examples provided in the API Usage Examples section.

### Testing with Postman

1. Import the API endpoints into Postman
2. Set the base URL to your API Gateway endpoint
3. Test each CRUD operation

### Automated Testing (Optional Enhancement)

You can add:

- Unit tests with Jest
- Integration tests
- Load tests with Artillery

## 📊 Monitoring & Logs

### View Lambda Logs

```bash
# View logs for a specific function
serverless logs -f create --stage dev

# Tail logs in real-time
serverless logs -f create --stage dev --tail
```

### AWS CloudWatch

All Lambda functions automatically send logs to CloudWatch:

- Navigate to AWS Console → CloudWatch → Log Groups
- Find log group: `/aws/lambda/serverless-backend-{stage}-{function}`

## 💰 Cost Optimization

- **DynamoDB**: PAY_PER_REQUEST billing (only pay for what you use)
- **Lambda**: First 1M requests/month are free
- **API Gateway**: First 1M API calls/month are free (first 12 months)

Estimated cost for low-traffic applications: **~$0-5/month**

## 🔒 Security Best Practices

- ✅ IAM roles follow least-privilege principle
- ✅ CORS configured for API security
- ✅ AWS credentials stored as GitHub Secrets
- ✅ No hardcoded secrets in code
- 🔄 Consider adding: AWS Cognito for authentication (bonus feature)

## 🛠️ Troubleshooting

### Common Issues

**Issue: Deployment fails with permission errors**

- Ensure your AWS credentials have the necessary permissions
- Check IAM role policies

**Issue: API returns 502 Bad Gateway**

- Check Lambda function logs
- Verify DynamoDB table exists
- Check environment variables

**Issue: CORS errors in browser**

- Ensure CORS is enabled in serverless.yml
- Check response headers include proper CORS headers

## 📚 Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs)
- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/)
- [DynamoDB Developer Guide](https://docs.aws.amazon.com/dynamodb/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)

## 👤 Author

**Your Name**

## 📄 License

ISC

---

## 🎥 Video Walkthrough

[Link to Loom video walkthrough will be added here]

### Video Contents:

1. Project structure explanation
2. Code walkthrough (Lambda handlers)
3. Infrastructure as Code (serverless.yml) review
4. CI/CD pipeline demonstration
5. Live API testing
6. Multi-stage deployment demo
