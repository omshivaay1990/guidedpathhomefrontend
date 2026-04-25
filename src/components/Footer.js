import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/icon_footer.png" alt="GuidedPath Home" className="footer-logo-img" />
              </div>
              <span className="footer-brand-name">GuidedPath Home</span>
              <p className="footer-description">
                We buy houses in any condition across DFW, Texas. Receive a fair, no-obligation cash offer within 24 hours. Fast closings, transparent process, and stress-free experience guaranteed.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61579440149807" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/guidedpathhome/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>What We Offer</a></li>
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
                <li><a href="#why-sell-to-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-sell-to-us'); }}>Why Sell To Us</a></li>
                <li><a href="#about-us" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
                <li><a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Fast Cash Offers</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>No Repairs Needed</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Foreclosure Assistance</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Inherited Property</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Divorce Situations</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Quick Closings</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Get In Touch</h3>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Serving DFW Metroplex<br/>Dallas-Fort Worth, Texas</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+14694064509">(469) 406 4509</a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:support@GuidedPathHome.com">support@GuidedPathHome.com</a>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <span>Available 7 Days a Week<br/>Mon-Sat: 8am - 8pm | Sun: 10am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} GuidedPath Home. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); window.openPrivacyModal && window.openPrivacyModal(); }}>Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); window.openTermsModal && window.openTermsModal(); }}>Terms of Service</a>
              <span className="separator">|</span>
              <a href="#terms" onClick={(e) => { e.preventDefault(); window.openTermsModal && window.openTermsModal(); }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
