import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getCategoryData, getProductsByManufacturer } from "../data/products";
import { useImagePreload } from "../hooks/useCache";
import "./ProductListing.css";

const ProductListing = ({
  category,
  manufacturerFilter,
  onProductSelect,
  onPageChange,
}) => {
  const [sortBy, setSortBy] = useState("relevance");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const categoryData = getCategoryData(category);
  const allProducts = manufacturerFilter
    ? getProductsByManufacturer(manufacturerFilter)
    : categoryData.products;

  // Update title and description based on filter type
  const displayData = manufacturerFilter
    ? {
        title: `${manufacturerFilter} Equipment`,
        description: `All pharmaceutical equipment from ${manufacturerFilter} manufacturer.`,
        count: allProducts.length,
      }
    : categoryData;

  // Get unique manufacturers and types for filters
  const manufacturers = useMemo(() => {
    const uniqueManufacturers = [
      ...new Set(allProducts.map((p) => p.manufacturer)),
    ];
    return uniqueManufacturers.sort();
  }, [allProducts]);

  const productTypes = useMemo(() => {
    const uniqueTypes = [...new Set(allProducts.map((p) => p.type))];
    return uniqueTypes.sort();
  }, [allProducts]);

  // Preload product images for better performance
  const productImages = useMemo(
    () => allProducts.map((product) => product.image),
    [allProducts]
  );

  const { loadedImages } = useImagePreload(productImages);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.manufacturer
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply manufacturer filter
    if (selectedManufacturers.length > 0) {
      filtered = filtered.filter((product) =>
        selectedManufacturers.includes(product.manufacturer)
      );
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product) =>
        selectedTypes.includes(product.type)
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "manufacturer-az":
          return a.manufacturer.localeCompare(b.manufacturer);
        case "manufacturer-za":
          return b.manufacturer.localeCompare(a.manufacturer);
        case "model-az":
          return a.model.localeCompare(b.model);
        case "model-za":
          return b.model.localeCompare(a.model);
        case "oldest":
          return a.id.localeCompare(b.id);
        case "newest":
          return b.id.localeCompare(a.id);
        default: // relevance
          return 0;
      }
    });

    return sorted;
  }, [allProducts, searchTerm, selectedManufacturers, selectedTypes, sortBy]);

  const handleManufacturerChange = (manufacturer) => {
    setSelectedManufacturers((prev) =>
      prev.includes(manufacturer)
        ? prev.filter((m) => m !== manufacturer)
        : [...prev, manufacturer]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedManufacturers([]);
    setSelectedTypes([]);
    setSortBy("relevance");
  };

  // Reset filters when category changes
  useEffect(() => {
    clearFilters();
    setShowFilters(false);
  }, [category]);

  // Handle contact for price
  const handleContactForPrice = (product) => {
    // Navigate to contact page with product context
    if (onPageChange) {
      onPageChange("contact-us");
      // In a real app, you might pass product info to the contact form
      console.log("Contact for price requested for:", product.name);
    }
  };

  // Handle send inquiry
  const handleSendInquiry = (product) => {
    // Navigate to contact page or open inquiry modal
    if (onPageChange) {
      onPageChange("contact-us");
      // In a real app, you might open a specific inquiry form
      console.log("Inquiry requested for:", product.name);
    }
  };

  return (
    <div className="product-listing">
      <div className="breadcrumb">
        <span>Machines</span> &gt;{" "}
        <span className="current">{displayData.title}</span>
        {manufacturerFilter && (
          <span>
            {" "}
            &gt;{" "}
            <span className="manufacturer-filter">
              Manufacturer: {manufacturerFilter}
            </span>
          </span>
        )}
      </div>

      <div className="listing-header">
        <h1>{displayData.title}</h1>
        <div className="controls">
          <button className="print-btn">Print</button>
          <button
            className={`filters-btn ${showFilters ? "active" : ""}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters{" "}
            {selectedManufacturers.length + selectedTypes.length > 0 &&
              `(${selectedManufacturers.length + selectedTypes.length})`}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="relevance">Relevance</option>
            <option value="manufacturer-az">Manufacturer A-Z</option>
            <option value="manufacturer-za">Manufacturer Z-A</option>
            <option value="model-az">Model A-Z</option>
            <option value="model-za">Model Z-A</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products, manufacturers, models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
        {searchTerm && (
          <div className="search-results-info">
            Found {filteredAndSortedProducts.length} products matching "
            {searchTerm}"
            <button onClick={() => setSearchTerm("")} className="clear-search">
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="filters-panel">
          <div className="filters-header">
            <h3>Filter Products</h3>
            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          </div>

          <div className="filters-content">
            <div className="filter-group">
              <h4>Manufacturers ({manufacturers.length})</h4>
              <div className="filter-options">
                {manufacturers.map((manufacturer) => (
                  <label key={manufacturer} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedManufacturers.includes(manufacturer)}
                      onChange={() => handleManufacturerChange(manufacturer)}
                    />
                    <span>{manufacturer}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h4>Equipment Types ({productTypes.length})</h4>
              <div className="filter-options">
                {productTypes.map((type) => (
                  <label key={type} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="description">{displayData.description}</p>

      {/* Results Summary */}
      <div className="results-summary">
        Showing {filteredAndSortedProducts.length} of {allProducts.length}{" "}
        products
        {(selectedManufacturers.length > 0 ||
          selectedTypes.length > 0 ||
          searchTerm) && (
          <span className="active-filters">
            {searchTerm && ` • Search: "${searchTerm}"`}
            {selectedManufacturers.length > 0 &&
              ` • Manufacturers: ${selectedManufacturers.join(", ")}`}
            {selectedTypes.length > 0 &&
              ` • Types: ${selectedTypes.join(", ")}`}
          </span>
        )}
      </div>

      <div className="products-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductSelect={onProductSelect}
              onContactForPrice={handleContactForPrice}
              onSendInquiry={handleSendInquiry}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No products found</h3>
            <p>
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
