import React from "react";
import FormesterPopup from "../components/FormesterPopup"; // Adjust the path if necessary

const RemodelRates = () => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-0 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Learn More About Bathroom Remodel Costs
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          What Can You Expect to Pay?
        </p>
        <div className="border-t-2 border-blue-400 my-4"></div>

        <p className="text-gray-700 leading-relaxed">
          When considering a bathroom remodel, the cost can vary widely based on
          the size of the bathroom, the scope of the project, the materials used, and where you live.
          Here’s a breakdown to give you an idea of what you can expect to pay for a typical bathroom remodel:
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Average Costs</h2>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Basic Remodel:</strong> For a smaller bathroom or a simple refresh (repainting, new fixtures),
            the cost can range from <strong>$3,000 - $10,000</strong>. This might include a new toilet, sink, and basic tile or flooring.
          </li>
          <li>
            <strong>Mid-Range Remodel:</strong> A more extensive remodel with higher-quality materials,
            such as new cabinetry, upgraded fixtures, and better tile work, typically costs between <strong>$10,000 - $20,000</strong>.
          </li>
          <li>
            <strong>High-End Remodel:</strong> For a luxury bathroom with premium materials (like custom cabinetry, stone countertops,
            and high-end fixtures), the cost can go up to <strong>$30,000 or more</strong>.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Breakdown of Costs</h2>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Labor:</strong> Labor is often the most expensive part of the remodel, accounting for <strong>40%–65%</strong> of the total cost. The complexity of the work will significantly influence this.
          </li>
          <li>
            <strong>Materials:</strong> Tile, fixtures, and cabinetry can vary widely in price. High-quality stone tiles and custom vanities can drive the cost up.
          </li>
          <li>
            <strong>Plumbing & Electrical:</strong> If you're moving plumbing fixtures or adding new lighting, expect to pay more for professional work in these areas.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">What You Get for the Money</h2>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Low-End Remodel:</strong> Refreshing existing features, replacing an old vanity with a new one, retiling the shower or floor with basic tiles, and updating fixtures.
          </li>
          <li>
            <strong>Mid-Range Remodel:</strong> Replacing everything, from the vanity and countertops to the tub or shower, plus mid-range tiles and new lighting fixtures.
          </li>
          <li>
            <strong>Luxury Remodel:</strong> A complete overhaul with custom cabinetry, high-end materials like marble, underfloor heating, and custom showers or soaking tubs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Considerations for Your Budget</h2>
        <ul className="list-disc pl-6 my-4 text-gray-700">
          <li>
            <strong>Size of the Bathroom:</strong> Naturally, larger bathrooms will cost more to remodel than smaller ones.
          </li>
          <li>
            <strong>Quality of Materials:</strong> The price can significantly increase if you choose premium materials like natural stone or custom finishes.
          </li>
          <li>
            <strong>Customization:</strong> Custom-built elements (vanities, cabinets, etc.) will always add to the cost compared to pre-fabricated options.
          </li>
          <li>
            <strong>Hidden Costs:</strong> Older homes may come with surprises, like water damage or outdated wiring, that can increase the overall price.
          </li>
        </ul>

        <p className="text-gray-700 mt-4">
          A bathroom remodel can increase the value of your home, but it’s essential to balance your desires with your budget.
          Focus on improvements that enhance both function and aesthetics without going overboard on luxury unless it’s your forever home.
          You'll find that a well-done remodel, regardless of scale, can make your bathroom a more enjoyable and functional space while offering a good return on investment.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Industry Report & ROI</h2>
        <p className="text-gray-700 mt-4">
          According to a recent report by <strong>This Old House</strong>, bathroom remodels typically cost between <strong>$2,000 and $18,000</strong>, depending on the size of the bathroom and the scope of the project.
          For a <strong>midrange bathroom remodel</strong>, the average cost is <strong>$27,164</strong>, with a return on investment (ROI) of about <strong>58.9%</strong>.
          For smaller remodels, you could expect to pay around <strong>$5,500</strong> for more basic upgrades, while <strong>luxury remodels can exceed $50,000</strong>.
        </p>

        {/* Replace the window.open button with FormesterPopup */}
        <FormesterPopup />
      </div>
    </div>
  );
};

export default RemodelRates;
