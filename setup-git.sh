#!/bin/bash

# Git Setup Script for Ontraport Signup Project
# Run this script to set up Git and push to GitHub

echo "🚀 Setting up Git for this project..."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Xcode Command Line Tools first:"
    echo "   xcode-select --install"
    exit 1
fi

# Configure Git (if not already configured)
if [ -z "$(git config --global user.name)" ]; then
    git config --global user.name "Foued Sassi"
    echo "✅ Set Git user.name to: Foued Sassi"
fi

if [ -z "$(git config --global user.email)" ]; then
    git config --global user.email "foued@ontraport.com"
    echo "✅ Set Git user.email to: foued@ontraport.com"
fi

# Initialize Git repository
if [ ! -d ".git" ]; then
    git init
    echo "✅ Initialized Git repository"
fi

# Add all files
git add .
echo "✅ Added all files to staging"

# Create initial commit
git commit -m "Initial commit: Ontraport signup page with all updates

- Multi-step signup form (5 steps)
- Country dropdown in Step 5 with 60+ countries
- Custom dropdown styling with proper spacing
- Updated verification email text in Step 4
- Responsive design with animations
- Deployed to Netlify: https://profound-sprinkles-ac249c.netlify.app"

echo "✅ Created initial commit"
echo ""
echo "📝 Next steps:"
echo "1. Go to GitHub and create a new repository (or use an existing one)"
echo "2. Run the following commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Or if you prefer SSH:"
echo "   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"

