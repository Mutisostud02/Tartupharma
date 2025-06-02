import React from 'react';
import './PageStyles.css';

const AboutUsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Us</h1>
      </div>
      
      <div className="page-content">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/about-tartupharma.jpg" 
              alt="Tartupharma Medical Equipments Facility"
              onError={(e) => {
                e.target.src = '/images/placeholder-machine.svg';
              }}
            />
          </div>
          
          <div className="about-text">
            <p>
              Well maintained used machines for production, process and packaging are a 
              viable alternative to expensive new equipment with long delivery times.
            </p>
            
            <p>
              We are proud to have supplied customers within Pharmaceutical, Biologic, 
              Nutraceutical, Cosmetic, Consumer Health, Personal Care, Food, Vitamin, 
              Herbal and Supplement industries throughout Estonia and internationally 
              for more than 15 years. Our customers range from private label and 
              generic manufacturers through to global brands.
            </p>
            
            <p>
              Qualified staff and our extensive experience ensure our clients receive 
              machines in excellent technical order, which can be installed immediately. 
              We are always happy to assist in the selection and procurement of machines 
              most appropriate to our customers' requirements.
            </p>
            
            <p>
              Our equipment stock ranges from Laboratory, Research and Development 
              through to large Production scale. Our machine stores are clean, safe 
              and all machines are accessible for inspection.
            </p>
            
            <p>
              Tartupharma Medical Equipments was founded in 2008 and in our location 
              in Tartu, Estonia we maintain a large showroom and fully equipped workshop. 
              Our facilities are easily reached by car or public transport from anywhere 
              in the Baltic region.
            </p>
            
            <p>
              In our stores we exhibit a large number of processing and packaging machines. 
              Most machines can be seen running under power and we can often demonstrate 
              machines with customers' product or packaging materials by prior arrangement.
            </p>
            
            <div className="company-highlights">
              <h3>Why Choose Tartupharma Medical Equipments?</h3>
              <ul>
                <li><strong>15+ Years Experience</strong> in pharmaceutical equipment</li>
                <li><strong>Quality Assurance</strong> - All equipment thoroughly tested</li>
                <li><strong>Expert Support</strong> - Technical guidance and installation assistance</li>
                <li><strong>Competitive Pricing</strong> - Cost-effective alternatives to new equipment</li>
                <li><strong>Fast Delivery</strong> - Equipment ready for immediate installation</li>
                <li><strong>International Reach</strong> - Serving customers across Europe and beyond</li>
              </ul>
            </div>
            
            <div className="certifications">
              <h3>Certifications & Standards</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <strong>ISO 9001:2015</strong>
                  <span>Quality Management System</span>
                </div>
                <div className="cert-item">
                  <strong>CE Marking</strong>
                  <span>European Conformity</span>
                </div>
                <div className="cert-item">
                  <strong>GMP Standards</strong>
                  <span>Good Manufacturing Practice</span>
                </div>
                <div className="cert-item">
                  <strong>FDA Compliance</strong>
                  <span>Food and Drug Administration</span>
                </div>
              </div>
            </div>
            
            <div className="contact-cta">
              <h3>Ready to Find Your Equipment?</h3>
              <p>
                Contact us today to discuss your pharmaceutical equipment needs. 
                Our expert team is ready to help you find the perfect solution.
              </p>
              <div className="cta-buttons">
                <a href="mailto:sales@tartupharma.com" className="btn btn-primary">
                  Email Us
                </a>
                <a href="tel:+37271234567" className="btn btn-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
