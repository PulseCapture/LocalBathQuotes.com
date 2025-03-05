import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import Header from "./components/Header";
import './App.css';
import LoadingSpinner from "./components/LoadingSpinner";
import { useFooterReveal } from './hooks/useFooterReveal';

const Home = lazy(() => import("./pages/Home"));
const RemodelRates = lazy(() => import("./pages/RemodelRates"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const RemodelProcess = lazy(() => import("./pages/RemodelProcess"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/contact-us"));

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const hasLogged = useRef(false);
  const isFooterRevealed = useFooterReveal();

  useEffect(() => {
    if (!hasLogged.current) {
      console.log(
        `%c
       
  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

       ✝️   𝐉   𝐄   𝐒   𝐔   𝐒      𝐈   𝐒      𝐊   𝐈   𝐍   𝐆   ✝️  

  🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

📖 *Philippians 4:13* – "I can do all things through Christ who strengthens me."  
📖 *John 14:6* – "I am the way, the truth, and the life."  
📖 *Romans 8:28* – "And we know that all things work together for good to them that love God,  
       to them who are the called according to his purpose."
══════════════════════════════════════
✨ ✨ 𝐁 𝐄   𝐁 𝐋 𝐄 𝐒 𝐒 𝐄𝐃 ! ✨ ✨
══════════════════════════════════════
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
      <ScrollToTop />
      <Header />
      <div className="bg-gray-300 w-full px-[5px] pt-24">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home setPopupOpen={setPopupOpen} />} />
            <Route path="/remodel-rates" element={<RemodelRates />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/remodel-process" element={<RemodelProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </div>
      <Footer isRevealed={isFooterRevealed} />
      {!popupOpen && <ScrollIndicator />}
    </div>
  );
}

export default App;