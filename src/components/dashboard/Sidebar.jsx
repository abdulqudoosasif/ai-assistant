import React from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoLogOut, IoSettings } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigation = useNavigate()

  const handleHome =()=>{
    navigation('/home')
}
  const handlecalendar =()=>{
         navigation('/calendar')
  }
  return (
    <div className="w-16 bg-blue-700 rounded-lg m-2  py-4  flex flex-col items-center justify-between">
     <div className="text-white flex flex-col items-center">
     <button
           onClick={handleHome}
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
          onClick={handlecalendar}
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
