import React, { useEffect, useState } from "react";
import ServiceBar from "./ServiceBar";

const HeroSection = () => {
  const [bgSize, setBgSize] = useState(120); // initial width in vw

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const scrollValue = window.scrollY * 0.1; // Adjust zoom-out speed
        const newSize = Math.max(100, 120 - scrollValue); // Prevents it from shrinking too much
        setBgSize(newSize);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className="w-full min-h-[70vh] md:min-h-[72vh] flex flex-col items-center justify-center relative m-0 p-0 -mt-8"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/bgimage.webp")`,
        backgroundSize: `${bgSize}vw auto`, // Adjusting width dynamically
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        // Removed backgroundAttachment: "fixed" so the background scrolls with the content
        transition: "background-size 0.1s ease-out", // Smooth zoom-out effect
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-85"></div>

      {/* Content container */}
      <div className="relative w-full max-w-6xl px-4 text-left z-10 flex items-center justify-center">
        {/* Divider Bar (visible on medium screens and up) */}
        <div className="hidden sm:block mr-4">
          <div className="w-1 bg-[#89B8F6] h-12"></div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-6xl font-medium mb-6 text-white">
            <span className="text-[#89B8F6]">Transform</span> your Bathroom with Local Expert Remodel Contractors
            <span className="text-[#89B8F6]">.</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-white mb-8">
            Work with Local Professionals to receive a Free Estimate for your dream bathroom. Get started today
            <span className="text-[#89B8F6]">!</span>
          </h3>
          <ServiceBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
