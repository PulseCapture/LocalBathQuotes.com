// src/components/ServicesSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { highlightExclamationMarks } from "../utils/textUtils"; // Optional, if you want to use it

const ServicesSection = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const services = [
    {
      title: "Minor Bathroom Renovation",
      description:
        "A minor renovation might include painting vanity and walls, replacing toilet, fixtures, hardware and accessories.",
      price: "$3,000-10,000",
      image: "/serviceimage1.webp",
    },
    {
      title: "Full Bathroom Remodel",
      description:
        "A complete bathroom remodel would typically include updating all aspects of a bathroom.",
      price: "$10,000-20,000",
      image: "/serviceimage2.webp",
    },
    {
      title: "Custom/Lux Bathroom Remodel",
      description:
        "A custom/ luxury remodel will most likely include a designer and will involve more sophisticated details.",
      price: "$20,000-50,000",
      image: "/serviceimage3.webp",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 relative">
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
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
                loading="lazy"
              />
              <h4 className="text-xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-lg font-semibold mb-4">{service.price}</p>
              {/* Updated "Learn More" links to navigate like header button */}
              <button
                onClick={() => navigate("/remodel-rates")}
                className="text-blue-500 hover:underline"
              >
                Learn more..
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
