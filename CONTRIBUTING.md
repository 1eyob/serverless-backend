# Contributing to Serverless Backend

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

1. **Fork the repository**
2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/serverless-backend.git
   cd serverless-backend
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Configure AWS credentials**
   ```bash
   aws configure
   ```

## Making Changes

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic

3. **Test your changes**

   ```bash
   # Deploy to dev environment
   npm run deploy:dev

   # Test the API endpoints
   # View logs
   npm run logs:create
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

## Commit Message Guidelines

Use conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add pagination to readAll endpoint
fix: correct error handling in update function
docs: update API examples in README
```

## Pull Request Process

1. **Update documentation** if needed
2. **Ensure all tests pass** (if tests are implemented)
3. **Create a pull request** to the `main` branch
4. **Wait for review** and address any feedback

## Code Style

- Use meaningful variable and function names
- Add comments for complex logic
- Follow JavaScript/Node.js best practices
- Use async/await for asynchronous operations
- Handle errors appropriately

## Testing

Before submitting a PR:

- Test all CRUD operations
- Verify error handling
- Check CloudWatch logs for any issues
- Test in both dev and prod environments (if applicable)

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
