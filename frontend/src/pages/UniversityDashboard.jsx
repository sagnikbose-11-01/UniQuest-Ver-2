// pages/UniversityDashboard.jsx
import React from "react";
import {
  FaThLarge,
  FaFileAlt,
  FaBookOpen,
  FaComments,
  FaShieldAlt,
  FaDollarSign,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./UniversityDashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

function UniversityDashboard() {
  const navigate = useNavigate();

  // ✅ Get logged-in user info
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userName =
    storedUser?.fullName || storedUser?.name || "University Admin";

  // ✅ Optional: Create initials for avatar
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // ✅ Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login page
  };

  const appGrowthData = [
    { name: "0", applications: 45, accepted: 28 },
    { name: "1", applications: 52, accepted: 30 },
    { name: "2", applications: 49, accepted: 29 },
    { name: "3", applications: 61, accepted: 39 },
    { name: "4", applications: 55, accepted: 35 },
    { name: "5", applications: 70, accepted: 42 },
  ];

  const revenueData = [
    { name: "0", revenue: 3000, target: 4000 },
    { name: "1", revenue: 3800, target: 3900 },
    { name: "2", revenue: 3400, target: 3700 },
    { name: "3", revenue: 4300, target: 3900 },
    { name: "4", revenue: 4200, target: 4000 },
    { name: "5", revenue: 4800, target: 3900 },
  ];

  const programData = [
    { name: "Computer Science", value: 145 },
    { name: "Engineering", value: 98 },
    { name: "Business", value: 87 },
    { name: "Medicine", value: 56 },
    { name: "Arts", value: 34 },
  ];

  const COLORS = ["#00E5FF", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

  return (
    <div className="univ-dashboard">
      {/* Sidebar */}
      <aside className="univ-sidebar">
        <div className="univ-profile">
          <div className="avatar">{initials}</div>
          <div>
            <h3>{userName}</h3>
            <p>Admissions</p>
          </div>
        </div>

        <nav className="univ-menu">
          <a href="#" className="active">
            <FaThLarge /> Overview
          </a>
          <a href="/dashboard/university/applications">
            <FaFileAlt /> Applications
          </a>
          <a href="/dashboard/university/programs">
            <FaBookOpen /> Programs & Courses
          </a>
          <a href="#">
            <FaComments /> Communications <span className="badge">7</span>
          </a>
          <a href="/dashboard/university/documents">
            <FaShieldAlt /> Document Verification{" "}
            <span className="badge">3</span>
          </a>
          <a href="#">
            <FaDollarSign /> Payments & Invoices
          </a>
          <a href="/dashboard/university/analytics">
            <FaChartBar /> Analytics & Reports
          </a>
          <a href="#">
            <FaCog /> Settings
          </a>
        </nav>

        {/* ✅ Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="univ-content">
        <h1>Dashboard Overview</h1>
        <p>
          Welcome back, {userName}! Here’s your admissions data at a glance.
        </p>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Applications</h3>
            <h2>328</h2>
            <p className="success">↑ 12% from last month</p>
          </div>
          <div className="stat-card">
            <h3>Pending Review</h3>
            <h2>45</h2>
            <p className="danger">↓ 15% to review</p>
          </div>
          <div className="stat-card">
            <h3>Accepted</h3>
            <h2>204</h2>
            <p className="success">↑ 62% acceptance rate</p>
          </div>
          <div className="stat-card">
            <h3>Rejected</h3>
            <h2>24</h2>
            <p className="info">↑ 7% rejection rate</p>
          </div>
          <div className="stat-card">
            <h3>Payments Received</h3>
            <h2>$28,500</h2>
            <p className="success">↑ 18% increase</p>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="btn cyan">Review Applications</button>
            <button className="btn blue">Upload Results</button>
            <button className="btn green">Send Offers</button>
            <button className="btn purple">Add Program</button>
          </div>
        </section>

        {/* Charts Section */}
        <div className="charts-grid">
          <div className="chart-box">
            <h3>Applications Growth</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={appGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2a48" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#00e5ff" />
                <Line type="monotone" dataKey="accepted" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h3>Revenue Trends</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2a48" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#00E5FF" />
                <Bar dataKey="target" fill="#9CA3AF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Section */}
        <div className="insights-grid">
          <div className="insight-box">
            <h3>📊 AI Insights</h3>
            <div className="insight-item">
              <h4>Peak Submission Period</h4>
              <p>Most applicants submit between April-June. Plan accordingly.</p>
            </div>
            <div className="insight-item">
              <h4>Top Applicant Region</h4>
              <p>Most applicants this month are from Asia (38%).</p>
            </div>
            <div className="insight-item">
              <h4>Acceptance Rate Trend</h4>
              <p>Your acceptance rate improved by 8% this quarter.</p>
            </div>
          </div>

          <div className="chart-box">
            <h3>Applications by Program</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={programData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {programData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UniversityDashboard;
