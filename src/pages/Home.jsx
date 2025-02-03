

import About from "./About"; // Make sure this component exists and is correctly implemented
import Footer from "./Footer";   // Import the footer component you provided




// ServiceBar Component

import React, { useState } from "react";
import FormModal from "../components/FormModal"; // Import the new modal component

const ServiceBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl px-4 justify-center">
        <input
          type="text"
          className="w-2/3 px-4 py-2 border border-blue-400 rounded text-left text-black bg-white text-lg"
          value="Bathroom Remodel"
          readOnly
        />
        <button
          className="bg-custom-blue text-white py-2 px-8 rounded hover:bg-custom-hover-blue text-lg transition-colors duration-300 w-full sm:w-64"
          onClick={openPopup}
        >
          Next
        </button>
      </div>

      {/* Link to the FormModal */}
      <FormModal isOpen={isOpen} closePopup={closePopup} />
    </div>
  );
};




// ServicesSection Component (with Elephant Background)
const ServicesSection = () => {
  const services = [
    {
      title: "Minor Bathroom Renovation",
      description:
        "A minor renovation might include painting vanity and walls, replacing toilet, fixtures, hardware and accessories.",
      price: "$3,000-10,000",
      link: "#!",
      image: "/fred-kleber-1Gol9Qc85K0-unsplash.jpg",
    },
    {
      title: "Full Bathroom Remodel",
      description:
        "A complete bathroom remodel would typically include updating all aspects of a bathroom.",
      price: "$10,000-20,000",
      link: "#!",
      image: "/hemant-kanojiya-nI4C9UA1omQ-unsplash.jpg",
    },
    {
      title: "Custom/Lux Bathroom Remodel",
      description:
        "A custom/ luxury remodel will most likely include a designer and will involve more sophisticated details.",
      price: "$20,000-50,000",
      link: "#!",
      image: "/getty-images-1-lRbejYIqw-unsplash.jpg",
    },
  ];

  // Helper function to wrap exclamation marks in a span
  const highlightExclamationMarks = (text) => {
    return text.split("!").map((part, index, arr) =>
      index < arr.length - 1 ? (
        <React.Fragment key={index}>
          {part}
          <span className="text-[#89B8F6]">!</span>
        </React.Fragment>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 relative">
           <div className="absolute inset-0 pointer-events-none elephant-bg"></div>

      {/* Content Layer */}
      <div className="relative">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {highlightExclamationMarks(
            "Try a solution designed to streamline your connection with qualified contractors near you."
          )}
        </h2>
        <h3 className="text-xl font-medium text-center mb-8">
          {highlightExclamationMarks("What are average project costs?")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow bg-white"
            >
              {/* Thumbnail Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
                loading="lazy"
              />
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-lg font-semibold mb-4">{service.price}</p>
              <a href={service.link} className="text-blue-500 hover:underline">
                Learn more..
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// InsightsSection Component (New Section)
// This section provides helpful tips and inspiration to your visitors.
const InsightsSection = () => {
  return (
<section className="max-w-6xl mx-auto px-4 pb-16">
      <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Remodeling Insights</h2>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're just starting to dream about a new bathroom or already in the planning stage,
          our remodeling insights can help guide your journey. From budgeting tips to choosing the right design,
          we've compiled a few key ideas to spark inspiration.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Inspiration & Planning:</strong> Explore our gallery of completed projects to envision your new space.
          </li>
          <li>
            <strong>Budgeting:</strong> Learn what to expect cost-wise for different levels of renovation.
          </li>
          <li>
            <strong>Expert Advice:</strong> Connect with local professionals who can offer personalized recommendations.
          </li>
        </ul>
        <div className="text-center mt-6">
          <a
            href="#!"
            className="inline-block bg-custom-blue text-white py-2 px-6 rounded hover:bg-custom-hover-blue transition-colors"
          >
            Get More Tips
          </a>
        </div>
      </div>
    </section>
  );
};


// ScrollIndicator Component
const ScrollIndicator = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      if (scrolled !== show) {
        setShow(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#89B8F6] text-white p-2 rounded-full shadow-lg hover:bg-[#89B8F6] transition-colors border border-transparent"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

// Home Component
function Home() {
  return (
    <div className="w-full m-0 p-0 relative">
      {/* Hero Section */}
      <section
        className="w-full h-[76vh] md:h-[vh] bg-fixed bg-cover bg-bottom flex flex-col items-center justify-center relative m-0 p-0 -mt-8"
        style={{
          backgroundImage:
            "url('https://bathflipper.com/wp-content/uploads/2025/02/carlos-masias-yg8zkwBS30Q-unsplash-scaled.jpg')",
        }}
      >
        {/* Overlay for smooth gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay-gray opacity-85"></div>

        {/* Heading and Divider Container */}
        <div className="relative w-full max-w-6xl px-4 text-left z-10 flex items-center justify-center">
          {/* Divider Bar */}
          <div className="hidden sm:block mr-4">
            <div className="w-1 bg-[#89B8F6] h-12"></div>
          </div>

          {/* Heading and Service Bar */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
              <span className="text-[#89B8F6]">Transform</span> your Bathroom with Local Expert Remodel Contractors
            </h2>
            <h3 className="text-2xl md:text-3xl text-white mb-8">
              Work with Local Professionals to receive a Free Estimate for your dream bathroom. Get started today!
            </h3>
            {/* Service Bar */}
            <ServiceBar />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <About />

      {/* New Insights Section */}
      <InsightsSection />


      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>

  );
}



export default Home;
