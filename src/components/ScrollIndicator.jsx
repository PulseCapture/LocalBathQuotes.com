// src/components/ScrollIndicator.jsx
import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#89B8F6] text-white p-2 rounded-full shadow-lg hover:bg-[#6faedb] transition-colors border border-white"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollIndicator;
