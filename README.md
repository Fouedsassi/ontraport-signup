# Ontraport Signup & Pricing Pages

A modern signup flow and pricing page built with React for Ontraport.

## Live Demo

- **Pricing Page:** https://ontraport-pricing-2024.netlify.app
- **Signup Page:** https://ontraport-pricing-2024.netlify.app/signup

## Project Structure

```
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── _redirects              # Netlify routing config
├── src/
│   ├── index.js                # App entry point with React Router
│   ├── PricingPage.js          # Pricing page component
│   ├── PricingPage.css         # Styles for pricing page
│   ├── SignupPage.js           # Main signup page component
│   ├── SignupPage.css          # Styles for the signup page
│   ├── SignupStep1.js          # Step 1: Email/Social login
│   ├── SignupStep2.js          # Step 2: Name and email
│   ├── SignupStep3.js          # Step 3: Password creation
│   ├── SignupStep4.js          # Step 4: Email verification
│   └── SignupStep5.js          # Step 5: Business information + phone
├── package.json
└── README.md
```

## Features

### Pricing Page
- Interactive pricing cards (Plus, Pro, Enterprise)
- Monthly/Annual billing toggle with "2 months free" badge
- Sticky sidebar with:
  - Contact slider (500 to 5M contacts)
  - User slider ($49/month per user)
  - Add-on toggles (Inbox, Dynamic CMS, Done-with-you Setup)
  - Dynamic price calculation
  - Yearly total with strikethrough discount
- Feature comparison table with categorized features
- Responsive design
- Modern UI with Ontraport brand colors

### Signup Page
- Multi-step signup flow (5 steps)
- Social login options (Google, Microsoft, Facebook)
- Form validation
- Phone number field for SMS
- Responsive design
- Modern UI with animations
- Email verification step

### Navigation
- React Router for seamless navigation between pages
- CTA buttons on pricing page link to signup
- Ontraport logo on signup page links back to pricing

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

Deployed to Netlify at: https://ontraport-pricing-2024.netlify.app

To deploy:
```bash
npm run build
npx netlify-cli deploy --prod --dir=build
```

## Technologies Used

- React 18
- React Router DOM
- Create React App
- CSS3 with custom properties
- Sora font family
- Netlify for hosting
