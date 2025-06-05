// React import removed - not needed in modern React
import { getAllProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";

const HomePage = ({ onCategoryChange, onProductSelect, onPageChange }) => {
  // Get latest arrivals (first 6 products from different categories)
  const allProducts = getAllProducts();
  const latestArrivals = allProducts.slice(0, 6);

  const handleViewMachines = () => {
    onCategoryChange("granulators-mills-compactors");
  };

  const handleViewAll = () => {
    onCategoryChange("granulators-mills-compactors");
  };

  // Handle contact for price
  const handleContactForPrice = (product) => {
    if (onPageChange) {
      onPageChange("contact-us");
      console.log("Contact for price requested for:", product.name);
    }
  };

  // Handle send inquiry
  const handleSendInquiry = (product) => {
    if (onPageChange) {
      onPageChange("contact-us");
      console.log("Inquiry requested for:", product.name);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Tartupharma Medical Equipments</h1>
          <p className="hero-subtitle">
            Suppliers of Used Pharmaceutical Processing Machines and
            Pharmaceutical Packaging Machinery
          </p>
          <button className="cta-button" onClick={handleViewMachines}>
            View Our Machines
          </button>
        </div>
      </section>

      {/* Latest Arrivals Section */}
      <section className="latest-arrivals">
        <div className="container">
          <h2>Latest Arrivals</h2>
          <div className="products-grid">
            {latestArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductSelect={onProductSelect}
                onContactForPrice={handleContactForPrice}
                onSendInquiry={handleSendInquiry}
              />
            ))}
          </div>
          <div className="view-all-container">
            <button className="view-all-btn" onClick={handleViewAll}>
              View All
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2>About us</h2>
          <div className="about-content">
            <p>
              Well maintained used machines for production, process and
              packaging are a viable alternative to expensive new equipment with
              long delivery times.
            </p>
            <p>
              We are proud to have supplied customers within Pharmaceutical,
              Biologic, Nutraceutical, Cosmetic, Consumer Health, Personal Care,
              Food, Vitamin, Herbal and Supplement industries world-wide for
              more than 25 years. Our customers range from private label and
              generic manufacturers through to global brands.
            </p>
            <p>
              Qualified staff and our extensive experience ensure our clients
              receive machines in excellent technical order, which can be
              installed immediately. We are always happy to assist in the
              selection and procurement of machines most appropriate to our
              customers' requirements.
            </p>
            <p>
              Our equipment stock ranges from Laboratory, Research and
              Development through to large Production scale. Our machine stores
              are clean, safe and all machines are accessible for inspection.
            </p>
            <p>
              Tartupharma Medical Equipments was founded with a commitment to
              quality and reliability. Located in Tartu, Estonia, we maintain a
              large showroom and fully equipped workshop. Our facilities are
              easily reached and we welcome customer visits.
            </p>
            <p>
              In our stores we exhibit a large number of processing and
              packaging machines. Most machines can be seen running under power
              and we can often demonstrate machines with customers' product or
              packaging materials by prior arrangement.
            </p>
            <div className="contact-cta">
              <button
                className="contact-btn"
                onClick={() => onPageChange("contact-us")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
