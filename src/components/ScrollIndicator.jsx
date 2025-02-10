// src/components/ScrollIndicator.jsx
import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== show) {
        setShow(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#89B8F6] text-white p-2 rounded-full shadow-lg hover:bg-[#89B8F6] transition-colors border border-transparent"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollIndicator;
