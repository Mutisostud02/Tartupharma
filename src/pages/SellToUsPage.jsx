import React, { useState } from 'react';
import './PageStyles.css';

const SellToUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    companyName: '',
    message: '',
    acceptPrivacy: false,
    receiveNewsletter: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        companyName: '',
        message: '',
        acceptPrivacy: false,
        receiveNewsletter: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <div className="success-message">
          <h2>Thank you for your request!</h2>
          <p>We will contact you shortly to discuss your available equipment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Sell to Us</h1>
      </div>
      
      <div className="page-content">
        <div className="content-section">
          <div className="text-content">
            <p>
              We are <strong>ALWAYS</strong> interested in buying any well maintained 
              Pharmaceutical Processing, Production or Packaging Machinery which may be 
              redundant to your ongoing requirements and available for sale.
            </p>
            
            <p>
              Please fill in the form with brief details of any redundant equipment 
              and include your contact details so we can contact you.
            </p>
            
            <div className="contact-alternatives">
              <h3>Alternative Contact Methods:</h3>
              <div className="contact-item">
                <strong>E-mail:</strong> 
                <a href="mailto:sales@tartupharma.com">sales@tartupharma.com</a>
              </div>
              <div className="contact-item">
                <strong>Tel.:</strong> 
                <a href="tel:+37271234567">+372 7 123 456</a>
              </div>
            </div>
          </div>
          
          <div className="form-section">
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
                <label htmlFor="message">Equipment Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Please describe the equipment you wish to sell, including manufacturer, model, year, condition, and any other relevant details..."
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
                  <span>Receive newsletters containing our latest product offers</span>
                </label>
              </div>
              
              <button type="submit" className="submit-btn">
                Submit Equipment Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellToUsPage;
