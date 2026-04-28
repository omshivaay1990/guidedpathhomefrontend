import React, { useState, useEffect } from 'react';
import './ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_address: '',
    property_condition: '',
    timeline: '',
    message: '',
    additional_info: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Listen for addressSearch event from HeroSection
  useEffect(() => {
    const handleAddressSearch = (e) => {
      setFormData(prev => ({ ...prev, property_address: e.detail }));
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
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle 422 validation errors
        if (response.status === 422) {
          try {
            const errorData = await response.json();
            // Extract validation error message
            if (errorData.detail) {
              if (Array.isArray(errorData.detail)) {
                // If detail is an array of errors
                const errorMessages = errorData.detail.map(err => 
                  `${err.loc?.[1] || 'Field'}: ${err.msg}`
                ).join('; ');
                setErrorMessage(errorMessages);
              } else if (typeof errorData.detail === 'string') {
                // If detail is a string
                setErrorMessage(errorData.detail);
              }
            } else {
              setErrorMessage('Validation error: Please check your input and try again.');
            }
          } catch (parseError) {
            setErrorMessage('Validation error: Please check your input and try again.');
          }
        } else {
          setErrorMessage('Failed to submit form. Please try again.');
        }
        setSubmitStatus('error');
        return;
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      setSubmitStatus('success');
      setErrorMessage('');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          property_address: '',
          property_condition: '',
          timeline: '',
          message: '',
          additional_info: ''
        });
        setSubmitStatus(null);
        setErrorMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
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
              <a href="tel:+14694064509" className="contact-link">
                <span className="contact-icon">📞</span>
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
                <label htmlFor="property_address">Property Address *</label>
                <input
                  type="text"
                  id="property_address"
                  name="property_address"
                  value={formData.property_address}
                  onChange={handleChange}
                  required
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="property_condition">Property Condition</label>
                  <select
                    id="property_condition"
                    name="property_condition"
                    value={formData.property_condition}
                    onChange={handleChange}
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
                  <label htmlFor="timeline">When to Sell?</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
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
                <label htmlFor="additional_info">Additional Details (Optional)</label>
                <textarea
                  id="additional_info"
                  name="additional_info"
                  value={formData.additional_info}
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
                  ✗ {errorMessage || 'There was an error submitting your request. Please try again or contact us directly.'}
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
