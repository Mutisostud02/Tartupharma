import React, { useState } from "react";
import { getAllProducts } from "../data/products";
import "./ProductDetailPage.css";

const ProductDetailPage = ({ productId, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Find the product by ID
  const allProducts = getAllProducts();
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="product-detail-error">
        <h2>Product Not Found</h2>
        <p>The requested product could not be found.</p>
        <button onClick={onBack} className="btn btn-primary">
          Back to Products
        </button>
      </div>
    );
  }

  // Mock additional product data that would come from a database
  const productDetails = {
    ...product,
    condition: "Used",
    description: `This ${product.type.toLowerCase()} is designed for intensive and efficient processing of pharmaceutical materials. The machine is suitable for laboratory or production scale use and has been thoroughly tested and refurbished to ensure optimal performance. All safety features and controls are fully functional. The equipment comes with comprehensive documentation including operation manuals, maintenance schedules, and certification records. Installation support and training can be provided upon request.`,
    shortDescription: `This ${product.type.toLowerCase()} is designed for intensive and efficient processing of pharmaceutical materials. The machine is suitable for laboratory or production scale use and has been thoroughly tested and refurbished to ensure optimal performance.`,
    specifications: {
      Manufacturer: product.manufacturer,
      Model: product.model,
      Type: product.type,
      Condition: "Used",
      "Stock Number": product.id,
      Year: "2018-2020",
      "Power Supply": "380V / 50Hz",
      "Material Contact": "Stainless Steel 316L",
      Certification: "CE Marked, GMP Compliant",
    },
    images: [
      product.image,
      product.image, // In real app, these would be different angles
      product.image,
      product.image,
    ],
  };

  const handleQuoteRequest = () => {
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const quoteData = {
      productId: product.id,
      productName: product.name,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    console.log("Quote request submitted:", quoteData);

    // Create email body with quote details
    const emailSubject = `Quote Request for ${product.id} - ${product.name}`;
    const emailBody = `
Dear Tartupharma Medical Equipments Team,

I would like to request a quote for the following equipment:

PRODUCT DETAILS:
- Product ID: ${product.id}
- Product Name: ${product.name}
- Manufacturer: ${product.manufacturer}
- Model: ${product.model}
- Type: ${product.type}

CUSTOMER DETAILS:
- Name: ${quoteData.firstName} ${quoteData.lastName}
- Email: ${quoteData.email}
- Phone: ${quoteData.phone}
- Company: ${quoteData.company}

MESSAGE:
${quoteData.message || "No additional message provided."}

REQUEST DATE: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

Please provide a detailed quote including pricing, delivery options, and any additional information.

Best regards,
${quoteData.firstName} ${quoteData.lastName}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@tartupharmamedics.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      `Quote request prepared! Your email client should open with the quote details. If it doesn't open automatically, please send an email to info@tartupharmamedics.com with your quote request for ${product.name}.`
    );
    setShowQuoteForm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    // Create email share with product details
    const emailSubject = `Product Inquiry: ${product.id} - ${product.name}`;
    const emailBody = `
Dear Tartupharma Medical Equipments Team,

I am interested in the following equipment:

PRODUCT DETAILS:
- Product ID: ${product.id}
- Product Name: ${product.name}
- Manufacturer: ${product.manufacturer}
- Model: ${product.model}
- Type: ${product.type}

Product Link: ${window.location.href}

Please provide more information about this equipment including availability, pricing, and specifications.

Best regards
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@tartupharmamedics.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={onBack} className="breadcrumb-link">
          Machines
        </button>
        <span> &gt; </span>
        <span className="current">{product.id}</span>
      </div>

      <div className="product-detail-content">
        {/* Image Gallery */}
        <div className="image-section">
          <div className="main-image">
            <img
              src={productDetails.images[selectedImageIndex]}
              alt={productDetails.name}
            />
          </div>
          <div className="image-thumbnails">
            {productDetails.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${productDetails.name} view ${index + 1}`}
                className={selectedImageIndex === index ? "active" : ""}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="info-section">
          <div className="product-header">
            <div className="share-print">
              <button onClick={handleShare} className="share-btn">
                📤 Share via Email
              </button>
              <button onClick={handlePrint} className="print-btn">
                🖨️ Print Listing
              </button>
            </div>
          </div>

          <h1>{productDetails.name}</h1>

          <div className="quote-section">
            <button onClick={handleQuoteRequest} className="quote-btn">
              Request A Quote
            </button>
            <div className="contact-info">
              <p>or</p>
              <p>
                Call: <a href="tel:+37271234567">+372 7 123 456</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@tartupharmamedics.com">
                  info@tartupharmamedics.com
                </a>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3>Description</h3>
            <p>
              {showFullDescription
                ? productDetails.description
                : productDetails.shortDescription}
            </p>
            <button
              className="show-all-btn"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Show Less" : "Show All"}
            </button>
          </div>

          {/* Specifications */}
          <div className="specifications-section">
            <h3>Specifications</h3>
            <table className="specs-table">
              <tbody>
                {Object.entries(productDetails.specifications).map(
                  ([key, value]) => (
                    <tr key={key}>
                      <td className="spec-label">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Request Quote for {product.id}</h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="close-btn"
              >
                ✕
              </button>
            </div>
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label>Company Name *</label>
                <input type="text" name="company" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder={`I am interested in ${productDetails.name} (${product.id}). Please provide a quote including delivery to my location.`}
                ></textarea>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => setShowQuoteForm(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
