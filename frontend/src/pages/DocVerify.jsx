import React, { useState } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaFlag,
  FaEye,
  FaDownload,
  FaSearch,
  FaShieldAlt,
} from "react-icons/fa";
import "./DocVerify.css";

function DocVerify() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      applicant: "Ahmed Hassan",
      id: "BD-001-2024",
      application: "APP001",
      docType: "Birth Certificate",
      status: "Verified",
      fraudScore: "0%",
      date: "6/15/2024",
    },
    {
      applicant: "Sagnik Bose",
      id: "HS-001-2024",
      application: "APP001",
      docType: "High School Transcript",
      status: "Verified",
      fraudScore: "0%",
      date: "6/15/2024",
    },
    {
      applicant: "Maria Garcia",
      id: "PP-002-2024",
      application: "APP002",
      docType: "Passport",
      status: "Suspicious",
      fraudScore: "67%",
      date: "6/14/2024",
    },
    {
      applicant: "Chen Wei",
      id: "UD-003-2024",
      application: "APP003",
      docType: "University Degree",
      status: "Pending",
      fraudScore: "15%",
      date: "6/13/2024",
    },
    {
      applicant: "Priya Sharma",
      id: "IE-004-2024",
      application: "APP004",
      docType: "IELTS Certificate",
      status: "Verified",
      fraudScore: "2%",
      date: "6/12/2024",
    },
    {
      applicant: "James O’Brien",
      id: "BD-005-2024",
      application: "APP005",
      docType: "Birth Certificate",
      status: "Rejected",
      fraudScore: "95%",
      date: "6/11/2024",
    },
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.docType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.application.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "All" || doc.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="doc-container">
      <h1>Document Verification</h1>
      <p>Verify applicant documents with fraud detection</p>

      {/* Summary Cards */}
      <div className="doc-summary">
        <div className="summary-card">
          <FaFileAlt className="icon" /> <h3>Total Documents</h3>
          <h2>6</h2>
        </div>
        <div className="summary-card">
          <FaCheckCircle className="icon success" /> <h3>Verified</h3>
          <h2>3</h2>
        </div>
        <div className="summary-card">
          <FaClock className="icon pending" /> <h3>Pending</h3>
          <h2>1</h2>
        </div>
        <div className="summary-card">
          <FaExclamationTriangle className="icon warning" /> <h3>Suspicious</h3>
          <h2>1</h2>
        </div>
        <div className="summary-card">
          <FaFlag className="icon danger" /> <h3>Rejected</h3>
          <h2>1</h2>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="doc-controls">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by applicant name, ID, or document type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          {["All", "Verified", "Pending", "Suspicious", "Rejected"].map(
            (status) => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? "active" : ""}`}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            )
          )}
        </div>
      </div>

      {/* Documents Table */}
      <div className="doc-table">
        <h2>Documents ({filteredDocs.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Application</th>
              <th>Document Type</th>
              <th>Status</th>
              <th>Fraud Score</th>
              <th>Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc, index) => (
              <tr key={index}>
                <td>
                  <strong>{doc.applicant}</strong>
                  <p className="doc-id">{doc.id}</p>
                </td>
                <td className="link">{doc.application}</td>
                <td>{doc.docType}</td>
                <td>
                  <span className={`status ${doc.status.toLowerCase()}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="fraud-score">{doc.fraudScore}</td>
                <td>{doc.date}</td>
                <td className="actions">
                  <button className="view-btn">
                    <FaEye />
                  </button>
                  <button className="download-btn">
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fraud Detection Info */}
      <section className="fraud-info">
        <h3>
          <FaShieldAlt /> Fraud Detection Information
        </h3>
        <div className="fraud-grid">
          <div className="fraud-card low">
            <h4>Low Risk (0–20%)</h4>
            <p>Document appears authentic with no detected anomalies.</p>
          </div>
          <div className="fraud-card medium">
            <h4>Medium Risk (20–50%)</h4>
            <p>Document contains minor inconsistencies, may require manual review.</p>
          </div>
          <div className="fraud-card high">
            <h4>High Risk (50–80%)</h4>
            <p>Document shows significant inconsistencies; recommend detailed review.</p>
          </div>
          <div className="fraud-card critical">
            <h4>Critical Risk (80%+)</h4>
            <p>
              Document likely fraudulent; reject or conduct thorough investigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DocVerify;
