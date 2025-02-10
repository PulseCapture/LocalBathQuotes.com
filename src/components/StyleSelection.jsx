import React, { useState } from "react";

const StyleSelection = () => {
  // List of images (from public folder)
  const styleOptions = [
    { id: 1, src: "/clay-banks-ckdoA-tv9uw-unsplash.jpg", alt: "Style 1" },
    { id: 2, src: "/fred-kleber-1Gol9Qc85K0-unsplash.jpg", alt: "Style 2" },
    { id: 3, src: "/getty-images-1-lRbejYIqw-unsplash.jpg", alt: "Style 3" },
    { id: 4, src: "/getty-images-jc4RaA3BLuI-unsplash.jpg", alt: "Style 4" },
    { id: 5, src: "/getty-images-PPn6XwHM02E-unsplash.jpg", alt: "Style 5" },
    { id: 6, src: "/getty-images-qmF3rt4HW-o-unsplash.jpg", alt: "Style 6" },
    { id: 7, src: "/getty-images-x_OK42c1etg-unsplash.jpg", alt: "Style 7" },
    { id: 8, src: "/getty-images-XRuGBAuTR8c-unsplash.jpg", alt: "Style 8" },
    { id: 9, src: "/getty-images-ZjNNjt91Lo8-unsplash.jpg", alt: "Style 9" },
    { id: 10, src: "/hemant-kanojiya-nI4C9UA1omQ-unsplash.jpg", alt: "Style 10" },
    { id: 11, src: "/ishan-seefromthesky-2jlRllahuMk-unsplash.jpg", alt: "Style 11" },
    { id: 12, src: "/justin-wolff-f8rXXuctnSw-unsplash.jpg", alt: "Style 12" },
    { id: 13, src: "/mesut-cicen-VukNq0NCbYI-unsplash.jpg", alt: "Style 13" },
    { id: 14, src: "/ronnie-george-m78oBvRHBm0-unsplash.jpg", alt: "Style 14" },
    { id: 15, src: "/sam-yink-BE8KcGDG9F8-unsplash.jpg", alt: "Style 15" },
    { id: 16, src: "/sanju-pandita-Ga1X7wKiajs-unsplash.jpg", alt: "Style 16" },
    { id: 17, src: "/serjan-midili-mLx6oMw32PI-unsplash.jpg", alt: "Style 17" },
    { id: 18, src: "/steven-ungermann-rfcymadRRXQ-unsplash.jpg", alt: "Style 18" },
    { id: 19, src: "/yevhenii-deshko-fh-iC1o2QOM-unsplash.jpg", alt: "Style 19" },
    { id: 20, src: "/yevhenii-deshko-TxckcTCpcZw-unsplash.jpg", alt: "Style 20" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Pick Your Preferred Styles or Features
      </h2>
      <p className="mb-6">Select an image that matches your vision. Click to expand.</p>

      {/* 4x5 Image Grid */}
      <div className="grid grid-cols-5 grid-rows-4 gap-4 place-items-center">
        {styleOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`cursor-pointer border-2 rounded-md p-1 w-16 h-16 flex items-center justify-center transition-transform duration-300 will-change-transform ${
              selectedImage === option.id
                ? "border-blue-500 scale-150"
                : "border-gray-200 scale-100 hover:scale-110 hover:rotate-1"
            }`}
          >
            <img
              src={option.src}
              alt={option.alt}
              className="w-full h-full object-cover rounded transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Enlarged Image Display */}
      {selectedImage && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Selected Style:</h3>
          <div className="flex justify-center">
            <img
              src={styleOptions.find((img) => img.id === selectedImage)?.src}
              alt="Selected Style"
              className="w-48 h-48 object-cover rounded-lg border-4 border-blue-500 transition-transform"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default StyleSelection;
