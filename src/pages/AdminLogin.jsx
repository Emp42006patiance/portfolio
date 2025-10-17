import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import Animation from '../components/Animation';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    twoFactor: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate admin authentication
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin-dashboard');
    }, 2000);
  };

  return (
    <section className="admin-login-section">
      <div className="admin-login-container">
        <Animation type="fade" delay={0.2}>
          <div className="admin-login-header">
            <div className="admin-badge">🔒 ADMIN</div>
            <h2>Secure Admin Portal</h2>
            <p>Restricted access to portfolio management</p>
          </div>
        </Animation>

        <Animation type="slide" direction="up" delay={0.4}>
          <form className="admin-login-form" onSubmit={handleAdminLogin}>
            <div className="form-group">
              <label htmlFor="admin-email">Admin Email</label>
              <input
                type="email"
                id="admin-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@portfolior.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-password">Master Password</label>
              <input
                type="password"
                id="admin-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter secure password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-2fa">2FA Code</label>
              <input
                type="text"
                id="admin-2fa"
                name="twoFactor"
                value={formData.twoFactor}
                onChange={handleChange}
                placeholder="Enter 6-digit code"
                maxLength="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className={`admin-login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Authenticating...
                </>
              ) : (
                'Secure Login'
              )}
            </button>
          </form>
        </Animation>

        <Animation type="fade" delay={0.6}>
          <div className="admin-security-notice">
            <h4>🔐 Security Notice</h4>
            <p>This area contains sensitive administrative functions. Ensure you're on a secure connection.</p>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default AdminLogin;