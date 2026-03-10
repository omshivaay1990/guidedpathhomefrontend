import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      text: 'I was facing foreclosure and they helped me sell within 10 days. The process was smooth and they were incredibly professional. Highly recommend!',
      date: 'January 2026'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Denver, CO',
      rating: 5,
      text: 'After inheriting my parents\' house, I didn\'t know what to do. They made everything so easy and gave me a fair cash offer. No hassle at all!',
      date: 'December 2025'
    },
    {
      id: 3,
      name: 'Jennifer Martinez',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'Going through a divorce was tough enough. Selling our house quickly for cash gave us peace of mind. Thank you for making it stress-free.',
      date: 'November 2025'
    },
    {
      id: 4,
      name: 'Robert Williams',
      location: 'Seattle, WA',
      rating: 5,
      text: 'My house needed major repairs and I couldn\'t afford them. They bought it as-is and closed in just one week. Amazing experience!',
      date: 'October 2025'
    },
    {
      id: 5,
      name: 'Emily Davis',
      location: 'Miami, FL',
      rating: 5,
      text: 'Relocating for work meant I needed to sell fast. Got my offer in 24 hours and closed on my schedule. Couldn\'t ask for better service!',
      date: 'September 2025'
    },
    {
      id: 6,
      name: 'David Brown',
      location: 'Chicago, IL',
      rating: 5,
      text: 'Professional, transparent, and fair. They answered all my questions and made selling my house incredibly simple. Five stars!',
      date: 'August 2025'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="animated-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from homeowners we've helped
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="client-avatar">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
