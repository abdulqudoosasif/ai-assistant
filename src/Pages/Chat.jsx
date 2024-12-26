import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Sidebar from "../components/dashboard/Sidebar";
import ProfileSection from "../components/dashboard/AssistantProfileSection";
import ChatInterFace from "../components/chat/ChatInterFace";

const Chat = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <SimpleBar className="flex-1 py-3 " style={{ height: "100vh" }}> 
       <ChatInterFace/>
       </SimpleBar>
      <ProfileSection />
    </div>
  );
};

export default Chat;