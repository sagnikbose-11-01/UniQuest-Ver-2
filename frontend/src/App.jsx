// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Programs from './pages/Programs';
import HowToApply from './pages/HowToApply';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UniversityDashboard from './pages/UniversityDashboard';
import ApplicantDashboard from './pages/ApplicantDashboard';
import NewApplication from "./pages/NewApplication";
import ProgramsCourses from "./pages/ProgramsCourses";
import DocVerify from "./pages/DocVerify";
import Analytics from "./pages/Analytics";
import Applications from "./pages/Applications";

import './App.css';

function App() {
  // mock user role for Dashboard
  const role = 'applicant'; // change to 'university' or 'admin' to test

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/university" element={<UniversityDashboard />} />
            <Route path="/dashboard/university/programs" element={<ProgramsCourses />} />
            <Route path="/dashboard/university/documents" element={<DocVerify />} />
            <Route path="/dashboard/university/analytics" element={<Analytics />} />
            <Route path="/dashboard/university/applications" element={<Applications />} />
            <Route path="/dashboard/applicant" element={<ApplicantDashboard />} />
            <Route path="/dashboard/applicant/new-application" element={<NewApplication />} />




        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
