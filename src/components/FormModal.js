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
      {/* Updated inline CSS */}
      <style>{`
        /* Base styles with moderately increased font sizes */
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
        }
        /* Fullscreen overlay centers the modal */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 10px;
        }
        /* Fixed modal container: 85% of viewport width & height */
        .floating-form {
          width: 85vw;
          height: 85vh;
          margin: auto;
        }
        /* Slide container fills the modal and centers its content */
        .slide-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: #2c3e50;
          border: 2px solid #34495e;
          border-radius: 4px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        /* Exit button */
        .slide-container .exit-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 16px;
          background: #89B8F6;
          border: 2px solid #89B8F6;
          border-radius: 2px;
          color: #ecf0f1;
          padding: 4px 8px;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          z-index: 1;
        }
        .slide-container .exit-btn:hover {
          background: #68A7E0;
          border-color: #68A7E0;
        }
        /* Each step's content is centered both vertically & horizontally */
        .step-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          text-align: center;
          padding: 5px;
        }
        /* Headings */
        h2 {
          font-size: 28px;
          font-weight: 300;
          text-align: center;
          color: #ecf0f1;
          margin: 0 0 10px;
        }
        .divider {
          height: 2px;
          background: #89B8F6;
          margin: 5px auto 10px;
          width: 40px;
        }
        /* Labels */
        label {
          display: block;
          margin-bottom: 4px;
          color: #ecf0f1;
          font-size: 16px;
        }
        label.required::after {
          content: " *";
          color: #e74c3c;
        }
        /* Text inputs */
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          border: 2px solid #34495e;
          border-radius: 2px;
          background: #34495e;
          color: #ecf0f1;
          outline: none;
          margin-bottom: 8px;
        }
        /* Options container for radio groups */
        .options-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
          width: 100%;
          max-width: 500px;
        }
        .options-container .option {
          display: flex;
          align-items: center;
          padding: 6px 10px;
          margin: 3px 0;
          border: 2px solid #34495e;
          border-radius: 2px;
          background: transparent;
          cursor: pointer;
          color: #ecf0f1;
          transition: background 0.3s ease;
          font-size: 16px;
        }
        .options-container .option:hover {
          background: rgba(137, 184, 246, 0.2);
        }
        /* Circular radio buttons */
        .option input {
          width: 18px;
          height: 18px;
          appearance: none;
          margin-right: 8px;
          background: transparent;
          border: 2px solid #34495e;
          border-radius: 50%;
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .option input:checked {
          background: #89B8F6;
          border: 2px solid #68A7E0;
          box-shadow: 0 0 5px rgba(137, 184, 246, 0.8),
                      0 0 15px rgba(137, 184, 246, 0.5),
                      0 0 20px rgba(104, 167, 224, 0.3);
        }
        .option input:checked:hover {
          box-shadow: 0 0 8px rgba(137, 184, 246, 1),
                      0 0 18px rgba(104, 167, 224, 0.7),
                      0 0 25px rgba(104, 167, 224, 0.5);
          border-color: #68A7E0;
        }
        /* Buttons */
        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .buttons button {
          padding: 6px 20px;
          font-size: 16px;
          background: #89B8F6;
          color: #ecf0f1;
          border: 2px solid #89B8F6;
          border-radius: 2px;
          cursor: pointer;
          margin: 4px;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .buttons button:hover {
          background: #68A7E0;
          border-color: #68A7E0;
        }
        /* Two-column container for Slide 3 questions */
        .two-column-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }
        .two-column-container .question {
          width: 50%;
          padding: 5px;
          box-sizing: border-box;
          text-align: center;
        }
        .two-column-container .question .options-container {
          display: inline-block;
          text-align: left;
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-form {
            width: 100vw;
            height: 100vh;
          }
          h2 {
            font-size: 24px;
          }
          label,
          .options-container .option,
          input[type="text"],
          input[type="email"],
          input[type="tel"] {
            font-size: 14px;
          }
          .buttons button {
            font-size: 14px;
            padding: 4px 12px;
          }
          .two-column-container .question {
            width: 100%;
          }
        }
      `}</style>

      <form className="floating-form" onSubmit={handleSubmit}>
        <div className="slide-container">
          <button type="button" className="exit-btn" onClick={closePopup}>
            Exit
          </button>

          {step === 1 && (
            <div className="step-content">
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
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h2>Can You Share a Little About Your Property?</h2>
              <div className="divider" />
              <label className="required">What's the Property Type?</label>
              <div className="options-container">
                <label className="option">
                  <input type="radio" name="propertyType" value="Residential" required />
                  <span>Residential</span>
                </label>
                <label className="option">
                  <input type="radio" name="propertyType" value="Commercial" />
                  <span>Commercial</span>
                </label>
              </div>
              <label className="required">Do You Own Your Home?</label>
              <div className="options-container">
                <label className="option">
                  <input type="radio" name="homeOwnership" value="Yes" required />
                  <span>Yes</span>
                </label>
                <label className="option">
                  <input type="radio" name="homeOwnership" value="No" />
                  <span>No</span>
                </label>
              </div>
              <label className="required">What's the Service Needed?</label>
              <div className="options-container">
                <label className="option">
                  <input type="radio" name="serviceNeeded" value="Remodel" required />
                  <span>Remodel</span>
                </label>
                <label className="option">
                  <input type="radio" name="serviceNeeded" value="Replace" />
                  <span>Replace</span>
                </label>
                <label className="option">
                  <input type="radio" name="serviceNeeded" value="Repair" />
                  <span>Repair</span>
                </label>
              </div>
              <label className="required">
                Does this project include a replacement, addition, or conversion of a bathtub or shower?
              </label>
              <div className="options-container">
                <label className="option">
                  <input type="radio" name="projectIncludesTubOrShower" value="Yes" required />
                  <span>Yes</span>
                </label>
                <label className="option">
                  <input type="radio" name="projectIncludesTubOrShower" value="No" />
                  <span>No</span>
                </label>
              </div>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h2>Please Provide Just a Few More Project Details!</h2>
              <div className="divider" />
              <div className="two-column-container">
                <div className="question">
                  <label className="required">Include changing the Floorplan?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="floorplan" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="floorplan" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className="question">
                  <label className="required">Involve Cabinet updates?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="cabinets" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="cabinets" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className="question">
                  <label className="required">Involve Countertop updates?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="countertops" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="countertops" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className="question">
                  <label className="required">Include Flooring updates?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="flooring" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="flooring" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className="question">
                  <label className="required">Include Sink Updates?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="sinks" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="sinks" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div className="question">
                  <label className="required">Include Toilet Updates?</label>
                  <div className="options-container">
                    <label className="option">
                      <input type="radio" name="toilet" value="Yes" required />
                      <span>Yes</span>
                    </label>
                    <label className="option">
                      <input type="radio" name="toilet" value="No" />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-content">
              <h2>Contact Information</h2>
              <div className="divider" />
              <div className="contact-container" style={{ width: "100%", maxWidth: "400px" }}>
                <label className="required">First Name:</label>
                <input type="text" name="firstName" required />
                <label className="required">Last Name:</label>
                <input type="text" name="lastName" required />
                <label className="required">Email Address:</label>
                <input type="email" name="email" required />
                <label className="required">Phone Number:</label>
                <input type="tel" name="phone" required />
              </div>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="button" onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="step-content">
              <h2>Confirm Your Location & Consent</h2>
              <div className="divider" />
              <div style={{ width: "100%", maxWidth: "400px" }}>
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
                <div className="options-container">
                  <label className="option">
                    <input type="radio" name="tcpaConsent" value="yes" required />
                    <span>Yes</span>
                  </label>
                  <label className="option">
                    <input type="radio" name="tcpaConsent" value="no" required />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div className="buttons">
                <button type="button" onClick={prevStep}>Back</button>
                <button type="submit">Get My Quotes</button>
              </div>
            </div>
          )}

        </div>
      </form>
    </div>
  );
};

export default FormModal;
