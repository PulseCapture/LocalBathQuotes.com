// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import StyleSelection from "../components/StyleSelection";
import About from "../components/About";
import InsightsSection from "../components/InsightsSection";
import ScrollIndicator from "../components/ScrollIndicator";
import Footer from "../components/Footer"; // if you have one

function Home() {
  return (
    <div className="w-full m-0 p-0 relative">
      <HeroSection />
      <ServicesSection />
      <StyleSelection />
      <About />
      <InsightsSection />
      <ScrollIndicator />
    </div>
  );
}

export default Home;
