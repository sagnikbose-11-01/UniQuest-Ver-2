import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-section about">
          <h2 className="footer-logo">🎓 UniQuest</h2>
          <p>{t("footer_about")}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>{t("quick_links")}</h3>
          <ul>
            <li><a href="/">{t("home")}</a></li>
            <li><a href="/programs">{t("programs")}</a></li>
            <li><a href="/how-to-apply">{t("how_to_apply")}</a></li>
            <li><a href="/contact">{t("contact")}</a></li>
            <li><a href="/login">{t("login")}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>{t("contact_us")}</h3>

          <p>{t("email")}: <a href="mailto:support@uniquest.com">support@uniquest.com</a></p>
          <p>{t("phone")}: +91 98765 43210</p>
          <p>{t("address")}: {t("footer_address_value")}</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>{t("rights")}</p>
        <p>{t("made_with_love")}</p>
      </div>
    </footer>
  );
}

export default Footer;
