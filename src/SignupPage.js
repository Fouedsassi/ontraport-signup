import React, { useState } from 'react';
import './SignupPage.css';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';
import SignupStep3 from './SignupStep3';
import SignupStep4 from './SignupStep4';
import SignupStep5 from './SignupStep5';

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleEmailSignup = () => {
    setCurrentStep(2);
  };

  const handleStep2Submit = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleStep3Submit = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    // Here you would typically send the data to your API
    console.log('Form submitted:', { ...formData, ...data });
    setCurrentStep(4);
  };

  const handleResendEmail = () => {
    alert('Verification email resent! (This is a demo)');
  };

  const handleChangeEmail = () => {
    setCurrentStep(2);
  };

  const handleGoToStep5 = () => {
    setCurrentStep(5);
  };

  const handleStep5Submit = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    console.log('Onboarding complete:', { ...formData, ...data });
    alert('Welcome to Ontraport! (This is a demo)');
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="signup-page">
      {/* Decorative background elements */}
      <div className="bg-gradient-orb bg-orb-1"></div>
      <div className="bg-gradient-orb bg-orb-2"></div>
      
      {/* Logo */}
      <header className="signup-header">
        <div className="logo">
          <span className="logo-text" onClick={() => setCurrentStep(1)} style={{ cursor: 'pointer' }}>
            ontraport
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="signup-main">
        <div className={`signup-content ${currentStep === 4 ? 'signup-content-wide' : ''}`}>
          {/* Headlines */}
          <div className="headline-section">
            <h1 className={`signup-headline ${currentStep === 4 ? 'signup-headline-wrap' : ''}`}>
              {currentStep === 3 && "Let's create your password"}
              {currentStep === 4 && <>Activate your free trial<br />check your inbox!</>}
              {currentStep === 5 && "Last step!"}
              {(currentStep === 1 || currentStep === 2) && "Try Ontraport free for 14 days"}
            </h1>
            {(currentStep === 1 || currentStep === 2) && (
              <p className="signup-subheadline">
                No credit card or commitment required
              </p>
            )}
            {currentStep === 5 && (
              <p className="signup-subheadline">
                Just a few more bits of info so we can<br />give you the best experience
              </p>
            )}
          </div>

          {/* Step Content with Animation */}
          <div className={`step-container step-${currentStep}`}>
            {currentStep === 1 && (
              <SignupStep1 onEmailSignup={handleEmailSignup} />
            )}
            {currentStep === 2 && (
              <SignupStep2 onSubmit={handleStep2Submit} onBack={handleBack} />
            )}
            {currentStep === 3 && (
              <SignupStep3 onSubmit={handleStep3Submit} onBack={handleBack} />
            )}
            {currentStep === 4 && (
              <SignupStep4 onResendEmail={handleResendEmail} onChangeEmail={handleChangeEmail} onVerified={handleGoToStep5} />
            )}
            {currentStep === 5 && (
              <SignupStep5 onSubmit={handleStep5Submit} />
            )}
          </div>

          {/* Terms of Service - hide on steps 4 and 5 */}
          {currentStep !== 4 && currentStep !== 5 && (
            <p className="tos-text">
              By creating an account you agree to Ontraport's{' '}
              <a href="/terms" className="tos-link">Terms of Service</a>
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="signup-footer">
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

export default SignupPage;
