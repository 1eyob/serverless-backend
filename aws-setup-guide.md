# AWS Credentials Setup Guide

## Quick Setup Steps

### 1. Create AWS IAM User

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click **Users** → **Add users**
3. Username: `serverless-deployer`
4. Select: **Access key - Programmatic access**
5. Click **Next: Permissions**

### 2. Attach Permissions

**Option A: Use PowerUserAccess (Easier)**

- Search and select: `PowerUserAccess`
- Click **Next** → **Create user**

**Option B: Specific Permissions (More Secure)**
Select these policies:

- ✅ AWSLambdaFullAccess
- ✅ AmazonDynamoDBFullAccess
- ✅ AmazonAPIGatewayAdministrator
- ✅ CloudFormationFullAccess
- ✅ IAMFullAccess
- ✅ CloudWatchLogsFullAccess
- ✅ AmazonS3FullAccess

### 3. Save Your Credentials

After creating the user, you'll see:

```
Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLE
```

⚠️ **IMPORTANT**: Download the CSV or copy these values immediately!

### 4. Configure AWS CLI

**Method A: Interactive (Recommended)**

```powershell
aws configure
```

Enter the values when prompted.

**Method B: Manual File Creation**

Create file at: `C:\Users\Eyob\.aws\credentials`

```ini
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

Create file at: `C:\Users\Eyob\.aws\config`

```ini
[default]
region = us-east-1
output = json
```

### 5. Verify Setup

```powershell
# Check AWS CLI version
aws --version

# Verify credentials work
aws sts get-caller-identity

# List S3 buckets (to test permissions)
aws s3 ls
```

## Troubleshooting

### Issue: "aws: command not found"

**Solution**: Install AWS CLI

```powershell
winget install Amazon.AWSCLI
# OR download from: https://awscli.amazonaws.com/AWSCLIV2.msi
```

Then restart PowerShell.

### Issue: "Unable to locate credentials"

**Solution**: Run `aws configure` again and enter valid credentials.

### Issue: "Access Denied" during deployment

**Solution**: Ensure your IAM user has the necessary permissions listed above.

### Issue: Region not set

**Solution**:

```powershell
aws configure set region us-east-1
```

## Alternative: Named Profiles

If you have multiple AWS accounts:

```powershell
# Configure a named profile
aws configure --profile serverless

# Use it with serverless
serverless deploy --stage dev --aws-profile serverless
```

## Security Best Practices

✅ **DO**:

- Create IAM users with minimal required permissions
- Use named profiles for different projects
- Rotate access keys regularly
- Enable MFA for AWS console access

❌ **DON'T**:

- Use root account credentials
- Share credentials in code or commit to Git
- Give more permissions than needed

## For GitHub Actions

For CI/CD, you'll need to add these as GitHub Secrets:

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Add secrets:
   - Name: `AWS_ACCESS_KEY_ID` → Value: Your access key
   - Name: `AWS_SECRET_ACCESS_KEY` → Value: Your secret key

---

## Quick Reference

```powershell
# View current configuration
aws configure list

# View all profiles
aws configure list-profiles

# Set specific values
aws configure set aws_access_key_id YOUR_KEY
aws configure set aws_secret_access_key YOUR_SECRET
aws configure set region us-east-1

# Test credentials
aws sts get-caller-identity

# Clear credentials (if needed)
# Delete: C:\Users\Eyob\.aws\credentials
```

---

Need help? Common AWS regions:

- `us-east-1` - US East (N. Virginia)
- `us-west-2` - US West (Oregon)
- `eu-west-1` - Europe (Ireland)
- `ap-southeast-1` - Asia Pacific (Singapore)

Choose the region closest to your users for better performance!
