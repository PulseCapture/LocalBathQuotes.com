// src/pages/CaliforniaPrivacyRights.jsx
import React from "react";
import { Link } from "react-router-dom";

const CaliforniaPrivacyRights = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">California Consumer Privacy Act (CCPA) Privacy Rights</h1>
        <p className="text-lg text-gray-600 text-center mb-6">Last updated: March 16, 2025</p>
        <div className="border-t-2 border-blue-400 my-4"></div>s

        <p className="text-gray-700 leading-relaxed mb-4">
          Under the California Consumer Privacy Act (CCPA), California residents have the following rights regarding their personal data:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Your Rights Under CCPA</h2>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li><strong>Right to Know:</strong> Request details about the personal data we collect, use, and share.</li>
          <li><strong>Right to Delete:</strong> Request deletion of personal information, subject to certain exceptions.</li>
          <li><strong>Right to Opt-Out:</strong> Prevent the sale of your personal information.</li>
          <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-4">
          For more details, please review our <a href="https://LocalBathQuotes.com/privacy-policy" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How to Submit a Request</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To exercise your CCPA rights, please submit a request through one of the following methods:
        </p>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li><strong>Email:</strong> <a href="mailto:support@LocalBathQuotes.com" className="text-blue-500 hover:underline">support@LocalBathQuotes.com</a></li>
          <li><strong>Online Form:</strong> Use the button below.</li>
        </ul>

        <div className="text-center mt-8">
          <Link to="/do-not-sell" className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-400 transition duration-300">
            Submit a CCPA Request
          </Link>
        </div>

        <p className="text-gray-500 mt-6 text-center"><em>Last Updated: 2/12/2025</em></p>
      </div>
    </div>
  );
};

export default CaliforniaPrivacyRights; 