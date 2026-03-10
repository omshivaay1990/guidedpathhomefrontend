import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How quickly can you buy my house?',
      answer: 'We can close in as little as 7 days, or on your timeline. You choose the closing date that works best for you. We understand that every situation is unique and we\'re flexible to meet your needs.'
    },
    {
      question: 'Do I need to make repairs before selling?',
      answer: 'No! We buy houses in ANY condition. Whether your house needs minor updates or major repairs, we\'ll buy it as-is. You don\'t need to fix anything, clean, or even stage the property.'
    },
    {
      question: 'Are there any fees or commissions?',
      answer: 'Zero fees, zero commissions, zero closing costs. The cash offer we make is exactly what you\'ll receive. We cover all closing costs and there are no hidden fees or surprises.'
    },
    {
      question: 'How do you determine the offer price?',
      answer: 'We evaluate your property based on its location, condition, size, and current market values. Our offers are fair and competitive. We\'ll explain how we arrived at the offer and answer any questions you have.'
    },
    {
      question: 'What types of properties do you buy?',
      answer: 'We buy all types of residential properties including single-family homes, condos, townhouses, multi-family properties, and vacant land. Any condition, any situation, any location.'
    },
    {
      question: 'Is there any obligation after getting an offer?',
      answer: 'Absolutely not! Our cash offers are completely no-obligation. You can take your time to think it over, get advice, or explore other options. There\'s no pressure whatsoever.'
    },
    {
      question: 'What if I\'m behind on mortgage payments?',
      answer: 'We can help! We work with homeowners facing foreclosure or who are behind on payments. We\'ll work with your lender to resolve the situation and help you move forward.'
    },
    {
      question: 'How is this different from listing with a realtor?',
      answer: 'Selling to us means no repairs, no showings, no open houses, no waiting months for buyers, no agent commissions (typically 6%), and no uncertainty. Plus, we close on your schedule with guaranteed cash.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers. Find everything you need to know below.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Still Have Questions?</h3>
          <p>We're here to help! Reach out anytime and we'll be happy to answer.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
