// src/components/ImageSection.jsx
import React from "react";

const ImageSection = () => {
  return (
    <section className="w-full flex justify-center py-1 bg-white">
      <div className="w-full max-w-6xl p-4">
        {/* Image Container */}
        <div className="w-[100%] md:w-[100%] flex justify-center mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/bathroom-remodel-stages.webp`}
            alt="Bathroom Remodel Stages"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;