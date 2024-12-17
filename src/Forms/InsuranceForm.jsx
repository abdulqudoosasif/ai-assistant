import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const InsuranceForm = ({ onClose }) => {
  const [insurance, setInsurance] = useState([
    {
      type: "Home",
      provider: "State Farm",
      policyNumber: "12345ABC",
      startDate: "2019-06-01",
      endDate: "N/A",
      premium: "$150",
      coverageDetails: "Fire, Theft, Flood",
      factors: '{"location": "Houston"}',
      linkedAsset: "Home",
      notes: "Active policy",
    },
  ]);

  const { isDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setInsurance((prevInsurance) => {
      const updatedInsurance = [...prevInsurance];
      updatedInsurance[index][field] = value;
      return updatedInsurance;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Insurance Information:", insurance);
  };

  return (
    <div className="fixed mt-[12%] lg:mt-0 md:mt-0 p-3 z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Insurance Information
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Insurance Fields */}
        {insurance.map((policy, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Type</label>
            <input
              type="text"
              value={policy.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
              placeholder="Type of insurance"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Provider</label>
            <input
              type="text"
              value={policy.provider}
              onChange={(e) => handleChange(index, "provider", e.target.value)}
              placeholder="Insurance provider"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Policy Number</label>
            <input
              type="text"
              value={policy.policyNumber}
              onChange={(e) => handleChange(index, "policyNumber", e.target.value)}
              placeholder="Policy number"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Start Date</label>
            <input
              type="date"
              value={policy.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">End Date</label>
            <input
              type="date"
              value={policy.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Premium</label>
            <input
              type="text"
              value={policy.premium}
              onChange={(e) => handleChange(index, "premium", e.target.value)}
              placeholder="Premium amount"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Coverage Details</label>
            <input
              type="text"
              value={policy.coverageDetails}
              onChange={(e) => handleChange(index, "coverageDetails", e.target.value)}
              placeholder="Coverage details"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Factors</label>
            <textarea
              value={policy.factors}
              onChange={(e) => handleChange(index, "factors", e.target.value)}
              placeholder="Factors (e.g., location, risks)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            ></textarea>
            <label className="block text-sm font-medium mt-4">Linked Asset</label>
            <input
              type="text"
              value={policy.linkedAsset}
              onChange={(e) => handleChange(index, "linkedAsset", e.target.value)}
              placeholder="Linked asset (e.g., Home)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Notes</label>
            <textarea
              value={policy.notes}
              onChange={(e) => handleChange(index, "notes", e.target.value)}
              placeholder="Additional notes"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            ></textarea>
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "bg-black text-white hover:bg-gray-700"
          }`}
        >
          Save Insurance Info
        </button>
      </form>
    </div>
  );
};

export default InsuranceForm;
