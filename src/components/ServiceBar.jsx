// src/components/ServiceBar.jsx
import React, { useState } from "react";
import FormModal from "./FormModal"; // Adjust the path if needed

const ServiceBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl px-4 justify-center">
        <input
          type="text"
          className="w-2/3 px-4 py-2 border border-blue-400 rounded text-left text-black bg-white text-lg"
          value="Bathroom Remodel"
          readOnly
        />
        <button
          onClick={openPopup}
          className="bg-custom-blue text-white py-2 px-8 rounded hover:bg-custom-hover-blue text-lg transition-colors duration-300 w-full sm:w-64"
        >
          Next
        </button>
      </div>
      <FormModal isOpen={isOpen} closePopup={closePopup} />
    </div>
  );
};

export default ServiceBar;
