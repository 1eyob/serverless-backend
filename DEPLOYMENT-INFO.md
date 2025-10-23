# Deployment Information - Dev Environment

## 🚀 Deployment Status: SUCCESSFUL ✅

**Deployed**: October 21, 2025  
**Stage**: dev  
**Region**: us-east-1  
**Deployment Time**: 107 seconds

---

## 🔌 API Endpoints

**Base URL**: `https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev`

| Method | Endpoint                                                              | Purpose         |
| ------ | --------------------------------------------------------------------- | --------------- |
| POST   | https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items      | Create item     |
| GET    | https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items      | Get all items   |
| GET    | https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id} | Get single item |
| PUT    | https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id} | Update item     |
| DELETE | https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id} | Delete item     |

---

## ⚡ Lambda Functions

All functions deployed successfully (19 MB each):

1. `serverless-backend-dev-create`
2. `serverless-backend-dev-readAll`
3. `serverless-backend-dev-readOne`
4. `serverless-backend-dev-update`
5. `serverless-backend-dev-delete`

**Function ARNs**:

- Create: `arn:aws:lambda:us-east-1:412989702023:function:serverless-backend-dev-create:1`
- ReadAll: `arn:aws:lambda:us-east-1:412989702023:function:serverless-backend-dev-readAll:1`
- ReadOne: `arn:aws:lambda:us-east-1:412989702023:function:serverless-backend-dev-readOne:1`
- Update: `arn:aws:lambda:us-east-1:412989702023:function:serverless-backend-dev-update:1`
- Delete: `arn:aws:lambda:us-east-1:412989702023:function:serverless-backend-dev-delete:1`

---

## 🗄️ DynamoDB Table

**Table Name**: `serverless-backend-dev`  
**ARN**: `arn:aws:dynamodb:us-east-1:412989702023:table/serverless-backend-dev`  
**Billing Mode**: PAY_PER_REQUEST (on-demand)

---

## 📦 S3 Deployment Bucket

**Bucket Name**: `serverless-backend-dev-serverlessdeploymentbucket-r99v5cuypzcq`

---

## 🧪 Quick Test Commands

### Create an Item

```bash
curl -X POST https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"My first item","price":29.99}'
```

### Get All Items

```bash
curl https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items
```

### Get Single Item (replace {id} with actual ID)

```bash
curl https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id}
```

### Update Item

```bash
curl -X PUT https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id} \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","price":49.99}'
```

### Delete Item

```bash
curl -X DELETE https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev/items/{id}
```

---

## 📊 View Logs

```bash
# View create function logs
serverless logs -f create --stage dev --tail

# View all functions logs
serverless logs -f readAll --stage dev --tail
serverless logs -f readOne --stage dev --tail
serverless logs -f update --stage dev --tail
serverless logs -f delete --stage dev --tail
```

---

## 🌐 AWS Console Links

- **CloudFormation Stack**: https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks
- **Lambda Functions**: https://us-east-1.console.aws.amazon.com/lambda/home?region=us-east-1#/functions
- **API Gateway**: https://us-east-1.console.aws.amazon.com/apigateway/home?region=us-east-1#/apis
- **DynamoDB Table**: https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1#tables

---

## 🔄 Redeploy

To update your deployment after code changes:

```bash
serverless deploy --stage dev
```

To deploy specific function only:

```bash
serverless deploy function -f create --stage dev
```

---

## 🗑️ Remove Deployment

To delete all resources:

```bash
serverless remove --stage dev
```

⚠️ **Warning**: This will delete the DynamoDB table and all data!
