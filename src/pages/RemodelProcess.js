import React from "react";
import FormesterPopup from "../components/FormesterPopup"; // Adjust the path if necessary

const RemodelProcess = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6 bg-gray-120">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Remodel Process
        </h1>
        <div className="border-t-2 border-blue-400 my-4"></div>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Plan Your Bathroom Remodel</strong> - Define your goals, set a budget, create a design, and hire professionals if needed.
          </li>
          <li>
            <strong>Measure Your Space</strong> - Measure floor space, wall dimensions, and existing fixtures to plan accurately.
          </li>
          <li>
            <strong>Obtain Necessary Permits</strong> - Check local building codes and secure permits for plumbing and electrical work.
          </li>
          <li>
            <strong>Demolish the Existing Bathroom</strong> - Turn off the water, remove old fixtures, and dispose of debris responsibly.
          </li>
          <li>
            <strong>Address Plumbing and Electrical</strong> - Update pipes, relocate fixtures, and ensure modern safety standards.
          </li>
          <li>
            <strong>Install or Repair Structural Elements</strong> - Reinforce walls, fix subflooring issues, and prepare surfaces for new materials.
          </li>
          <li>
            <strong>Install the Bathtub or Shower</strong> - Choose from freestanding, alcove, or walk-in showers with waterproofing.
          </li>
          <li>
            <strong>Tile Walls and Floors</strong> - Use moisture-resistant tiles for walls and non-slip tiles for floors.
          </li>
          <li>
            <strong>Install the Vanity, Sink, and Toilet</strong> - Secure vanities, connect plumbing, and ensure leak-free toilet installation.
          </li>
          <li>
            <strong>Add Lighting and Ventilation</strong> - Install task lighting and exhaust fans to enhance safety and comfort.
          </li>
          <li>
            <strong>Paint Walls and Ceilings</strong> - Use mold-resistant, washable paints in neutral tones for a spacious feel.
          </li>
          <li>
            <strong>Install Accessories and Final Touches</strong> - Add mirrors, hardware, storage, and decorative elements.
          </li>
          <li>
            <strong>Clean and Inspect</strong> - Remove dust, test all fixtures, and ensure functionality before use.
          </li>
          <li>
            <strong>Enjoy Your New Bathroom!</strong> - Maintain cleanliness and address any issues early to keep your remodel in top condition.
          </li>
        </ul>
        {/* Use the FormesterPopup component instead of the existing button */}
        <FormesterPopup />
      </div>
    </div>
  );
};

export default RemodelProcess;
