// frontend/src/pages/Contact.js
import React from "react";

const Contact = React.memo(() => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      {/* Add your contact form or information here */}
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
});

export default Contact;
