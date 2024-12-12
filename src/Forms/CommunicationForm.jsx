import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoClose, IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/Button/ThemeProvider';

const CommunicationForm = ({onClose}) => {
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
    <div className=" absolute  z-10 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[440px] h-[600px] overflow-y-auto  my-8 p-6 sm:p-10 rounded-lg  shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-white/10"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Communication
        </h3>
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

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