import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoClose, IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/Button/ThemeProvider';

const FamilyRelationshipsForm = ({ onClose }) => {
  const [formData, setFormData] = useState([
    { name: '', relationship: '', birthday: '', notes: '' },
  ]);

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Family Data:', formData);
  };

  return (
    <div className=" fixed mt-[12%] lg:mt-0 md:mt-0 p-3  z-20 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[400px] max-h-[70vh] overflow-y-auto  my-8 p-6 sm:p-10 rounded-lg  shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white"
        }`}
      >
            <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Family and Relationships
        </h3>

        {formData.map((row, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={row.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              placeholder="Name"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
            <label className="block text-sm font-medium mt-4">Relationship</label>
            <input
              type="text"
              value={row.relationship}
              onChange={(e) => handleChange(index, 'relationship', e.target.value)}
              placeholder="Relationship"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
            <label className="block text-sm font-medium mt-4">Birthday</label>
            <input
              type="date"
              value={row.birthday}
              onChange={(e) => handleChange(index, 'birthday', e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
            <label className="block text-sm font-medium mt-4">Notes</label>
            <textarea
              value={row.notes}
              onChange={(e) => handleChange(index, 'notes', e.target.value)}
              placeholder="Notes"
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            ></textarea>
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
          Save Relationships
        </button>
      </form>
   </div>
  );
};
export default FamilyRelationshipsForm;
