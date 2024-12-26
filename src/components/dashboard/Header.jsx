import React from "react";
import Reboot from "../../assets/img/robot.png";
import { RiMessage3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Get current date
  const currentDate = new Date();
  const navigation = useNavigate();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const handleChat = () => {
    navigation('/chat');
  };

  return (
    <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center bg-white p-6 rounded-lg mt-[5vh] shadow">
   <div className="relative">
  <img
    src={Reboot}
    className="h-[170px] lg:block md:block hidden lg:absolute md:absolute md:ml-[-50px] ml-1 lg:ml-[-50px] mt-[-10vh]"
    alt="Robot"
  />

        <div className="lg:ml-[100px]">
          <p className="text-sm text-gray-500">{formattedDate}</p>
          <h1 className="lg:text-2xl md:text-2xl font-bold">Welcome to AI Assistant</h1>
          <p className="text-sm text-gray-500">What I can help you today?</p>
        </div>
      </div>
      <button onClick={handleChat} className="bg-blue-500 text-white px-4 py-2 gap-2 w-fit mt-4 rounded-lg flex items-center">
       Let's Chat
       <RiMessage3Fill />
      </button>
    </div>
  );
};

export default Header;
