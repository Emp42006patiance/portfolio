import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Animation from '../components/Animation';
import { validateEmail, validatePassword, showValidationError, clearValidationError } from '../utils/validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearValidationError('email');
    clearValidationError('password');
    
    // Validate form
    let hasErrors = false;
    
    if (!validateEmail(email)) {
      showValidationError('email', 'Please enter a valid email address');
      hasErrors = true;
    }
    
    if (!validatePassword(password)) {
      showValidationError('password', 'Password must be at least 6 characters');
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      navigate('/developer-dashboard');
    }, 1500);
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    clearValidationError('email');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    clearValidationError('password');
  };

  const handleForgotPassword = () => {
    alert('Password reset feature coming soon! In the meantime, please contact support.');
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <Animation type="fade" delay={0.2}>
          <div className="login-header">
            <h2>Developer Login</h2>
            <p>Access your API keys and developer dashboard</p>
          </div>
        </Animation>

        <Animation type="slide" direction="up" delay={0.4}>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => clearValidationError('email')}
                placeholder="developer@example.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => clearValidationError('password')}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <button 
                type="button"
                onClick={handleForgotPassword}
                className="forgot-password"
                disabled={isLoading}
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Signing In...
                </>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>
        </Animation>

        <Animation type="fade" delay={0.6}>
          <div className="login-footer">
            <p>
              Don't have a developer account?{' '}
              <button 
                onClick={handleRegisterRedirect}
                className="register-link"
                disabled={isLoading}
              >
                Register here
              </button>
            </p>
          </div>
        </Animation>

        <Animation type="fade" delay={0.8}>
          <div className="login-features">
            <h4>Developer Benefits:</h4>
            <ul>
              <li>🔑 Generate API Keys</li>
              <li>📊 Access Analytics</li>
              <li>🚀 Integrate with SolvBet</li>
              <li>🎯 Use 777seaL Casino Tools</li>
              <li>📚 Comprehensive Documentation</li>
              <li>💬 Priority Support</li>
            </ul>
          </div>
        </Animation>

        {/* Demo Credentials Hint */}
        <Animation type="fade" delay={1.0}>
          <div className="demo-hint">
            <p><strong>Demo:</strong> Any email and password (6+ chars) will work</p>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default Login;