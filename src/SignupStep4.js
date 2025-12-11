import React from 'react';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SignupStep4({ onResendEmail, onChangeEmail, onVerified }) {
  return (
    <div className="confirmation-content">
      {/* Success badge */}
      <div className="confirmation-success">
        <CheckIcon />
        <span>Verification email sent!</span>
      </div>

      {/* Help section */}
      <div className="confirmation-help-card">
        <h3 className="confirmation-help-title">Not seeing the email?</h3>
        <p className="confirmation-help-text">Check your spam folder, or try one of these options:</p>
        
        <div className="confirmation-actions">
          <button className="confirmation-btn" onClick={onResendEmail}>
            Resend the email
          </button>
          <button className="confirmation-btn-secondary" onClick={onChangeEmail}>
            Use a different email address
          </button>
        </div>
        
        {/* Demo: Simulate clicking verification link */}
        <button className="confirmation-demo-btn" onClick={onVerified}>
          Demo: I verified my email →
        </button>
      </div>
    </div>
  );
}

export default SignupStep4;
