// src/components/HeroSection.jsx
import React from "react";
import FormesterPopup from "./FormesterPopup";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[60vh] md:min-h-[72vh] flex flex-col items-center justify-center relative m-0 p-0 -mt-3"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/bgimage.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transform: "translateY(-20px)", // Moves the hero section up
      }}
    >
      {/* Tint Overlay (this adds a subtle dark tint to the background) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 "></div>

      {/* Dark overlay (original gradient effect) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-59"></div>

      {/* Content container (stays on top and is NOT affected by the tint) */}
      <div className="relative w-full max-w-7xl px-3 text-left z-10 flex items-center justify-center">
        <div className="hidden sm:block mr-14">
          <div className="w-1 bg-[#89B8F6] h-12"></div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white">
            Get Personalized <span className="text-[#89B8F6]">Bathroom</span> Remodel Quotes – Fast, Free & Hassle-Free
            <span className="text-[#89B8F6]">.</span>
          </h2>

          <h3 className="text-2xl md:text-3xl text-white mb-8">
            LocalBathQuotes.com connects you with trusted bathroom remodeling pros in your area.
            Answer a few quick questions to get accurate, no-cost quotes from top-rated contractors
            <span className="text-[#89B8F6]">!</span>
          </h3>
          {/* Ensure popup is on top */}
          <div className="relative z-50 mb-12 md:mb-0"> {/* Add margin at the bottom for mobile */}
            <FormesterPopup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;