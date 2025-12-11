import React, { useState } from 'react';

function SignupStep3({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSubmit(formData);
  };

  const isFormValid = formData.password && formData.confirmPassword && formData.password.length >= 8;

  return (
    <div className="signup-card signup-card-form">
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Create Password */}
        <div className="form-field">
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            autoComplete="new-password"
          />
        </div>

        {/* Confirm Password */}
        <div className="form-field">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            autoComplete="new-password"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className={`btn-primary ${!isFormValid ? 'btn-disabled' : ''}`}
          disabled={!isFormValid}
        >
          <span>Next</span>
        </button>
      </form>
    </div>
  );
}

export default SignupStep3;

