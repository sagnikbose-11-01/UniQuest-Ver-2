import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
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
  FaRobot
} from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  // Render <highlight> tags properly
  const renderHighlightedText = (text) => {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text
            .replace("<highlight>", '<span class="highlight">')
            .replace("</highlight>", "</span>")
        }}
      />
    );
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>{renderHighlightedText(t("hero_title"))}</h1>
          <p>{t("hero_subtitle")}</p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              {t("get_started")}
            </Link>
            <Link to="/programs" className="btn-secondary">
              {t("explore_programs")}
            </Link>
          </div>
        </div>

        <div className="hero-illustration">
          <img src="/hero-illustration.jpeg" alt="UniQuest Illustration" />
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="features-section">
        <h2 className="section-title">{t("why_choose_title")}</h2>
        <p className="section-subtitle">{t("why_choose_sub")}</p>

        <div className="features-grid">
          <div className="feature-card">
            <FaSearch className="feature-icon" />
            <h3>{renderHighlightedText(t("feature_explore_title"))}</h3>
            <p>{t("feature_explore_desc")}</p>
            <Link to="/programs" className="btn-primary">
              {t("view_programs")}
            </Link>
          </div>

          <div className="feature-card">
            <FaClipboardList className="feature-icon" />
            <h3>{renderHighlightedText(t("feature_apply_title"))}</h3>
            <p>{t("feature_apply_desc")}</p>
            <Link to="/how-to-apply" className="btn-secondary">
              {t("learn_more")}
            </Link>
          </div>

          <div className="feature-card">
            <FaTasks className="feature-icon" />
            <h3>{renderHighlightedText(t("feature_tracker_title"))}</h3>
            <p>{t("feature_tracker_desc")}</p>
            <Link to="/register" className="btn-primary">
              {t("go_to_dashboard")}
            </Link>
          </div>

          <div className="feature-card">
            <FaRobot className="feature-icon" />
            <h3>{renderHighlightedText(t("feature_unibot_title"))} 🤖</h3>
            <p>{t("feature_unibot_desc")}</p>
            <button
              className="btn-secondary"
              onClick={() => window.dispatchEvent(new Event("open-chatbot"))}
            >
              {t("start_chat")}
            </button>
          </div>
        </div>
      </section>

      {/* ADVANCED FEATURES */}
      <section className="advanced-features-section">
        <h2 className="section-title">{t("powerful_features")}</h2>
        <p className="section-subtitle">{t("powerful_features_sub")}</p>

        <div className="advanced-features-grid">
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>{t("secure_portal_title")}</h3>
            <p>{t("secure_portal_desc")}</p>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>{t("multi_role_title")}</h3>
            <p>{t("multi_role_desc")}</p>
          </div>

          <div className="feature-card">
            <FaBrain className="feature-icon" />
            <h3>{t("ai_recommendation_title")}</h3>
            <p>{t("ai_recommendation_desc")}</p>
          </div>

          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>{t("fraud_detection_title")}</h3>
            <p>{t("fraud_detection_desc")}</p>
          </div>

          <div className="feature-card">
            <FaChartBar className="feature-icon" />
            <h3>{t("analytics_title")}</h3>
            <p>{t("analytics_desc")}</p>
          </div>

          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>{t("fast_processing_title")}</h3>
            <p>{t("fast_processing_desc")}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2 className="section-title">{t("testimonials_title")}</h2>

        <div className="testimonials">
          <div className="testimonial">
            <p>{t("testimonial_1_text")}</p>
            <h4>— {t("testimonial_1_name")}</h4>
            <span>{t("testimonial_1_country")}</span>
          </div>

          <div className="testimonial">
            <p>{t("testimonial_2_text")}</p>
            <h4>— {t("testimonial_2_name")}</h4>
            <span>{t("testimonial_2_country")}</span>
          </div>

          <div className="testimonial">
            <p>{t("testimonial_3_text")}</p>
            <h4>— {t("testimonial_3_name")}</h4>
            <span>{t("testimonial_3_country")}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>{t("cta_title")}</h2>
        <p>{t("cta_sub")}</p>

        <Link to="/register" className="btn-cta">
          {t("join_now")}
        </Link>
      </section>


    </div>
  );
}

export default Home;
