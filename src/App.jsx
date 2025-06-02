import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SellToUsPage from "./pages/SellToUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import FindUsPage from "./pages/FindUsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PerformanceMonitor from "./components/PerformanceMonitor";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    "granulators-mills-compactors"
  );
  const [manufacturerFilter, setManufacturerFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setManufacturerFilter(null); // Clear manufacturer filter when changing category
    setCurrentPage("machines"); // Navigate to machines page
  };

  const handleManufacturerFilter = (manufacturer) => {
    setManufacturerFilter(manufacturer);
    setCurrentPage("machines"); // Go to machines page
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedProductId(null); // Clear product selection when changing pages
  };

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage("product-detail");
  };

  const handleBackToProducts = () => {
    setSelectedProductId(null);
    setCurrentPage("machines");
  };

  // Keyboard shortcut to toggle performance monitor (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === "P") {
        event.preventDefault();
        setShowPerformanceMonitor((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderMainContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onCategoryChange={handleCategoryChange}
            onProductSelect={handleProductSelect}
          />
        );
      case "machines":
        return (
          <ProductListing
            category={selectedCategory}
            manufacturerFilter={manufacturerFilter}
            onProductSelect={handleProductSelect}
          />
        );
      case "sell-to-us":
        return <SellToUsPage />;
      case "about-us":
        return <AboutUsPage />;
      case "contact-us":
        return <ContactUsPage />;
      case "find-us":
        return <FindUsPage />;
      case "product-detail":
        return (
          <ProductDetailPage
            productId={selectedProductId}
            onBack={handleBackToProducts}
          />
        );
      default:
        return (
          <HomePage
            onCategoryChange={handleCategoryChange}
            onProductSelect={handleProductSelect}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onManufacturerFilter={handleManufacturerFilter}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
      <main>{renderMainContent()}</main>
      <Footer onPageChange={handlePageChange} />

      {/* Performance Monitor - Toggle with Ctrl+Shift+P */}
      <PerformanceMonitor show={showPerformanceMonitor} />
    </div>
  );
}

export default App;
