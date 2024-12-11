import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/Button/ThemeProvider';

const CommunicationForm = () => {
  const [contacts, setContacts] = useState([
    { name: '', relation: '', phone: '', email: '' },
  ]);

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts];
      updatedContacts[index][field] = value;
      return updatedContacts;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contacts:', contacts);
  };

  return (
    <div
      className={`min-h-screen flex relative items-center overflow-hidden justify-center px-4 ${
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
            isDarkMode
              ? 'bg-gradient-to-br from-purple-700 to-indigo-500'
              : 'bg-gradient-to-br from-[#000] to-[#e5ecff]'
          }`}
        ></div>
        <div
          className={`absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full -bottom-10 -right-6 sm:-bottom-20 sm:-right-8 ${
            isDarkMode
              ? 'bg-gradient-to-r from-purple-700 to-indigo-500'
              : 'bg-gradient-to-br to-[#000] from-[#e5ecff]'
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
          Communication
        </h3>

        {contacts.map((contact, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Contact Name</label>
            <input
              type="text"
              value={contact.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              placeholder="Contact Name"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />

            <label className="block text-sm font-medium mt-4">Relation</label>
            <input
              type="text"
              value={contact.relation}
              onChange={(e) => handleChange(index, 'relation', e.target.value)}
              placeholder="Relation"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />

            <label className="block text-sm font-medium mt-4">Phone</label>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => handleChange(index, 'phone', e.target.value)}
              placeholder="Phone"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />

            <label className="block text-sm font-medium mt-4">Email</label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => handleChange(index, 'email', e.target.value)}
              placeholder="Email"
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
          Save Contacts
        </button>
      </form>
    </div>
  );
};

export default CommunicationForm;