import React, { useState } from 'react';

const faqs = [
  { q: 'How do I place an order?', a: 'Use our Customize Studio to build your bouquet, then contact us via WhatsApp or the form below. We\'ll confirm everything within 2 hours.' },
  { q: 'Do you offer next-day delivery?', a: 'Yes! Orders placed before 2 PM qualify for next-day delivery across most of the UK. Contact us for specific area availability.' },
  { q: 'Can I choose my own chocolates?', a: 'Absolutely. Head to the Customize page and select exactly which chocolates you want. We\'ll accommodate any preferences.' },
  { q: 'Can I send directly to the recipient?', a: 'Yes. Simply provide their delivery address at checkout and we\'ll take care of the rest — beautifully packaged and ready to wow.' },
  { q: 'Do you cater for dietary requirements?', a: 'We can work with dairy-free, vegan, and nut-free options on request. Mention it in your order message.' },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', orderType: 'enquiry' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to a backend
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-tag">Get in Touch</span>
        <h1 className="page-title">Let's <span className="gold-text">Talk</span> Chocolate</h1>
        <p className="page-subtitle">We'd love to hear from you. Order enquiries, custom requests, or just to say hello.</p>
      </div>

      <div className="contact-layout">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>Fastest Response</h3>
            <a
              className="whatsapp-btn"
              href="https://wa.me/447000000000?text=Hi%20ChocoHub%2C%20I%27d%20love%20to%20order%20a%20chocolate%20bouquet!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> Message on WhatsApp
            </a>
            <p className="contact-note">We typically reply within 30 minutes during business hours.</p>
          </div>

          <div className="contact-card">
            <h3>Business Hours</h3>
            <div className="hours-list">
              <div className="hour-row"><span>Monday – Friday</span><span>9am – 7pm</span></div>
              <div className="hour-row"><span>Saturday</span><span>10am – 6pm</span></div>
              <div className="hour-row"><span>Sunday</span><span>11am – 4pm</span></div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Email Us</h3>
            <a href="mailto:hello@chocohub.co.uk" className="contact-email">hello@chocohub.co.uk</a>
            <p className="contact-note">We aim to respond to all emails within 24 hours.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for getting in touch. We'll get back to you very soon!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="custom-input"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Enquiry Type</label>
                <select
                  className="custom-input custom-select"
                  value={formData.orderType}
                  onChange={e => setFormData({ ...formData, orderType: e.target.value })}
                >
                  <option value="enquiry">General Enquiry</option>
                  <option value="order">Place an Order</option>
                  <option value="custom">Custom Bouquet</option>
                  <option value="corporate">Corporate / Bulk Order</option>
                  <option value="delivery">Delivery Question</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  className="custom-textarea"
                  placeholder="Tell us about the person you're buying for, the occasion, and any special requests..."
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
