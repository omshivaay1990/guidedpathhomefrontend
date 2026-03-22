import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ isOpen, onClose }) => {
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
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="privacy-close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>
        
        <div className="privacy-modal-body">
          <h1 className="privacy-title">Privacy Policy for GuidedPath Home</h1>
          <p className="privacy-effective">Effective Date: January 1, 2026</p>
          
          <div className="privacy-intro">
            <p>
              GuidedPath Home ("we," "our," or "us") respects your privacy and is committed to protecting 
              the information you provide through our website and landing pages. This Privacy Policy explains 
              how we collect, use, and safeguard your information when you visit our site or submit your 
              details to request information about selling your property.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address and details</li>
              <li>Any additional information you submit through forms or messages</li>
            </ul>
            <p>
              We may also collect limited technical data automatically, such as browser type, device type, 
              IP address, and pages visited, to improve website performance and user experience.
            </p>
          </div>

          <div className="privacy-item">
            <h2>How We Use Your Information</h2>
            <p>The information you provide is used to:</p>
            <ul>
              <li>Respond to your property inquiry</li>
              <li>Evaluate your property details and prepare potential offer options</li>
              <li>Contact you via call, email, or text message regarding your request</li>
              <li>Improve our website, services, and communication processes</li>
              <li>Maintain internal records and comply with legal obligations</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </div>

          <div className="privacy-item">
            <h2>SMS, Calls, and Email Communications</h2>
            <p>
              By submitting your information on our website, you consent to be contacted by GuidedPath Home 
              via phone call, email, and text message regarding your property inquiry. Message and data rates 
              may apply. Consent is not required to receive an offer or to sell your property. You may opt out 
              of text communications at any time by replying STOP.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Information Sharing</h2>
            <p>We may share your information only when necessary to:</p>
            <ul>
              <li>Provide requested services related to your property inquiry</li>
              <li>Work with trusted service providers who assist in business operations (e.g., CRM platforms, communication tools)</li>
              <li>Comply with legal requirements or protect our legal rights</li>
            </ul>
            <p>
              All third-party partners are required to maintain the confidentiality and security of your information.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Data Security</h2>
            <p>
              We implement reasonable administrative and technical safeguards to protect your personal information 
              from unauthorized access, disclosure, or misuse. However, no method of internet transmission or 
              storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies or similar technologies to enhance user experience, analyze site traffic, 
              and improve functionality. You may disable cookies through your browser settings if preferred.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Your Choices and Rights</h2>
            <p>
              You may request to review, update, or delete your personal information by contacting us using the 
              details below. You may also opt out of marketing communications at any time.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of those external sites.
            </p>
          </div>

          <div className="privacy-item">
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal 
              requirements. Updates will be posted on this page with a revised effective date.
            </p>
          </div>

          <div className="privacy-contact">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <p>If you have any questions about this Privacy Policy or how your information is handled, please contact:</p>
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

export default PrivacyPolicy;
