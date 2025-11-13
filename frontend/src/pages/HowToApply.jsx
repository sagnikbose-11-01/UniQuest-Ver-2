import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaTrophy,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
} from "react-icons/fa";
import "./HowToApply.css";

function HowToApply() {
  const [search, setSearch] = useState("");
  const [expandedUni, setExpandedUni] = useState(null);

  // 💠 Universities List (with 11 universities)
  const universities = [
    {
      emoji: "🏫",
      name: "Harvard University",
      location: "Cambridge, Massachusetts, United States",
      rank: "#1",
      description:
        "World-renowned institution for higher education and research.",
      programs: [
        {
          title: "Bachelor of Science in Computer Science",
          level: "Undergraduate",
          duration: "4 years",
          fee: "$60,000/year",
        },
        {
          title: "Master of Business Administration",
          level: "Graduate",
          duration: "2 years",
          fee: "$75,000/year",
        },
        {
          title: "Ph.D. in Physics",
          level: "Doctoral",
          duration: "5–6 years",
          fee: "Fully funded",
        },
        {
          title: "Bachelor of Arts in Economics",
          level: "Undergraduate",
          duration: "4 years",
          fee: "$60,000/year",
        },
      ],
    },
    {
      emoji: "🏛️",
      name: "Stanford University",
      location: "Palo Alto, California, United States",
      rank: "#2",
      description:
        "Leading research university driving innovation and entrepreneurship.",
      programs: [
        {
          title: "B.Sc in Artificial Intelligence",
          level: "Undergraduate",
          duration: "4 years",
          fee: "$65,000/year",
        },
        {
          title: "M.Sc in Data Science",
          level: "Graduate",
          duration: "2 years",
          fee: "$70,000/year",
        },
      ],
    },
    {
      emoji: "🔬",
      name: "MIT",
      location: "Cambridge, Massachusetts, United States",
      rank: "#3",
      description: "Top university for technology, engineering, and innovation.",
      programs: [
        {
          title: "B.Tech in Electrical Engineering",
          level: "Undergraduate",
          duration: "4 years",
          fee: "$68,000/year",
        },
        {
          title: "Ph.D. in Robotics",
          level: "Doctoral",
          duration: "5 years",
          fee: "Fully funded",
        },
      ],
    },
    {
      emoji: "📚",
      name: "University of Oxford",
      location: "Oxford, England, United Kingdom",
      rank: "#4",
      description:
        "Historic university with academic excellence across all disciplines.",
      programs: [
        {
          title: "M.A. in Philosophy",
          level: "Graduate",
          duration: "2 years",
          fee: "£25,000/year",
        },
        {
          title: "M.Sc in Biotechnology",
          level: "Graduate",
          duration: "1 year",
          fee: "£30,000/year",
        },
      ],
    },
    {
      emoji: "🎓",
      name: "University of Cambridge",
      location: "Cambridge, England, United Kingdom",
      rank: "#5",
      description:
        "Prestigious research university with centuries of tradition.",
      programs: [
        {
          title: "M.Sc in Computer Science",
          level: "Graduate",
          duration: "2 years",
          fee: "£28,000/year",
        },
        {
          title: "Ph.D. in Neuroscience",
          level: "Doctoral",
          duration: "4 years",
          fee: "Fully funded",
        },
      ],
    },
    {
      emoji: "🌏",
      name: "National University of Singapore (NUS)",
      location: "Singapore",
      rank: "#6",
      description:
        "Asia’s top-ranked global university for research and technology.",
      programs: [
        {
          title: "B.Eng in Mechanical Engineering",
          level: "Undergraduate",
          duration: "4 years",
          fee: "SGD 38,000/year",
        },
        {
          title: "MBA",
          level: "Graduate",
          duration: "1 year",
          fee: "SGD 70,000/year",
        },
      ],
    },
    {
      emoji: "💼",
      name: "INSEAD",
      location: "Fontainebleau, France",
      rank: "#7",
      description:
        "Leading international business school for management studies.",
      programs: [
        {
          title: "Executive MBA",
          level: "Graduate",
          duration: "1.5 years",
          fee: "€70,000/year",
        },
        {
          title: "Master in Finance",
          level: "Graduate",
          duration: "2 years",
          fee: "€65,000/year",
        },
      ],
    },
    {
      emoji: "⛰️",
      name: "ETH Zurich",
      location: "Zurich, Switzerland",
      rank: "#8",
      description:
        "Top European university known for engineering and natural sciences.",
      programs: [
        {
          title: "B.Sc in Mechanical Engineering",
          level: "Undergraduate",
          duration: "4 years",
          fee: "CHF 25,000/year",
        },
        {
          title: "M.Sc in Engineering Physics",
          level: "Graduate",
          duration: "2 years",
          fee: "CHF 30,000/year",
        },
      ],
    },
    {
      emoji: "🍁",
      name: "University of Toronto",
      location: "Toronto, Ontario, Canada",
      rank: "#9",
      description:
        "One of the top public universities in Canada for research excellence.",
      programs: [
        {
          title: "B.Sc in Computer Engineering",
          level: "Undergraduate",
          duration: "4 years",
          fee: "CAD 45,000/year",
        },
        {
          title: "M.Sc in Data Analytics",
          level: "Graduate",
          duration: "2 years",
          fee: "CAD 40,000/year",
        },
      ],
    },
    {
      emoji: "🐫",
      name: "University of Melbourne",
      location: "Melbourne, Australia",
      rank: "#10",
      description:
        "Top Australian university offering world-class education and research.",
      programs: [
        {
          title: "B.A. in International Relations",
          level: "Undergraduate",
          duration: "3 years",
          fee: "AUD 35,000/year",
        },
        {
          title: "M.Sc in Biotechnology",
          level: "Graduate",
          duration: "2 years",
          fee: "AUD 40,000/year",
        },
      ],
    },
    {
      emoji: "🗾",
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      rank: "#11",
      description:
        "Renowned Asian institution excelling in science, engineering, and innovation.",
      programs: [
        {
          title: "B.Eng in Electrical Systems",
          level: "Undergraduate",
          duration: "4 years",
          fee: "JPY 600,000/year",
        },
        {
          title: "M.Sc in Artificial Intelligence",
          level: "Graduate",
          duration: "2 years",
          fee: "JPY 800,000/year",
        },
      ],
    },
  ];

  const filteredUniversities = universities.filter((uni) =>
    uni.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="howto-container">
      {/* HEADER SECTION */}
      <section className="apply-header">
        <h1>How to Apply</h1>
        <p>
          Discover universities, explore programs, and start your application
          journey with confidence 🚀
        </p>
        <div className="apply-steps">
          {[
            {
              num: 1,
              title: "Find Universities",
              desc: "Search and explore top universities across the globe.",
            },
            {
              num: 2,
              title: "Browse Programs",
              desc: "Compare programs and check eligibility, fees, and requirements.",
            },
            {
              num: 3,
              title: "Apply Now",
              desc: "Complete your profile, upload documents, and submit your application.",
            },
            {
              num: 4,
              title: "Get Selected",
              desc: "Receive offer letters, secure your admission, and begin your global journey!",
            },
          ].map((s, i) => (
            <div className="apply-step" key={i}>
              <div className="step-circle">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <h2>Search Universities</h2>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by university name, country, location, or program..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <p className="search-count">
          Found {filteredUniversities.length} of {universities.length} universities
        </p>

        {/* UNIVERSITY LIST */}
        <div className="university-list">
          {filteredUniversities.map((uni, idx) => (
            <div key={idx} className="university-card">
              <div
                className="university-header"
                onClick={() => setExpandedUni(expandedUni === idx ? null : idx)}
              >
                <div className="uni-info">
                  <span className="uni-emoji">{uni.emoji}</span>
                  <div>
                    <h3>{uni.name}</h3>
                    <p>
                      <FaMapMarkerAlt /> {uni.location}
                    </p>
                    <p>
                      <FaTrophy /> World Ranking: {uni.rank}
                    </p>
                  </div>
                </div>
                {expandedUni === idx ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {expandedUni === idx && (
                <div className="university-details">
                  <p className="uni-description">{uni.description}</p>
                  <h4>Programs ({uni.programs.length})</h4>
                  <div className="program-list">
                    {uni.programs.map((p, i) => (
                      <div className="program-item" key={i}>
                        <div>
                          <h5>{p.title}</h5>
                          <p>
                            {p.level} • {p.duration}
                          </p>
                        </div>
                        <span className="program-fee">{p.fee}</span>
                      </div>
                    ))}
                  </div>
                  <button className="apply-btn">
                    Apply to {uni.name}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION TIPS */}
      <section className="tips-section">
        <h2>Application Tips</h2>
        <div className="tips-grid">
          {[
            {
              title: "Research Programs",
              desc: "Explore programs and find one that matches your interests.",
            },
            {
              title: "Check Requirements",
              desc: "Review admission requirements like GPA, test scores, and language proficiency.",
            },
            {
              title: "Prepare Documents",
              desc: "Gather transcripts, test scores, and recommendation letters.",
            },
            {
              title: "Meet Deadlines",
              desc: "Track application deadlines and submit well in advance.",
            },
          ].map((t, i) => (
            <div className="tip-item" key={i}>
              <FaCheck className="tip-icon" />
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowToApply;
