import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
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

        {/* Google Maps (Optional) */}
        <div className="mt-8">
          <iframe
            title="BathBehold Location"
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373531531546!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f0b1b1%3A0x4a6c0f70f8f8c1d1!2sBathBehold%20Remodeling!5e0!3m2!1sen!2sus!4v1635391809533!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
