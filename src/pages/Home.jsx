import React from 'react';
import './Home.css';

const Home = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    // Show the placeholder
    const placeholder = e.target.nextSibling;
    if (placeholder) {
      placeholder.style.display = 'block';
    }
  };

  const handleViewWork = () => {
    // Navigate to portfolio section
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetAPIAccess = () => {
    // Navigate to login section
    document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Portfolior</span>
          </h1>
          <p className="hero-subtitle">
            Innovative Developer & Creator of Amazing Web Experiences
          </p>
          <p className="hero-description">
            I build cutting-edge applications that solve real-world problems. 
            Explore my work and discover how we can create something amazing together.
            Specialized in React.js, Node.js, and modern web technologies.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleViewWork}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={handleGetAPIAccess}>
              Get API Access
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="photo-container">
            <div className="photo-frame">
              <img 
                src="../src/assets/images/jackson.png" 
                alt="Jackson - Full Stack Developer" 
                className="developer-photo"
                onError={handleImageError}
              />
              <div className="photo-placeholder" style={{display: 'block'}}>
                <div className="placeholder-content">
                  <span className="placeholder-icon">👨‍💻</span>
                  <span className="placeholder-text">Jackson's Photo</span>
                  <small>Professional Developer</small>
                </div>
              </div>
            </div>
            <div className="photo-glow"></div>
            
            {/* Floating Tech Icons */}
            <div className="floating-tech">
              <div className="tech-icon react">⚛️</div>
              <div className="tech-icon node">🟢</div>
              <div className="tech-icon js">🟨</div>
              <div className="tech-icon css">🎨</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span className="scroll-text">Scroll to Explore</span>
      </div>

      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default Home;