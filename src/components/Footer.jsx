import React from "react";
import "./Footer.css";

const Footer = ({ onPageChange, onCategoryChange }) => {
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
              <a href="mailto:info@tartupharmamedics.com">
                info@tartupharmamedics.com
              </a>
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
              <button
                onClick={() =>
                  onCategoryChange &&
                  onCategoryChange("granulators-mills-compactors")
                }
                className="footer-link-btn"
              >
                Granulators - Mills - Compactors
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onCategoryChange &&
                  onCategoryChange("mixers-powders-granules")
                }
                className="footer-link-btn"
              >
                Mixers for Powders and Granules
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onCategoryChange && onCategoryChange("tablet-presses")
                }
                className="footer-link-btn"
              >
                Tablet Presses
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onCategoryChange && onCategoryChange("capsule-filling")
                }
                className="footer-link-btn"
              >
                Capsule Filling Machines
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  onCategoryChange && onCategoryChange("coating-equipment")
                }
                className="footer-link-btn"
              >
                Coating Equipment
              </button>
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
            <button
              onClick={() => onPageChange && onPageChange("privacy-policy")}
              className="footer-link-btn"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onPageChange && onPageChange("terms-of-service")}
              className="footer-link-btn"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onPageChange && onPageChange("manage-cookies")}
              className="footer-link-btn"
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
