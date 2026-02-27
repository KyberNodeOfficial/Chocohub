import React from 'react';

const Footer = () => {
  return (
    <footer className="static-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="gold-text">ChocoHub</h2>
          <p>Delivering premium chocolate experiences worldwide.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Shop</h3>
            <a href="#">Bouquets</a>
            <a href="#">Truffles</a>
            <a href="#">Corporate Gifts</a>
          </div>
          <div className="link-column">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className="link-column">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footer-massive-text">
        <h1>CHOCOHUB</h1>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ChocoHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
