// src/pages/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
        <div className="border-t-2 border-[#89B8F6] my-4"></div>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions or need further information, please fill out the form below or contact us at <a href="mailto:support@localbathquotes.com" className="text-blue-500 hover:underline">support@localbathquotes.com</a>.
        </p>
        <form method="POST" action="mailto:support@localbathquotes.com" enctype="text/plain">
          <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Name *</label>
          <input type="text" id="name" name="Name" placeholder="Enter your name" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email *</label>
          <input type="email" id="email" name="Email" placeholder="Enter your email address" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>

          <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Message *</label>
          <textarea id="message" name="Message" rows="4" placeholder="Enter your message" required className="w-full p-2 mb-4 border border-gray-300 rounded-lg"></textarea>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-400 transition duration-300">Submit</button>
        </form>
        <p className="text-gray-700 leading-relaxed mt-4">Location: 113 Cherry Street, Seattle, Washington 98104</p>
      </div>
    </div>
  );
};

export default ContactUs;