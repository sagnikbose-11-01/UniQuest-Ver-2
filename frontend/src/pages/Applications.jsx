import React, { useState } from "react";
import { FaFilter, FaEye, FaDownload } from "react-icons/fa";
import "./Applications.css";

function Applications() {
  const [applications] = useState([
    {
      id: "APP001",
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      program: "Computer Science",
      status: "Reviewing",
      score: 8.5,
      documents: 5,
      date: "6/15/2024",
    },
    {
      id: "APP002",
      name: "Maria Garcia",
      email: "maria@example.com",
      program: "Engineering",
      status: "Accepted",
      score: 9.2,
      documents: 4,
      date: "6/14/2024",
    },
    {
      id: "APP003",
      name: "Chen Wei",
      email: "chen@example.com",
      program: "Business",
      status: "Pending",
      score: 7.8,
      documents: 3,
      date: "6/13/2024",
    },
    {
      id: "APP004",
      name: "Priya Sharma",
      email: "priya@example.com",
      program: "Medicine",
      status: "Accepted",
      score: 9.5,
      documents: 6,
      date: "6/12/2024",
    },
    {
      id: "APP005",
      name: "James O'Brien",
      email: "james@example.com",
      program: "Computer Science",
      status: "Rejected",
      score: 6.2,
      documents: 4,
      date: "6/11/2024",
    },
    {
      id: "APP006",
      name: "Amira Ahmed",
      email: "amira@example.com",
      program: "Engineering",
      status: "Reviewing",
      score: 8.7,
      documents: 5,
      date: "6/10/2024",
    },
    {
      id: "APP007",
      name: "Lucas Silva",
      email: "lucas@example.com",
      program: "Business",
      status: "Accepted",
      score: 8.3,
      documents: 4,
      date: "6/9/2024",
    },
    {
      id: "APP008",
      name: "Emma Johnson",
      email: "emma@example.com",
      program: "Arts",
      status: "Pending",
      score: 7.9,
      documents: 3,
      date: "6/8/2024",
    },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Accepted":
        return "status accepted";
      case "Rejected":
        return "status rejected";
      case "Pending":
        return "status pending";
      case "Reviewing":
        return "status reviewing";
      default:
        return "status";
    }
  };

  return (
    <div className="applications-container">
      <header>
        <h1>Applications</h1>
        <p>Manage and review student applications</p>
      </header>

      {/* Search & Filters */}
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by name, email, or application ID..."
          className="search-input"
        />
        <button className="filter-btn">
          <FaFilter /> Status
        </button>
        <button className="filter-btn">
          <FaFilter /> Program
        </button>
        <button className="export-btn">
          <FaDownload /> Export
        </button>
      </div>

      <p className="app-count">Showing {applications.length} of {applications.length} applications</p>

      {/* Table */}
      <div className="applications-table">
        <h2>All Applications</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant</th>
              <th>Program</th>
              <th>Status</th>
              <th>Score</th>
              <th>Documents</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="app-id">{app.id}</td>
                <td>
                  <strong>{app.name}</strong>
                  <br />
                  <span className="email">{app.email}</span>
                </td>
                <td>{app.program}</td>
                <td>
                  <span className={getStatusClass(app.status)}>
                    {app.status}
                  </span>
                </td>
                <td>{app.score}/10</td>
                <td>
                  <span className="doc-count">{app.documents}</span>
                </td>
                <td>{app.date}</td>
                <td>
                  <button className="view-btn">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Applications;
