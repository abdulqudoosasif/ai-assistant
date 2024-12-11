import React from "react";

const ProfileSection = () => {
  const patients = [
    { name: "Arya Wijaya Kusuma", time: "9 AM - 11 AM" },
    { name: "Sherly Indriani", time: "10 AM - 11 AM" },
    { name: "Nafiu Efandy", time: "7 AM - 9 AM" },
  ];

  return (
    <div className="w-64 bg-white m-2 p-6 rounded-lg shadow">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-blue-200 rounded-full"></div>
        <h3 className="text-lg font-bold mt-2">Dr. Shabrina</h3>
      </div>
      <h4 className="text-sm font-bold mt-4">Last Patients</h4>
      <ul className="mt-2 space-y-2">
        {patients.map((patient, index) => (
          <li key={index} className="flex justify-between">
            <span>{patient.name}</span>
            <span className="text-gray-500 text-sm">{patient.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSection;
