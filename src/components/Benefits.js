import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: '⚡',
      title: 'Fast Closing',
      description: 'Close in as little as 7 days or on your schedule. You choose the timeline.'
    },
    {
      id: 2,
      icon: '💵',
      title: 'Cash Offers',
      description: 'Get a fair, all-cash offer. No financing contingencies or delays.'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'No Repairs Needed',
      description: 'Sell your house as-is. We buy homes in any condition.'
    },
    {
      id: 4,
      icon: '📄',
      title: 'No Fees or Commissions',
      description: 'Zero agent commissions, zero closing costs. What we offer is what you get.'
    },
    {
      id: 5,
      icon: '🏠',
      title: 'Solutions Tailored for your needs',
      description: 'Relocation, Inheritance, Time Constraint, Divorce, Foreclosure, or simply want to skip the uncertainty in market conditions and unreasonable buyer contigencies that can delay your sales. '
    },
    {
      id: 6,
      icon: '🤝',
      title: 'Professional Service',
      description: 'Transparent process with experienced professionals guiding you every step.'
    }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-decorative-bg">
        <div className="decorative-shape shape-1"></div>
        <div className="decorative-shape shape-2"></div>
        <div className="decorative-shape shape-3"></div>
        <div className="decorative-shape shape-4"></div>
        <div className="decorative-shape shape-5"></div>
        <div className="decorative-shape shape-6"></div>
        <div className="animated-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="section-header">
          {/* <div className="section-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">PREMIUM BENEFITS</span>
          </div> */}
          <h2 className="section-title">What we offer?</h2>
          <p className="section-subtitle">
            We make selling your house simple, fast, and stress-free with our comprehensive solutions
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="benefit-card" data-index={index}>
              <div className="benefit-card-inner">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="icon-glow"></div>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <div className="benefit-card-shine"></div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="situations-section">
          <h3 className="situations-title">We Buy Houses In Any Situation</h3>
          <div className="situations-grid">
            {situations.map((situation, index) => (
              <div key={index} className="situation-tag">
                <span className="check-icon">✓</span>
                {situation}
              </div>
            ))}
          </div>
        </div> */}

        
      </div>
    </section>
  );
};

export default Benefits;
