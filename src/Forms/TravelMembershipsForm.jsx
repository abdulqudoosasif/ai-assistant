import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const TravelMembershipsForm = ({ onClose }) => {
  const [memberships, setMemberships] = useState([
    { type: "Car Rental", company: "Avis", membershipNumber: "1234", status: "President Circle", notes: "" },
  ]);

  const { isDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setMemberships((prevMemberships) => {
      const updatedMemberships = [...prevMemberships];
      updatedMemberships[index][field] = value;
      return updatedMemberships;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Travel Memberships:", memberships);
  };

  return (
    <div className="fixed p-3 z-20 inset-0 mt-[12%] lg:mt-0 md:mt-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[600px] h-[500px] overflow-y-auto my-8 p-6 sm:p-10 rounded-lg shadow-lg border ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Travel Memberships
        </h3>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {/* Travel Memberships Fields */}
        {memberships.map((membership, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Type</label>
            <input
              type="text"
              value={membership.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
              placeholder="Type (Car Rental, Hotel, etc.)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Company</label>
            <input
              type="text"
              value={membership.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              placeholder="Company"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Membership Number</label>
            <input
              type="text"
              value={membership.membershipNumber}
              onChange={(e) => handleChange(index, "membershipNumber", e.target.value)}
              placeholder="Membership Number"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Status</label>
            <input
              type="text"
              value={membership.status}
              onChange={(e) => handleChange(index, "status", e.target.value)}
              placeholder="Status (e.g., President Circle)"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
            <label className="block text-sm font-medium mt-4">Notes</label>
            <textarea
              value={membership.notes}
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
          Save Travel Memberships
        </button>
      </form>
    </div>
  );
};

export default TravelMembershipsForm;
