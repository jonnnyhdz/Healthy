import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-button">
          <FaArrowUp size={30} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
