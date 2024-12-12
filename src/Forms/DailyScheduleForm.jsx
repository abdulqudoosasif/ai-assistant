import React, { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoClose, IoSunny } from 'react-icons/io5';
import { useTheme } from '../context/Button/ThemeProvider';

const DailyScheduleForm = ({onClose}) => {
  const [schedule, setSchedule] = useState([
    { date: '', time: '', event: '', notes: '' },
  ]);

  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChange = (index, field, value) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[index][field] = value;
      return updatedSchedule;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Daily Schedule:', schedule);
  };

  return (
 <div className=" fixed  z-10 inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className={`relative w-full max-w-[440px] h-[600px] overflow-y-auto  my-8 p-6 sm:p-10 rounded-lg  shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-white/10"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Daily Schedule and Tasks
        </h3>
        <button
          onClick={onClose}
          className="absolute top-2 left-2 border-2 w-fit rounded-sm hover:bg-red-600 hover:text-white"
        >
          <IoClose size={20} />
        </button>

        {schedule.map((row, index) => (
          <div key={index} className="mt-4">
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              value={row.date}
              onChange={(e) => handleChange(index, 'date', e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
            <label className="block text-sm font-medium mt-4">Time</label>
            <input
              type="time"
              value={row.time}
              onChange={(e) => handleChange(index, 'time', e.target.value)}
              className={`w-full mt-2 p-3 rounded-md outline-none text-sm placeholder-gray-400 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-200 border-gray-600'
                  : 'bg-white/10 text-black border-[1px]'
              }`}
            />
            <label className="block text-sm font-medium mt-4">Event</label>
            <input
              type="text"
              value={row.event}
              onChange={(e) => handleChange(index, 'event', e.target.value)}
              placeholder="Event"
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
          Save Schedule
        </button>
      </form>
    </div>
  );
};

export default DailyScheduleForm;
