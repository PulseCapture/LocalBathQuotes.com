// src/App.js
import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import './App.css';
import LoadingSpinner from "./components/LoadingSpinner";
import { useFooterReveal } from './hooks/useFooterReveal';
import useScrollAndNavigate from './hooks/useScrollAndNavigate';

const Home = lazy(() => import("./pages/Home"));
const RemodelRates = lazy(() => import("./pages/RemodelRates"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const RemodelProcess = lazy(() => import("./pages/RemodelProcess"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/contact-us")); // Ensure correct path

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const hasLogged = useRef(false);
  const isFooterRevealed = useFooterReveal();
  const scrollAndNavigate = useScrollAndNavigate();

  useEffect(() => {
    if (!hasLogged.current) {
      console.log(
        `%c
       
  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
 
       ✝️   𝄙   𝄖   𝄘   𝄖      𝄈   𝄖      𝄊   𝄈   𝄍   𝄆   ✝️  
 
  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟
 
 📖 *Philippians 4:13* – "I can do all things through Christ who strengthens me."  
 📖 *John 14:6* – "I am the way, the truth, and the life."  
 📖 *Romans 8:28* – "And we know that all things work together for good to them that love God,  
       to them who are the called according to his purpose."
 ══════════════════════════════════════════════════════════
 ✨ ✨ 𝄁 𝄄   𝄁 𝄋 𝄄 𝄖 𝄖 𝄄𝄃 ! ✨ ✨
 ══════════════════════════════════════════════════════════
                 ☩  
                 ☩  
           ☩☩☩☩☩☩☩☩☩  
                 ☩  
                 ☩  
                 ☩  
                 ☩  
 `,
        "color: #FFD700; font-size: 24px; font-weight: bold; white-space: pre; text-shadow: 2px 2px 4px #000000;"
      );
      hasLogged.current = true;
    }
  }, []);

  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popupOpen]);

  return (
    <div>
      <ScrollToTop /> {/* Ensure ScrollToTop is used here */}
      <Header navigate={scrollAndNavigate} />
      <div className="bg-gray-300 w-full px-[5px] pt-24 main-content">
        <Suspense fallback={<div className="loading-spinner"><LoadingSpinner /></div>}>
          <Routes>
            <Route path="/" element={<Home setPopupOpen={setPopupOpen} />} />
            <Route path="/remodel-rates" element={<RemodelRates />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/remodel-process" element={<RemodelProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} /> {/* Unchanged ContactUs route */}
          </Routes>
        </Suspense>
      </div>
      <Footer isRevealed={isFooterRevealed} />
      {!popupOpen && <ScrollIndicator />}
    </div>
  );
}

export default App;