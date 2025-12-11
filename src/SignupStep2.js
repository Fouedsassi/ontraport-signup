import React, { useState } from 'react';

function SignupStep2({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email;

  return (
    <div className="signup-card signup-card-wide">
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="form-field">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            autoComplete="given-name"
          />
        </div>

        {/* Last Name */}
        <div className="form-field">
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            autoComplete="family-name"
          />
        </div>

        {/* Business Email */}
        <div className="form-field">
          <input
            type="email"
            name="email"
            placeholder="Business email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            autoComplete="email"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`btn-primary ${!isFormValid ? 'btn-disabled' : ''}`}
          disabled={!isFormValid}
        >
          <span>Start free trial</span>
        </button>

        {/* Login Link */}
        <p className="login-text">
          Already have an account? <a href="/login" className="login-link">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default SignupStep2;

