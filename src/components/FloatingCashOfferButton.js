import React, { useState, useEffect } from 'react';
import './FloatingCashOfferButton.css';

const FloatingCashOfferButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const formEl = document.getElementById('contact-form');
    if (!formEl) return;

    // Hide floating button when the form is near the middle of the viewport
    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { rootMargin: '-30% 0px -30% 0px', threshold: 0 }
    );
    observer.observe(formEl);
    return () => observer.disconnect();
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on the Full Name field after scrolling
      setTimeout(() => {
        const nameField = document.getElementById('name');
        if (nameField) {
          nameField.focus();
        }
      }, 600);
    }
  };

  const show = isVisible && !formInView;

  return (
    <>
      <div className={`floating-tooltip ${show ? 'visible' : ''}`}>
        Click here to get your cash offer
      </div>
      <button
        className={`floating-cash-offer-btn ${show ? 'visible' : ''}`}
        onClick={scrollToContactForm}
        aria-label="Get My Cash Offer"
      >
        <span className="floating-btn-icon">💰</span>
        <span className="floating-btn-text">Get My Cash Offer</span>
      </button>
    </>
  );
};

export default FloatingCashOfferButton;
