import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingPage.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#10b981"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('Plus');
  const [contacts, setContacts] = useState(500);
  const [users, setUsers] = useState(1);
  const [inbox, setInbox] = useState(false);
  const [dynamicCMS, setDynamicCMS] = useState(false);
  const [doneWithYou, setDoneWithYou] = useState(false);

  // Contact slider values - starting at 500
  const contactSteps = [500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 2500000, 5000000];
  const contactIndex = contactSteps.indexOf(contacts) !== -1 ? contactSteps.indexOf(contacts) : 0;

  // Pricing based on plan and billing cycle
  const planPrices = {
    Plus: { monthly: 99, yearly: 83 },
    Pro: { monthly: 149, yearly: 124 },
    Enterprise: { monthly: 299, yearly: 249 }
  };

  const userPrice = 49;
  const currentPlanPrices = planPrices[selectedPlan];
  const baseMonthlyPrice = billingCycle === 'annual' ? currentPlanPrices.yearly : currentPlanPrices.monthly;
  const additionalUsersCost = (users - 1) * userPrice;
  const monthlyPrice = baseMonthlyPrice + additionalUsersCost;
  const yearlyTotal = monthlyPrice * 12;
  const originalYearlyTotal = currentPlanPrices.monthly * 12 + additionalUsersCost * 12;

  const formatContactNumber = (num) => {
    if (num >= 1000000) return 'Up to ' + (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + 'M';
    if (num >= 1000) return 'Up to ' + (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    return 'Up to ' + num.toString();
  };

  const plans = [
    {
      name: 'Plus',
      monthlyPrice: 99,
      yearlyPrice: 83,
      tagline: 'CRM and automation essentials for growing teams',
      keyFeatures: [
        'CRM',
        'Marketing Automation',
        'Email + SMS',
        'Websites + Membership',
        'Payment Management',
        'Built-in AI'
      ],
    },
    {
      name: 'Pro',
      monthlyPrice: 149,
      yearlyPrice: 124,
      tagline: 'Data insights and customization for next-level results',
      keyFeatures: [
        'Everything in Plus, AND',
        'Marketing Tracking + Testing',
        'Advanced Personalization',
        'Deep Customization',
        'User Permissions Management',
        'Partner Programs',
        'Shared Inbox + Webchat'
      ],
    },
    {
      name: 'Enterprise',
      monthlyPrice: 299,
      yearlyPrice: 249,
      tagline: 'Top-grade scalable infrastructure for established teams',
      keyFeatures: [
        'Everything in Pro, AND',
        'SSO',
        'Field-level permissions',
        'Private infrastructure',
        'Enterprise-grade scalability'
      ],
    },
  ];

  const featureCategories = [
    {
      name: 'Marketing',
      features: [
        { name: 'Email and SMS automation', plus: true, pro: true, enterprise: true },
        { name: 'Split test pages', plus: false, pro: true, enterprise: true },
        { name: 'Partner programs & referral tracking', plus: false, pro: true, enterprise: true },
        { name: 'Lead source and conversion reporting (UTM, Google, FB, LinkedIn pixels)', plus: false, pro: true, enterprise: true },
        { name: 'Custom mailserver domain', plus: '1 included (1 max)', pro: '2 included (max 5)', enterprise: '3 included (no max)' },
      ],
    },
    {
      name: 'Sales CRM',
      features: [
        { name: 'Customizable online database', plus: true, pro: true, enterprise: true },
        { name: 'Smart Pipelines', plus: true, pro: true, enterprise: true },
        { name: 'Self-scheduling and calendar event automation', plus: true, pro: true, enterprise: true },
        { name: 'Task automation', plus: true, pro: true, enterprise: true },
        { name: 'Unified contact history', plus: true, pro: true, enterprise: true },
        { name: 'User roles and permissions', plus: 'Default roles', pro: 'Custom roles', enterprise: 'Field-level permissions' },
        { name: 'API access', plus: true, pro: true, enterprise: 'Increased speed available' },
      ],
    },
    {
      name: 'Payments',
      features: [
        { name: 'Invoicing', plus: true, pro: true, enterprise: true },
        { name: 'Order forms', plus: true, pro: true, enterprise: true },
        { name: 'Manage subscriptions and payment plans', plus: true, pro: true, enterprise: true },
        { name: 'Coupon codes & order bumps', plus: false, pro: true, enterprise: true },
      ],
    },
    {
      name: 'CMS',
      features: [
        { name: 'Drag-and-drop pages', plus: true, pro: true, enterprise: true },
        { name: 'Custom objects', plus: 'Available', pro: 'Available', enterprise: 'Available' },
        { name: 'Customer portals & access control', plus: '1', pro: '3', enterprise: 'Unlimited' },
        { name: 'Conditional content', plus: true, pro: true, enterprise: true },
        { name: 'Database-driven Dynamic CMS', plus: 'Available', pro: 'Available', enterprise: 'Available' },
        { name: 'Custom domains', plus: '1 included (1 max)', pro: '2 included (max 5)', enterprise: '3 included (no max)' },
      ],
    },
    {
      name: 'Support',
      features: [
        { name: 'Unified Multi-channel Inbox', plus: 'Available', pro: 'Available', enterprise: 'Available' },
        { name: 'SMS and Email channels included', plus: true, pro: true, enterprise: true },
        { name: 'AI-powered responses', plus: true, pro: true, enterprise: true },
        { name: 'Automatic routing and escalation', plus: true, pro: true, enterprise: true },
        { name: 'SLA automation', plus: true, pro: true, enterprise: true },
      ],
    },
  ];

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <CheckIcon />;
    }
    if (value === false) {
      return <span className="feature-dash">—</span>;
    }
    return <span className="feature-text">{value}</span>;
  };

  return (
    <div className="pricing-page">
      {/* Decorative background elements */}
      <div className="bg-gradient-orb bg-orb-1"></div>
      <div className="bg-gradient-orb bg-orb-2"></div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-left">
            <a href="/" className="nav-logo">ontraport</a>
            <div className="nav-links">
              <a href="#" className="nav-link">Product</a>
              <a href="#" className="nav-link">Who it's for</a>
              <a href="#" className="nav-link active">Pricing</a>
              <a href="#" className="nav-link">Resources</a>
              <a href="#" className="nav-link">Contact us</a>
            </div>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link">Log in</a>
            <Link to="/signup" className="nav-cta">Start free trial</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pricing-main">
        {/* Hero Section */}
        <section className="pricing-hero">
          <h1 className="pricing-title">Try Ontraport free for 14 days</h1>
          <p className="pricing-subtitle">
            Ontraport brings enterprise-grade CRM and automation software to small and mid-sized companies.
          </p>

          <Link to="/signup" className="hero-cta">Try for free</Link>

          <p className="hero-sales-text">
            Don't see what you're looking for? Let's talk. <a href="#" className="hero-sales-link">Talk to sales</a>
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-option ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="billing-badge">2 months free</span>
            </button>
          </div>
        </section>

        {/* Pricing Cards + Sidebar Layout */}
        <section className="pricing-layout">
          <div className="pricing-left-content">
            {/* Pricing Cards as Toggles */}
            <div className="pricing-cards">
              {plans.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`pricing-card ${selectedPlan === plan.name ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <div className="card-radio">
                    <span className={`radio-dot ${selectedPlan === plan.name ? 'active' : ''}`}></span>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h2 className="plan-name">{plan.name}</h2>
                      <p className="plan-tagline">{plan.tagline}</p>
                    </div>
                    <div className="card-pricing">
                      <span className="price-currency">$</span>
                      <span className="price-amount">{billingCycle === 'annual' ? plan.yearlyPrice : plan.monthlyPrice}</span>
                      <span className="price-period"> per month</span>
                    </div>
                    <div className="key-features">
                      <h4>Key features include</h4>
                      <ul>
                        {plan.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <div className="features-section">
              <h2 className="features-title">Key Features</h2>
              
              <div className="features-table-container">
                <table className="features-table">
                  <thead>
                    <tr>
                      <th className="feature-name-header"></th>
                      <th className="plan-header">Plus</th>
                      <th className="plan-header">Pro</th>
                      <th className="plan-header">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureCategories.map((category) => (
                      <React.Fragment key={category.name}>
                        <tr className="category-row">
                          <td className="category-name" colSpan="4">{category.name}</td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="feature-row">
                            <td className="feature-name">{feature.name}</td>
                            <td className="feature-value">{renderFeatureValue(feature.plus)}</td>
                            <td className="feature-value">{renderFeatureValue(feature.pro)}</td>
                            <td className="feature-value">{renderFeatureValue(feature.enterprise)}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="pricing-sidebar">
            <div className="sidebar-content">
              {/* Contacts Slider */}
              <div className="sidebar-section">
                <div className="sidebar-row">
                  <label className="sidebar-label">How many contacts?</label>
                  <span className="sidebar-value">{formatContactNumber(contacts)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={contactSteps.length - 1}
                  value={contactIndex}
                  onChange={(e) => setContacts(contactSteps[parseInt(e.target.value)])}
                  className="sidebar-slider"
                  style={{ '--slider-progress': `${(contactIndex / (contactSteps.length - 1)) * 100}%` }}
                />
                <div className="slider-labels">
                  <span>500</span>
                  <span>5,000,000</span>
                </div>
              </div>

              {/* Users Slider */}
              <div className="sidebar-section">
                <div className="sidebar-row">
                  <div>
                    <label className="sidebar-label">How many users?</label>
                    <span className="sidebar-sublabel">${userPrice} per month per user</span>
                  </div>
                  <span className="sidebar-value">{users}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value))}
                  className="sidebar-slider"
                  style={{ '--slider-progress': `${((users - 1) / 19) * 100}%` }}
                />
                <div className="slider-labels">
                  <span>1</span>
                  <span>Unlimited</span>
                </div>
              </div>

              {/* Inbox Add-on */}
              <div className="sidebar-section addon-section">
                <div className="sidebar-row">
                  <div>
                    <label className="sidebar-label">Inbox</label>
                    <a href="#" className="sidebar-link">See details</a>
                  </div>
                  <label className="toggle-switch">
                    <span className="toggle-label">Add</span>
                    <input
                      type="checkbox"
                      checked={inbox}
                      onChange={(e) => setInbox(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              {/* Dynamic CMS Add-on */}
              <div className="sidebar-section addon-section">
                <div className="sidebar-row">
                  <div>
                    <label className="sidebar-label">Dynamic CMS</label>
                    <a href="#" className="sidebar-link">See details</a>
                  </div>
                  <label className="toggle-switch">
                    <span className="toggle-label">Add</span>
                    <input
                      type="checkbox"
                      checked={dynamicCMS}
                      onChange={(e) => setDynamicCMS(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>

              {/* Done-With-You Setup */}
              <div className="sidebar-section addon-section">
                <div className="sidebar-row">
                  <div>
                    <label className="sidebar-label">"Done-with-you"<br />Setup and Training</label>
                  </div>
                  <label className="toggle-switch">
                    <span className="toggle-label">Add</span>
                    <input
                      type="checkbox"
                      checked={doneWithYou}
                      onChange={(e) => setDoneWithYou(e.target.checked)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="addon-price">$897</div>
                <p className="addon-note">One time fee, 30-day money back guarantee. <a href="#" className="sidebar-link">See details</a></p>
              </div>

              {/* Price Display */}
              <div className="sidebar-section price-section">
                <div className="total-price">
                  <span className="price-dollar">$</span>
                  <span className="price-number">{monthlyPrice}</span>
                  <span className="price-term"> per month</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="billed-yearly">
                    <span className="price-strikethrough">${originalYearlyTotal}</span> ${yearlyTotal} billed yearly
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Link to="/signup" className="sidebar-cta">
                Start free trial
                <span className="cta-subtext">No credit card required</span>
              </Link>

              {/* Fine Print */}
              <p className="sidebar-fine-print">
                Billed after your 14-day free trial<br />
                30-day money back guarantee
              </p>
            </div>
          </aside>
        </section>

        {/* Inbox Section */}
        <section className="addon-feature-section">
          <div className="addon-feature-header">
            <h2 className="addon-feature-title">Inbox</h2>
            <p className="addon-feature-description">
              Manage all of your customer communications from one place. <a href="#" className="inline-link">Learn more about Inbox</a>
            </p>
            <a href="#" className="addon-learn-link">✓ Included free with any plan</a>
          </div>

          <div className="addon-comparison-table">
            <div className="addon-table-header">
              <div className="addon-plan-col"></div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Basic</span>
                <span className="addon-plan-price">Free with<br/>Ontraport</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Plus</span>
                <span className="addon-plan-price">$29 per<br/>month</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Pro</span>
                <span className="addon-plan-price">$59 per<br/>month</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Enterprise</span>
                <span className="addon-plan-price">$149 per<br/>month</span>
              </div>
            </div>

            <div className="addon-table-body">
              <div className="addon-feature-row">
                <span className="addon-feature-name">Channels</span>
                <span className="addon-feature-value">SMS + Email</span>
                <span className="addon-feature-value">+ Live chat</span>
                <span className="addon-feature-value">+ Webchat</span>
                <span className="addon-feature-value">+ Webchat</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Inbox users</span>
                <span className="addon-feature-value">1 seat</span>
                <span className="addon-feature-value">2 seats</span>
                <span className="addon-feature-value">5 seats</span>
                <span className="addon-feature-value">Unlimited</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Unique conversations per month</span>
                <span className="addon-feature-value">25</span>
                <span className="addon-feature-value">250</span>
                <span className="addon-feature-value">1,000</span>
                <span className="addon-feature-value">Unlimited</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">High priority email queue</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">AI message assist</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Custom routing and assignment rules</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Escalation conditions</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">SLA automation</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Round robin</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic CMS Section */}
        <section className="addon-feature-section">
          <div className="addon-feature-header">
            <h2 className="addon-feature-title">Dynamic CMS</h2>
            <p className="addon-feature-description">
              Control your site and its functionality with your online database. <a href="#" className="inline-link">Learn more about CMS</a>
            </p>
            <a href="#" className="addon-learn-link">✓ Included free with any plan</a>
          </div>

          <div className="addon-comparison-table">
            <div className="addon-table-header">
              <div className="addon-plan-col"></div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Starter</span>
                <span className="addon-plan-price">Free with<br/>Ontraport</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Buildout</span>
                <span className="addon-plan-price">$39 per<br/>month</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Unlimited</span>
                <span className="addon-plan-price">$69 per<br/>month</span>
              </div>
              <div className="addon-plan-col">
                <span className="addon-plan-name">Enterprise</span>
                <span className="addon-plan-price">$149 per<br/>month</span>
              </div>
            </div>

            <div className="addon-table-body">
              <div className="addon-feature-row">
                <span className="addon-feature-name">Collections per site</span>
                <span className="addon-feature-value">1</span>
                <span className="addon-feature-value">10</span>
                <span className="addon-feature-value">25</span>
                <span className="addon-feature-value">Unlimited</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Storage</span>
                <span className="addon-feature-value">100 MB</span>
                <span className="addon-feature-value">1 GB</span>
                <span className="addon-feature-value">10 GB</span>
                <span className="addon-feature-value">25 GB</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Monthly pageviews</span>
                <span className="addon-feature-value">1,000</span>
                <span className="addon-feature-value">10,000</span>
                <span className="addon-feature-value">100,000</span>
                <span className="addon-feature-value">1,000,000</span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Custom objects</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Advanced page caching</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
              <div className="addon-feature-row">
                <span className="addon-feature-name">Custom front-end code</span>
                <span className="addon-feature-value">—</span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
                <span className="addon-feature-value"><CheckIcon /></span>
              </div>
            </div>
          </div>
        </section>

        {/* Done-With-You Setup Section */}
        <section className="setup-promo-section">
          <div className="setup-promo-content">
            <div className="setup-promo-badge">New</div>
            <h2 className="setup-promo-title">The fastest and easiest way to get started on the right track</h2>
            <p className="setup-promo-description">
              Add the Done-with-you Setup and Training Package and in only a few short weeks, your consultant will work alongside you to set up Ontraport for your unique business.
            </p>
            <p className="setup-promo-description">
              Our 14+ years of experience with hundreds of different industries means you'll get best practice recommendations to make the most of Ontraport. Plus you'll walk away confident in using all the tools and running the day-to-day operations.
            </p>
            <div className="setup-promo-buttons">
              <button className="setup-promo-cta">Add to plan</button>
              <a href="#" className="setup-promo-link">Learn more</a>
            </div>
          </div>
          <div className="setup-promo-image">
            <div className="setup-promo-placeholder">
              <div className="setup-consultant-icon">👩‍💼</div>
            </div>
          </div>
        </section>

        {/* Extended Platform Features */}
        <section className="platform-features-section">
          <div className="platform-toggle">
            <span className="platform-toggle-label">▾ Platform</span>
          </div>

          <div className="features-table-container platform-table">
            <table className="features-table">
              <thead>
                <tr>
                  <th className="feature-name-header"></th>
                  <th className="plan-header plan-basic">Basic</th>
                  <th className="plan-header">Plus</th>
                  <th className="plan-header">Pro</th>
                  <th className="plan-header">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {/* Data Management */}
                <tr className="category-row">
                  <td className="category-name" colSpan="5">Data management</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Card and contact records</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Deals and companies</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Activity tracking</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Custom field types</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Custom lead scoring</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Custom objects</td>
                  <td className="feature-value">Requires Dynamic CMS</td>
                  <td className="feature-value">Requires Dynamic CMS</td>
                  <td className="feature-value">Requires Dynamic CMS</td>
                  <td className="feature-value">Requires Dynamic CMS</td>
                </tr>

                {/* Automation */}
                <tr className="category-row">
                  <td className="category-name" colSpan="5">Automation</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Marketing automation</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Sales automation</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Postmaster + deliverability tools</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">SMS message campaigns</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>

                {/* Tracking */}
                <tr className="category-row">
                  <td className="category-name" colSpan="5">Tracking</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Contact activity log</td>
                  <td className="feature-value">14 days</td>
                  <td className="feature-value">1 year</td>
                  <td className="feature-value">4 years</td>
                  <td className="feature-value">4+ years (custom)</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">UTM tracking and original source</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">A/B testing</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Lead attribution</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value">—</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>

                {/* More Features */}
                <tr className="category-row">
                  <td className="category-name" colSpan="5">File hosting</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Storage</td>
                  <td className="feature-value">1 GB</td>
                  <td className="feature-value">10 GB</td>
                  <td className="feature-value">20 GB</td>
                  <td className="feature-value">40+ GB</td>
                </tr>

                <tr className="category-row">
                  <td className="category-name" colSpan="5">Task automation</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Manage tasks</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Assign and manage users</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>

                <tr className="category-row">
                  <td className="category-name" colSpan="5">Setup assistance</td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Self-guided onboarding</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Live training sessions</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
                <tr className="feature-row">
                  <td className="feature-name">Built-in on-demand resources</td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                  <td className="feature-value"><CheckIcon /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Collapsible Categories */}
          <div className="category-links">
            <a href="#" className="category-link">▸ Payments</a>
            <a href="#" className="category-link">▸ Sales and CRM</a>
            <a href="#" className="category-link">▸ Marketing and automation</a>
            <a href="#" className="category-link">▸ Websites and pages</a>
            <a href="#" className="category-link">▸ Reporting</a>
            <a href="#" className="category-link">▸ Support and onboarding</a>
          </div>
        </section>

        {/* Talk to Sales Section */}
        <section className="talk-sales-section">
          <div className="talk-sales-content">
            <div className="talk-sales-icon">
              <span className="icon-emoji">💬</span>
            </div>
            <div className="talk-sales-text">
              <h3>Don't see what you're looking for? Let's talk.</h3>
            </div>
            <a href="#" className="talk-sales-link">Let's connect →</a>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <div className="avatar-placeholder">👩</div>
            </div>
            <blockquote className="testimonial-quote">
              "The onboarding calls are a fantastic value for new users and I'm consistently blown away by the support team's professionalism and friendliness. I feel like I truly have a team working with me who is invested in my success."
            </blockquote>
            <cite className="testimonial-author">— JENNIFER EVERS, PRODUCTIVITY STRATEGIST</cite>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="getting-started-section">
          <h2 className="getting-started-title">It's easy to get started with Ontraport</h2>
          <p className="getting-started-subtitle">
            Ontraport is the software you've been searching for to run the online side of your company. We'll help you get there.
          </p>

          <div className="getting-started-cards">
            <div className="getting-started-card">
              <div className="card-icon">📚</div>
              <h3>Templates and resources</h3>
              <p>Pick a Ready or Premium template to make building your business a breeze. Our templates come pre-built with automation, emails, pages and more.</p>
            </div>
            <div className="getting-started-card">
              <div className="card-icon">💬</div>
              <h3>Amazing support</h3>
              <p>You'll never feel alone. Meet new friends who use Ontraport in our Facebook Group that's been praised as the most helpful community online.</p>
            </div>
            <div className="getting-started-card">
              <div className="card-icon">🌟</div>
              <h3>An inspiring community</h3>
              <p>We offer dedicated customer success managers, webinars, and an extensive knowledge base so you're set up for success.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <h2 className="final-cta-title">Start growing your business with Ontraport</h2>
          <p className="final-cta-subtitle">
            Mistakes don't stick in 14-day free trial. No credit card. Valid for all plans.
          </p>
          <Link to="/signup" className="final-cta-button">Start free trial</Link>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How much does it cost to get started?</h4>
              <p>Nothing! We offer a 14-day <a href="#">free trial</a>. There are no upfront fees or hidden charges. Your first payment won't be charged until after your trial ends.</p>
            </div>
            <div className="faq-item">
              <h4>What if I want to upgrade to a different plan later?</h4>
              <p>Sure! You can easily upgrade your paid level with more features, storage, or user licenses. Contact our team to change your plan.</p>
            </div>
            <div className="faq-item">
              <h4>Do I have to commit to a long-term contract?</h4>
              <p>While you receive a better rate by paying for an annual or two-year subscription, you're free to cancel anytime for any reason. Monthly plans only require 30-day notice.</p>
            </div>
            <div className="faq-item">
              <h4>What if I need to cancel my account later?</h4>
              <p>Your account can be put on pause or canceled at any time from inside your account. Simply give 30 days notice and you will be able to download all of your data.</p>
            </div>
            <div className="faq-item">
              <h4>Is there support for getting my account set up right?</h4>
              <p>Yes, we sell the Done-with-you Setup and Training and our Full Setup Package is designed for entrepreneurs who want help and training with building out their account.</p>
            </div>
            <div className="faq-item">
              <h4>What if I need more customizable Ontraport plan to fit my team?</h4>
              <p>To add SMS, the new required Inbox or custom domain please email <a href="mailto:billing@ontraport.com">billing@ontraport.com</a> and they're able to discuss options.</p>
            </div>
            <div className="faq-item">
              <h4>I have more questions. How do I contact you?</h4>
              <p>We provide multiple ways for you to connect with us. You can reach out via phone, email, or live chat. Find all contact info on our <a href="#">Contact page</a>.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pricing-footer-full">
        <div className="footer-container">
          <div className="footer-logo-section">
            <a href="/" className="footer-logo">ontraport</a>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Sales + CRM</h4>
              <a href="#">Segment and score</a>
              <a href="#">Self-scheduling and calendar automation</a>
              <a href="#">Lead tracking + routing</a>
              <a href="#">Lead management</a>
              <a href="#">Pipelines</a>
            </div>
            <div className="footer-column">
              <h4>Payments</h4>
              <a href="#">Order forms</a>
              <a href="#">Subscriptions</a>
              <a href="#">Invoicing</a>
            </div>
            <div className="footer-column">
              <h4>Marketing automation</h4>
              <a href="#">Campaign automation</a>
              <a href="#">Drip automation</a>
              <a href="#">Tracking + fulfillment</a>
            </div>
            <div className="footer-column">
              <h4>CMS</h4>
              <a href="#">Page generator</a>
              <a href="#">Quick styles</a>
              <a href="#">Site builder</a>
              <a href="#">Forms</a>
              <a href="#">Membership templates</a>
              <a href="#">API</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Support calls</a>
              <a href="#">Done with you</a>
              <a href="#">Knowledgebase</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-secondary-links">
              <div className="footer-link-group">
                <h5>Company</h5>
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookie settings</a>
                <a href="#">Careers</a>
              </div>
              <div className="footer-link-group">
                <h5>Resources</h5>
                <a href="#">Blog</a>
                <a href="#">Certification issued</a>
                <a href="#">State of the market</a>
                <a href="#">All resources</a>
              </div>
              <div className="footer-link-group">
                <h5>Partners</h5>
                <a href="#">Experts</a>
                <a href="#">Developers</a>
              </div>
              <div className="footer-link-group">
                <h5>More</h5>
                <a href="#">Webinars</a>
              </div>
            </div>

            <div className="footer-badges-legal">
              <div className="footer-badges">
                <span className="footer-badge">
                  <ShieldIcon />
                  PCI DSS Level 1
                </span>
                <span className="footer-badge">
                  <ShieldIcon />
                  Privacy Shield Certified
                </span>
              </div>
              <div className="footer-legal">
                <span>© Ontraport 2025</span>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingPage;

