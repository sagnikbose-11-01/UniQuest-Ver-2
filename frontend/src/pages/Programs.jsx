import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { FaStar, FaFilter, FaSearch, FaUsers } from "react-icons/fa";
import "./Programs.css";

function Programs() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const programs = [
    {
      emoji: "🏛️",
      title: "B.Tech in Computer Science (AI & ML)",
      university: "IIT Delhi",
      field: "Artificial Intelligence & Machine Learning",
      duration: "4 Years",
      mode: "On-campus",
      rating: 4.9,
      applicants: "12,500",
      fee: "₹2,50,000 (Total)",
      category: "Engineering & Technology ⚙️",
      featured: true,
    },
    {
      emoji: "🧬",
      title: "MSc in Biotechnology",
      university: "University of Oxford",
      field: "Advanced Biotechnology Research",
      duration: "1 Year",
      mode: "On-campus",
      rating: 4.8,
      applicants: "3,200",
      fee: "£25,000/Year",
      category: "Medicine & Health 🩺",
      featured: true,
    },
    {
      emoji: "🏫",
      title: "MBA in Business Analytics",
      university: "Harvard University",
      field: "Data-Driven Business Strategy",
      duration: "2 Years",
      mode: "Hybrid",
      rating: 4.9,
      applicants: "8,900",
      fee: "$75,000/Year",
      category: "Business & Management 💼",
      featured: true,
    },
    {
      emoji: "💻",
      title: "MSc in Data Science",
      university: "Stanford University",
      field: "Big Data & AI Applications",
      duration: "2 Years",
      mode: "Online",
      rating: 4.8,
      applicants: "6,500",
      fee: "$45,000/Year",
      category: "Data & Computer Science 💻",
    },
    {
      emoji: "🎨",
      title: "M.A in Fine Arts",
      university: "University of Cambridge",
      field: "Creative & Visual Arts",
      duration: "2 Years",
      mode: "On-campus",
      rating: 4.7,
      applicants: "2,400",
      fee: "£22,000/Year",
      category: "Arts & Humanities 🎨",
    },
    {
      emoji: "🩺",
      title: "MBBS",
      university: "AIIMS Delhi",
      field: "Medical & Surgical Sciences",
      duration: "5.5 Years",
      mode: "On-campus",
      rating: 4.9,
      applicants: "10,200",
      fee: "₹8,00,000 (Total)",
      category: "Medicine & Health 🩺",
    },
    {
      emoji: "📈",
      title: "BBA in Finance",
      university: "University of Mumbai",
      field: "Financial Analysis & Investment",
      duration: "3 Years",
      mode: "On-campus",
      rating: 4.6,
      applicants: "4,700",
      fee: "₹1,50,000 (Total)",
      category: "Business & Management 💼",
    },
    {
      emoji: "⚙️",
      title: "B.E in Mechanical Engineering",
      university: "IIT Bombay",
      field: "Thermodynamics & Robotics",
      duration: "4 Years",
      mode: "On-campus",
      rating: 4.7,
      applicants: "9,000",
      fee: "₹2,20,000 (Total)",
      category: "Engineering & Technology ⚙️",
    },
    {
      emoji: "🧠",
      title: "PhD in Artificial Intelligence",
      university: "MIT",
      field: "Deep Learning & Robotics Research",
      duration: "5 Years",
      mode: "Hybrid",
      rating: 4.9,
      applicants: "1,800",
      fee: "$60,000/Year",
      category: "Data & Computer Science 💻",
    },
    {
      emoji: "💼",
      title: "Executive MBA",
      university: "INSEAD",
      field: "Leadership & Strategic Management",
      duration: "1.5 Years",
      mode: "Hybrid",
      rating: 4.8,
      applicants: "3,500",
      fee: "€70,000/Year",
      category: "Business & Management 💼",
    },
    {
      emoji: "🏗️",
      title: "B.Tech in Civil Engineering",
      university: "IIT Roorkee",
      field: "Infrastructure Design & Development",
      duration: "4 Years",
      mode: "On-campus",
      rating: 4.7,
      applicants: "5,300",
      fee: "₹2,10,000 (Total)",
      category: "Engineering & Technology ⚙️",
    },
    {
      emoji: "🧮",
      title: "M.Sc in Applied Mathematics",
      university: "University of Toronto",
      field: "Computational Mathematics & Statistics",
      duration: "2 Years",
      mode: "Online",
      rating: 4.6,
      applicants: "2,200",
      fee: "$25,000/Year",
      category: "Data & Computer Science 💻",
    },
    {
      emoji: "🌍",
      title: "B.A in International Relations",
      university: "London School of Economics",
      field: "Global Policy & Governance",
      duration: "3 Years",
      mode: "On-campus",
      rating: 4.7,
      applicants: "4,100",
      fee: "£21,000/Year",
      category: "Arts & Humanities 🎨",
    },
    {
      emoji: "🔬",
      title: "B.Sc in Microbiology",
      university: "University of Melbourne",
      field: "Genetic & Cellular Biology",
      duration: "3 Years",
      mode: "On-campus",
      rating: 4.6,
      applicants: "3,800",
      fee: "AUD 28,000/Year",
      category: "Medicine & Health 🩺",
    },
    {
      emoji: "🧑‍💻",
      title: "B.Sc in Cybersecurity",
      university: "Carnegie Mellon University",
      field: "Information Security & Networks",
      duration: "4 Years",
      mode: "Online",
      rating: 4.8,
      applicants: "2,900",
      fee: "$40,000/Year",
      category: "Data & Computer Science 💻",
    },
  ];

  const categories = [
    "All",
    "Engineering & Technology ⚙️",
    "Business & Management 💼",
    "Arts & Humanities 🎨",
    "Medicine & Health 🩺",
    "Data & Computer Science 💻",
  ];

  const filteredPrograms = programs.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.university.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="programs-page">
      {/* HERO */}
      <section className="programs-hero">
        <h1>Explore Our Global Programs 🌍</h1>
        <p>Find the right course for your academic and career goals.</p>
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for a program or university..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="filter-btn">
            <FaFilter /> Filters
          </button>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="categories-section">
        <h2>📚 Browse by Discipline</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="programs-grid-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="programs-grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((p, i) => (
                <motion.div
                  className={`program-card ${p.featured ? "featured" : ""}`}
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {p.featured && <div className="featured-tag">⭐ Featured</div>}

                  <div className="program-header">
                    <span className="program-emoji">{p.emoji}</span>
                    <div>
                      <p className="university">{p.university}</p>
                      <h3>{p.title}</h3>
                      <p className="field">{p.field}</p>
                    </div>
                  </div>

                  <div className="program-tags">
                    <span>📅 {p.duration}</span>
                    <span>🎓 {p.mode}</span>
                  </div>

                  <div className="program-info">
                    <span>
                      <FaStar className="star" /> {p.rating}/5
                    </span>
                    <span>
                      <FaUsers /> {p.applicants} applicants
                    </span>
                  </div>

                  <p className="fee">{p.fee}</p>

                  <div className="program-buttons">
                    <button className="view-btn">View Details</button>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="no-results">No programs found.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 🌟 UNIQUEST BY NUMBERS */}
      <section className="numbers-section">
        <h2>UniQuest by Numbers</h2>
        <p>Trusted by students worldwide</p>
        <div className="numbers-grid">
          <div className="number-card">
            🏛️
            <h3>
              <CountUp end={500} duration={3} />+
            </h3>
            <p>Partner Universities</p>
          </div>
          <div className="number-card">
            🌍
            <h3>
              <CountUp end={50} duration={3} />+
            </h3>
            <p>Countries Represented</p>
          </div>
          <div className="number-card">
            💰
            <h3>
              <CountUp end={1200} duration={3} />+
            </h3>
            <p>Scholarships Available</p>
          </div>
          <div className="number-card">
            ⏱️
            <h3>3 Weeks</h3>
            <p>Average Admission Time</p>
          </div>
        </div>
      </section>

      {/* 🏛 WORLD-CLASS INSTITUTIONS */}
      <section className="partners-section">
        <h2>🏛 World-Class Institution Partners</h2>
        <p>Programs from prestigious universities globally</p>
        <div className="partners-grid">
          {[
            "🏫 Harvard",
            "🎓 Stanford",
            "🔬 MIT",
            "📚 Oxford",
            "🎨 Cambridge",
            "🌏 NUS",
            "⛰ ETH Zurich",
            "🍁 Toronto",
            "🐫 Melbourne",
            "🗾 Tokyo",
            "💼 INSEAD",
            "🌉 Berkeley",
          ].map((u, i) => (
            <div className="partner-card" key={i}>
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* 💬 SUCCESS STORIES */}
      <section className="testimonials-section">
        <h2>💬 Success Stories</h2>
        <p>Hear from students who achieved their dreams with UniQuest</p>
        <div className="testimonials-grid">
          {[
            {
              emoji: "👩‍🎓",
              name: "Riya Sharma",
              country: "🇬🇧 United Kingdom",
              course: "MSc in Data Science",
              university: "University of Leeds",
              feedback:
                "UniQuest helped me secure admission to my dream university in the UK — the process was seamless and stress-free!",
            },
            {
              emoji: "👨‍🎓",
              name: "Arjun Patel",
              country: "🇺🇸 United States",
              course: "MS in Computer Science",
              university: "Stanford University",
              feedback:
                "The guidance from UniQuest was invaluable. My admission was processed in just 3 weeks!",
            },
            {
              emoji: "👩‍🎓",
              name: "Emma Johnson",
              country: "🇺🇸 United States",
              course: "MBA in Business Analytics",
              university: "Harvard University",
              feedback:
                "UniQuest made the entire application process incredibly smooth. Highly recommended!",
            },
            {
              emoji: "👨‍🎓",
              name: "Yuki Tanaka",
              country: "🇨🇭 Switzerland",
              course: "Master in Engineering",
              university: "ETH Zurich",
              feedback:
                "The document verification and support team at UniQuest were exceptional. Best decision ever!",
            },

          ].map((t, i) => (
            <div className="testimonial-card" key={i}>
              <h3>
                {t.emoji} {t.name}
              </h3>
              <p className="country">{t.country}</p>
              <p className="course">{t.course}</p>
              <p className="university">{t.university}</p>
              <blockquote>“{t.feedback}”</blockquote>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Programs;
