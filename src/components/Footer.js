import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-6 bg-white text-gray-700 border-t border-gray-200 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
          <span className="text-lg font-bold text-black">
            ©{" "}
            <a
              href="https://www.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              2025 BathBehold.com
            </a>
          </span>
          <span className="text-gray-500">|</span>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://privacy.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://terms.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Terms of Use
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://about.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              About Us
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://donotsell.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Do Not Sell My Information
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://california.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              California Privacy Rights
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="https://partners.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Partners
            </a>
            <span className="text-gray-500">|</span>
            <Link to="/contact-us" className="text-blue-400 hover:underline font-bold">
              Contact Us
            </Link>
            <span className="text-gray-500">|</span>
            <a
              href="https://pulse.bathbehold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              Pulse Capture
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
