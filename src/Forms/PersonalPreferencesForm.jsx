import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const PersonalPreferencesForm = ({ onClose }) => {
  const [preferences, setPreferences] = useState([
    { type: "Cuisine", favoriteItem: "European, Fish" },
    { type: "Movie Genre", favoriteItem: "Comedy" },
    { type: "Music", favoriteItem: "Jazz" },
  ]);

  const { isDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setPreferences((prevPreferences) => {
      const updatedPreferences = [...prevPreferences];
      updatedPreferences[index][field] = value;
      return updatedPreferences;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Personal Preferences:", preferences);
  };

  return (
    <div className="fixed p-3 mt-[12%] lg:mt-0 md:mt-0 z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Personal Preferences
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Personal Preferences Fields */}
        {preferences.map((pref, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Type</label>
            <input
              type="text"
              value={pref.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
              placeholder="Type (Cuisine, Movie Genre, Music, etc.)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Favorite Item</label>
            <input
              type="text"
              value={pref.favoriteItem}
              onChange={(e) =>
                handleChange(index, "favoriteItem", e.target.value)
              }
              placeholder="Favorite Item"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
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
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default PersonalPreferencesForm;
