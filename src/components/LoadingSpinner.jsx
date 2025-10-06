import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ type = 'default', size = 'medium', text = 'Loading...' }) => {
  return (
    <div className={`loading-container ${type} ${size}`}>
      {type === 'default' && (
        <div className="spinner">
          <div className="spinner-ring"></div>
        </div>
      )}
      
      {type === 'dots' && (
        <div className="dots-loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      
      {type === 'pulse' && (
        <div className="pulse-loader">
          <div className="pulse-circle"></div>
        </div>
      )}
      
      {text && <span className="loading-text">{text}</span>}
    </div>
  );
};

export const PageLoader = () => (
  <div className="page-loader">
    <LoadingSpinner type="pulse" size="large" text="Loading Portfolior..." />
  </div>
);

export const ButtonLoader = () => (
  <div className="button-loader">
    <div className="button-spinner"></div>
  </div>
);

export default LoadingSpinner;