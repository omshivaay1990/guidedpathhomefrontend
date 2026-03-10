import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import HowItWorks from './components/HowItWorks';
import WhySellToUs from './components/WhySellToUs';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import FloatingCashOfferButton from './components/FloatingCashOfferButton';
import './App.css';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Make openTermsModal and openPrivacyModal available globally
  window.openTermsModal = () => setIsTermsOpen(true);
  window.openPrivacyModal = () => setIsPrivacyOpen(true);

  return (
    <div className="App" id="home">
      <Navbar />
      <ImageSlider />
      <Benefits />
      <HowItWorks />
      <WhySellToUs />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCashOfferButton />
      <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
