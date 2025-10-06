import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Animation from '../components/Animation';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', formData.fullName);
      navigate('/developer-dashboard');
    }, 2000);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <Animation type="fade" delay={0.2}>
          <div className="register-header">
            <h2>Developer Registration</h2>
            <p>Join our developer community and get API access</p>
          </div>
        </Animation>

        <Animation type="slide" direction="up" delay={0.4}>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company (Optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  minLength="6"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="form-checkbox">
              <label>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a> *
              </label>
            </div>

            <button 
              type="submit" 
              className={`register-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Creating Account...
                </>
              ) : (
                'Create Developer Account'
              )}
            </button>
          </form>
        </Animation>

        <Animation type="fade" delay={0.6}>
          <div className="register-footer">
            <p>
              Already have an account?{' '}
              <button 
                onClick={handleLoginRedirect}
                className="login-link"
              >
                Sign in here
              </button>
            </p>
          </div>
        </Animation>

        <Animation type="fade" delay={0.8}>
          <div className="registration-benefits">
            <h4>Why Register as a Developer?</h4>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">🔑</span>
                <h5>API Access</h5>
                <p>Get instant access to our powerful APIs</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📊</span>
                <h5>Analytics</h5>
                <p>Track your API usage and performance</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🚀</span>
                <h5>Early Access</h5>
                <p>Be the first to try new features</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💬</span>
                <h5>Support</h5>
                <p>Priority technical support</p>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default Register;