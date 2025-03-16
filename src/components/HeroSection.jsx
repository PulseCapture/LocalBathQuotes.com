import React from "react";
import FormesterPopup from "./FormesterPopup";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[50vh] md:min-h-[72vh] flex flex-col items-center justify-center relative m-0 p-0"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/bgimage.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Tint Overlay (Subtle Dark Tint) */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-59"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl px-4 text-left z-10 flex items-center justify-center">
        {/* Decorative Left-Side Element */}
        <div className="hidden sm:flex flex-col items-center mr-8">
          <div className="w-[3px] h-16 bg-[#6FA4E8] rounded-lg"></div> {/* Thinner & more subtle */}
          {/* OR Replace with an icon */}
          {/* <div className="text-[#6FA4E8] text-lg font-semibold mt-2">100% Free Quotes</div> */}
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center md:items-start">
          {/* Headline */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white text-center md:text-left">
            Compare Bathroom Remodel Quotes & 
            <span className="text-[#89B8F6]"> Save Up to 40%!</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white mt-4 md:mt-6 text-center md:text-left">
            We connect you with top-rated bathroom remodeling pros.
            Answer a few quick questions and get accurate, no-cost quotes—fast & easy!
          </p>

          {/* CTA */}
          <div className="relative z-50 mt-6 md:mt-8">
            <FormesterPopup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
