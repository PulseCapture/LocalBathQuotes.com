import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    

      {/* Footer */}
      <footer className="py-6 bg-white text-gray-700 border-t border-gray-200 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
          <span className="text-lg font-bold text-black">
            © <a href="https://www.pulsecapture.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              2024 Pulse Capture, Inc.
            </a>
          </span>
          <span className="text-gray-500">|</span>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://localbathquotes.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://localbathquotes.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              Terms of Use
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://localbathquotes.com/about" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              About Us
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://www.pulsecapture.com/do-not-contact" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              Do Not Sell My Information
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://localbathquotes.com/california-rights" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              California Privacy Rights
            </a>
            <span className="text-gray-500">|</span>
            <a href="https://localbathquotes.com/partners" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold">
              Partners
            </a>
            <span className="text-gray-500">|</span>
            <Link to="/contact-us" className="text-blue-400 hover:underline font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
