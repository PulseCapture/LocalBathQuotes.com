import React from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import ImageSection from "../components/ImageSection"; // Import ImageSection
import CostSavingsSection from "../components/CostSavingsSection"; // ✅ Import CostSavingsSection
import FormSection from "../components/FormSection"; // Import FormSection

const Home = ({ setPopupOpen }) => {
  return (
    <div className="w-full m-0 p-0 bg-white">
      <HeroSection />
      <IntroSection />
      <ImageSection /> {/* ✅ Add ImageSection */}
      <CostSavingsSection /> {/* ✅ Add Cost Savings Section Below Image Section */}
      <ServicesSection />
      <FormSection /> {/* Form Section Remains Here */}
      {/* Other sections can go here */}
    </div>
  );
};

export default Home;
