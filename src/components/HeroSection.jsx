// src/components/HeroSection.jsx
import React from "react";
import FormesterPopup from "./FormesterPopup";

const HeroSection = () => {
  return (
    <>
      {/* Desktop Hero Section */}
      <section
        className="hidden md:flex w-full min-h-[72vh] flex-col items-center justify-center relative m-0 p-0 -mt-8"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/bgimage.webp")`,
          backgroundSize: "cover", // Static background size
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-86"></div>
        {/* Content container */}
        <div className="relative w-full max-w-7xl px-3 text-left z-10 flex items-center justify-center">
          {/* Divider Bar (visible on medium screens and up) */}
          <div className="hidden sm:block mr-4">
            <div className="w-1 bg-[#89B8F6] h-12"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white">
              <span className="text-[#89B8F6]">Transform</span> your Bathroom with Local Expert Remodel Contractors
              <span className="text-[#89B8F6]">.</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-white mb-8">
              Work with Local Professionals to receive a Free Estimate for your dream bathroom. Get started today
              <span className="text-[#89B8F6]">!</span>
            </h3>
            <FormesterPopup />
          </div>
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section
        className="flex md:hidden w-full min-h-[65vh] flex-col items-center justify-center relative m-0 p-0 -mt-14"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/bgimage.webp")`,
          backgroundSize: "cover", // Static background size
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-86"></div>
        {/* Content container */}
        <div className="relative w-full max-w-7xl px-3 text-left z-10 flex items-center justify-center">
          {/* Divider Bar (visible on medium screens and up) */}
          <div className="hidden sm:block mr-4">
            <div className="w-1 bg-[#89B8F6] h-12"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-medium mb-8 text-white">
              <span className="text-[#89B8F6]">Transform</span> your Bathroom with Local Expert Remodel Contractors
              <span className="text-[#89B8F6]">.</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-white mb-8">
              Work with Local Professionals to receive a Free Estimate for your dream bathroom. Get started today
              <span className="text-[#89B8F6]">!</span>
            </h3>
            <FormesterPopup />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
