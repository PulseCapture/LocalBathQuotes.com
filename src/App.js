import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Ensure this is at the top
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home";
import RemodelRates from "./pages/RemodelRates";
import HowItWorks from "./pages/HowItWorks";
import RemodelProcess from "./pages/RemodelProcess";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/contact-us";



function App() {
  const [scroll, setScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      console.log(
        `%c
       
  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

        ✝️   𝐉   𝐄   𝐒   𝐔   𝐒      𝐈   𝐒      𝐊   𝐈   𝐍   𝐆   ✝️  

  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

📖 *Philippians 4:13* – "I can do all things through Christ who strengthens me."  
📖 *John 14:6* – "I am the way, the truth, and the life."  
📖 *Romans 8:28* – "And we know that all things work together for good to them that love God,  
       to them who are the called according to his purpose."

══════════════════════════════════════
✨ ✨ 𝐁 𝐄   𝐁 𝐋 𝐄 𝐒 𝐒 𝐄 𝐃 ! ✨ ✨
══════════════════════════════════════

                ☩  
                ☩  
          ☩☩☩☩☩☩☩☩☩  
                ☩  
                ☩  
                ☩  
                ☩  
       
`,
        "color: #FFD700; font-size: 24px; font-weight: bold; white-space: pre; text-shadow: 2px 2px 4px #000000;"
      );
      hasLogged.current = true;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div>
      <ScrollToTop />
{/* Navigation Bar */}
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all flex items-center justify-between px-5 py-2 ${
    isScrolling ? "bg-blue-700 shadow-lg" : "bg-blue-600"
  }`}
  style={{
    background: `linear-gradient(to bottom, rgba(50, 90, 100, ${
      scroll ? 0.7 - scroll * 0.002 : 0.7
    }), rgba(50, 90, 160, ${scroll ? 0.15 - scroll * 0.001 : 0.15}))`,
    backdropFilter: `blur(${10 - scroll * 0.05}px)`,
    WebkitBackdropFilter: `blur(${10 - scroll * 0.05}px)`,
  }}
>
  {/* Logo */}
  <img src="/Bath.png" alt="Logo" className="h-12 w-auto" />

  {/* Desktop Navigation Links (Hidden on Mobile) */}
  <div className="hidden md:flex space-x-8 items-center">
    <Link to="/" className="text-white hover:text-gray-300 text-lg">Home</Link>
    <Link to="/how-it-works" className="text-white hover:text-gray-300 text-lg">How It Works</Link>
    <Link to="/remodel-rates" className="text-white hover:text-gray-300 text-lg">Remodel Rates</Link>
    <Link to="/remodel-process" className="text-white hover:text-gray-300 text-lg">Remodel Process</Link>
  </div>

  {/* Buttons (Now perfectly aligned) */}
  <div className="hidden md:flex space-x-4 items-center">
    {/* "Get Started Now" Button (Same Size as Call Now Button) */}
    <button
      onClick={() => window.Formester?.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4")}
      className="bg-[#89B8F6] text-white px-7 py-2 rounded-lg shadow-lg hover:bg-[#6faedb] transition flex items-center justify-center"
    >
      Get Started Now
    </button>

    {/* Call Now Button */}
    <a
      href="tel:18005551234"
      className="bg-green-500 bg-opacity-70 text-white px-7 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center"
    >
      1-800-555-1234
    </a>
  </div>

  {/* Mobile Menu Button (Inside <nav> for better alignment) */}
  <div className="md:hidden flex items-center">
    <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
      {mobileMenuOpen ? (
        <FaTimes className="text-white h-8 w-8" />
      ) : (
        <FaBars className="text-white h-8 w-8" />
      )}
    </button>
  </div>
</nav>



{/* Mobile Menu Dropdown */}
{mobileMenuOpen && (
  <div
    className="absolute top-16 left-0 w-full bg-[#89B8F6]/90 shadow-lg z-50 flex flex-col items-center space-y-4 py-6 transition-all duration-300 border-t border-white"
  >
    {/* Navigation Links */}
    <Link to="/" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      Home
    </Link>
    <Link to="/how-it-works" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      How It Works
    </Link>
    <Link to="/remodel-rates" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      Remodel Rates
    </Link>
    <Link to="/remodel-process" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      Remodel Process
    </Link>
    <Link to="/about" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      About
    </Link>
    <Link to="/contact-us" className="text-white hover:text-gray-300 text-lg block w-full text-center py-2" onClick={toggleMobileMenu}>
      Contact Us
    </Link>

    {/* Buttons Section with Borders */}
    <div className="flex flex-col items-center space-y-3 w-full px-6 mt-4">
      {/* Get Started Now Button */}
      <button
        onClick={() => window.Formester?.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4")}
        className="bg-[#6faedb] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#5b9bcf] transition flex items-center justify-center w-full border border-white"
      >
        Get Started Now
      </button>

      {/* Call Now Button */}
      <a
        href="tel:18005551234"
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition flex items-center justify-center w-full border border-white"
      >
        1-800-555-1234
      </a>
    </div>
  </div>
)}

      {/* Main Content */}
      <div className="bg-gray-300 w-full px-[5px] pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remodel-rates" element={<RemodelRates />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/remodel-process" element={<RemodelProcess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
