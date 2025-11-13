import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    userType: "",
    subject: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <div className="contact-page">
      {/* HEADER */}
      <section className="contact-header">
        <h1>We're here to help you every step of the way 🌍</h1>
        <p>
          Whether you're a student looking for the perfect university, an
          institution joining our platform, or a partner interested in
          collaboration — we're excited to hear from you.
        </p>
        <p>Let's connect and build your future together.</p>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="contact-section">
        <div className="contact-form-container">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone (Optional)</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>User Type *</label>
                <select name="userType" required onChange={handleChange}>
                  <option value="">Select user type</option>
                  <option value="student">Student</option>
                  <option value="university">University</option>
                  <option value="partner">Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us more about your inquiry..."
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Attach File (Optional)</label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx,.png,.jpg"
                onChange={handleChange}
              />
              <small>Supported formats: PDF, DOC, DOCX, PNG, JPG (Max 10MB)</small>
            </div>

            <div className="form-check">
              <input type="checkbox" required />
              <label>
                I agree to the <a href="#">Privacy Policy</a> and understand how UniQuest will use my data.
              </label>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in touch</h2>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email Us</h4>
              <p>Send us an email and we'll respond within 24 hours</p>
              <a href="mailto:support@uniquest.com">support@uniquest.com</a>
            </div>
          </div>

          <div className="info-card">
            <FaPhone className="info-icon" />
            <div>
              <h4>Call Us</h4>
              <p>Speak with our team during business hours</p>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>

          <div className="info-card">
            <FaComments className="info-icon" />
            <div>
              <h4>Live Chat</h4>
              <p>Chat with our support team in real-time</p>
              <span className="highlight-text">Available 9 AM - 6 PM IST</span>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Visit Us</h4>
              <p>Our main office in Kolkata, India</p>
              <span>Salt Lake Sector 5, Kolkata</span>
            </div>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <div>
              <h4>Office Hours</h4>
              <p>Monday - Friday: 9 AM - 6 PM IST</p>
              <p>Saturday: 10 AM - 4 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2>Find us around the world</h2>
        <div className="map-container">
          <iframe
            title="UniQuest Kolkata Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.821406885079!2d88.42696947504668!3d22.5734439851754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02749b13e1653f%3A0x5e41808f2d47cf51!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1707915977400!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="office-locations">
          <div>
            <h4>🇮🇳 India</h4>
            <p>Kolkata HQ</p>
            <p>Salt Lake Sector 5, West Bengal</p>
          </div>
          <div>
            <h4>🌍 Europe</h4>
            <p>London, UK</p>
            <p>Paris, France</p>
          </div>
          <div>
            <h4>🌏 Asia Pacific</h4>
            <p>Singapore</p>
            <p>Sydney, Australia</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>
          Can't find what you're looking for? Check our FAQ page.
        </p>

        <div className="faq-grid">
          <button>What is UniQuest?</button>
          <button>How do I apply to universities?</button>
          <button>What documents do I need?</button>
          <button>How long does the process take?</button>
          <button>Are there any hidden fees?</button>
          <button>Can universities contact me directly?</button>
        </div>

        <button className="view-faq-btn">View All FAQs</button>
      </section>
    </div>
  );
}

export default Contact;
