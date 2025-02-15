import React from "react";

const About = () => {
  return (
    <section className="bg-gray-120 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Gray Divider */}
        <hr className="border-t border-gray-300 mb-8" />

        {/* Blue Divider */}
        <hr className="border-t-4 border-[#89B8F6] w-24 mx-auto mb-4" />

        {/* Intro Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#89B8F6]">BathBehold.com</span>
          </h1>
          <p className="text-xl text-gray-600">
            Simplifying your bathroom remodel journey by connecting you with trusted, licensed professionals.
          </p>
        </div>

        {/* Informational Panels */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              We believe every homeowner deserves a stress-free remodeling experience.
              Our mission is to deliver fair pricing, expert guidance, and exceptional craftsmanship in every project.
            </p>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">How It Works</h2>
            <p className="text-gray-700">
              Request free quotes from our network of licensed contractors.
              Compare pricing, read verified reviews, and choose the best option for your remodel—all in one place.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us</h2>
            <p className="text-gray-700">
              With years of experience and a commitment to transparency, we ensure personalized service and competitive quotes,
              making your remodeling process simple and stress-free.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Remodel?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Get free, no-obligation quotes from trusted local contractors today.
          </p>
          <a
            href="/get-quotes"
            className="inline-block bg-[#89B8F6] text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Free Quotes
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
