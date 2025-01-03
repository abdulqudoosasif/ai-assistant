import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import Signup from './Pages/Auth/Signup';
import MultiStepForm from './Pages/MultiStepForm';
import Home from './Pages/Home';
import { ThemeProvider } from './context/Button/ThemeProvider';
import PersonalProfileForm from './Forms/PersonalProfileForm';
import FamilyRelationshipsForm from './Forms/FamilyRelationshipsForm';
import DailyScheduleForm from './Forms/EducationForm';
import CommunicationForm from './Forms/WorkForm';
import Calendar from './Pages/Calendar';
import Chat from './Pages/Chat';
import Setting from './Pages/Setting';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/multi-step-form" element={<MultiStepForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal-profile-form" element={<PersonalProfileForm />} />
          <Route path="/family-relationships-form" element={<FamilyRelationshipsForm />} />
          <Route path="/daily-schedule-form" element={<DailyScheduleForm />} />
          <Route path="/communication-form" element={<CommunicationForm />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/setting" element={<Setting/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}