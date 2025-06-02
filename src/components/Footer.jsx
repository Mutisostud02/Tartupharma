import React from "react";
import "./Footer.css";

const Footer = ({ onPageChange }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Tartupharma Medical Equipments</h3>
          <div className="company-info">
            <p>
              <strong>Address:</strong>
              <br />
              Riia tn 142
              <br />
              50411 Tartu, Estonia
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:sales@tartupharma.com">sales@tartupharma.com</a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+37271234567">+372 7 123 456</a>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <button
                onClick={() => onPageChange && onPageChange("home")}
                className="footer-link-btn"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange && onPageChange("sell-to-us")}
                className="footer-link-btn"
              >
                Sell to Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange && onPageChange("find-us")}
                className="footer-link-btn"
              >
                Find Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange && onPageChange("about-us")}
                className="footer-link-btn"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange && onPageChange("contact-us")}
                className="footer-link-btn"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Popular Categories</h4>
          <ul className="footer-links">
            <li>
              <a href="/granulators-mills-compactors">
                Granulators - Mills - Compactors
              </a>
            </li>
            <li>
              <a href="/mixers-powders-granules">
                Mixers for Powders and Granules
              </a>
            </li>
            <li>
              <a href="/tablet-presses">Tablet Presses</a>
            </li>
            <li>
              <a href="/capsule-filling">Capsule Filling Machines</a>
            </li>
            <li>
              <a href="/coating-equipment">Coating Equipment</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              📘 Facebook
            </a>
            <a href="#" aria-label="LinkedIn">
              💼 LinkedIn
            </a>
            <a href="#" aria-label="Twitter">
              🐦 Twitter
            </a>
            <a href="#" aria-label="YouTube">
              📺 YouTube
            </a>
          </div>

          <div className="certifications">
            <h5>Quality Assurance</h5>
            <p>ISO 9001:2015 Certified</p>
            <p>CE Marking Compliant</p>
            <p>GMP Standards</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; 2024 Tartupharma Medical Equipments. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/manage-cookies">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
