// src/components/FormSection.jsx
import React, { useEffect } from "react";
import FormesterPopup from "./FormesterPopup"; // Import the FormesterPopup component

const FormSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://qpmpwkux.formester.com/widget/standard.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full flex justify-center py-4 bg-white"> {/* Changed background to white */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8"> {/* Reduced padding */}
        <div className="hidden md:block">
          <formester-standard-form
            set-auto-height="true"
            height="auto" // Set height to auto
            id="Sf1nS1Rk7bpk"
            url="https://qpmpwkux.formester.com/f/Sf1nS1Rk7bpk"
          ></formester-standard-form>
        </div>
        <div className="block md:hidden text-center w-full h-full">
          <FormesterPopup /> {/* Use the FormesterPopup component on mobile */}
        </div>
      </div>
    </section>
  );
};

export default FormSection;