// src/components/ServicesSection.jsx
import React from "react";
import { highlightExclamationMarks } from "../utils/textUtils"; // Optional, if you want to use it

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

export default ServicesSection;
