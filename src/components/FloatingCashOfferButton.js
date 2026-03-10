import React, { useState, useEffect } from 'react';
import './FloatingCashOfferButton.css';

const FloatingCashOfferButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      className={`floating-cash-offer-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToContactForm}
      aria-label="Get My Cash Offer"
    >
      <span className="floating-btn-icon">💰</span>
      <span className="floating-btn-text">Get My Cash Offer</span>
    </button>
  );
};

export default FloatingCashOfferButton;
