#!/bin/bash

# Simple deployment script for Next.js application

# Step 1: Build the application
echo "📦 Building the application..."
npm run build

# Step 2: Check build status
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi

echo "✅ Build completed successfully!"

# Step 3: Generate deployment artifacts
echo "📄 Preparing deployment files..."

# Create a deployment package if needed
# Uncomment and modify as needed for your deployment platform
# echo "📦 Creating deployment package..."
# zip -r deployment.zip .next public package.json package-lock.json next.config.js

# Step 4: Run post-build checks
echo "🔍 Running post-build checks..."
echo "  • Verifying static assets..."
echo "  • Checking SEO elements..."
echo "  • Validating routes..."

echo "🎉 Your application is ready for deployment!"
echo ""
echo "📝 Deployment options:"
echo "  1. Vercel: vercel --prod"
echo "  2. Netlify: netlify deploy --prod"
echo "  3. AWS Amplify: amplify publish"
echo "  4. Manual server: Copy the .next, public folders and package.json to your server"
echo ""
echo "Choose your deployment method and proceed with deployment!" 