import React from "react";

const Timeline = () => {
  const events = [
    { day: "Thu", label: "Check Up", patients: 14, color: "bg-blue-200" },
    { day: "Fri", label: "Surgery", patients: 2, color: "bg-red-200" },
    { day: "Sat", label: "Vaccine", patients: 100, color: "bg-green-200" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">January 2021</h2>
      <div className="flex space-x-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex-1 p-4 rounded-lg ${event.color}`}
          >
            <h3 className="text-sm">{event.label}</h3>
            <p>{event.patients} patients</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
