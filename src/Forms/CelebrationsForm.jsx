import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const CelebrationsForm = ({ onClose }) => {
  const [celebrations, setCelebrations] = useState([
    { event: "Wedding Anniversary", person: "Wife", date: "2012-04-15", firstEvent: "2008", notes: "Celebrate every year with dinner" },
  ]);

  const { isDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setCelebrations((prevCelebrations) => {
      const updatedCelebrations = [...prevCelebrations];
      updatedCelebrations[index][field] = value;
      return updatedCelebrations;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Celebrations:", celebrations);
  };

  return (
    <div className="fixed mt-[12%] lg:mt-0 md:mt-0   z-20 p-3 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Celebrations
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Celebrations Fields */}
        {celebrations.map((celebration, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Event</label>
            <input
              type="text"
              value={celebration.event}
              onChange={(e) => handleChange(index, "event", e.target.value)}
              placeholder="Event (e.g., Wedding Anniversary)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Person</label>
            <input
              type="text"
              value={celebration.person}
              onChange={(e) => handleChange(index, "person", e.target.value)}
              placeholder="Person (e.g., Wife)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Date</label>
            <input
              type="date"
              value={celebration.date}
              onChange={(e) => handleChange(index, "date", e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">First Event</label>
            <input
              type="text"
              value={celebration.firstEvent}
              onChange={(e) => handleChange(index, "firstEvent", e.target.value)}
              placeholder="First Event Year"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Notes</label>
            <textarea
              value={celebration.notes}
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
              : "bg-black text-white hover:bg-gray-700"
          }`}
        >
          Save Celebration
        </button>
      </form>
    </div>
  );
};

export default CelebrationsForm;
