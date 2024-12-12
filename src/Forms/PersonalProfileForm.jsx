import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoClose, IoSunny } from "react-icons/io5";
import { useTheme } from "../context/Button/ThemeProvider";

const PersonalProfileForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    nationality: "",
    languages: "",
    education: "",
    workHistory: "",
    hobbies: "",
  });

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
  };

  return (
    <div className=" fixed  z-10 inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[440px] h-[600px]  overflow-y-auto  my-8 p-6 sm:p-10 rounded-lg  shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-white/10"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Personal Profile
        </h3>

        {Object.entries({
          "Full Name": "fullName",
          "Date of Birth": "dob",
          Address: "address",
          Phone: "phone",
          Email: "email",
          Nationality: "nationality",
          "Languages Spoken": "languages",
          Education: "education",
          "Work History": "workHistory",
          Hobbies: "hobbies",
        }).map(([label, name]) => (
          <div key={name} className="mt-4">
            <label className="block text-sm font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={label}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200 border-gray-600"
                  : "bg-white/10 text-black border-[1px]"
              }`}
            />
          </div>
        ))}

        <button
          type="submit"
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "bg-black text-white hover:bg-gray-700"
          }`}
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default PersonalProfileForm;
