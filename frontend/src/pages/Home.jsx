import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaShieldAlt,
  FaUsers,
  FaBrain,
  FaLock,
  FaChartBar,
  FaBolt,
  FaSearch,
  FaClipboardList,
  FaTasks,
  FaRobot,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Discover Your <span className="highlight">Dream University</span>{" "}
            with UniQuest
          </h1>
          <p>
            Your all-in-one platform for exploring programs, applying
            seamlessly, and tracking your admission journey.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <Link to="/programs" className="btn-secondary">
              Explore Programs
            </Link>
          </div>
        </div>
        <div className="hero-illustration">
          <img src="/hero-illustration.jpeg" alt="UniQuest Illustration" />
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section className="features-section">
        <h2 className="section-title">Why Choose UniQuest?</h2>
        <p className="section-subtitle">
          We make global university admissions simpler, faster, and smarter.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <FaSearch className="feature-icon" />
            <h3>
              <span className="highlight-text">Explore</span> Programs
            </h3>
            <p>
              Browse thousands of top programs and find the perfect match for
              your goals.
            </p>
            <Link to="/programs" className="btn-primary">
              View Programs
            </Link>
          </div>

          <div className="feature-card">
            <FaClipboardList className="feature-icon" />
            <h3>
              <span className="highlight-text">How to</span> Apply
            </h3>
            <p>
              A simple, guided step-by-step application process for every
              student.
            </p>
            <Link to="/how-to-apply" className="btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="feature-card">
            <FaTasks className="feature-icon" />
            <h3>
              <span className="highlight-text">Smart</span> Application Tracker
            </h3>
            <p>
              Monitor your application status and receive real-time updates.
            </p>
            <Link to="/register" className="btn-primary">
              Go to Dashboard
            </Link>
          </div>

          <div className="feature-card">
            <FaRobot className="feature-icon" />
            <h3>
              <span className="highlight-text">Chat with</span> UniBot 🤖
            </h3>
            <p>
              Need help? Chat instantly with our AI assistant for personalized
              guidance.
            </p>
            <button
              className="btn-secondary"
              onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            >
              Start Chat
            </button>
          </div>
        </div>
      </section>

      {/* ADVANCED FEATURES SECTION */}
      <section className="advanced-features-section">
        <h2 className="section-title">Powerful Platform Features</h2>
        <p className="section-subtitle">
          UniQuest combines technology and intelligence to simplify your
          admissions experience.
        </p>

        <div className="advanced-features-grid">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Secure Application Portal</h3>
            <p>
              End-to-end encrypted submissions with secure document storage and
              verification.
            </p>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Multi-Role Access</h3>
            <p>
              Seamless experience for Applicants, Universities, and Admins with
              role-based dashboards.
            </p>
          </div>

          <div className="feature-card">
            <FaBrain className="feature-icon" />
            <h3>AI Course Recommendation</h3>
            <p>
              Get personalized program suggestions based on your interests and
              academic profile.
            </p>
          </div>

          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Fraud Detection</h3>
            <p>
              Advanced fraud detection system to ensure application integrity
              and fairness.
            </p>
          </div>

          <div className="feature-card">
            <FaChartBar className="feature-icon" />
            <h3>Smart Analytics Dashboard</h3>
            <p>
              Real-time insights and analytics for universities and
              administrators.
            </p>
          </div>

          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Lightning Fast Processing</h3>
            <p>
              Instant application status updates and real-time notifications.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "UniQuest made applying to international universities effortless.
              I got admitted to my dream college!"
            </p>
            <h4>— Sarah Johnson</h4>
            <span>Canada</span>
          </div>
          <div className="testimonial">
            <p>
              "I loved the document upload and tracking system. Everything was
              so smooth and transparent."
            </p>
            <h4>— Rahul Mehta</h4>
            <span>India</span>
          </div>
          <div className="testimonial">
            <p>
              "Thanks to UniQuest's AI chat support, I got help instantly during
              my application process."
            </p>
            <h4>— Maria Lopez</h4>
            <span>Spain</span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Start Your Admission Journey Today 🚀</h2>
        <p>Join thousands of students applying worldwide through UniQuest.</p>

        <Link to="/register" className="btn-cta">
          Join Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
