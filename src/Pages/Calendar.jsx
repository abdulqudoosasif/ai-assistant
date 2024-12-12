import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Calendar</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="datetime-local"
          value={newEvent.start}
          onChange={(e) =>
            setNewEvent({ ...newEvent, start: new Date(e.target.value) })
          }
          style={{ marginRight: "10px" }}
        />
        <input
          type="datetime-local"
          value={newEvent.end}
          onChange={(e) =>
            setNewEvent({ ...newEvent, end: new Date(e.target.value) })
          }
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddEvent}>+ Add Task</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;