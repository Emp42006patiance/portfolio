import React, { useState } from 'react';
import './DeveloperDashboard.css';

const DeveloperDashboard = () => {
  const [apiKey, setApiKey] = useState('');
  const [isRequested, setIsRequested] = useState(false);
  const [activeTab, setActiveTab] = useState('api');

  const projects = [
    {
      id: 1,
      name: 'SolvBet Platform',
      description: 'Advanced betting platform with real-time analytics',
      status: 'Access Available',
      accessLevel: 'Full',
      documentation: '#'
    },
    {
      id: 2,
      name: '777seaL Casino Tool',
      description: 'Premium casino gaming tool with advanced features',
      status: 'Request Access',
      accessLevel: 'Restricted',
      documentation: '#'
    }
  ];

  const handleRequestApiKey = () => {
    // Simulate API key generation
    const newApiKey = 'SB_' + Math.random().toString(36).substr(2, 16).toUpperCase();
    setApiKey(newApiKey);
    setIsRequested(true);
  };

  return (
    <section className="developer-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Developer Dashboard</h1>
          <p>Manage your API access and explore available tools</p>
        </div>

        <div className="dashboard-tabs">
          <button 
            className={`tab-button ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            API Keys
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Available Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Documentation
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'api' && (
            <div className="api-section">
              <div className="api-card">
                <h3>Your API Access</h3>
                <div className="api-status">
                  <span className={`status-badge ${isRequested ? 'approved' : 'pending'}`}>
                    {isRequested ? 'Active' : 'No API Key'}
                  </span>
                </div>
                
                {!isRequested ? (
                  <div className="api-request">
                    <p>Request an API key to access our developer tools and integrate with our platforms.</p>
                    <button 
                      className="request-btn"
                      onClick={handleRequestApiKey}
                    >
                      Request API Key
                    </button>
                  </div>
                ) : (
                  <div className="api-key-display">
                    <div className="api-key-info">
                      <label>Your API Key:</label>
                      <div className="api-key-value">
                        <code>{apiKey}</code>
                        <button 
                          className="copy-btn"
                          onClick={() => navigator.clipboard.writeText(apiKey)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <div className="api-usage">
                      <h4>Usage Instructions:</h4>
                      <ul>
                        <li>Include this key in the <code>X-API-Key</code> header</li>
                        <li>Rate limit: 100 requests per minute</li>
                        <li>Keep your key secure - do not share publicly</li>
                        <li>Access granted to: SolvBet Platform, 777seaL Tool</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="projects-section">
              <h3>Available Projects</h3>
              <div className="projects-grid">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-header">
                      <h4>{project.name}</h4>
                      <span className={`access-badge ${project.accessLevel.toLowerCase()}`}>
                        {project.accessLevel}
                      </span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-actions">
                      <button className="access-btn">
                        {project.status}
                      </button>
                      <button className="docs-btn">
                        View Docs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="documentation-section">
              <h3>API Documentation</h3>
              <div className="docs-content">
                <div className="docs-card">
                  <h4>Getting Started</h4>
                  <p>Integrate with our platforms using the provided API key.</p>
                  <pre>{`
// Example API Request
fetch('https://api.solvbet.com/v1/data', {
  headers: {
    'X-API-Key': 'your_api_key_here',
    'Content-Type': 'application/json'
  }
})
                  `.trim()}</pre>
                </div>
                
                <div className="docs-card">
                  <h4>Available Endpoints</h4>
                  <ul>
                    <li><strong>GET /v1/user</strong> - Get user profile</li>
                    <li><strong>POST /v1/analytics</strong> - Submit analytics data</li>
                    <li><strong>GET /v1/casino/games</strong> - Available casino games</li>
                    <li><strong>POST /v1/betting/place</strong> - Place bets</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeveloperDashboard;