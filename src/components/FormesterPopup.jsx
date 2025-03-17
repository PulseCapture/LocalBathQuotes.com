// src/components/FormesterPopup.jsx
import React, { useEffect, useState } from "react";

const FormesterPopup = () => {
  const [popupHeight, setPopupHeight] = useState("90vh");

  useEffect(() => {
    // Function to adjust height dynamically
    const updatePopupHeight = () => {
      const viewportHeight = window.innerHeight;

      if (window.innerWidth < 768) {
        // For mobile devices, adjust height to be slightly smaller
        setPopupHeight(`${viewportHeight * 0.95}px`);
      } else {
        // On desktop, maintain the original size
        setPopupHeight("85vh");
      }
    };

    updatePopupHeight(); // Set initial height

    window.addEventListener("resize", updatePopupHeight);
    return () => {
      window.removeEventListener("resize", updatePopupHeight);
    };
  }, []);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://qpmpwkux.formester.com/widget/popup.js"]');

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://qpmpwkux.formester.com/widget/popup.js";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openPopup = () => {
    if (window.Formester && typeof window.Formester.openPopup === "function") {
      window.Formester.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4");
    } else {
      console.error("Formester is not loaded yet.");
    }
  };

  return (
    <div>
      {/* The Formester Popup Web Component with Responsive Height */}
      <formester-popup
        id="bd091a21-3221-465d-b833-c3a91910c6b4"
        url="https://qpmpwkux.formester.com/f/Sf1nS1Rk7bpk"
        style={{
          minHeight: popupHeight,
          maxHeight: popupHeight,
          overflow: "hidden",
        }}
      ></formester-popup>

      {/* Button to trigger the popup */}
      <button
        onClick={openPopup}
        className="bg-[#89B8F6] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#68A7E0] transition mt-4"
      >
        Get Started Now
      </button>
    </div>
  );
};

export default FormesterPopup;
