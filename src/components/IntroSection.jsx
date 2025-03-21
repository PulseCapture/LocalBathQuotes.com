// src/components/IntroSection.jsx
import React, { useEffect, useState } from "react";

const IntroSection = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'formester-popup-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://qpmpwkux.formester.com/widget/popup.js";
      script.type = "module";
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true);
        console.log("Formester script loaded successfully.");
      };
      script.onerror = () => console.error("Failed to load Formester script.");
      document.body.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  const openPopup = () => {
    if (isScriptLoaded && window.Formester && typeof window.Formester.openPopup === "function") {
      try {
        window.Formester.openPopup("bd091a21-3221-465d-b833-c3a91910c6b4");
      } catch (error) {
        console.error("Error opening Formester popup:", error);
      }
    } else {
      console.error("Formester is not loaded yet or openPopup function is not available.");
    }
  };

  return (
    <section className="w-full flex justify-center py-12 bg-gray-100">
      <div className="w-full max-w-[90%] bg-white rounded-xl shadow-xl p-10 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-gray-900">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center md:text-left">
              Find <span className="text-[#89B8F6]">Top-Rated Remodelers</span> in Minutes
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Get connected with vetted, top-rated bathroom remodeling professionals 
              who offer free, no-obligation quotes—so you can compare and save!
            </p>

            {/* Step-by-Step Process */}
            <div className="space-y-5">
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">⚡</span>
                <p className="text-lg font-medium">Answer a few quick questions about your remodel</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">🏆</span>
                <p className="text-lg font-medium">Get matched with licensed & insured pros</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">💰</span>
                <p className="text-lg font-medium">Compare multiple free, no obligation quotes</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center md:text-left">
              <button 
                onClick={openPopup}
                className="bg-[#89B8F6] text-white font-semibold py-4 px-8 rounded-xl text-lg md:text-xl shadow-lg hover:bg-[#78a1db] transition duration-300"
                disabled={!isScriptLoaded}
              >
                Compare Free Quotes Now
              </button>
              <p className="text-sm text-gray-600 mt-3">*Takes about 2 minutes.</p>
            </div>
          </div>

          {/* Right Side - Floating Image */}
          <div className="hidden md:flex md:w-1/2 justify-center mt-8 md:mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/bathroom-remodel.WEBP`}
              alt="Luxury Bathroom Remodel"
              className="w-[85%] md:w-[50%] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;