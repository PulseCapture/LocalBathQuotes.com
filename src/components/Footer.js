import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useFooterReveal } from "../hooks/useFooterReveal";

const Footer = () => {
  const isRevealed = useFooterReveal();

  return (
    <footer className="py-6 bg-gray-700 text-gray-700 border-t border-gray-200 text-center transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-4">
        <span className="text-lg font-bold text-black">
          © 2025 LocalBathQuotes.com
        </span>
        <Fade triggerOnce fraction={0.1} cascade>
          <div className={`flex flex-wrap justify-center items-center gap-4 text-sm ${isRevealed ? "opacity-100" : "opacity-0"}`}>
            <Link to="/privacy-policy" className="text-blue-400 hover:underline font-bold">
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/terms-of-use" className="text-blue-400 hover:underline font-bold">
              Terms of Use
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/about" className="text-blue-400 hover:underline font-bold">
              About Us
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/do-not-sell" className="text-blue-400 hover:underline font-bold">
              Do Not Sell My Information
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/california-privacy-rights" className="text-blue-400 hover:underline font-bold">
              California Privacy Rights
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/partners" className="text-blue-400 hover:underline font-bold">
              Partners
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/contact-us" className="text-blue-400 hover:underline font-bold">
              Contact Us
            </Link>
            <span className="text-gray-500">|</span>
            <a href="https://pulsecapture.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              Pulse Capture
            </a>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;