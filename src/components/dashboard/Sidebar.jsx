import React, { useState } from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoLogOut, IoSettings } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const handleHome = () => {
    navigation('/home');
  };
  
  const handleCalendar = () => {
    navigation('/calendar');
  };

  return (
    <div>
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex w-16 bg-blue-700 rounded-lg m-2 py-4 flex-col items-center justify-between">
        <div className="text-white flex flex-col items-center">
          <button onClick={handleHome} className="flex flex-col items-center my-4 text-sm">
            <div className="text-2xl"><TiHome /></div>
          </button>
          <button className="flex flex-col items-center my-4 text-sm">
            <div className="text-2xl"><RiMessage3Fill /></div>
          </button>
          <button onClick={handleCalendar} className="flex flex-col items-center my-4 text-sm">
            <div className="text-2xl"><BsCalendarEventFill /></div>
          </button>
          <button className="flex flex-col items-center my-4 text-sm">
            <div className="text-2xl"><IoSettings /></div>
          </button>
        </div>
        <button className="flex flex-col items-center text-white my-4 text-sm">
          <div className="text-2xl"><IoLogOut /></div>
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div className="lg:hidden w-full bg-blue-500 fixed z-10 flex justify-between items-center p-2">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {/* Toggle button */}
          <span>{isOpen ? "X" : "☰"}</span>
        </button>
      </div>

      {/* Sidebar content when toggle is open */}
      {isOpen && (
        <div className="lg:hidden top-12 fixed inset-0 bg-blue-500 p-4  w-fit h-fit z-10">
          <button onClick={handleHome} className="flex items-center gap-4 my-4 text-sm text-white">
            <div className="text-2xl"><TiHome /></div>
            Home
          </button>
          <button className="flex items-center my-4 gap-4 text-sm text-white">
            <div className="text-2xl"><RiMessage3Fill /></div>
            Message
          </button>
          <button onClick={handleCalendar} className="flex items-center my-4 gap-4 text-sm text-white">
            <div className="text-2xl"><BsCalendarEventFill /></div>
            Calendar
          </button>
          <button className="flex items-center my-4 gap-4 text-sm text-white">
            <div className="text-2xl"><IoSettings /></div>
            Setting
          </button>
          <button className="flex items-center text-white my-4 gap-4 text-sm">
            <div className="text-2xl"><IoLogOut /></div>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
