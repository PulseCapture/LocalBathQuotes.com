import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  // Scroll to top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-120">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact BathBehold</h1>
        <p className="text-center text-gray-600 mb-6">
          Have questions about your bathroom remodel? Get in touch with us today!
        </p>

        {/* Contact Details Section */}
        <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-blue-500 text-3xl mb-2" />
            <p className="font-semibold text-gray-700">Call Us</p>
            <p className="text-gray-600">+1 (800) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-500 text-3xl mb-2" />
            <p className="font-semibold text-gray-700">Email Us</p>
            <p className="text-gray-600">support@bathbehold.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mb-2" />
            <p className="font-semibold text-gray-700">Location</p>
            <p className="text-gray-600">123 Bath Remodel St, City, State</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-blue-500 text-3xl mb-2" />
            <p className="font-semibold text-gray-700">Business Hours</p>
            <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
