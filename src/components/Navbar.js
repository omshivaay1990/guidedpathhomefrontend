import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {isScrolled && (
          <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/hero2.png" alt="GuidedPath Home" className="navbar-logo-img" />
          </div>
        )}

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a href="#benefits" onClick={() => scrollToSection('benefits')} className="nav-link">What we offer?</a>
          <a href="#how-it-works" onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</a>
          <a href="#why-sell-to-us" onClick={() => scrollToSection('why-sell-to-us')} className="nav-link">Why Sell To Us</a>
          <a href="#about-us" onClick={() => scrollToSection('about-us')} className="nav-link">About us</a>
          <a href="#testimonials" onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</a>
          <a href="#faq" onClick={() => scrollToSection('faq')} className="nav-link">FAQ</a>
          {/* <button onClick={() => scrollToSection('contact-form')} className="nav-button">
            Get Cash Offer
          </button> */}
        </div>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
