import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RemodelRates from "./pages/RemodelRates";
import HowItWorks from "./pages/HowItWorks";
import RemodelProcess from "./pages/RemodelProcess";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/contact-us";

function App() {
  const [scroll, setScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const hasLogged = useRef(false);

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
✨ ✨ 𝐁 𝐄   𝐁 𝐋 𝐄 𝐒 𝐒 𝐄 𝐃 ! ✨ ✨
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
    const handleScroll = () => {
      setScroll(window.scrollY);
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all flex items-center justify-between px-4 py-2 ${
          isScrolling ? "bg-blue-700 shadow-lg" : "bg-blue-600"
        }`}
        style={{
          background: `linear-gradient(to bottom, rgba(50, 90, 100, ${
            scroll ? 0.7 - scroll * 0.002 : 0.7
          }), rgba(50, 90, 160, ${scroll ? 0.15 - scroll * 0.001 : 0.15}))`,
          backdropFilter: `blur(${10 - scroll * 0.05}px)`,
          WebkitBackdropFilter: `blur(${10 - scroll * 0.05}px)`,
        }}
      >
        <img src="/Bath.png" alt="Logo" className="h-12 w-auto" />
        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 text-lg">
            Home
          </Link>
          <Link to="/how-it-works" className="text-white hover:text-gray-300 text-lg">
            How It Works
          </Link>
          <Link to="/remodel-rates" className="text-white hover:text-gray-300 text-lg">
            Remodel Rates
          </Link>
          <Link to="/remodel-process" className="text-white hover:text-gray-300 text-lg">
            Remodel Process
          </Link>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
            Get a Quote
          </button>
          <button className="bg-green-500 bg-opacity-70 text-white px-7 py-2 rounded-lg hover:bg-opacity-90 transition">
            Call Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-gray-300 w-full px-[5px] pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remodel-rates" element={<RemodelRates />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/remodel-process" element={<RemodelProcess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
