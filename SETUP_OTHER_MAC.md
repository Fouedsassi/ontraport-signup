# Setup Instructions for Another Mac

## Quick Setup Steps

### 1. Transfer the Project
You have a few options:

**Option A: iCloud Sync (Easiest)**
- The project is currently at: `~/netlify-project`
- Copy the entire `netlify-project` folder to your iCloud Drive
- On the other Mac, copy it from iCloud to your home directory

**Option B: Git Repository (Recommended for version control)**
```bash
# On this Mac (if Git is available):
cd ~/netlify-project
git init
git add .
git commit -m "Initial commit"
# Create a repo on GitHub/GitLab and push:
git remote add origin <your-repo-url>
git push -u origin main

# On the other Mac:
git clone <your-repo-url>
cd netlify-project
```

**Option C: Manual Transfer**
- Copy the entire `netlify-project` folder via USB drive, AirDrop, or cloud storage

### 2. On the Other Mac - Install Dependencies

```bash
cd ~/netlify-project  # or wherever you placed it
npm install
```

### 3. Run the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 4. Deploy to Netlify (if needed)

```bash
# Install Netlify CLI (if not already installed)
npm install --save-dev netlify-cli

# Build the project
npm run build

# Deploy (the site is already linked)
npx netlify deploy --prod --dir=build
```

## Project Structure

```
netlify-project/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── SignupPage.js          # Main component
│   ├── SignupPage.css         # Styles
│   ├── SignupStep1.js         # Step 1: Email/Social login
│   ├── SignupStep2.js         # Step 2: Name and email
│   ├── SignupStep3.js         # Step 3: Password
│   ├── SignupStep4.js         # Step 4: Email verification
│   ├── SignupStep5.js         # Step 5: Business info (with country dropdown)
│   └── index.js               # Entry point
├── package.json
└── README.md
```

## Key Features Implemented

1. **Multi-step signup form** (5 steps)
2. **Country dropdown** in Step 5 with 60+ countries
3. **Custom styling** for dropdown with proper spacing
4. **Updated verification text** in Step 4
5. **Responsive design** with animations

## Netlify Deployment

- **Site URL**: https://profound-sprinkles-ac249c.netlify.app
- **Site ID**: 4370e5e0-dd01-4c20-9d82-095d9858bd3a
- The project is already linked to Netlify

## Notes

- Node.js version: v20.8.0 (or higher recommended)
- React version: 18.2.0
- All dependencies are in `package.json`

