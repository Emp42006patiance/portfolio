import React, { useState } from 'react';
import './ProjectCard.css';
import Animation from './Animation';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Animation type="fade">
      <div 
        className={`project-card ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image">
          <div className="image-placeholder">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <span>{project.title}</span>
            )}
          </div>
          <div className="project-overlay">
            <div className="project-actions">
              {project.liveLink && (
                <button className="action-btn live-demo">
                  <span>🌐</span> Live Demo
                </button>
              )}
              {project.apiAccess && (
                <button className="action-btn api-access">
                  <span>🔑</span> API Access
                </button>
              )}
            </div>
          </div>
          <div className="project-status">
            <span className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-tag"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="project-footer">
            <div className="project-links">
              <button className="project-btn primary">
                View Details
              </button>
              {project.githubLink && (
                <button className="project-btn secondary">
                  <span>💻</span> Code
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-glow"></div>
      </div>
    </Animation>
  );
};

export default ProjectCard;