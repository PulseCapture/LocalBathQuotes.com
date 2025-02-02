import React, { useState, useEffect } from "react";

const RemodelEstimator = () => {
  const [formData, setFormData] = useState({
    size: 50,
    quality: "standard",
    fixtures: "standard",
    flooring: "tile",
    extras: [],
    plumbing: "standard",
    electrical: "standard",
    lighting: "standard",
    accessibility: "no",
  });

  const [laborCost, setLaborCost] = useState(50);
  const [materialCost, setMaterialCost] = useState(75);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    async function fetchRealTimeCosts() {
      try {
        const response = await fetch("https://api.example.com/remodel-cost");
        const data = await response.json();
        setLaborCost(data.labor);
        setMaterialCost(data.materials);
      } catch (error) {
        console.error("Error fetching cost data:", error);
      }
    }

    fetchRealTimeCosts();
  }, []);

  useEffect(() => {
    let qualityMultiplier = formData.quality === "budget" ? 0.8 : formData.quality === "luxury" ? 1.5 : 1;
    let calculatedCost = formData.size * (laborCost + materialCost) * qualityMultiplier;
    setTotalCost(calculatedCost);
  }, [formData, laborCost, materialCost]);

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800">Bathroom Remodel Cost Estimator</h2>
      
      <div className="mt-4">
        <label className="block font-semibold">Bathroom Size (sq ft): {formData.size}</label>
        <input
          type="range"
          min="30"
          max="200"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          className="w-full"
        />
      </div>

      <div className="mt-4">
        <label className="block font-semibold">Quality Level:</label>
        <select
          value={formData.quality}
          onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="budget">Budget</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold">Estimated Cost:</h3>
        <p className="text-3xl font-semibold text-blue-600">${totalCost.toFixed(2)}</p>
      </div>

      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          Open Detailed Remodel Estimator
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-center mb-4">Step {step} of 4</h3>
            {step === 1 && (
              <div>
                <label className="block font-semibold">Select Fixtures:</label>
                <select
                  value={formData.fixtures}
                  onChange={(e) => setFormData({ ...formData, fixtures: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            )}
            {step === 2 && (
              <div>
                <label className="block font-semibold">Select Plumbing Work:</label>
                <select
                  value={formData.plumbing}
                  onChange={(e) => setFormData({ ...formData, plumbing: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="standard">Standard</option>
                  <option value="major">Major Work</option>
                </select>
              </div>
            )}
            {step === 3 && (
              <div>
                <label className="block font-semibold">Lighting Upgrades:</label>
                <select
                  value={formData.lighting}
                  onChange={(e) => setFormData({ ...formData, lighting: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="basic">Basic</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            )}
            {step === 4 && (
              <div>
                <h4 className="text-lg font-semibold">Final Estimate</h4>
                <p>Fixtures: {formData.fixtures}</p>
                <p>Plumbing: {formData.plumbing}</p>
                <p>Lighting: {formData.lighting}</p>
              </div>
            )}
            <div className="mt-4 flex justify-between">
              {step > 1 && <button onClick={() => setStep(step - 1)} className="bg-gray-300 px-4 py-2 rounded">Back</button>}
              {step < 4 && <button onClick={() => setStep(step + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>}
              {step === 4 && <button onClick={() => setShowModal(false)} className="bg-green-500 text-white px-4 py-2 rounded">Finish</button>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RemodelEstimator;
