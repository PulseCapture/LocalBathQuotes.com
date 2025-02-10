// src/components/InsightsSection.jsx
import React from "react";

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

export default InsightsSection;
