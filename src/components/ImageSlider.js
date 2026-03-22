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
      logo_image: "/logo3.png",
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToForm = () => {
    // Try to scroll to the Full Name input directly
    const nameInput = document.querySelector('#contact-form input[name="name"]');
    if (nameInput) {
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // On mobile, also focus the input after scroll
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          nameInput.focus();
        }, 600);
      }
      return;
    }
    // Fallback: scroll to the form section
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            <>
              <img src={slide.logo_image} alt="GuidedPath logo" className="slide-logo slide-logo-highlighted" style={{width: '50%'}} />
              <br />
              <img src={slide.logo_text} alt="GuidedPath textHomes" className="slide-logo slide-logo-highlighted" style={{width: '50%'}} />
            </>
            <h1 className="slide-title">{slide.title}</h1>
            <br></br>
            <h2 className="slide-subtitle">{slide.subtitle}</h2>
            <br></br>
            <br></br>
            {/* <p className="slide-description">{slide.description}</p> */}
            {/* <button className="slide-button" onClick={scrollToForm}>
              {slide.buttonText}
            </button> */}
            {/* Add gap before search input on mobile */}
            <span className="slider-search-mobile-gap" style={{ display: 'none' }}></span>
            <div style={{ width: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'center', marginTop: '18px' }}>
              <div style={{ position: 'relative', maxWidth: '350px', width: '100%' }}>
                <input
                  type="text"
                  placeholder="Enter your property address..."
                  value={searchAddress}
                  onChange={e => setSearchAddress(e.target.value)}
                  className="hero-search-input"
                  style={{
                    height: '38px',
                    fontSize: '0.8rem',
                    padding: '0 12px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    width: '100%',
                    boxSizing: 'border-box',
                    marginBottom: '12px'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <button
                    className="start-now-btn"
                    onClick={handleSearch}
                    disabled={!searchAddress.trim()}
                    style={{
                      width: 'auto',
                      padding: '8px 24px',
                      borderRadius: '50px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #FF7F50 0%, #ff6b3d 100%)',
                      color: '#fff',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: !searchAddress.trim() ? 'not-allowed' : 'pointer',
                      boxShadow: '0 8px 20px rgba(255, 127, 80, 0.2)',
                      transition: 'all 0.3s ease',
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
