import { useState } from "react";
import "./PageStyles.css";

const FindUsPage = () => {
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
    console.log("Visit request submitted:", formData);

    // Create email with visit request details
    const emailSubject = `Facility Visit Request from ${formData.firstName} ${formData.lastName}`;
    const emailBody = `
Dear Tartupharma Medical Equipments Team,

You have received a new facility visit request:

VISITOR DETAILS:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.companyName}
- Location: ${formData.location}

VISIT REQUEST MESSAGE:
${formData.message || "No specific message provided."}

PREFERENCES:
- Newsletter: ${formData.receiveNewsletter ? "Yes" : "No"}

SUBMISSION DATE: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

Please contact the visitor to arrange a suitable visit time and provide directions.
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
          <h2>Thank you for your visit request!</h2>
          <p>
            We will contact you shortly to arrange your visit to our facility.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Find Us</h1>
      </div>

      <div className="page-content">
        <div className="find-us-layout">
          <div className="directions-section">
            <h2>How to Reach Us</h2>

            <div className="transport-method">
              <h3>🚗 By Car:</h3>
              <p>
                From Tallinn: Take the A2 highway south towards Tartu
                (approximately 185 km, 2 hours). Take Exit 5 towards Tartu city
                center, continue on Riia tn. Our facility is located at Riia tn
                142 on the right side.
              </p>
              <p>
                From Riga: Take the A3 highway north towards Valga/Tartu
                (approximately 180 km, 2.5 hours). Cross the Estonian border and
                continue on Route 2 to Tartu. Follow signs to city center and
                turn onto Riia tn.
              </p>
              <p>
                <strong>Parking:</strong> Free parking is available on-site for
                visitors.
              </p>
            </div>

            <div className="transport-method">
              <h3>🚌 Public Transport:</h3>
              <p>
                <strong>From Tallinn:</strong> Regular bus services operate
                between Tallinn and Tartu (Lux Express, Simple Express). Journey
                time is approximately 2.5 hours. The bus station in Tartu is
                about 10 minutes by taxi from our facility.
              </p>
              <p>
                <strong>Local Transport:</strong> City buses run regularly from
                Tartu city center. Take bus lines 2, 5, or 12 to the "Riia tn"
                stop, which is a 3-minute walk from our facility.
              </p>
              <p>
                You can call us on <a href="tel:+37271234567">+372 7 123 456</a>{" "}
                if you require any assistance with directions or transport.
              </p>
            </div>

            <div className="transport-method">
              <h3>✈️ Airports:</h3>
              <p>
                <strong>Tallinn Airport (TLL):</strong> Approximately 185 km
                from our facility. We can arrange pickup from Tallinn Airport by
                prior arrangement.
              </p>
              <p>
                <strong>Riga Airport (RIX):</strong> Approximately 200 km from
                our facility. Regular bus connections available to Tartu.
              </p>
              <p>
                <strong>Tartu Airport:</strong> Small regional airport 8 km from
                city center, mainly serving charter flights.
              </p>
              <p>
                We can also advise on connections from Helsinki, Stockholm, and
                other international airports via Tallinn.
              </p>
            </div>

            <div className="visit-info">
              <h3>📅 Planning Your Visit</h3>
              <p>
                We welcome visitors to our facility to inspect equipment and
                discuss requirements. Please contact us in advance to schedule
                your visit and ensure our technical staff are available to
                assist you.
              </p>
              <ul>
                <li>Equipment demonstrations can be arranged by appointment</li>
                <li>
                  Technical documentation and certificates available for review
                </li>
                <li>Refreshments provided during your visit</li>
                <li>Multilingual staff (Estonian, English, Russian, German)</li>
              </ul>
            </div>
          </div>

          <div className="visit-form-section">
            <h2>Schedule a Visit</h2>
            <p>
              Planning to visit our facility? Let us know in advance so we can
              prepare for your arrival and ensure the best possible experience.
            </p>

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
                  <label htmlFor="location">Your Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, Country"
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
                <label htmlFor="message">Visit Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Please let us know your preferred visit dates, specific equipment you'd like to see, and any special requirements..."
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
                Request Visit
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <p>📍 Riia tn 142, 50411 Tartu, Estonia</p>
            <p>Interactive map would be embedded here</p>
            <a
              href="https://www.google.com/maps/search/Riia+tn+142,+50411+Tartu,+Estonia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsPage;
