import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './Pages/Auth/LoginPage';
import Signup from './Pages/Auth/Signup';
import MultiStepForm from './Pages/MultiStepForm';
import Home from './Pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/multi-step-form" element={<MultiStepForm/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}
