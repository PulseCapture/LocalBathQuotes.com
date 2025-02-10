import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
      {/* Blue Theme Divider */}
      <div className="w-full max-w-5xl border-t-4 border-[#89B8F6] mb-8"></div>

      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <p className="text-lg text-gray-700 mb-6"></p>
      </div>
      
      {/* Mission Section */}
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LocalBathQuotes.com, Our Mission?</h2>
        <p className="text-gray-600">
          LocalBathQuotes.com is a free service that connects homeowners with certified local contractors, ensuring that every bathroom renovation project is handled by experts. By focusing on building these trusted connections, we ensure your renovation is completed to the highest standards.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-700">Quality</h3>
          <p className="text-gray-600">We prioritize excellence in every project, ensuring top-tier results.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-700">Transparency</h3>
          <p className="text-gray-600">We provide clear, honest estimates with no hidden costs.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-700">Trust</h3>
          <p className="text-gray-600">We connect homeowners with licensed, vetted professionals.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
