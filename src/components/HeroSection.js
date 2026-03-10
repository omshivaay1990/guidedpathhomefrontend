import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State for search bar
  const [searchAddress, setSearchAddress] = useState("");

  // Handler for search button
  const handleSearch = () => {
    // Custom event to communicate with ContactForm
    const event = new CustomEvent("addressSearch", { detail: searchAddress });
    window.dispatchEvent(event);
    scrollToForm();
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <img src="/hero2.png" />
          <h1 className="hero-title">Sells Your Home With Clarity and Confidence</h1>
          <h2 className="hero-subtitle">Fair, data-backed offers and flexible solutions — designed around your situation.</h2>
          <p className="hero-description">An honest, guided selling process designed around your needs</p>
          {/* Search Bar */}
          
            <input
              type="text"
              placeholder="Enter your property address or location..."
              value={searchAddress}
              onChange={e => setSearchAddress(e.target.value)}
              className="hero-search-input"
            />
            <button
              className="hero-search-button"
              onClick={handleSearch}
              disabled={!searchAddress.trim()}
            >
              Search
            </button>
          
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default HeroSection;
