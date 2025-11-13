import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang); // 🟢 i18n switch
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">UniQuest</span>
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAV LINKS */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">{t("home")}</Link>
          <Link to="/programs">{t("programs")}</Link>
          <Link to="/how-to-apply">{t("how_to_apply")}</Link>

          {/* 🆕 New Contact Link */}
          <Link to="/contact">{t("contact")}</Link>

          {/* LANGUAGE SWITCHER */}
          <div className="language-dropdown">
            <FaGlobe className="globe-icon" />
            <select value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          {/* AUTH BUTTONS */}
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">{t("login")}</Link>
            <Link to="/register" className="register-btn">{t("register")}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
