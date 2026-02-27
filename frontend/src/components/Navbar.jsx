import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed-nav glass-panel">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          <span className="gold-text">Choco</span>Hub
        </Link>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link-active' : ''}>Collections</NavLink>
          <NavLink to="/customize" className={({ isActive }) => isActive ? 'nav-link-active' : ''}>Customize</NavLink>
          <NavLink to="/story" className={({ isActive }) => isActive ? 'nav-link-active' : ''}>Our Story</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-active' : ''}>Contact</NavLink>
        </div>
        <div className="nav-actions">
          <Link to="/contact" className="premium-btn nav-btn">Order Now</Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
