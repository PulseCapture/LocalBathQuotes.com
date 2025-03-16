// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import ImageSection from "../components/ImageSection"; // Import ImageSection
import FormSection from "../components/FormSection"; // Import FormSection

const Home = ({ setPopupOpen }) => {
  return (
    <div className="w-full m-0 p-0 bg-gray-300">
      <HeroSection />
      <IntroSection />
      <ImageSection /> {/* Add ImageSection right below IntroSection */}
      <ServicesSection />
      <FormSection /> {/* Add FormSection right below ServicesSection */}
      {/* Other sections can go here */}
    </div>
  );
};

export default Home;