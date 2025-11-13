// pages/AdminDashboard.jsx
import React from "react";
import {
  FaThLarge,
  FaUsers,
  FaUniversity,
  FaChartLine,
  FaDollarSign,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaFileAlt, // ✅ add this missing icon
} from "react-icons/fa";

import "./AdminDashboard.css";
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

function AdminDashboard() {
  const navigate = useNavigate();

  // ✅ Get logged-in admin name from localStorage
  const storedAdmin = JSON.parse(localStorage.getItem("user"));
  const adminName = storedAdmin?.fullName || storedAdmin?.name || "Admin";

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Sample Data for Charts
  const appGrowthData = [
    { name: "0", applications: 400, accepted: 250 },
    { name: "1", applications: 550, accepted: 300 },
    { name: "2", applications: 670, accepted: 380 },
    { name: "3", applications: 720, accepted: 450 },
    { name: "4", applications: 910, accepted: 590 },
    { name: "5", applications: 1050, accepted: 640 },
  ];

  const pieData = [
    { name: "Accepted", value: 2850 },
    { name: "Pending", value: 1920 },
    { name: "In Review", value: 1200 },
    { name: "Rejected", value: 980 },
  ];

  const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

  const revenueData = [
    { name: "0", revenue: 45000 },
    { name: "1", revenue: 38000 },
    { name: "2", revenue: 52000 },
    { name: "3", revenue: 61000 },
    { name: "4", revenue: 55000 },
  ];

  return (
    <div className="admin-dashboard">
      {/* ===== SIDEBAR ===== */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <FaChartLine className="logo-icon" />
          <h2>UniQuest Admin</h2>
        </div>

        <nav className="admin-nav">
          <a href="#" className="active">
            <FaThLarge /> Overview
          </a>
          <a href="#">
            <FaUsers /> User Management <span className="badge">5</span>
          </a>
          <a href="#">
            <FaUniversity /> Universities <span className="badge">3</span>
          </a>
          <a href="#">
            <FaChartLine /> Analytics & Trends
          </a>
          <a href="#">
            <FaDollarSign /> Financial Dashboard
          </a>
          <a href="#">
            <FaBell /> Notifications <span className="badge">2</span>
          </a>
          <a href="#">
            <FaCog /> Platform Settings
          </a>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="admin-content">
        <header>
          <h1>
            Welcome back, <span>{adminName}!</span> 👋
          </h1>
          <p>Here’s your complete overview of the UniQuest platform</p>
        </header>

        {/* ===== TOP CARDS ===== */}
        <div className="top-stats">
          <div className="card">
            <div className="icon-box teal">
              <FaUniversity />
            </div>
            <div>
              <h4>Universities Onboarded</h4>
              <h2>248</h2>
              <p className="success">↑ 12% from last month</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-box blue">
              <FaUsers />
            </div>
            <div>
              <h4>Total Students</h4>
              <h2>15.2K</h2>
              <p className="success">↑ 8% from last month</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-box green">
              <FaFileAlt />
            </div>
            <div>
              <h4>Applications</h4>
              <h2>6.9K</h2>
              <p className="success">↑ 25% from last month</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-box gold">
              <FaChartLine />
            </div>
            <div>
              <h4>Acceptance Rate</h4>
              <h2>41%</h2>
              <p className="success">↑ 2% from last month</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-box purple">
              <FaDollarSign />
            </div>
            <div>
              <h4>Total Revenue</h4>
              <h2>$2.4M</h2>
              <p className="success">↑ 18% from last month</p>
            </div>
          </div>
        </div>

        {/* ===== AI INSIGHTS ===== */}
        <div className="ai-insights">
          <h3>🤖 AI Insights</h3>
          <p>
            📊 Applications from Asia surged <strong>25%</strong> this week,
            driven by increased marketing campaigns. Engineering programs lead
            with 38% of total applications. Payment success rate improved to{" "}
            <strong>94%</strong>.
          </p>
        </div>

        {/* ===== CHARTS ===== */}
        <div className="charts-section">
          <div className="chart-box">
            <h3>Applications Growth Over Time</h3>
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
            <h3>Application Status Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ===== REVENUE ===== */}
        <div className="chart-box wide">
          <h3>Revenue by University (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2a48" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#00E5FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ===== SYSTEM HEALTH ===== */}
        <div className="system-health">
          <div className="health-card">
            <h4>Pending Approvals</h4>
            <h2>5</h2>
            <button className="review-btn">Review Now</button>
          </div>
          <div className="health-card alerts">
            <h4>System Alerts</h4>
            <h2 className="alert-num">2</h2>
            <button className="alert-btn">Check Alerts</button>
          </div>
          <div className="health-card">
            <h4>System Health</h4>
            <h2 className="success">99.8%</h2>
            <p>Uptime (30 days)</p>
          </div>
        </div>

        {/* ===== RECENT ACTIVITIES ===== */}
        <div className="recent-activity">
          <h3>🕒 Recent Admin Activities</h3>
          <ul>
            <li>✅ Approved 3 new university registrations</li>
            <li>💬 Responded to 12 user support tickets</li>
            <li>📤 Published a new system update report</li>
            <li>📈 Reviewed application trends for October</li>
          </ul>
        </div>

        {/* ===== TOP UNIVERSITIES ===== */}
        <div className="top-universities">
          <h3>🏆 Top Performing Universities</h3>
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Applications</th>
                <th>Acceptance Rate</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IIT Bombay</td>
                <td>3.2K</td>
                <td>64%</td>
                <td>$520K</td>
              </tr>
              <tr>
                <td>Stanford University</td>
                <td>2.9K</td>
                <td>70%</td>
                <td>$480K</td>
              </tr>
              <tr>
                <td>University of Toronto</td>
                <td>2.1K</td>
                <td>58%</td>
                <td>$410K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
