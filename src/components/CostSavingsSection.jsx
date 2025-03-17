import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const MaterialBreakdownSection = () => {
  const navigate = useNavigate(); // Initialize navigate function
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

  // Material cost data
  const materials = [
    { name: "Bathtub", price: "$500 - $3,000" },
    { name: "Shower Installation", price: "$1,200 - $5,500" },
    { name: "Vanity & Sink", price: "$500 - $3,500" },
    { name: "Toilet", price: "$100 - $800" },
    { name: "Flooring", price: "$600 - $4,000" },
    { name: "Lighting & Fixtures", price: "$150 - $1,500" },
    { name: "Cabinetry & Storage", price: "$1,000 - $5,000" },
    { name: "Painting & Wall Finishes", price: "$300 - $2,000" },
    { name: "Plumbing", price: "$500 - $4,000" },
  ];

  return (
    <section className="w-full flex justify-center py-12 bg-gray-100">
      <div className="w-full max-w-[90%] bg-white rounded-xl shadow-xl p-10 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Image */}
          <div className="hidden md:flex md:w-1/2 justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/bathroom-costs.avif`}
              alt="Bathroom Remodel Material Breakdown"
              className="w-[85%] md:w-[50%] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="md:w-1/2 text-gray-900">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center md:text-left">
              Bathroom Remodel Material Breakdown
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Understanding the cost of your remodel starts with knowing what goes into it.
              Here’s a detailed breakdown of the materials needed for a bathroom remodel,
              so you can make informed decisions.
            </p>

            {/* Key Insights */}
            <div className="space-y-5">
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">📋</span>
                <p className="text-lg font-medium">
                  Know exactly what materials go into your remodel
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">🔍</span>
                <p className="text-lg font-medium">
                  Compare material pricing to plan your budget efficiently
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-3xl mr-3">🏡</span>
                <p className="text-lg font-medium">
                  Get expert insights on material selection
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 text-center md:text-left">
              <button
                onClick={() => navigate("/remodel-rates")}
                className="bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl text-lg md:text-xl shadow-lg hover:bg-gray-700 transition duration-300"
              >
                Read More..
              </button>
              <button
                onClick={openPopup} // Trigger pop-up form
                className="bg-[#89B8F6] text-white font-semibold py-4 px-8 rounded-xl text-lg md:text-xl shadow-lg hover:bg-[#78a1db] transition duration-300"
                disabled={!isScriptLoaded}
              >
                Get a Personalized Quote
              </button>
            </div>
          </div>
        </div>

        {/* Material Pricing Breakdown */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-6">
            Average Material Costs for a Bathroom Remodel
          </h3>

          <p className="text-lg text-gray-700 text-center mb-8">
            Below is a breakdown of common bathroom remodel materials and their typical price ranges.
            Prices may vary based on quality, brand, and region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((item, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openPopup} // Trigger pop-up form
              className="bg-[#89B8F6] text-white font-semibold py-4 px-8 rounded-xl text-lg md:text-xl shadow-lg hover:bg-[#78a1db] transition duration-300"
              disabled={!isScriptLoaded}
            >
              Get Connected to Compare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBreakdownSection;