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
      subtitle: "Fair, data-backed offers and flexible solutions",
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
            <h2 className="slide-subtitle">{slide.subtitle}</h2>
            <p className="slide-description">{slide.description}</p>
            {/* <button className="slide-button" onClick={scrollToForm}>
              {slide.buttonText}
            </button> */}
            <div style={{ width: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'center', marginTop: '18px' }}>
              <div style={{ position: 'relative', maxWidth: '350px', width: '100%' }}>
                <input
                  type="text"
                  placeholder="Enter your property location here..."
                  value={searchAddress}
                  onChange={e => setSearchAddress(e.target.value)}
                  className="hero-search-input"
                  style={{
                    height: '38px',
                    fontSize: '0.8rem',
                    padding: '0 44px 0 12px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  onClick={handleSearch}
                  disabled={!searchAddress.trim()}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '8px',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: searchAddress.trim() ? 'pointer' : 'not-allowed',
                    opacity: searchAddress.trim() ? 1 : 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '30px',
                    width: '30px'
                  }}
                  aria-label="Search"
                >
                  <img src="/search1.png" alt="Search" style={{ width: '24px', height: '24px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
