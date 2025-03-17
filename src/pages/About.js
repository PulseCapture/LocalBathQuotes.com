// src/pages/About.js
import React from "react";
import FormesterPopup from "../components/FormesterPopup"; // Adjust the path if necessary
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-120 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Gray Divider */}
        <hr className="border-t border-gray-300 mb-8" />

        {/* Blue Divider */}
        <hr className="border-t-4 border-[#89B8F6] w-24 mx-auto mb-5" />

        {/* Intro Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#89B8F6]">LocalBathQuotes.com</span>
          </h1>
          <p className="text-xl text-gray-600">
            Solutions That Suit You
          </p>
        </div>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="/mk-s-KGfGnAaDZb4-unsplash.jpg" alt="About BathFlipper" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              At LocalBathQuotes.com, our mission is to help you navigate today’s digital market with ease and confidence. We specialize in capturing and showcasing data-backed, reputable service providers, ensuring you have access to the best options available.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our focus is on highlighting top-quality providers who are proven to deliver exceptional service. By connecting you with these trusted experts, we make it easier for you to make informed decisions and find the value you’re looking for. Trust LocalBathQuotes.com to guide you through the market and connect you with the providers who can truly meet your needs.
            </p>
          </div>
        </div>

        {/* Informational Panels */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Our Purpose */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Purpose</h2>
            <p className="text-gray-700">
              We help local residents connect with the service and product providers, contractors, and insurance experts who contribute to their city’s dynamic landscape. Whether you’re looking for a trusted contractor to renovate your home, a reliable insurance provider to safeguard your future, or any other professional service, we’re here to make that connection seamless and effortless.
            </p>
          </div>

          {/* Our Beliefs*/}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Beliefs</h2>
            <p className="text-gray-700">
              At LocalBathQuotes.com, we believe that strong communities are built on solid connections. By linking you with the right experts, we’re not just facilitating transactions; we’re helping to foster a network of support and excellence that strengthens our city. So, if you’re ready to tap into your city’s best, let’s get started—together.
            </p>
          </div>

          {/* Why Use LocalBathQuotes.com? */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3"> Why Use LocalBathQuotes.com?</h2>
            <p className="text-gray-700">
              Save time by letting us connect you with experienced, licensed, and insured remodelers. No need to call multiple contractors—we bring the best options to you. Get multiple quotes and find a solution that fits your budget and vision.
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

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;