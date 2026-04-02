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
import { Helmet, HelmetProvider } from "react-helmet-async";
import './App.css';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  window.openTermsModal = () => setIsTermsOpen(true);
  window.openPrivacyModal = () => setIsPrivacyOpen(true);

  return (
    <HelmetProvider>
      <Helmet>
        {/* ✅ BASIC SEO */}
        <title>Guided Path Home | Sell Your House Fast for Cash</title>

        <meta
          name="description"
          content="Sell your house fast with Guided Path Home. Get a fair cash offer in 24 hours. No agents, no repairs, no hassle."
        />

        <meta
          name="keywords"
          content="sell house fast, cash home buyers, sell my house quickly, guided path home"
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ OPEN GRAPH (SOCIAL SHARING) */}
        <meta property="og:title" content="Guided Path Home" />
        <meta property="og:description" content="Sell your house fast for cash" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guidedpathhome.com" />

        {/* ✅ CANONICAL */}
        <link rel="canonical" href="https://guidedpathhome.com/" />

        {/* ✅ STRUCTURED DATA (VERY IMPORTANT) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Guided Path Home",
            url: "https://guidedpathhome.com",
            description: "Sell your house fast for cash with Guided Path Home",
            areaServed: "Texas"
          })}
        </script>
      </Helmet>

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
    </HelmetProvider>
  );
}

export default App;