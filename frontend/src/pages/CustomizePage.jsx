import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const sizes = [
  { id: 'mini', label: 'Mini Delight', chocolates: '10-15', price: '£19.99' },
  { id: 'signature', label: 'Signature', chocolates: '20-25', price: '£34.99' },
  { id: 'grand', label: 'Luxury Grand', chocolates: '30+', price: '£59.99' },
];

const chocolateOptions = [
  'KitKat', 'Snickers', 'Dairy Milk', 'Ferrero Rocher', 'Galaxy', 'Maltesers',
  'Lindt Truffles', 'Thorntons', 'Toblerone', 'Wispa', 'Twix', 'Bounty',
  'Celebrations Mix', 'Flake', 'Freddo', 'Milky Bar',
];

const extras = [
  { id: 'plush', label: 'Plush Toy Bear', price: '+£8' },
  { id: 'roses', label: 'Preserved Luxury Roses', price: '+£12' },
  { id: 'note', label: 'Handwritten Love Note', price: '+£3' },
  { id: 'balloon', label: 'Foil Balloon', price: '+£5' },
  { id: 'candle', label: 'Scented Candle', price: '+£10' },
];

const ribbonColors = ['Gold', 'Blush Pink', 'Ivory', 'Deep Red', 'Champagne', 'Midnight Blue'];

const CustomizePage = () => {
  const [selectedSize, setSelectedSize] = useState('signature');
  const [selectedChocolates, setSelectedChocolates] = useState(['KitKat', 'Ferrero Rocher', 'Galaxy']);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedRibbon, setSelectedRibbon] = useState('Gold');
  const [recipientName, setRecipientName] = useState('');
  const [message, setMessage] = useState('');

  const toggleChocolate = (choc) => {
    setSelectedChocolates(prev =>
      prev.includes(choc) ? prev.filter(c => c !== choc) : [...prev, choc]
    );
  };

  const toggleExtra = (extra) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-tag">Build Your Gift</span>
        <h1 className="page-title">The <span className="gold-text">Customize</span> Studio</h1>
        <p className="page-subtitle">Every detail, your way. Design a gift as unique as the person receiving it.</p>
      </div>

      <div className="customize-layout">
        {/* Left Panel - Configuration */}
        <div className="customize-panel">

          {/* Step 1: Size */}
          <div className="step-block">
            <div className="step-number">01</div>
            <h3 className="step-title">Choose Your Size</h3>
            <div className="size-selector">
              {sizes.map(size => (
                <button
                  key={size.id}
                  className={`size-option ${selectedSize === size.id ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size.id)}
                >
                  <span className="size-name">{size.label}</span>
                  <span className="size-count">{size.chocolates} chocolates</span>
                  <span className="size-price">{size.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Chocolates */}
          <div className="step-block">
            <div className="step-number">02</div>
            <h3 className="step-title">Pick Your Chocolates</h3>
            <p className="step-hint">Select as many as you'd like — we'll balance the bouquet beautifully.</p>
            <div className="choc-grid">
              {chocolateOptions.map(choc => (
                <button
                  key={choc}
                  className={`choc-chip ${selectedChocolates.includes(choc) ? 'active' : ''}`}
                  onClick={() => toggleChocolate(choc)}
                >
                  {choc}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Ribbon */}
          <div className="step-block">
            <div className="step-number">03</div>
            <h3 className="step-title">Select Ribbon Colour</h3>
            <div className="ribbon-selector">
              {ribbonColors.map(ribbon => (
                <button
                  key={ribbon}
                  className={`ribbon-option ${selectedRibbon === ribbon ? 'active' : ''}`}
                  onClick={() => setSelectedRibbon(ribbon)}
                >
                  {ribbon}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Extras */}
          <div className="step-block">
            <div className="step-number">04</div>
            <h3 className="step-title">Add Something Extra</h3>
            <div className="extras-list">
              {extras.map(extra => (
                <button
                  key={extra.id}
                  className={`extra-item ${selectedExtras.includes(extra.id) ? 'active' : ''}`}
                  onClick={() => toggleExtra(extra.id)}
                >
                  <span>{extra.label}</span>
                  <span className="extra-price">{extra.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Personal Message */}
          <div className="step-block">
            <div className="step-number">05</div>
            <h3 className="step-title">Personal Message</h3>
            <input
              className="custom-input"
              placeholder="Recipient's name"
              value={recipientName}
              onChange={e => setRecipientName(e.target.value)}
            />
            <textarea
              className="custom-textarea"
              placeholder="Write your heartfelt message here..."
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Right Panel - Summary */}
        <div className="customize-summary">
          <h3 className="summary-title">Your Bouquet</h3>
          <div className="summary-row">
            <span>Size</span>
            <span>{sizes.find(s => s.id === selectedSize)?.label}</span>
          </div>
          <div className="summary-row">
            <span>Chocolates</span>
            <span>{selectedChocolates.length} selected</span>
          </div>
          <div className="summary-row">
            <span>Ribbon</span>
            <span>{selectedRibbon}</span>
          </div>
          {selectedExtras.length > 0 && (
            <div className="summary-row">
              <span>Extras</span>
              <span>{selectedExtras.length} added</span>
            </div>
          )}
          {recipientName && (
            <div className="summary-row">
              <span>For</span>
              <span>{recipientName}</span>
            </div>
          )}
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Starting from</span>
            <span className="total-price">{sizes.find(s => s.id === selectedSize)?.price}</span>
          </div>
          <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>
            Send My Order
          </Link>
          <p className="summary-note">We'll confirm your order and payment details by message.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;
