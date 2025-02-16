import React, { useEffect } from "react";

const FormesterPopup = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://qpmpwkux.formester.com/widget/popup.js"]')) {
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
    <button
      onClick={openPopup}
      className="bg-[#89B8F6] text-white px-7 py-2 rounded-lg shadow-lg hover:bg-[#6faedb] transition inline-block flex items-center justify-center"
    >
      Get Started Now
    </button>
  );
};

export default FormesterPopup;
