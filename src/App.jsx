import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductListing from "./components/ProductListing";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SellToUsPage from "./pages/SellToUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import FindUsPage from "./pages/FindUsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(
    "granulators-mills-compactors"
  );
  const [manufacturerFilter, setManufacturerFilter] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  // const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Get current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/" || path === "/home") return "home";
    if (path.startsWith("/machines")) return "machines";
    if (path === "/sell-to-us") return "sell-to-us";
    if (path === "/about-us") return "about-us";
    if (path === "/contact-us") return "contact-us";
    if (path === "/find-us") return "find-us";
    if (path.startsWith("/product/")) {
      // Extract product ID from URL
      const productId = path.split("/product/")[1];
      if (productId && productId !== selectedProductId) {
        setSelectedProductId(productId);
      }
      return "product-detail";
    }
    return "home";
  };

  const currentPage = getCurrentPage();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setManufacturerFilter(null); // Clear manufacturer filter when changing category
    navigate("/machines"); // Navigate to machines page
  };

  const handleManufacturerFilter = (manufacturer) => {
    setManufacturerFilter(manufacturer);
    navigate("/machines"); // Go to machines page
  };

  const handlePageChange = (page) => {
    setSelectedProductId(null); // Clear product selection when changing pages
    // Navigate to the appropriate route
    switch (page) {
      case "home":
        navigate("/");
        break;
      case "machines":
        navigate("/machines");
        break;
      case "sell-to-us":
        navigate("/sell-to-us");
        break;
      case "about-us":
        navigate("/about-us");
        break;
      case "contact-us":
        navigate("/contact-us");
        break;
      case "find-us":
        navigate("/find-us");
        break;
      default:
        navigate("/");
    }
  };

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    navigate(`/product/${productId}`);
  };

  const handleBackToProducts = () => {
    setSelectedProductId(null);
    navigate("/machines");
  };

  // Get SEO data based on current page
  // Temporarily disabled
  /*
  const getSEOData = () => {
    const baseUrl = "https://tartupharmamedics.com";

    switch (currentPage) {
      case "home":
        return {
          title:
            "Tartupharma Medical Equipments - Pharmaceutical Machinery & Equipment Estonia",
          description:
            "Leading supplier of pharmaceutical equipment in Estonia. Granulators, tablet presses, capsule filling machines, coating equipment, and more. Quality medical machinery for pharmaceutical manufacturing.",
          canonical: baseUrl,
          keywords:
            "pharmaceutical equipment Estonia, medical machinery, tablet presses, granulators, capsule filling machines, coating equipment",
        };
      case "machines": {
        const categoryData = getCategoryData(selectedCategory);
        return {
          title: `${categoryData.title} - Pharmaceutical Equipment | Tartupharma Kenya`,
          description: `${
            categoryData.description
          } Professional ${categoryData.title.toLowerCase()} for pharmaceutical manufacturing in Kenya.`,
          canonical: `${baseUrl}/machines/${selectedCategory}`,
          keywords: `${categoryData.title.toLowerCase()}, pharmaceutical equipment, ${selectedCategory.replace(
            "-",
            " "
          )}, Kenya`,
        };
      }
      case "about-us":
        return {
          title: "About Us - Tartupharma Medical Equipments Kenya",
          description:
            "Learn about Tartupharma Medical Equipments, your trusted partner for pharmaceutical machinery in Kenya. Quality equipment, expert service, and reliable support.",
          canonical: `${baseUrl}/about-us`,
          keywords:
            "about tartupharma, pharmaceutical equipment company, medical machinery supplier Kenya",
        };
      case "contact-us":
        return {
          title: "Contact Us - Tartupharma Medical Equipments Kenya",
          description:
            "Get in touch with Tartupharma Medical Equipments. Contact us for pharmaceutical equipment inquiries, quotes, and support in Kenya.",
          canonical: `${baseUrl}/contact-us`,
          keywords:
            "contact tartupharma, pharmaceutical equipment contact, medical machinery support Kenya",
        };
      case "sell-to-us":
        return {
          title: "Sell Your Equipment - Tartupharma Medical Equipments Kenya",
          description:
            "Sell your used pharmaceutical equipment to Tartupharma. We buy quality medical machinery and offer fair prices for your equipment.",
          canonical: `${baseUrl}/sell-to-us`,
          keywords:
            "sell pharmaceutical equipment, buy medical machinery, used equipment Kenya",
        };
      case "find-us":
        return {
          title: "Find Us - Tartupharma Medical Equipments Location Kenya",
          description:
            "Find Tartupharma Medical Equipments location in Kenya. Visit our showroom to see pharmaceutical equipment and get expert consultation.",
          canonical: `${baseUrl}/find-us`,
          keywords:
            "tartupharma location, pharmaceutical equipment showroom, medical machinery Kenya address",
        };
      case "product-detail":
        return {
          title: `${selectedProductId} - Pharmaceutical Equipment | Tartupharma Kenya`,
          description: `View details for ${selectedProductId} pharmaceutical equipment. Quality medical machinery for pharmaceutical manufacturing in Kenya.`,
          canonical: `${baseUrl}/product/${selectedProductId}`,
          keywords: `${selectedProductId}, pharmaceutical equipment, medical machinery, Kenya`,
        };
      default:
        return {
          title:
            "Tartupharma Medical Equipments - Pharmaceutical Machinery & Equipment Kenya",
          description:
            "Leading supplier of pharmaceutical equipment in Kenya. Quality medical machinery for pharmaceutical manufacturing.",
          canonical: baseUrl,
          keywords: "pharmaceutical equipment Kenya, medical machinery",
        };
    }
  };
  */

  // Keyboard shortcut to toggle performance monitor (Ctrl+Shift+P)
  // Temporarily disabled
  /*
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
  */

  // const seoData = getSEOData();
  // const categoryData =
  //   currentPage === "machines" ? getCategoryData(selectedCategory) : null;

  return (
    <div className="App">
      {/* SEO Components - Temporarily disabled due to React hooks issue */}
      {/*
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
      />
      <StructuredData
        page={currentPage}
        category={categoryData}
        product={selectedProductId ? { id: selectedProductId } : null}
      />
      */}

      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onManufacturerFilter={handleManufacturerFilter}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />

      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        currentPage={currentPage}
      />

      <main
        className={`main-content ${
          currentPage === "machines" ? "with-sidebar" : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onCategoryChange={handleCategoryChange}
                onProductSelect={handleProductSelect}
                onPageChange={handlePageChange}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                onCategoryChange={handleCategoryChange}
                onProductSelect={handleProductSelect}
                onPageChange={handlePageChange}
              />
            }
          />
          <Route
            path="/machines"
            element={
              <ProductListing
                category={selectedCategory}
                manufacturerFilter={manufacturerFilter}
                onProductSelect={handleProductSelect}
                onPageChange={handlePageChange}
              />
            }
          />
          <Route path="/sell-to-us" element={<SellToUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/find-us" element={<FindUsPage />} />
          <Route
            path="/product/:productId"
            element={
              <ProductDetailPage
                productId={selectedProductId}
                onBack={handleBackToProducts}
              />
            }
          />
        </Routes>
      </main>

      <Footer
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
      />

      {/* Performance Monitor - Toggle with Ctrl+Shift+P */}
      {/* Temporarily disabled due to React hooks issue */}
      {/* <SimplePerformanceMonitor show={showPerformanceMonitor} /> */}
    </div>
  );
}

// Wrapper component that provides Router context
function App() {
  return <AppContent />;
}

export default App;
