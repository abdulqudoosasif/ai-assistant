import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Stats from "../components/dashboard/Stats";
import ProfileSection from "../components/dashboard/AssistantProfileSection";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar />
      <SimpleBar className="flex-1 p-6 " style={{ height: "100vh" }}>
        <Header />
        <Stats />
      </SimpleBar>
      <ProfileSection />
    </div>
  );
};

export default Home;
