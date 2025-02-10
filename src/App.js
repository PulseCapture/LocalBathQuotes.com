import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RemodelRates from "./pages/RemodelRates";
import HowItWorks from "./pages/HowItWorks";
import RemodelProcess from "./pages/RemodelProcess";
import Footer from "./components/Footer"; // Adjust path if needed

function App() {
  const [scroll, setScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav
        className={`navbar fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 transition-all ${
          isScrolling ? "bg-blue-700 shadow-lg" : "bg-blue-600"
        } ${menuOpen ? "menu-open" : ""}`}
      >
        {/* Left - Logo */}
        <img src="/Bath.png" alt="Logo" className="logo" />

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/how-it-works" className="nav-item" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/remodel-rates" className="nav-item" onClick={() => setMenuOpen(false)}>
            Remodel Rates
          </Link>
          <Link to="/remodel-process" className="nav-item" onClick={() => setMenuOpen(false)}>
            Remodel Process
          </Link>
        </div>

        {/* Right - Buttons */}
        <div className="nav-buttons">
          <button className="quote-button">Get a Quote</button>
          <button className="call-button">Call Now</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remodel-rates" element={<RemodelRates />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/remodel-process" element={<RemodelProcess />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
