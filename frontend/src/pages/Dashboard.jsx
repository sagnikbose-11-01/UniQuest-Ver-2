// pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import UniversityDashboard from './UniversityDashboard';
import ApplicantDashboard from './ApplicantDashboard';


function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login'); // not logged in, redirect
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'university':
      return <UniversityDashboard />;
    default:
      return <ApplicantDashboard />;
  }
}

export default Dashboard;
