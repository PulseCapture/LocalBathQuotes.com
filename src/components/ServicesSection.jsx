import React from "react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Minor Bathroom Upgrade",
      description:
        "A cost-effective refresh—perfect for updating fixtures, repainting walls, and replacing key elements without major demolition.",
      price: "$3,000 - $10,000",
      image: "/serviceimage1.webp",
    },
    {
      title: "Full Bathroom Remodel",
      description:
        "A complete transformation including new flooring, cabinets, countertops, and an upgraded shower or tub.",
      price: "$10,000 - $20,000",
      image: "/serviceimage2.webp",
    },
    {
      title: "Luxury Bathroom Renovation",
      description:
        "A high-end remodel featuring custom design, premium materials, and spa-like amenities for a stunning finish.",
      price: "$20,000 - $50,000+",
      image: "/serviceimage3.webp",
    },
  ];

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full flex justify-center py-12 bg-gray-100">
      <div className="w-full max-w-[90%] bg-white rounded-xl shadow-xl p-10 md:p-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-8">
          Bathroom Remodel Designs & Direction
        </h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          Explore different remodel levels and choose the best fit for your needs and budget.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">{service.description}</p>
              <p className="text-xl font-semibold text-[#89B8F6] mb-4">{service.price}</p>
              <button
                onClick={() => navigate("/remodel-rates")}
                className="bg-[#89B8F6] text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-lg hover:bg-[#78a1db] transition duration-300"
              >
                Learn More..
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not sure which remodel is right for you?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Get matched with the best remodel type based on your budget & needs.
          </p>
          <button
            onClick={scrollToBottom}
            className="bg-[#89B8F6] text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:bg-[#78a1db] transition duration-300"
          >
            Find Your Remodel Mate
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;