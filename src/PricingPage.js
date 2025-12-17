import React, { useState } from 'react';
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
            <a href="#" className="nav-cta">Start free trial</a>
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

          <a href="#" className="hero-cta">Try for free</a>

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
              <button className="sidebar-cta">
                Start free trial
                <span className="cta-subtext">No credit card required</span>
              </button>

              {/* Fine Print */}
              <p className="sidebar-fine-print">
                Billed after your 14-day free trial<br />
                30-day money back guarantee
              </p>
            </div>
          </aside>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <p className="trust-text">Trusted by 100,000+ entrepreneurs and businesses worldwide</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="pricing-footer">
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
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/legal">Legal</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/status">Service Status</a>
        </div>
      </footer>
    </div>
  );
}

export default PricingPage;

