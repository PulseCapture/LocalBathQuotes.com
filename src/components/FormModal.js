import React, { useState } from "react";

const FormModal = ({ isOpen, closePopup }) => {
  const [step, setStep] = useState(1);
  
  if (!isOpen) return null;

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("tcpaConsent") !== "yes") {
      alert("You must agree to the terms to continue.");
      return;
    }
    console.log("Form submitted");
    // Add your form submission logic here.
  };

  return (
    <div className="overlay">
      {/* Inline CSS – consider moving these styles to an external stylesheet */}
      <style>{`
        /* Base styles */
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
        }
        /* Lighter overlay so the landing page is still visible */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.91);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        /* Floating form container */
        .floating-form {
          width: 95%;
          max-width: 900px;
        }
        /* Slide container with a slight transparent baby blue tint */
        .slide-container {
          position: relative;
          background: rgba(137, 207, 240, 0.3); /* Changed: slightly darker tint */
          border: 2px solid rgba(137, 207, 240, 0.75);
          border-radius: 4px;
          padding: 20px;
          margin: 20px 0;
        }
        /* Exit button styled like the other buttons, positioned at the top right of the container */
        .slide-container .exit-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 16px;
          background: rgba(137,207,240,0.75);
          border: 2px solid rgba(137,207,240,0.75);
          border-radius: 2px;
          color: #fff;
          padding: 4px 8px;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .slide-container .exit-btn:hover {
          background: rgba(88,179,214,0.75);
          border-color: rgba(88,179,214,0.75);
        }
        /* Headings with thinner font weight */
        h2 {
          font-size: 36px;
          font-weight: 300 !important;
          text-align: center;
          color: #fff;
          margin-bottom: 20px;
        }
        .divider {
          height: 2px;
          background: rgba(137,207,240,0.75);
          margin: 10px auto 30px;
          width: 50px;
        }
        /* Labels with thinner font weight */
        label {
          display: block;
          margin-bottom: 10px;
          color: #fff;
          font-size: 18px;
          font-weight: 300 !important;
        }
        label.required::after {
          content: " *";
          color: red;
        }
        /* Inputs & selects with extra transparency */
        input, select {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 2px solid rgba(137,207,240,0.75);
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.5);
          color: #333;
          outline: none;
          margin-bottom: 15px;
        }
        select option {
          background: #fff;
          color: #333;
        }
        select:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        /* Simplified options for the first slide */
        .options-container {
          display: flex;
          flex-direction: column;
        }
        .options-container label.option {
          border: none;
          padding: 4px 0;
          margin: 2px 0;
          background: transparent;
          font-weight: 300;
          display: flex;
          align-items: center;
        }
        .options-container label.option input {
          margin-right: 10px;
          transform: scale(1.1);
        }
        /* For subsequent slides, keep the option style with a border */
        .option {
          display: flex;
          align-items: center;
          padding: 8px 15px;
          margin: 5px 0;
          border: 2px solid rgba(137,207,240,0.75);
          border-radius: 2px;
          background: transparent;
          cursor: pointer;
          color: #fff;
          transition: all 0.3s ease;
        }
        .option:hover {
          background: rgba(137,207,240,0.2);
        }
        .option input {
          width: 20px;
          height: 20px;
          appearance: none;
          margin-right: 15px;
          background: transparent;
          border: 2px solid rgba(137,207,240,0.75);
          border-radius: 2px;
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .option input:checked {
          background: rgba(137,207,240,0.75);
          border: 2px solid rgba(88,179,214,0.75);
          box-shadow: 0 0 5px rgba(137,207,240,0.8),
                      0 0 15px rgba(137,207,240,0.5),
                      0 0 20px rgba(80,179,214,0.3);
        }
        .option input:checked:hover {
          box-shadow: 0 0 8px rgba(137,207,240,1),
                      0 0 18px rgba(88,179,214,0.7),
                      0 0 25px rgba(88,179,214,0.5);
          border-color: rgba(88,179,214,0.75);
        }
        /* Next, Back, and Submit buttons: shorter, wider, and 25% transparent */
        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .buttons button {
          padding: 6px 40px;
          font-size: 16px;
          background: rgba(137,207,240,0.75);
          color: #fff;
          border: 2px solid rgba(137,207,240,0.75);
          border-radius: 2px;
          cursor: pointer;
          margin: 0 10px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .buttons button:hover {
          background: rgba(88,179,214,0.75);
          border-color: rgba(88,179,214,0.75);
        }
        /* Mobile optimization */
        @media (max-width: 768px) {
          .floating-form {
            width: 100%;
          }
          .buttons button {
            width: 100%;
            margin: 10px 0;
          }
          .option {
            flex-direction: row;
            justify-content: flex-start;
          }
        }
      `}</style>
      <div className="floating-form">
        <div className="slide-container">
          <button type="button" className="exit-btn" onClick={closePopup}>
            Exit
          </button>
          {step === 1 && (
            <>
              <h2>What Bathroom Service Are You Looking For?</h2>
              <div className="divider" />
              <div className="options-container">
                <label className="option required">
                  <input type="radio" name="scope" value="Complete Bathroom Remodel" required />
                  <span>Complete Bathroom Remodel</span>
                </label>
                <label className="option required">
                  <input type="radio" name="scope" value="Bathtub to Shower Conversion" required />
                  <span>Bathtub to Shower Conversion</span>
                </label>
                <label className="option required">
                  <input type="radio" name="scope" value="Bath/Shower Updates" required />
                  <span>Bath/Shower Updates</span>
                </label>
                <label className="option required">
                  <input type="radio" name="scope" value="Bathroom Liners/Shower Enclosure" required />
                  <span>Bathroom Liners/Shower Enclosure</span>
                </label>
                <label className="option required">
                  <input type="radio" name="scope" value="Walk-In Shower" required />
                  <span>Walk-In Shower</span>
                </label>
              </div>
              <div className="buttons">
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Can You Share a Little About Your Property?</h2>
              <div className="divider" />
              <label className="required">What's the Property Type?</label>
              <select name="propertyType" required>
                <option value="">Select</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
              <label className="required">Do You Own Your Home?</label>
              <select name="homeOwnership" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No, But I'm authorized to make changes">
                  No, But I'm authorized to make changes
                </option>
              </select>
              <label className="required">What's the Service Needed?</label>
              <select name="serviceNeeded" required>
                <option value="">Select</option>
                <option value="Remodel">Remodel</option>
                <option value="Replace">Replace</option>
                <option value="Repair">Repair</option>
              </select>
              <label className="required">
                Does this project include a replacement, addition, or conversion of a bathtub or shower?
              </label>
              <select name="projectIncludesTubOrShower" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Please Provide Just a Few More Project Details!</h2>
              <div className="divider" />
              <label className="required">Does your project include changing the Floorplan?</label>
              <select name="floorplan" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className="required">Does your project involve Cabinet updates?</label>
              <select name="cabinets" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className="required">Does your project involve Countertop updates?</label>
              <select name="countertops" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className="required">Does your project include Flooring updates?</label>
              <select name="flooring" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className="required">Does your project include Sink Updates?</label>
              <select name="sinks" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className="required">Does your project include Toilet Updates?</label>
              <select name="toilet" required>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h2>Contact Information</h2>
              <div className="divider" />
              <label className="required">First Name:</label>
              <input type="text" name="firstName" required />
              <label className="required">Last Name:</label>
              <input type="text" name="lastName" required />
              <label className="required">Email Address:</label>
              <input type="email" name="email" required />
              <label className="required">Phone Number:</label>
              <input type="tel" name="phone" required />
              <label>Gender (Optional):</label>
              <select name="gender">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label>Birth Date (Optional):</label>
              <input type="date" name="birthDate" />
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2>Confirm Your Location & Consent</h2>
              <div className="divider" />
              <label className="required">Street Address:</label>
              <input type="text" name="streetAddress" required />
              <label className="required">City:</label>
              <input type="text" name="city" required />
              <label className="required">State:</label>
              <input type="text" name="state" maxLength="2" required />
              <label className="required">ZIP Code:</label>
              <input type="text" name="zipCode" required />
              <label className="required">
                Do you agree to the Privacy Policy and Terms of Service?
              </label>
              <div className="option">
                <input type="radio" name="tcpaConsent" value="yes" required />
                <span>Yes</span>
              </div>
              <div className="option">
                <input type="radio" name="tcpaConsent" value="no" required />
                <span>No</span>
              </div>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Get My Quotes</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
