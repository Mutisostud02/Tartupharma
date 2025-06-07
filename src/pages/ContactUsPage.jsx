import { useState } from "react";
import "./PageStyles.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    companyName: "",
    message: "",
    acceptPrivacy: false,
    receiveNewsletter: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);

    // Create email with contact form details
    const emailSubject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const emailBody = `
Dear Tartupharma Medical Equipments Team,

You have received a new contact form submission:

CONTACT DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.companyName}
- Location: ${formData.location}

MESSAGE:
${formData.message || "No message provided."}

PREFERENCES:
- Newsletter: ${formData.receiveNewsletter ? "Yes" : "No"}

SUBMISSION DATE: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

Please respond to this inquiry promptly.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@tartupharmamedics.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        companyName: "",
        message: "",
        acceptPrivacy: false,
        receiveNewsletter: false,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <div className="success-message">
          <h2>Thank you for your message!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>

      <div className="page-content">
        <div className="contact-intro">
          <p>
            Please use one of the following ways to contact us here at
            Tartupharma Medical Equipments.
          </p>
          <p>
            If you use our Contact Form, we will come back to you as soon as
            possible.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell us about your pharmaceutical equipment needs, questions, or how we can help you..."
                ></textarea>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={handleInputChange}
                    required
                  />
                  <span>I accept the privacy policy *</span>
                </label>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="receiveNewsletter"
                    checked={formData.receiveNewsletter}
                    onChange={handleInputChange}
                  />
                  <span>
                    Receive newsletters containing our latest product offers
                  </span>
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get in Touch</h2>

            <div className="contact-details">
              <div className="contact-detail">
                <h3>Address</h3>
                <p>
                  <a
                    href="https://www.google.com/maps/search/Riia+tn+142,+50411+Tartu,+Estonia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tartupharma Medical Equipments
                    <br />
                    Riia tn 142
                    <br />
                    50411 Tartu, Estonia
                  </a>
                </p>
              </div>

              <div className="contact-detail">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+37271234567">+372 7 123 456</a>
                </p>
              </div>

              <div className="contact-detail">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@tartupharmamedics.com">
                    info@tartupharmamedics.com
                  </a>
                </p>
              </div>

              <div className="contact-detail">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="emergency-contact">
              <h3>Emergency Support</h3>
              <p>
                For urgent technical support or equipment emergencies, please
                call our 24/7 hotline:
              </p>
              <p className="emergency-number">
                <a href="tel:+37271234567">+372 7 123 456</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
