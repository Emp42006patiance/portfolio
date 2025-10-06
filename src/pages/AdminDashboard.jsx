import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import Animation from '../components/Animation';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    apiKeysIssued: 0,
    pendingRequests: 0,
    activeDevelopers: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalBlogs: 12,
        apiKeysIssued: 45,
        pendingRequests: 3,
        activeDevelopers: 28
      });
      
      setRecentActivity([
        { id: 1, user: 'john_doe', action: 'API Key Request', time: '2 mins ago', status: 'pending' },
        { id: 2, user: 'sarah_dev', action: 'Blog Comment', time: '1 hour ago', status: 'approved' },
        { id: 3, user: 'mike_tech', action: 'Project Inquiry', time: '3 hours ago', status: 'pending' },
        { id: 4, user: 'alex_coder', action: 'API Key Generated', time: '5 hours ago', status: 'completed' }
      ]);
    }, 1000);
  }, []);

  const quickActions = [
    { icon: '📝', label: 'Write Blog', path: '/admin-blog' },
    { icon: '🚀', label: 'Manage Projects', path: '/admin-projects' },
    { icon: '🔑', label: 'API Requests', path: '/api-requests' },
    { icon: '📊', label: 'View Analytics', path: '/analytics' }
  ];

  return (
    <section className="admin-dashboard">
      <div className="admin-container">
        {/* Header */}
        <Animation type="fade" delay={0.2}>
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <p>Welcome back! Here's what's happening with your portfolio.</p>
          </div>
        </Animation>

        {/* Stats Grid */}
        <Animation type="fade" delay={0.4}>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-info">
                <h3>{stats.totalBlogs}</h3>
                <p>Total Blog Posts</p>
              </div>
              <div className="stat-trend up">+2 this week</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔑</div>
              <div className="stat-info">
                <h3>{stats.apiKeysIssued}</h3>
                <p>API Keys Issued</p>
              </div>
              <div className="stat-trend up">+5 today</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⏳</div>
              <div className="stat-info">
                <h3>{stats.pendingRequests}</h3>
                <p>Pending Requests</p>
              </div>
              <div className="stat-trend down">Needs attention</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <h3>{stats.activeDevelopers}</h3>
                <p>Active Developers</p>
              </div>
              <div className="stat-trend up">+3 new</div>
            </div>
          </div>
        </Animation>

        {/* Quick Actions */}
        <Animation type="fade" delay={0.6}>
          <div className="quick-actions-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions-grid">
              {quickActions.map((action, index) => (
                <div key={index} className="action-card">
                  <div className="action-icon">{action.icon}</div>
                  <h3>{action.label}</h3>
                  <button className="action-btn">Go →</button>
                </div>
              ))}
            </div>
          </div>
        </Animation>

        {/* Recent Activity */}
        <Animation type="fade" delay={0.8}>
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0).toUpperCase()}
                  </div>
                  <div className="activity-details">
                    <div className="activity-main">
                      <strong>{activity.user}</strong> {activity.action}
                    </div>
                    <div className="activity-meta">
                      <span className="activity-time">{activity.time}</span>
                      <span className={`activity-status ${activity.status}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                  <button className="activity-action">View</button>
                </div>
              ))}
            </div>
          </div>
        </Animation>

        {/* System Status */}
        <Animation type="fade" delay={1.0}>
          <div className="system-status">
            <h2>System Status</h2>
            <div className="status-grid">
              <div className="status-item online">
                <div className="status-indicator"></div>
                <span>Website</span>
                <small>Operational</small>
              </div>
              <div className="status-item online">
                <div className="status-indicator"></div>
                <span>API Server</span>
                <small>Running</small>
              </div>
              <div className="status-item online">
                <div className="status-indicator"></div>
                <span>Database</span>
                <small>Stable</small>
              </div>
              <div className="status-item warning">
                <div className="status-indicator"></div>
                <span>Backups</span>
                <small>Pending</small>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};

export default AdminDashboard;