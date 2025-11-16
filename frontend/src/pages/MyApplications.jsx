import React, { useEffect, useState } from "react";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApps =
      JSON.parse(localStorage.getItem("uniquest_applications")) || [];
    setApplications(storedApps);
  }, []);

  // Determine timeline dot color based on index
  const getDotColor = (index, totalSteps) => {
    if (index === 0) return "green"; // First step = Submitted
    if (index === totalSteps - 1) return "red"; // Final = Decision Pending
    return "yellow"; // Middle steps
  };

  return (
    <div className="my-applications-container">
      <h1 className="my-app-title">📄 My Applications</h1>

      {applications.length === 0 && (
        <div className="no-apps">No applications submitted yet.</div>
      )}

      <div className="applications-grid">
        {applications.map((app) => (
          <div className="application-card" key={app.id}>
            {/* University Title */}
            <h2>{app.university}</h2>

            {/* Application Details */}
            <div className="app-details">
              <p>
                <strong>Program:</strong> {app.program}
              </p>
              <p>
                <strong>Degree Type:</strong> {app.degreeType}
              </p>
              <p>
                <strong>Department:</strong> {app.department}
              </p>
              <p>
                <strong>Submitted On:</strong> {app.submittedAt}
              </p>
            </div>

            {/* Status Badge */}
            <div className="status-badge">Submitted</div>

            {/* ======================= */}
            {/*     NEW TIMELINE UI     */}
            {/* ======================= */}
            <div className="timeline">
              {app.timeline.map((item, index) => (
                <div className="timeline-step" key={index}>
                  {/* Colored Dot */}
                  <span
                    className={`timeline-dot ${getDotColor(
                      index,
                      app.timeline.length
                    )}`}
                  ></span>

                  {/* Content */}
                  <div className="timeline-content">
                    <p className="timeline-title">{item.label}</p>
                    {item.time && (
                      <p className="timeline-date">{item.time}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* END TIMELINE */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplications;
