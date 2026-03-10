import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: '📝',
      title: 'Tell Us About Your Property',
      description: 'Fill out our simple form or give us a call. No obligation, completely free.'
    },
    {
      id: 2,
      icon: '🏡',
      title: 'We Evaluate Your Home',
      description: 'We review your property details and schedule a quick visit if needed.'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Get Your Cash Offer',
      description: 'Receive a fair, no-obligation cash offer within 24 hours.'
    },
    {
      id: 4,
      icon: '✅',
      title: 'Close On Your Timeline',
      description: 'Choose your closing date. We handle all the paperwork and costs.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Selling your house has never been easier. Just 4 simple steps to cash in hand.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
