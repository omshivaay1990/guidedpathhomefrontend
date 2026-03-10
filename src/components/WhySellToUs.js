import React from 'react';
import './WhySellToUs.css';

const WhySellToUs = () => {
  const features = [
    {
      id: 1,
      icon: '💎',
      title: 'Transparent offers with no hidden surprises',
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Flexible solutions tailored to your situation',
    },
    {
      id: 3,
      icon: '🏘️',
      title: 'Local market insight and real human support',
    },
    {
      id: 4,
      icon: '✨',
      title: 'A process designed around you, not sales tactics',
    }
  ];

  return (
    <section id="why-sell-to-us" className="why-sell-to-us">
      <div className="why-sell-container">
        <div className="why-sell-content">
          <div className="why-sell-text">
            <h2 className="why-sell-main-title">A Better Way to Sell Your Home</h2>
            <p className="why-sell-description">
              Selling a home can feel overwhelming — especially when timelines, repairs, and uncertainty start piling up. 
              <strong> GuidedPath Home</strong> exists to simplify that process.
            </p>
            <p className="why-sell-description">
              We focus on clear communication, fair solutions, and a respectful experience from start to finish. 
              Whether your property needs work, you're facing a time-sensitive situation, or you simply want a 
              straightforward option, we help you understand your choices and move forward confidently.
            </p>
            <p className="why-sell-tagline">
              No pressure. No confusion. Just a clear path forward.
            </p>

            <div className="why-sell-features">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <p className="feature-text">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-sell-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                alt="Beautiful home"
                className="main-image"
              />
              <div className="image-overlay"></div>
              <div className="trust-badge">
                <span className="badge-icon">🤝</span>
                <div className="badge-content">
                  <p className="badge-title">Trusted Partners</p>
                  <p className="badge-subtitle">Local & Reliable</p>
                </div>
              </div>
            </div>
            
            <div className="small-images-grid">
              <div className="small-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop" 
                  alt="Happy homeowner"
                  className="small-image"
                />
              </div>
              <div className="small-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern house"
                  className="small-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySellToUs;
