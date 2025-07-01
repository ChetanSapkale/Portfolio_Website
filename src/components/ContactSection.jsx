// ContactSection.jsx
import React, { useEffect, useState } from "react";
import "../styles/ContactSection.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

function ContactSection() {
  const [themeClass, setThemeClass] = useState("dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeClass(
        document.body.classList.contains("light-theme") ? "light" : "dark"
      );
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setThemeClass(
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={`contact-section-wrapper ${themeClass}`}>
      <div className={`contact-section ${themeClass}`}>
        <h2 className="contact-title">CONTACT WITH ME</h2>
        <div className="contact-container">
          <div className="contact-form">
            <p className="contact-description">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
            <form>
              <label>Your Name:</label>
              <input type="text" placeholder="Enter your name"/>

              <label>Your Email:</label>
              <input type="email" placeholder="Enter your email" required/>

              <label>Your Message:</label>
              <textarea rows="5" placeholder="Enter your message" />

              <button type="submit" className="send-btn">
                SEND MESSAGE <IoMdSend className="send-icon" />
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <MdEmail /> sapkalechetan018@gmail.com
            </div>
            <div className="info-item">
              <MdPhone /> +91 95586 605034
            </div>
            <div className="info-item">
              <MdLocationOn /> Surat-394210, Gujarat, India
            </div>

            <div className="social-icons">
              <a href="https://github.com/ChetanSapkale" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chetan-sapkale-20b7362b1/" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ft.chetannn_" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://x.com/chetannn_018_" className="social-icon">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
