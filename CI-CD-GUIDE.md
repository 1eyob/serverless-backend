# CI/CD Pipeline Guide - Multi-Stage Deployment

## 🎯 Overview

Your GitHub Actions pipeline now supports **automatic deployment** to both **DEV** and **PROD** environments based on the branch you push to.

---

## 🌿 Branch Strategy

| Branch    | Deploys To | API URL               | DynamoDB Table            | Use Case              |
| --------- | ---------- | --------------------- | ------------------------- | --------------------- |
| `develop` | **DEV**    | `https://xxx.../dev`  | `serverless-backend-dev`  | Development & Testing |
| `main`    | **PROD**   | `https://xxx.../prod` | `serverless-backend-prod` | Production            |

---

## 🚀 How It Works

### **Automatic Deployment**

1. **Push to `develop` branch** → Automatically deploys to **DEV**

   ```bash
   git checkout develop
   git add .
   git commit -m "feat: new feature"
   git push origin develop
   # ✅ Auto-deploys to DEV environment
   ```

2. **Push to `main` branch** → Automatically deploys to **PROD**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   # ✅ Auto-deploys to PROD environment
   ```

---

## 🔧 Manual Deployment

You can also trigger deployments manually from GitHub:

1. Go to **GitHub** → **Actions** tab
2. Click **"Deploy Serverless Backend"**
3. Click **"Run workflow"**
4. Select the stage: **dev** or **prod**
5. Click **"Run workflow"** button

---

## 📋 Development Workflow

### **Step 1: Create Feature Branch**

```bash
git checkout develop
git checkout -b feature/my-new-feature
```

### **Step 2: Make Changes**

```bash
# Edit your code
git add .
git commit -m "feat: add new functionality"
```

### **Step 3: Push to Develop**

```bash
git checkout develop
git merge feature/my-new-feature
git push origin develop
# ✅ Auto-deploys to DEV
```

### **Step 4: Test in DEV**

- Test your API at: `https://xxx.../dev/items`
- Check logs: `npm run logs:create`
- Verify DynamoDB: `serverless-backend-dev`

### **Step 5: Deploy to Production**

```bash
# Create Pull Request: develop → main
# OR merge directly:
git checkout main
git merge develop
git push origin main
# ✅ Auto-deploys to PROD
```

---

## 🔍 Monitoring Deployments

### **View Pipeline Status**

1. Go to GitHub → **Actions** tab
2. See all deployment runs
3. Click on any run to see detailed logs

### **Pipeline Output**

The deployment summary shows:

```
✅ Serverless deployment completed successfully!
🎯 Stage: prod
🌿 Branch: main
🌍 Region: us-east-1
📦 Commit: abc123...
```

---

## 🌍 Current Deployments

### **DEV Environment** ✅

- **Status**: Active
- **API URL**: `https://co0luqqn49.execute-api.us-east-1.amazonaws.com/dev`
- **DynamoDB**: `serverless-backend-dev`
- **Lambda Functions**: 5 functions (create, readAll, readOne, update, delete)

### **PROD Environment** ⏳

- **Status**: Ready to deploy
- **Command**: Push to `main` branch or run `npm run deploy:prod`
- **Expected URL**: `https://xxx.../prod`
- **Expected Table**: `serverless-backend-prod`

---

## 🛠️ Useful Commands

### **Local Deployment**

```bash
# Deploy to DEV
npm run deploy:dev

# Deploy to PROD
npm run deploy:prod

# View deployment info
npm run info
```

### **View Logs**

```bash
# Dev environment
serverless logs -f create --stage dev --tail

# Prod environment
serverless logs -f create --stage prod --tail
```

### **Remove Deployment**

```bash
# Remove DEV (be careful!)
npm run remove:dev

# Remove PROD (be very careful!)
npm run remove:prod
```

---

## 🔐 GitHub Secrets Required

Make sure these secrets are set in GitHub:

1. Go to GitHub → **Settings** → **Secrets and variables** → **Actions**
2. Required secrets:
   - ✅ `AWS_ACCESS_KEY_ID`
   - ✅ `AWS_SECRET_ACCESS_KEY`

---

## 🚨 Important Notes

### **⚠️ Production Safety**

- Always test in DEV first
- Use Pull Requests for PROD deployments
- Review changes before merging to `main`

### **💡 Best Practices**

1. **Never push directly to `main`** - Use develop → main workflow
2. **Test in DEV** - Always verify changes in dev environment first
3. **Use feature branches** - Create branches for new features
4. **Code reviews** - Use Pull Requests for team collaboration

### **🔄 Rollback Strategy**

If production deployment fails:

```bash
# Option 1: Revert the commit
git revert <commit-hash>
git push origin main

# Option 2: Redeploy previous version
git checkout <previous-commit>
npm run deploy:prod
```

---

## 📊 Pipeline Triggers

| Event             | Trigger   | Stage            |
| ----------------- | --------- | ---------------- |
| Push to `develop` | Automatic | DEV              |
| Push to `main`    | Automatic | PROD             |
| Push to `master`  | Automatic | PROD             |
| Manual workflow   | Manual    | Choose: dev/prod |
| Pull Request      | None      | (Add if needed)  |

---

## 🎯 What's Next?

### **1. Create Develop Branch**

```bash
git checkout -b develop
git push -u origin develop
```

### **2. Set Default Branch Protection**

On GitHub:

- Settings → Branches → Add rule
- Protect `main` branch
- Require pull request reviews

### **3. Test the Pipeline**

```bash
# Make a change
echo "# Test" >> README.md
git add .
git commit -m "test: CI/CD pipeline"
git push origin develop
# Watch it deploy to DEV automatically!
```

---

## ✅ Success Indicators

Your pipeline is working correctly when you see:

- ✅ Green checkmark in GitHub Actions
- ✅ New API Gateway endpoint created
- ✅ Lambda functions updated
- ✅ DynamoDB table accessible
- ✅ API responds to requests

---

## 🆘 Troubleshooting

### **Pipeline Fails**

- Check AWS credentials in GitHub Secrets
- Verify IAM permissions
- Review CloudFormation stack errors

### **Wrong Environment Deployed**

- Check which branch you pushed to
- Verify pipeline logs show correct stage

### **API Not Working**

- Check Lambda function logs: `npm run logs:create`
- Verify DynamoDB table exists
- Test API endpoint manually

---

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Serverless Framework - Multiple Stages](https://www.serverless.com/framework/docs/providers/aws/guide/deploying)
- [AWS Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)

---

**Your pipeline is now production-ready!** 🚀

Happy deploying! 🎉
