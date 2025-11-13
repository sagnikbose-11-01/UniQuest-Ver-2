import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-section about">
          <h2 className="footer-logo">🎓 UniQuest</h2>
          <p>
            Empowering students worldwide to explore programs, apply with ease, 
            and achieve their academic dreams — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/how-to-apply">How to Apply</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@uniquest.com">support@uniquest.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Kolkata, India</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 UniQuest. All Rights Reserved.</p>
        <p>Made with ❤️ by Team UniQuest</p>
      </div>
    </footer>
  );
}

export default Footer;
