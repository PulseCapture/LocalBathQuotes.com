// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import About from "../pages/About";
import ScrollIndicator from "../components/ScrollIndicator";


function Home() {
  return (
    <div className="w-full m-0 p-0 relative">
      <HeroSection />
      <ServicesSection />
      <About />
    <ScrollIndicator />
    </div>
  );
}

export default Home;
