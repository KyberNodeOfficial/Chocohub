import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Signature Bouquet',
    subtitle: 'The Classic',
    price: '£34.99',
    description: 'Our bestselling chocolate bouquet featuring a handpicked selection of beloved British favourites — KitKat, Snickers, Dairy Milk, and more — elegantly wrapped in kraft paper and tied with a satin ribbon.',
    tag: 'BESTSELLER',
    items: ['KitKat', 'Snickers', 'Dairy Milk', 'Ferrero Rocher', 'Galaxy', 'Jaffa Cakes'],
    gradient: 'from-amber-900 to-yellow-900',
  },
  {
    id: 2,
    name: 'Luxury Grand',
    subtitle: 'The Statement',
    price: '£59.99',
    description: 'A show-stopping arrangement of 30+ premium chocolates including Lindt truffles and Ferrero Rocher at the heart. Perfect for birthdays, anniversaries, or simply saying "you matter."',
    tag: 'LUXURY',
    items: ['Lindt Truffles', 'Ferrero Rocher', 'Thorntons', 'Toblerone', 'Maltesers', 'Celebrations'],
    gradient: 'from-stone-900 to-amber-950',
  },
  {
    id: 3,
    name: 'Mini Delight',
    subtitle: 'The Sweet Gesture',
    price: '£19.99',
    description: 'A charming smaller bouquet, ideal for "just because" moments. Wrapped with the same care and precision as our larger gifts — thoughtfulness in a compact package.',
    tag: 'GIFT READY',
    items: ['Milky Bar', 'Freddo', 'Maltesers', 'Flake', 'Wispa', 'Buttons'],
    gradient: 'from-red-950 to-pink-950',
  },
  {
    id: 4,
    name: 'Fully Bespoke',
    subtitle: 'Your Vision',
    price: 'From £44.99',
    description: 'Choose every chocolate, every ribbon, every wrapper colour. Add plush toys, a personalized note, or preserved roses. An entirely unique gift built around the person who means the world.',
    tag: 'PERSONALIZED',
    items: ['Your choice of chocolates', 'Custom wrapping', 'Add plush toys', 'Handwritten note', 'Preserved roses', 'Custom ribbon'],
    gradient: 'from-purple-950 to-indigo-950',
  },
];

const ShopPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <span className="page-tag">The Collection</span>
        <h1 className="page-title">Chocolate <span className="gold-text">Bouquets</span></h1>
        <p className="page-subtitle">Every bouquet is handcrafted with love. Choose your perfect gift below, or build something entirely your own.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card-inner">
              <div className="product-header">
                <span className="product-tag">{product.tag}</span>
                <div className="product-price">{product.price}</div>
              </div>
              <h2 className="product-name">{product.name}</h2>
              <span className="product-subtitle">{product.subtitle}</span>
              <p className="product-description">{product.description}</p>
              <ul className="product-items">
                {product.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="product-actions">
                <Link to="/customize" className="btn-primary">Customize & Order</Link>
                <Link to="/contact" className="btn-ghost">Enquire</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-cta-banner">
        <h2>Not sure which to choose?</h2>
        <p>Let us help you build the perfect gift. Chat with us directly.</p>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </div>
    </div>
  );
};

export default ShopPage;
