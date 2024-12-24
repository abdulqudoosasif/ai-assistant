import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const TravelHistoryForm = ({ onClose }) => {
  const [travelHistory, setTravelHistory] = useState([
    { destination: "Orlando, FL", dates: "2024-03-15 to 2024-03-20", notes: "Family vacation to Disney" },
    { destination: "Austin, TX", dates: "2024-06-10", notes: "Business meeting" },
  ]);

  const { isDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setTravelHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory[index][field] = value;
      return updatedHistory;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Travel History:", travelHistory);
  };

  return (
    <div className="fixed p-3 z-20 mt-[12%] lg:mt-0 md:mt-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Travel History
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Travel History Fields */}
        {travelHistory.map((row, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Destination</label>
            <input
              type="text"
              value={row.destination}
              onChange={(e) => handleChange(index, "destination", e.target.value)}
              placeholder="Destination"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Dates</label>
            <input
              type="text"
              value={row.dates}
              onChange={(e) => handleChange(index, "dates", e.target.value)}
              placeholder="Dates"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Notes</label>
            <textarea
              value={row.notes}
              onChange={(e) => handleChange(index, "notes", e.target.value)}
              placeholder="Notes"
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
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Save Travel History
        </button>
      </form>
    </div>
  );
};

export default TravelHistoryForm;
