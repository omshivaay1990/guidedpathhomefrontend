import React, { useState, useEffect } from 'react';
import './ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyCondition: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Listen for addressSearch event from HeroSection
  useEffect(() => {
    const handleAddressSearch = (e) => {
      setFormData(prev => ({ ...prev, address: e.detail }));
    };
    window.addEventListener('addressSearch', handleAddressSearch);
    return () => window.removeEventListener('addressSearch', handleAddressSearch);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare payload as per API requirements
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property_address: formData.address,
      property_condition: formData.propertyCondition,
      timeline: formData.timeline,
      additional_info: formData.message // You can adjust this if you want a different field
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            propertyCondition: '',
            timeline: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-left">
            <h2 className="form-main-title">Get Your Cash Offer Today</h2>
            <p className="form-main-subtitle">
              Fill out the form and receive a fair, no-obligation cash offer within 24 hours
            </p>

            <div className="form-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>No Obligation</h4>
                  <p>Free consultation with zero commitment</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>Quick Response</h4>
                  <p>Get your offer within 24 hours</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>100% Confidential</h4>
                  <p>Your information is secure with us</p>
                </div>
              </div>
            </div>

            <div className="contact-methods">
              <h3>Prefer to Talk?</h3>
              <a href="tel:+19453078911" className="contact-link">
                <span className="contact-icon">📞</span>
                (945) 307-8911 <br />
                (469) 406 4509
              </a>
              <a href="mailto:support@GuidedPathHome.com" className="contact-link">
                <span className="contact-icon">✉️</span>
                support@GuidedPathHome.com
              </a>
            </div>
          </div>

          <div className="form-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="contact number with code (e.g., +1 234 567 8901)"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Property Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="propertyCondition">Property Condition *</label>
                  <select
                    id="propertyCondition"
                    name="propertyCondition"
                    value={formData.propertyCondition}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="needs-work">Needs Work</option>
                    <option value="major-repairs">Major Repairs Needed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">When to Sell? *</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As Soon As Possible</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your property or situation..."
                />
              </div>

              <div className="consent-note">
                <strong>Important Notice:</strong> By submitting this form, you agree to be contacted by GuidedPath Home via call, email, and text regarding your property inquiry. Message and data rates may apply. Consent is not required to receive an offer or sell your property. You may opt out at any time by replying STOP.
              </div>


              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Cash Offer Now'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! We'll contact you within 24 hours with your cash offer.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">
                  Sorry, there was a problem submitting your request. Please try again later.
                </div>
              )}

              <p className="form-privacy">
                By submitting this form, you agree to our <a href="#terms" onClick={(e) => { e.preventDefault(); window.openTermsModal && window.openTermsModal(); }}>Terms of Service</a> and <a href="#privacy" onClick={(e) => { e.preventDefault(); window.openPrivacyModal && window.openPrivacyModal(); }}>Privacy Policy</a>. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
