import React, { useState } from 'react';
import './ContactForm.css';
import Animation from './Animation';
import { validateEmail, validateNotEmpty, showValidationError, clearValidationError } from '../utils/validation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    clearValidationError(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    let hasErrors = false;
    
    if (!validateNotEmpty(formData.name)) {
      showValidationError('name', 'Name is required');
      hasErrors = true;
    }
    
    if (!validateEmail(formData.email)) {
      showValidationError('email', 'Please enter a valid email');
      hasErrors = true;
    }
    
    if (!validateNotEmpty(formData.subject)) {
      showValidationError('subject', 'Subject is required');
      hasErrors = true;
    }
    
    if (!validateNotEmpty(formData.message)) {
      showValidationError('message', 'Message is required');
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Animation type="fade">
        <div className="contact-success">
          <div className="success-icon">✅</div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      </Animation>
    );
  }

  return (
    <Animation type="fade" delay={0.2}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => clearValidationError('name')}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => clearValidationError('email')}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => clearValidationError('subject')}
            placeholder="Project Inquiry"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => clearValidationError('message')}
            placeholder="Tell me about your project..."
            rows="6"
            required
          />
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </Animation>
  );
};

export default ContactForm;