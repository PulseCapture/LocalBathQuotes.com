// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaHammer } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`navbar ${scroll > 10 ? 'scrolled' : ''}`} style={{ backgroundColor: `rgba(10, 90, 160, ${Math.min(0.3 + scroll * 0.005, 0.9)})` }}>
      <div className="navbar-content">
        <Link to="/">
          <img src="/Bath.png" alt="Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/remodel-rates" className="nav-link">Remodel Rates</Link>
          <Link to="/remodel-process" className="nav-link">Remodel Process</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </div>
        {!isMobile && (
          <div className="nav-buttons">
            <button
              onClick={() => window.Formester?.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4")}
              className="quote-button"
            >
              Get Started Now
            </button>
            <a href="tel:18005551234" className="call-button">1-800-555-1234</a>
          </div>
        )}
      </div>
      <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMobile && !mobileMenuOpen && (
        <div className="mobile-icons">
          <FaHammer onClick={() => window.Formester?.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4")} className="icon" />
          <FaPhone onClick={() => window.location.href = 'tel:18881231122'} className="icon" />
        </div>
      )}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/how-it-works" className="nav-link" onClick={toggleMobileMenu}>How It Works</Link>
          <Link to="/remodel-rates" className="nav-link" onClick={toggleMobileMenu}>Remodel Rates</Link>
          <Link to="/remodel-process" className="nav-link" onClick={toggleMobileMenu}>Remodel Process</Link>
          <Link to="/about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact-us" className="nav-link" onClick={toggleMobileMenu}>Contact Us</Link>
          <button
            onClick={() => window.Formester?.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4")}
            className="quote-button"
          >
            Get Started Now
          </button>
          <a href="tel:18881231122" className="call-button">1-888-123-1122</a>
        </div>
      )}
    </nav>
  );
};

export default Header;