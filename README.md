# Ontraport Signup Page

A multi-step signup form built with React, extracted from the Netlify deployment.

## Project Structure

```
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── SignupPage.js          # Main signup page component
│   ├── SignupPage.css         # Styles for the signup page
│   ├── SignupStep1.js         # Step 1: Email/Social login
│   ├── SignupStep2.js         # Step 2: Name and email
│   ├── SignupStep3.js         # Step 3: Password creation
│   ├── SignupStep4.js         # Step 4: Email verification
│   ├── SignupStep5.js         # Step 5: Business information
│   └── index.js               # App entry point
├── package.json
└── README.md
```

## Features

- Multi-step signup flow (5 steps)
- Social login options (Google, Microsoft, Facebook)
- Form validation
- Responsive design
- Modern UI with animations
- Email verification step

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

This project was originally deployed to Netlify at: https://profound-sprinkles-ac249c.netlify.app

## Technologies Used

- React 18
- Create React App
- CSS3 with custom properties
- Sora font family

