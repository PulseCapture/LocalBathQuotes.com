import React from "react";
import FormesterPopup from "../components/FormesterPopup"; // Adjust the path if necessary

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          How It Works
        </h1>
        <div className="border-t-2 border-[#89B8F6] my-4"></div>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Step 1: Submit Your Zip Code</strong> - Start by entering your zip code to find top-rated bathroom remodeling specialists in your area.
          </li>
          <li>
            <strong>Step 2: Get Matched</strong> - We’ll connect you with local professionals who meet your specific remodeling needs and budget.
          </li>
          <li>
            <strong>Step 3: Receive Quotes</strong> - Get no-obligation quotes from multiple contractors, allowing you to compare and choose the best option.
          </li>
          <li>
            <strong>Step 4: Schedule Your Remodel</strong> - Once you’ve selected a contractor, schedule your project and begin transforming your bathroom!
          </li>
        </ul>
        {/* Render the FormesterPopup component here */}
        <FormesterPopup />
      </div>
    </div>
  );
};

export default HowItWorks;
