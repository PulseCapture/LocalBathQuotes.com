import React, { useEffect } from "react";

const FormesterPopup = () => {
  // Load the Formester popup script if not already present
  useEffect(() => {
    if (!document.querySelector('script[src="https://qpmpwkux.formester.com/widget/popup.js"]')) {
      const script = document.createElement("script");
      script.src = "https://qpmpwkux.formester.com/widget/popup.js";
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Function to open the popup
  const openPopup = () => {
    if (window.Formester && typeof window.Formester.openPopup === "function") {
      window.Formester.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4");
    } else {
      console.error("Formester is not loaded yet.");
    }
  };

  return (
    <div>
      {/* The Formester Popup Web Component */}
      <formester-popup
        id="bd091a21-3221-465d-b833-c3a91910c6b4"
        url="https://qpmpwkux.formester.com/f/bd091a21-3221-465d-b833-c3a91910c6b4"
        width="90%"
        height="95%"
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
