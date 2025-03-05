// src/components/Footer.jsx
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer = null;
    const threshold = 200; // pixels from the bottom before the extra links reveal

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
      // If we’re within the threshold, start a delay timer to expand
      if (scrollPosition >= documentHeight - threshold) {
        if (!timer) {
          timer = setTimeout(() => {
            setIsExpanded(true);
            timer = null;
          }, 500); // 500ms delay
        }
      } else {
        // If we scroll away before delay, clear timer and collapse
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on mount (in case the page loads scrolled down)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <footer className="py-6 bg-[#] text-gray-700 border-t border-gray-200 text-center transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-4">
        {/* Minimal footer content – always visible */}
        <span className="text-lg font-bold text-black">
          © 2024 BathBehold.com
        </span>
        {/* Extra footer links – these fade in when isExpanded is true */}
        <div
          className={`flex flex-wrap justify-center items-center gap-4 text-sm transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://pulsecapture.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Terms of Use
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            About Us
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com/do-not-sell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Do Not Sell My Information
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com/california-privacy-rights"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            California Privacy Rights
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com/partners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Partners
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Contact Us
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://pulsecapture.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-bold"
          >
            Pulse Capture
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;