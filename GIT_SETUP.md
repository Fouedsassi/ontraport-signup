# Git Setup Instructions

## Step 1: Accept Xcode License (Required First)

Before Git will work, you need to accept the Xcode license agreement:

```bash
sudo xcodebuild -license
```

Press `space` to scroll through the agreement, then type `agree` at the end.

## Step 2: Run the Setup Script

After accepting the Xcode license, run:

```bash
cd ~/netlify-project
./setup-git.sh
```

Or manually run these commands:

```bash
# Configure Git (if not already done)
git config --global user.name "Foued Sassi"
git config --global user.email "foued@ontraport.com"

# Initialize repository
cd ~/netlify-project
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Ontraport signup page with all updates"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `ontraport-signup` or `signup-page`)
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 4: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Using SSH instead of HTTPS

If you have SSH keys set up with GitHub:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 5: Verify

Go to your GitHub repository page and verify all files are there!

## Future Updates

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Troubleshooting

### If Git commands fail with Xcode license error:
```bash
sudo xcodebuild -license
# Type 'agree' after reading
```

### If you need to set up SSH keys for GitHub:
1. Generate SSH key: `ssh-keygen -t ed25519 -C "foued@ontraport.com"`
2. Add to GitHub: Copy `~/.ssh/id_ed25519.pub` and add as new SSH key in GitHub settings

### If you get authentication errors:
- For HTTPS: Use a Personal Access Token instead of password
- For SSH: Make sure your SSH key is added to GitHub

