import React from 'react';
import './Portfolio.css';
import ProjectCard from '../components/ProjectCard';
import Animation from '../components/Animation';
import { portfolioData } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <Animation type="fade" delay={0.2}>
          <h2 className="section-title">My Portfolio</h2>
        </Animation>
        
        <Animation type="fade" delay={0.4}>
          <p className="section-subtitle">Projects that showcase my skills and passion for innovation</p>
        </Animation>
        
        <div className="portfolio-filters">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Web Apps</button>
          <button className="filter-btn">API Services</button>
          <button className="filter-btn">Mobile</button>
        </div>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <Animation 
              key={project.id} 
              type="fade" 
              delay={0.2 + (index * 0.1)}
            >
              <ProjectCard project={project} />
            </Animation>
          ))}
        </div>
        
        <Animation type="fade" delay={0.8}>
          <div className="portfolio-cta">
            <h3>Ready to Build Something Amazing?</h3>
            <p>Let's collaborate on your next project</p>
            <button className="cta-btn">Start a Project</button>
          </div>
        </Animation>
        <Animation type="fade" delay={1.0}>
  <div className="contact-section">
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>Interested in working together? Let's talk about your project.</p>
      <ContactForm />
    </div>
  </div>
</Animation>
      </div>
    </section>
  );
};

export default Portfolio;