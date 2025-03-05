import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { useFooterReveal } from "../hooks/useFooterReveal";

const Footer = () => {
  const footerRef = useRef(null);
  const isRevealed = useFooterReveal();

  useEffect(() => {
    if (isRevealed && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isRevealed]);

  return (
    <footer ref={footerRef} className="py-6 bg-gray-700 text-gray-700 border-t border-gray-200 text-center transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 px-4">
        <span className="text-lg font-bold text-black">
          © 2024 BathBehold.com
        </span>
        <Fade triggerOnce>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            {/* Footer Links */}
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
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;