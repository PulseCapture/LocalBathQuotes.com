import React, { useEffect, useState } from "react";
import { FaPhone, FaClipboardList } from "react-icons/fa";

const FormesterPopup = () => {
  const [popupHeight, setPopupHeight] = useState("90vh");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updatePopupHeight = () => {
      const viewportHeight = window.innerHeight;

      if (window.innerWidth < 768) {
        setPopupHeight(`${viewportHeight * 0.95}px`);
        setIsMobile(true);
      } else {
        setPopupHeight("85vh");
        setIsMobile(false);
      }
    };

    updatePopupHeight();
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
      <formester-popup
        id="bd091a21-3221-465d-b833-c3a91910c6b4"
        url="https://qpmpwkux.formester.com/f/a875d46e-4aa1-481b-bd45-77d4c1e3d5b1"
        style={{
          minHeight: popupHeight,
          maxHeight: popupHeight,
          overflow: "hidden",
        }}
      ></formester-popup>

      {!isMobile ? (
        <button
          onClick={openPopup}
          className="bg-[#89B8F6] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#68A7E0] transition mt-4"
        >
          Get Started Now
        </button>
      ) : (
        <div className="mobile-icons">
          <FaClipboardList onClick={openPopup} className="icon" />
          <FaPhone onClick={() => window.location.href = 'tel:18881231122'} className="icon" />
        </div>
      )}
    </div>
  );
};

export default FormesterPopup;