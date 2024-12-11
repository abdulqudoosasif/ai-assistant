import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Stats from "../components/dashboard/Stats";
import Timeline from "../components/dashboard/Timeline";
import ProfileSection from "../components/dashboard/ProfileSection";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <Header />
        <Stats />
        <Timeline />
      </div>
      <ProfileSection />
    </div>
  );
};

export default Home;
