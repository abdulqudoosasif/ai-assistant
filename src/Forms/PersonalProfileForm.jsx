import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/Button/ThemeProvider';

const PersonalProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    nationality: '',
    languages: '',
    education: '',
    workHistory: '',
    hobbies: '',
  });

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', formData);
  };

  return (
    <div
      className={`min-h-screen flex relative items-center justify-center px-4 ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-black'
      } transition-all`}
    >
      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute py-1 px-3 top-1 right-1 rounded-md text-white text-sm font-semibold"
      >
        {isDarkMode ? <IoSunny /> : <BsFillMoonStarsFill className="text-gray-800" />}
      </button>

      {/* Background shapes */}
      <div className="absolute w-[90%] max-w-[600px] h-[700px]">
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -top-10 -left-10 sm:-top-20 sm:-left-20 ${
            isDarkMode ? 'bg-gradient-to-br from-purple-700 to-indigo-500' : 'bg-gradient-to-br from-[#000] to-[#e5ecff]'
          }`}
        ></div>
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -bottom-10 -right-6 sm:-bottom-20 sm:-right-8 ${
            isDarkMode ? 'bg-gradient-to-r from-purple-700 to-indigo-500' : 'bg-gradient-to-br to-[#000] from-[#e5ecff]'
          }`}
        ></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[440px] my-8 p-6 sm:p-10 rounded-lg backdrop-blur-md shadow-lg border ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/10 border-white/10'
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Personal Profile
        </h3>

        {Object.entries({
          'Full Name': 'fullName',
          'Date of Birth': 'dob',
          Address: 'address',
          Phone: 'phone',
          Email: 'email',
          Nationality: 'nationality',
          'Languages Spoken': 'languages',
          Education: 'education',
          'Work History': 'workHistory',
          Hobbies: 'hobbies',
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
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
          </div>
        ))}

        <button
          type="submit"
          className={`w-full mt-6 py-3 font-semibold rounded-md transition ${
            isDarkMode
              ? 'bg-indigo-600 hover:bg-indigo-500'
              : 'bg-black text-white hover:bg-gray-700'
          }`}
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default PersonalProfileForm;
