import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Sell Your Home With Clarity and Confidence",
      subtitle: "Fair, Data-backed, Offers and Flexible Solutions — designed around your situation.",
      description: "— designed around your situation.",
      buttonText: "Get Your Cash Offer",
      image: "/homepic.jpg",
      logo_image: "/logo8.png",
      logo_text: "/logo_text.png"
    }//,
    // {
    //   id: 2,
    //   title: "Sell Your House Fast",
    //   subtitle: "No Fees, No Commissions",
    //   description: "We handle all the paperwork and close on your timeline",
    //   buttonText: "Start Now",
    //   image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    // },
    // {
    //   id: 3,
    //   title: "Facing Foreclosure?",
    //   subtitle: "We Can Help You Today",
    //   description: "Stop foreclosure and get cash for your property quickly",
    //   buttonText: "Get Help Now",
    //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
    // },
    // {
    //   id: 4,
    //   title: "Inherited a Property?",
    //   subtitle: "Sell Without the Hassle",
    //   description: "Skip the stress and sell your inherited home for cash",
    //   buttonText: "Learn More",
    //   image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
    // }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToForm = () => {
    // Try to scroll to the Full Name input directly
    const nameInput = document.querySelector('#contact-form input[name="name"]');
    if (nameInput) {
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus the input after scroll
      setTimeout(() => {
        nameInput.focus();
      }, 600);
      return;
    }
    // Fallback: scroll to the form section
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on the Full Name field after scrolling
      setTimeout(() => {
        const nameField = document.getElementById('name');
        if (nameField) {
          nameField.focus();
        }
      }, 600);
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
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="slide-overlay"></div>
         
          
          <div className="slide-content">
            <div className="logo-container">
              <img src={slide.logo_image} alt="GuidedPath logo" className="slide-logo slide-logo-highlighted" />
              {/* <br/>
              <img src={slide.logo_text} alt="GuidedPath textHomes" className="slide-logo slide-logo-highlighted" />
              <span className="badge-text-logo-subtitle">Family-Owned Real Estate Solutions</span> */}
            </div>
            <h1 className="slide-title">{slide.title}</h1>
            <h2 className="slide-subtitle">{slide.subtitle}</h2>
            <div className="search-container" style={{ width: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
                <input
                  type="text"
                  placeholder="Enter your property address..."
                  value={searchAddress}
                  onChange={e => setSearchAddress(e.target.value)}
                  className="hero-search-input"
                  style={{
                    height: '35px',
                    fontSize: '0.76rem',
                    padding: '0 40px 0 13px',
                    borderRadius: '16px',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    width: '100%',
                    boxSizing: 'border-box',
                    marginBottom: '10px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <span className="location-icon">
                  📍
                </span>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <button
                    className="start-now-btn"
                    onClick={handleSearch}
                    disabled={!searchAddress.trim()}
                    style={{
                      width: 'auto',
                      padding: '10px 26px',
                      borderRadius: '40px',
                      border: 'none',
                      background: !searchAddress.trim() ? '#bbb' : 'linear-gradient(135deg, #FF7F50 0%, #ff6b3d 100%)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: !searchAddress.trim() ? 'not-allowed' : 'pointer',
                      boxShadow: !searchAddress.trim() ? '0 3px 10px rgba(0, 0, 0, 0.1)' : '0 6px 16px rgba(255, 127, 80, 0.3)',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px'
                    }}
                    onMouseEnter={(e) => {
                      if (searchAddress.trim()) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 10px 22px rgba(255, 127, 80, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (searchAddress.trim()) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 6px 16px rgba(255, 127, 80, 0.3)';
                      }
                    }}
                  >
                    Start now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
