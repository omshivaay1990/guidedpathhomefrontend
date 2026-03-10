import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      id: 1,
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparent, honest dealings in every interaction'
    },
    {
      id: 2,
      icon: '💎',
      title: 'Transparency',
      description: 'Clear communication backed by real market data'
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Care for People',
      description: 'Understanding your unique needs and timeline'
    },
    {
      id: 4,
      icon: '🏡',
      title: 'Local Expertise',
      description: 'Deep knowledge of your neighborhood and property value'
    }
  ];

  return (
    <section id="about-us" className="about-us">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-section">
            <div className="about-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">ABOUT GuidedPath Home</span>
            </div>
            
            <h2 className="about-title">
              A Family-Run Company Built on Trust
            </h2>
            
            <div className="about-description">
              <p>
                GuidedPath Home is a <strong>family-run real estate company</strong> led by a 
                husband-and-wife team who believe that how business is done matters.
              </p>
              
              <p>
                We work closely together to help homeowners understand their selling options with 
                clarity and respect. We take the time to understand your neighborhood, your property's 
                value, and what matters most to you.
              </p>
              
              <p>
                Our approach is rooted in integrity, transparency, and care for people. Every offer 
                we present is clear, thoughtfully prepared, and backed by real market data. We walk 
                you through the details so you can make an informed decision with confidence.
              </p>
              
              {/* <div className="about-highlight">
                <div className="highlight-line"></div>
                <p className="highlight-text">
                  No hidden fees. No surprises. Just honest solutions and clear guidance.
                </p>
              </div> */}
            </div>

            <div className="values-grid">
              {values.map((value) => (
                <div key={value.id} className="value-card">
                  {/* <div className="value-icon">{value.icon}</div> */}
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual-section">
            <div className="image-stack">
              <div className="stack-image stack-image-1">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" 
                  alt="Beautiful modern home"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="stack-image stack-image-2">
                <img 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern house exterior"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="stack-image stack-image-3">
                <img 
                  src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop" 
                  alt="Cozy home interior"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>
            <div className="decorative-circle circle-4"></div>
            <div className="decorative-circle circle-5"></div>
            <div className="decorative-circle circle-6"></div>
            <div className="decorative-circle circle-7"></div>
            <div className="decorative-circle circle-8"></div>
            <div className="decorative-circle circle-9"></div>
            <div className="decorative-circle circle-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
