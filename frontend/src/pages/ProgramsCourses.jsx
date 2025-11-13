import React, { useState } from "react";
import { FaClock, FaDollarSign, FaUsers, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import "./ProgramsCourses.css";

function ProgramsCourses() {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "Computer Science",
      description: "Bachelor of Science in Computer Science with focus on modern software development and AI",
      duration: "4 years",
      tuition: "$8,500/year",
      enrollment: "145/200",
      activeApplications: 89,
      capacity: 73,
      status: "Active",
    },
    {
      id: 2,
      name: "Engineering",
      description: "Bachelor of Engineering with specializations in Civil, Mechanical, and Electrical Engineering",
      duration: "4 years",
      tuition: "$9,000/year",
      enrollment: "98/150",
      activeApplications: 67,
      capacity: 65,
      status: "Active",
    },
    {
      id: 3,
      name: "Business Administration",
      description: "Master of Business Administration with focus on entrepreneurship and management",
      duration: "2 years",
      tuition: "$12,000/year",
      enrollment: "52/80",
      activeApplications: 45,
      capacity: 65,
      status: "Active",
    },
    {
      id: 4,
      name: "Medicine",
      description: "Doctor of Medicine program with comprehensive clinical training and research opportunities",
      duration: "6 years",
      tuition: "$15,000/year",
      enrollment: "38/60",
      activeApplications: 39,
      capacity: 63,
      status: "Active",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProgram, setNewProgram] = useState({
    name: "",
    description: "",
    duration: "",
    tuition: "",
    enrollment: "",
    activeApplications: "",
  });

  const handleChange = (e) => {
    setNewProgram({ ...newProgram, [e.target.name]: e.target.value });
  };

  const handleAddProgram = (e) => {
    e.preventDefault();
    const program = {
      ...newProgram,
      id: Date.now(),
      status: "Active",
      capacity: Math.floor(Math.random() * 100),
    };
    setPrograms([...programs, program]);
    setShowAddForm(false);
    setNewProgram({
      name: "",
      description: "",
      duration: "",
      tuition: "",
      enrollment: "",
      activeApplications: "",
    });
  };

  const handleDelete = (id) => {
    setPrograms(programs.filter((p) => p.id !== id));
  };

  return (
    <div className="programs-container">
      <div className="programs-header">
        <h1>Programs & Courses</h1>
        <p>Manage your university programs and courses</p>
        <button className="add-program-btn" onClick={() => setShowAddForm(true)}>
          <FaPlus /> Add Program
        </button>
      </div>

      {/* Add Program Modal */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Program</h2>
            <form onSubmit={handleAddProgram}>
              <input
                type="text"
                name="name"
                placeholder="Program Name"
                value={newProgram.name}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Program Description"
                value={newProgram.description}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration (e.g., 4 years)"
                value={newProgram.duration}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="tuition"
                placeholder="Tuition (e.g., $10,000/year)"
                value={newProgram.tuition}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="enrollment"
                placeholder="Enrollment (e.g., 120/200)"
                value={newProgram.enrollment}
                onChange={handleChange}
              />
              <input
                type="number"
                name="activeApplications"
                placeholder="Active Applications"
                value={newProgram.activeApplications}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button type="submit" className="submit-btn">Add Program</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Programs Grid */}
      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div className="program-header">
              <h3>{program.name}</h3>
              <span className="status">{program.status}</span>
            </div>
            <p className="program-desc">{program.description}</p>
            <div className="program-details">
              <div>
                <FaClock /> <strong>Duration</strong> <p>{program.duration}</p>
              </div>
              <div>
                <FaDollarSign /> <strong>Tuition</strong> <p>{program.tuition}</p>
              </div>
              <div>
                <FaUsers /> <strong>Enrollment</strong> <p>{program.enrollment}</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${program.capacity}%` }}></div>
            </div>
            <div className="applications">
              <p>
                <strong>Active Applications:</strong> {program.activeApplications}
              </p>
            </div>
            <div className="program-actions">
              <button className="edit-btn">
                <FaEdit /> Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(program.id)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCourses;
