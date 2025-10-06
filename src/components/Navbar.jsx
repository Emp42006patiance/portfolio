import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const userName = localStorage.getItem('userName') || 'Developer';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <h2>Portfolior</h2>
          </Link>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/portfolio"
              className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </Link>
          </li>
          
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <span className="nav-welcome">Welcome, {userName}</span>
              </li>
              <li className="nav-item">
                <Link 
                  to="/developer-dashboard"
                  className={`nav-link ${location.pathname === '/developer-dashboard' ? 'active' : ''}`}
                >
                  Dashboard
                </Link>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <Link 
                    to="/admin-dashboard"
                    className={`nav-link admin-link ${location.pathname === '/admin-dashboard' ? 'active' : ''}`}
                  >
                    Admin
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link 
                  to="/login"
                  className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                >
                  Developer Login
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  to="/admin-login"
                  className="nav-link admin-link"
                >
                  Admin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;