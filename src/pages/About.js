// src/components/About.jsx
import React from "react";
import FormesterPopup from "../components/FormesterPopup"; // Adjust the path if necessary

const About = () => {
  return (
    <section className="bg-gray-120 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Gray Divider */}
        <hr className="border-t border-gray-300 mb-" />

        {/* Blue Divider */}
        <hr className="border-t-4 border-[#89B8F6] w-24 mx-auto mb-5" />

        {/* Intro Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#89B8F6]">BathBehold.com</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted source for connecting with top-rated bathroom remodeling professionals in your area.
          </p>
        </div>

        {/* Informational Panels */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Purpose */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Purpose</h2>
            <p className="text-gray-700">
              BathBehold.com simplifies the search for reputable bathroom remodelers by providing homeowners with
              access to licensed, vetted professionals. We help you find the right contractor for your needs quickly and easily.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">How It Works</h2>
            <p className="text-gray-700">
              Simply submit a request, and we’ll match you with pre-screened bathroom remodeling professionals in your area.
              Compare quotes, review credentials, and choose the best pro for your project all in one place.
            </p>
          </div>

          {/* Why Use BathBehold.com? */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Use BathBehold.com?</h2>
            <p className="text-gray-700">
              Save time by letting us connect you with experienced, licensed, and insured remodelers.  
              No need to call multiple contractors—we bring the best options to you.  
              Get multiple quotes and find a solution that fits your budget and vision.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Remodel Today</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get free, no-obligation quotes from experienced local contractors who specialize in bathroom remodeling.
          </p>
          {/* Render the FormesterPopup component to trigger the popup */}
          <FormesterPopup />
        </div>
      </div>
    </section>
  );
};

export default About;
