import React from 'react';
import './Animation.css';

export const FadeIn = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <div 
      className="fade-in"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export const SlideIn = ({ children, direction = 'left', delay = 0 }) => {
  return (
    <div 
      className={`slide-in slide-in-${direction}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export const Bounce = ({ children }) => {
  return (
    <div className="bounce">
      {children}
    </div>
  );
};

export const Pulse = ({ children }) => {
  return (
    <div className="pulse">
      {children}
    </div>
  );
};

export const Typewriter = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

const Animation = ({ children, type = 'fade', ...props }) => {
  const AnimationComponent = {
    fade: FadeIn,
    slide: SlideIn,
    bounce: Bounce,
    pulse: Pulse,
  }[type] || FadeIn;

  return <AnimationComponent {...props}>{children}</AnimationComponent>;
};

export default Animation;