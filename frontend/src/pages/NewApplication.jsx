// pages/NewApplication.jsx
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaPaperPlane, FaUpload } from "react-icons/fa";
import "./NewApplication.css";
import { useNavigate } from "react-router-dom";

function NewApplication() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    nationality: "",
    address: "",
    university: "",
    program: "",
    degreeType: "",
    department: "",
    intake: "",
    deadline: "",
    qualification: "",
    institution: "",
    major: "",
    graduationYear: "",
    cgpa: "",
    testScores: "",
    modeOfStudy: "",
    scholarship: "No",
    notes: "",
    declaration: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileUpload = (e, field) => {
    const files = Array.from(e.target.files);
    setUploadedFiles({ ...uploadedFiles, [field]: files });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎓 Application submitted successfully!");
    navigate("/dashboard/applicant");
  };

  return (
    <div className="application-container">
      <header className="application-header">
        <h1>📝 New University Application</h1>
        <p>Fill out your details carefully and submit your application.</p>
      </header>

      {/* Progress Indicator */}
      <div className="progress-steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
        <div className={`step ${step >= 4 ? "active" : ""}`}>4</div>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>
        {/* STEP 1: BASIC INFO */}
        {step === 1 && (
          <section>
            <h2>🎓 Basic Applicant Information</h2>
            <input name="fullName" placeholder="Full Name" onChange={handleInputChange} required />
            <input name="email" placeholder="Email Address" type="email" onChange={handleInputChange} required />
            <input name="phone" placeholder="Phone Number" onChange={handleInputChange} required />
            <input name="dob" type="date" onChange={handleInputChange} required />
            <input name="nationality" placeholder="Nationality" onChange={handleInputChange} />
            <input name="address" placeholder="Address (City, State, Country)" onChange={handleInputChange} />
          </section>
        )}

        {/* STEP 2: PROGRAM DETAILS & ACADEMICS */}
        {step === 2 && (
          <section>
            <h2>🏛️ University & Program Details</h2>
            <input name="university" placeholder="University Name" onChange={handleInputChange} required />
            <input name="program" placeholder="Program Name / Course Title" onChange={handleInputChange} />
            <select name="degreeType" onChange={handleInputChange}>
              <option value="">Select Degree Type</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="PhD">PhD</option>
            </select>
            <input name="department" placeholder="Department / Faculty" onChange={handleInputChange} />
            <input name="intake" placeholder="Preferred Intake / Session" onChange={handleInputChange} />
            <input type="date" name="deadline" placeholder="Application Deadline" onChange={handleInputChange} />

            <h3>📚 Academic Background</h3>
            <input name="qualification" placeholder="Highest Qualification" onChange={handleInputChange} />
            <input name="institution" placeholder="Institution Name" onChange={handleInputChange} />
            <input name="major" placeholder="Major / Stream" onChange={handleInputChange} />
            <input name="graduationYear" placeholder="Graduation Year" onChange={handleInputChange} />
            <input name="cgpa" placeholder="CGPA / Percentage" onChange={handleInputChange} />
            <input name="testScores" placeholder="Standardized Test Scores (GRE, TOEFL, etc.)" onChange={handleInputChange} />
          </section>
        )}

        {/* STEP 3: DOCUMENT UPLOAD */}
        {step === 3 && (
          <section>
            <h2>📄 Supporting Documents Upload</h2>
            {[
              ["resume", "Resume / CV"],
              ["transcript", "Transcripts / Mark Sheets"],
              ["lor", "Letter(s) of Recommendation"],
              ["sop", "Statement of Purpose / Essay"],
              ["id", "Passport / ID Proof"],
            ].map(([key, label]) => (
              <div className="file-upload" key={key}>
                <label>{label}</label>
                <input type="file" multiple onChange={(e) => handleFileUpload(e, key)} />
                <ul>
                  {uploadedFiles[key]?.map((f, i) => (
                    <li key={i}>{f.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* STEP 4: DECLARATION */}
        {step === 4 && (
          <section>
            <h2>✅ Declaration & Preferences</h2>
            <select name="modeOfStudy" onChange={handleInputChange}>
              <option value="">Preferred Mode of Study</option>
              <option value="On-Campus">On-Campus</option>
              <option value="Online">Online</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select name="scholarship" onChange={handleInputChange}>
              <option value="No">Interested in Scholarship?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <textarea name="notes" placeholder="Special Requests / Notes" onChange={handleInputChange}></textarea>

            <label className="declaration">
              <input type="checkbox" name="declaration" onChange={handleInputChange} required /> I confirm that all
              information and uploaded documents are accurate and authentic.
            </label>
          </section>
        )}

        {/* BUTTONS */}
        <div className="form-nav">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="nav-btn">
              <FaArrowLeft /> Previous
            </button>
          )}
          {step < 4 ? (
            <button type="button" onClick={nextStep} className="nav-btn next">
              Next <FaArrowRight />
            </button>
          ) : (
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Submit Application
            </button>
          )}
          <button type="button" className="cancel-btn" onClick={() => navigate("/dashboard/applicant")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewApplication;
