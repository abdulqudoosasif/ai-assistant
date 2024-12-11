import React from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoLogOut, IoSettings } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="w-16 bg-blue-500 rounded-lg m-2  py-4  flex flex-col items-center justify-between">
     <div className="text-white flex flex-col items-center">
     <button
          className="flex flex-col items-center my-4 text-sm"
        >
          <div className="text-2xl"><TiHome /></div>

        </button>
        <button
          className="flex flex-col items-center my-4 text-sm"
        >
          <div className="text-2xl"><RiMessage3Fill /></div>

        </button>
        <button
          className="flex flex-col items-center my-4 text-sm"
        >
          <div className="text-2xl"><BsCalendarEventFill /></div>

        </button>
        <button
          className="flex flex-col items-center my-4 text-sm"
        >
          <div className="text-2xl"><IoSettings /></div>

        </button>
     </div>

     <button
          className="flex flex-col items-center text-white my-4 text-sm"
        >
          <div className="text-2xl"><IoLogOut /></div>

        </button>
    </div>
  );
};

export default Sidebar;
