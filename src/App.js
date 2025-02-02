import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RemodelEstimator from "./pages/RemodelEstimator";
import RemodelRates from "./pages/RemodelRates";
import HowItWorks from "./pages/HowItWorks";
import RemodelProcess from "./pages/RemodelProcess";
import Footer from "./pages/Footer"; // Adjust path if needed





function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
   

<nav
  className="fixed top-0 left-0 w-full z-20 transition-all flex items-center justify-between px-6 py-3"
  style={{
    background: `linear-gradient(to bottom, rgba(50, 90, 160, ${
      0.7 - scroll * 0.002
    }), rgba(50, 90, 160, ${0.15 - scroll * 0.001}))`, // Darker & More Transparent Blue
    backdropFilter: `blur(${10 - scroll * 0.05}px)`,
    WebkitBackdropFilter: `blur(${10 - scroll * 0.05}px)`,
    maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)`, 
    WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
  }}
>


        {/* Left - Logo */}
        <img src="/landing-page-project.png" alt="Logo" className="h-12 w-auto" />

        {/* Center - Navigation */}
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

        {/* Right - Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
            Get a Quote
          </button>
          <button className="bg-green-500 bg-opacity-70 text-white px-7 py- rounded-lg hover:bg-opacity-90 transition">
            Call Now
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-gray-300 w-full px-[5px] pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/remodel-rates" element={<RemodelRates/>} />
	  <Route path="/" element={<h1>Welcome to Home Page</h1>} />
          <Route path="/estimator" element={<RemodelEstimator />} />
	  <Route path="/remodel-rates" element={<RemodelRates />} />
	  <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/remodel-process" element={<RemodelProcess />} />

        </Routes>
      </div>
      {/* Footer is Always Visible */}
      <Footer />
    </div>
  );
}

export default App;
