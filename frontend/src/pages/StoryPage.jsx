import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  { icon: '🍫', title: 'Handcrafted', desc: 'Every bouquet is assembled by hand, one chocolate at a time, with care and attention to detail that machines simply cannot replicate.' },
  { icon: '🎀', title: 'Made with Love', desc: 'We only create when we receive an order. No mass production. Every gift is personal, fresh, and made to delight one specific person.' },
  { icon: '✨', title: 'Premium Quality', desc: 'We source only recognizable, beloved chocolate brands — because the person receiving your gift deserves nothing but the best.' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'We offer next-day delivery across the UK. Your heartfelt moment shouldn\'t wait.' },
];

const StoryPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero story-hero">
        <span className="page-tag">Our Story</span>
        <h1 className="page-title">Born from <span className="gold-text">Sweetness</span></h1>
        <p className="page-subtitle" style={{ maxWidth: '650px' }}>
          ChocoHub didn't start as a business. It started as a gift — a hand-tied bouquet of chocolates given to a mother on her birthday. The reaction changed everything.
        </p>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="story-text">
          <h2>The Beginning</h2>
          <p>
            We started ChocoHub because we believed that gifts should feel personal—not like they were grabbed off a supermarket shelf. When our founder created the first chocolate bouquet for a family member, they didn't expect the reaction to be so overwhelming. People wanted one for themselves. For their loved ones. For every occasion.
          </p>
          <p>
            That's when ChocoHub was born. A small, passionate team of creators who believe that the right gift, at the right moment, can mean absolutely everything.
          </p>
        </div>
        <div className="story-visual">
          <div className="story-card-glass">
            <div className="story-quote">"A gift wrapped in chocolate is a gift wrapped in joy."</div>
            <div className="story-quote-author">— ChocoHub Founder</div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="values-section">
        <h2 className="section-heading">What We Stand For</h2>
        <div className="values-grid">
          {values.map((value, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <h2 className="section-heading">How We Create</h2>
        <div className="process-steps">
          {[
            { step: '01', title: 'You Order', desc: 'Choose from our collection or fully customize your bouquet.' },
            { step: '02', title: 'We Create', desc: 'Our team hand-assembles your bouquet with the chocolates and extras you chose.' },
            { step: '03', title: 'We Wrap', desc: 'Painstakingly wrapped in premium kraft paper and tied with your chosen ribbon.' },
            { step: '04', title: 'They Smile', desc: 'Delivered to your door or your lucky recipient\'s address, next day.' },
          ].map((item) => (
            <div key={item.step} className="process-step">
              <div className="process-number">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="shop-cta-banner">
        <h2>Ready to create something beautiful?</h2>
        <p>Every bouquet starts with a single idea. Let's make yours unforgettable.</p>
        <Link to="/shop" className="btn-primary">Shop the Collection</Link>
      </div>
    </div>
  );
};

export default StoryPage;
