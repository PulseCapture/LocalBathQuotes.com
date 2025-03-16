// src/components/IntroSection.jsx
import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full flex justify-center py-8 bg-gray-300">
      <div className="w-full max-w-[90%] bg-white rounded-lg shadow-lg p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Dream <span className="text-[#89B8F6]">Bathroom</span>, Just a Few Clicks Away
            </h2>
            <p className="text-lg mb-6">
              Finding the right bathroom remodeling contractor shouldn’t be
              complicated. We make it easy. Just tell us about your project, and
              we’ll match you with <strong>trusted local pros</strong> who provide
              free, personalized quotes.
            </p>

            {/* Process Steps */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-2xl mr-3">✅</span>
                <p className="text-lg">Tell us about your project in a few clicks</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-2xl mr-3">✅</span>
                <p className="text-lg">Get matched with top-rated bathroom remodelers</p>
              </div>
              <div className="flex items-center">
                <span className="text-[#89B8F6] text-2xl mr-3">✅</span>
                <p className="text-lg">Compare free quotes and choose your best fit</p>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-6 bg-[#89B8F6] text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg hover:bg-[#78a1db] transition">
              Explore Pricing Options Below
            </button>
          </div>

          {/* Right Side - Floating Image */}
          <div className="hidden md:flex md:w-1/2 justify-center mt-8 md:mt-0">
            <img
              src={`${process.env.PUBLIC_URL}/bathroom-remodel.WEBP`}
              alt="Bathroom Remodel"
              className="w-[80%] md:w-[36%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;