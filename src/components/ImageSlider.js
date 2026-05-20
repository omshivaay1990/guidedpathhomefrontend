import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import AddressFields from "./Address";
import LuxuryHeroSlide from './LuxuryHeroSlide';

const ImageSlider = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // {
    //   id: 1,
    //   title: "Sell Your Home With Clarity and Confidence",
    //   subtitle: "Fair, Data-backed, Offers and Flexible Solutions — designed around your situation.",
    //   description: "— designed around your situation.",
    //   buttonText: "Get Your Cash Offer",
    //   image: "/homepic.jpg",
    //   logo_image: "/hero2.png",
    //   logo_text: "/logo_text.png"
    // },
    // {
    //   id: 2,
    //   type: "split",
    //   titleSmall1: "Sell Your Home",
    //   titleSmall1b: "With",
    //   titleLarge1: "Clarity",
    //   titleSmall2: "and",
    //   titleLarge2: "Confidence",
    //   subtitle: "Fair, Data-backed, Offers and Flexible Solutions — designed around your situation.",
    //   image: "/homepic.jpg",
    //   logo_image: "/guidedpathlogo.png",
    // },
    {
      id: 3,
      type: "luxury",
      image: "/homepic.jpg",
    },
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

  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

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
      {slides.map((slide, index) =>
        slide.type === 'luxury' ? (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <LuxuryHeroSlide
              isActive={index === currentSlide}
              image={slide.image}
              searchAddress={searchAddress}
              setSearchAddress={setSearchAddress}
              onSearch={handleSearch}
            />
          </div>
        ) : slide.type === 'split' ? (
          <div
            key={slide.id}
            className={`slide slide-split ${index === currentSlide ? 'active' : ''}`}
          >
              {/* Left content panel */}
            <div className="slide-split-left">
              <div className="split-logo-container">
                <img src={slide.logo_image} alt="GuidedPath Homes logo" className="split-logo" />
              </div>
              <h1 className="split-title">
                <span className="split-title-small">{slide.titleSmall1}</span>
                <span className="split-title-small">{slide.titleSmall1b}</span>
                <div className="split-title-clarity-row">
                  <span className="split-title-large-coral">{slide.titleLarge1}</span>
                  <span className="split-title-and">{slide.titleSmall2}</span>
                </div>
                <span className="split-title-large-teal">{slide.titleLarge2}</span>
              </h1>
              <p className="split-subtitle">{slide.subtitle}</p>
              <div className="split-search-wrap">
                <div style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
                  <AddressFields onAddressChange={setSearchAddress} />
                  <span className="split-location-icon">📍</span>
                  <div style={{ marginTop: '12px' }}>
                    <button
                      className="split-submit-btn"
                      onClick={handleSearch}
                      disabled={!searchAddress.trim()}
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
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image panel */}
            <div className="slide-split-right">
              <div className="split-circle-bg-shape" aria-hidden="true"></div>
              <div className="split-image-wrapper">
                <img src={slide.image} alt="Beautiful dream home" className="split-house-img" />
              </div>
            </div>
          </div>
        ) : (
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
              </div>
              <h1 className="slide-title">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <div className="search-container" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
                  <AddressFields onAddressChange={setSearchAddress} />
                  <span className="location-icon">
                    📍
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '12px' }}>
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
        )
      )}
      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button className="slider-nav prev" onClick={goToPrev} aria-label="Previous slide">&#8249;</button>
          <button className="slider-nav next" onClick={goToNext} aria-label="Next slide">&#8250;</button>
        </>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
