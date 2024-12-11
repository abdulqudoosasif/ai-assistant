import React from "react";
import Reboot from "../../assets/img/robot.png";
import { RiMessage3Fill } from "react-icons/ri";

const Header = () => {
  // Get current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg mt-[5vh] shadow">
      <div className="relative">
        <img
          src={Reboot}
          className="h-[170px] absolute ml-[-50px] mt-[-10vh]"
          alt="Robot"
        />
        <div className="ml-[100px]">
          <p className="text-sm text-gray-500">{formattedDate}</p>
          <h1 className="text-2xl font-bold">Welcome to AI Assistant</h1>
          <p className="text-sm text-gray-500">What can I help you with today?</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 gap-2 rounded-lg flex items-center">
       Let's Chat
       <RiMessage3Fill />
      </button>
    </div>
  );
};

export default Header;
