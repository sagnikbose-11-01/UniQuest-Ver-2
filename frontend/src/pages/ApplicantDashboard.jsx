// pages/ApplicantDashboard.jsx
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaPlus,
  FaDollarSign,
  FaUser,
  FaSignOutAlt,
  FaUpload,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ApplicantDashboard.css";

function ApplicantDashboard() {
  const navigate = useNavigate();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // ✅ Get logged-in applicant info
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const applicantName = storedUser?.fullName || storedUser?.name || "Applicant";

  // ✅ File Upload Handler
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-wrapper">
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <h2 className="logo">🎓 UniQuest</h2>
        <nav className="menu">
          <a href="#" className="active">
            <FaTachometerAlt /> Dashboard
          </a>
          <button
            onClick={() => navigate("/dashboard/applicant/my-applications")}
          >
            <FaFileAlt /> My Applications
          </button>
          <button
            onClick={() => navigate("/dashboard/applicant/new-application")}
          >
            <FaPlus /> New Application
          </button>
          <button onClick={() => setShowUploadModal(true)}>
            <FaUpload /> Upload Documents
          </button>
          <a href="#">
            <FaDollarSign /> Payments
          </a>
          <a href="#">
            <FaUser /> Profile
          </a>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* ===== MAIN DASHBOARD CONTENT ===== */}
      <main className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Manage your university applications and track your progress</p>

        {/* ===== WELCOME SECTION ===== */}
        <section className="welcome-card">
          <h2>
            Welcome back, <span className="highlight">{applicantName}!</span> 👋
          </h2>
          <p>You're 66% done with your applications</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "66%" }}></div>
          </div>
          <div className="status-info">
            <div>
              ✅ <strong>2</strong> Completed
            </div>
            <div>
              🕓 <strong>1</strong> In Progress
            </div>
          </div>
        </section>

        {/* ===== APPLICATION STATS ===== */}
        <section className="stats-section">
          <div className="stat-card">
            <h4>Total Applications</h4>
            <FaFileAlt className="stat-icon blue" />
            <h2>3</h2>
          </div>
          <div className="stat-card">
            <h4>Pending</h4>
            <FaClock className="stat-icon yellow" />
            <h2>1</h2>
          </div>
          <div className="stat-card">
            <h4>Accepted</h4>
            <FaCheckCircle className="stat-icon green" />
            <h2>2</h2>
          </div>
          <div className="stat-card">
            <h4>Rejected</h4>
            <FaTimesCircle className="stat-icon red" />
            <h2>0</h2>
          </div>
        </section>

        {/* ===== UPCOMING DEADLINES ===== */}
        <section className="deadlines-section">
          <h2>⏰ Upcoming Deadlines</h2>

          <div className="deadline urgent">
            <div className="deadline-header">
              <h3>Stanford University</h3>
              <span className="urgent-badge">5d 24h</span>
            </div>
            <p>Computer Science (MS)</p>
            <p className="deadline-date">Nov 18, 2025, 05:19 AM</p>
            <p className="warning">⚠️ Apply soon to meet this deadline!</p>
          </div>

          <div className="deadline">
            <div className="deadline-header">
              <h3>MIT</h3>
              <span className="normal-badge">12d 24h</span>
            </div>
            <p>Engineering (PhD)</p>
            <p className="deadline-date">Nov 25, 2025, 05:19 AM</p>
          </div>

          <div className="deadline">
            <div className="deadline-header">
              <h3>Harvard University</h3>
              <span className="normal-badge">20d 24h</span>
            </div>
            <p>MBA</p>
            <p className="deadline-date">Dec 3, 2025, 05:19 AM</p>
          </div>
        </section>

        {/* ===== AI RECOMMENDATIONS ===== */}
        <section className="recommendations">
          <h2>🎯 AI-Powered Recommendations</h2>
          <div className="rec-card">
            <h3>Stanford University</h3>
            <p>Computer Science (MS)</p>
            <p className="desc">
              Excellent match based on your profile and academic record.
            </p>
            <button>View Details</button>
          </div>
          <div className="rec-card">
            <h3>MIT</h3>
            <p>Engineering (PhD)</p>
            <p className="desc">
              Your research interests align perfectly with their programs.
            </p>
            <button>View Details</button>
          </div>
        </section>

        {/* ===== RECENT ACTIVITIES ===== */}
        <section className="activities">
          <h2>📋 Recent Activities</h2>
          <ul>
            <li>📤 Application Form Submitted – Stanford University</li>
            <li>📎 Document Uploaded – Transcripts</li>
            <li>💳 Application Fee Paid – MIT</li>
            <li>👁️ Profile Viewed – Cambridge University</li>
          </ul>
        </section>
      </main>

      {/* ===== UPLOAD MODAL ===== */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Upload Documents</h2>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.png,.docx"
              onChange={handleFileUpload}
            />
            <ul className="file-list">
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>

            <button
              className="submit-btn"
              onClick={() => alert("Files uploaded successfully!")}
            >
              <FaUpload /> Upload
            </button>
            <button
              className="cancel-btn"
              onClick={() => setShowUploadModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicantDashboard;
