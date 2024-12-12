import React from 'react'
import "simplebar-react/dist/simplebar.min.css";
import Sidebar from '../components/dashboard/Sidebar'
import SsubCalendar from '../components/calendar/subCalendar'
import AssistantProfileSection from '../components/dashboard/AssistantProfileSection'
import SimpleBar from 'simplebar-react';

function Calendar() {
  return (
    <div className='flex  h-screen bg-gray-100 '>
       <Sidebar/>
       <SimpleBar className="flex-1 p-6" style={{ height: "100vh" }}>
       <SsubCalendar/>
       </SimpleBar>
       <AssistantProfileSection/>
    </div>
  )
}

export default Calendar
