import React from "react";

const AssistantProfileSection = () => {
  const interactions = [
    { user: "Arya Wijaya Kusuma", query: "Schedule a meeting", time: "9:30 AM" },
    { user: "Sherly Indriani", query: "Set a reminder", time: "10:15 AM" },
    { user: "Nafiu Efandy", query: "Check emails", time: "8:45 AM" },
  ];

  return (
    <div className="w-72 lg:block md:block hidden  bg-gray-800 m-2 text-gray-200 p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          AI
        </div>
        <h3 className="text-lg font-bold mt-3">AI Assistant</h3>
        <p className="text-sm  text-gray-400">Your virtual helper</p>
      </div>
      <h4 className="text-sm font-bold mt-6">Recent Interactions</h4>
      <ul className="mt-3 space-y-3">
        {interactions.map((interaction, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow-sm">
            <div>
              <p className="font-medium">{interaction.user}</p>
              <p className="text-sm text-gray-400">{interaction.query}</p>
            </div>
            <span className="text-xs text-gray-500">{interaction.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssistantProfileSection;
