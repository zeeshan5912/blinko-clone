// src/components/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// import './ScrollToTop.css';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log('Current pathname:', location.pathname); // Debug: Log pathname

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const shouldShowButton = location.pathname !== '##';

  return (
    <div
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible && shouldShowButton ? 'flex' : 'none' }}
    >
      <FontAwesomeIcon icon={faAngleUp} className="scroll-to-top-icon" />
      
    </div>
  );
};

export default ScrollToTop;
