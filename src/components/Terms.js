import React, { useEffect } from 'react';
import './Terms.css';

const Terms = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Close modal on ESC key press
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);

      // Cleanup
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terms-modal-overlay" onClick={onClose}>
      <div className="terms-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="terms-close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>
        
        <div className="terms-modal-body">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-effective">Effective Date: January 1, 2026</p>
          
          <div className="terms-intro">
            <p>By accessing or using this website, you agree to the following terms and conditions.</p>
          </div>

          <div className="terms-item">
            <h2>No Agency Relationship</h2>
            <p>
              GuidedPath Home is a real estate investment company that purchases properties directly. 
              We are not acting as licensed real estate agents or brokers unless explicitly stated in writing. 
              Submitting information on this website does not create an agency, fiduciary, or representation relationship.
            </p>
          </div>

          <div className="terms-item">
            <h2>No Obligation Offers</h2>
            <p>
              Any offer provided is based on property details, market data, and due diligence. 
              Submitting your information does not obligate you to accept any offer, and you are encouraged 
              to seek independent advice before making real estate decisions.
            </p>
          </div>

          <div className="terms-item">
            <h2>Accuracy of Information</h2>
            <p>
              You agree to provide accurate and truthful information about your property. We are not responsible 
              for decisions made based on incomplete or inaccurate details provided by users.
            </p>
          </div>

          <div className="terms-item">
            <h2>Intellectual Property</h2>
            <p>
              All website content, including text, branding, logos, and graphics, are the property of GuidedPath Home 
              and may not be copied or reproduced without written permission.
            </p>
          </div>

          <div className="terms-item">
            <h2>Limitation of Liability</h2>
            <p>
              GuidedPath Home is not liable for any direct or indirect damages resulting from the use of this website, 
              reliance on information provided, or inability to access the website.
            </p>
          </div>

          <div className="terms-item">
            <h2>Third-Party Services</h2>
            <p>
              Our website may reference third-party services (such as title companies or closing professionals). 
              We are not responsible for their actions, policies, or services.
            </p>
          </div>

          <div className="terms-item">
            <h2>Modifications</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the website constitutes 
              acceptance of the revised terms.
            </p>
          </div>

          <div className="terms-item">
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Texas.
            </p>
          </div>

          <div className="terms-contact">
            <h2>Contact</h2>
            <div className="contact-details">
              <p><strong>GuidedPath Home</strong></p>
              <p>DFW, Texas</p>
              <p>Email: <a href="mailto:support@GuidedPathHome.com">support@GuidedPathHome.com</a></p>
              <p>Phone: <a href="tel:+14694064509">(469) 406 4509 </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
