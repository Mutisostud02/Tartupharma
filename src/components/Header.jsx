import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import "./Header.css";

const Header = ({
  selectedCategory,
  onCategoryChange,
  onManufacturerFilter,
  onPageChange,
  currentPage,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on dropdown toggle or menu
      if (
        event.target.closest(".dropdown-toggle") ||
        event.target.closest(".dropdown-menu")
      ) {
        return;
      }

      // Close if clicking outside any dropdown
      if (!event.target.closest(".dropdown")) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <header className="header">
      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <div className="logo-section">
              <button
                onClick={() => onPageChange("home")}
                className="logo-button"
                aria-label="Tartupharma Home"
              >
                <Logo width={280} height={84} className="company-logo" />
              </button>
            </div>

            <nav className="main-nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <button
                    onClick={() => onPageChange("home")}
                    className={`nav-link ${
                      currentPage === "home" ? "active" : ""
                    }`}
                  >
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text-full">Home</span>
                    <span className="nav-text-mobile">Home</span>
                  </button>
                </li>
                <li
                  className={`nav-item dropdown ${
                    openDropdown === "machines" ? "open" : ""
                  }`}
                >
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown("machines")}
                  >
                    <span className="nav-icon">⚙️</span>
                    <span className="nav-text-full">Machines</span>
                    <span className="nav-text-mobile">Mach</span>
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <div className="dropdown-menu">
                    <button
                      onClick={() => {
                        onCategoryChange("granulators-mills-compactors");
                        closeDropdowns();
                      }}
                      className={
                        selectedCategory === "granulators-mills-compactors"
                          ? "active"
                          : ""
                      }
                    >
                      Granulators - Mills - Compactors
                    </button>
                    <button
                      onClick={() => {
                        onCategoryChange("mixers-powders-granules");
                        closeDropdowns();
                      }}
                      className={
                        selectedCategory === "mixers-powders-granules"
                          ? "active"
                          : ""
                      }
                    >
                      Mixers for Powders and Granules
                    </button>
                    <button
                      onClick={() => {
                        onCategoryChange("mixers-liquids-creams");
                        closeDropdowns();
                      }}
                      className={
                        selectedCategory === "mixers-liquids-creams"
                          ? "active"
                          : ""
                      }
                    >
                      Mixers for Liquids and Creams
                    </button>
                    <button
                      onClick={() => {
                        onCategoryChange("tablet-presses");
                        closeDropdowns();
                      }}
                      className={
                        selectedCategory === "tablet-presses" ? "active" : ""
                      }
                    >
                      Tablet Presses
                    </button>
                    <button
                      onClick={() => onCategoryChange("capsule-filling")}
                      className={
                        selectedCategory === "capsule-filling" ? "active" : ""
                      }
                    >
                      Capsule Filling + Processing Machines
                    </button>
                    <button
                      onClick={() => onCategoryChange("sieves-sifters-filters")}
                      className={
                        selectedCategory === "sieves-sifters-filters"
                          ? "active"
                          : ""
                      }
                    >
                      Sieves, Sifters and Filters
                    </button>
                    <button
                      onClick={() => onCategoryChange("dryers-fluidbed")}
                      className={
                        selectedCategory === "dryers-fluidbed" ? "active" : ""
                      }
                    >
                      Dryers - Fluidbed Dryers - De-humidifiers
                    </button>
                    <button
                      onClick={() => onCategoryChange("coating-equipment")}
                      className={
                        selectedCategory === "coating-equipment" ? "active" : ""
                      }
                    >
                      Coating Equipment
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange(
                          "tablet-capsule-counting-packing-blisterpackers"
                        )
                      }
                      className={
                        selectedCategory ===
                        "tablet-capsule-counting-packing-blisterpackers"
                          ? "active"
                          : ""
                      }
                    >
                      Tablet/Capsule Counting + Packing - Blisterpackers
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("fillers-liquids-creams-ampoule")
                      }
                      className={
                        selectedCategory === "fillers-liquids-creams-ampoule"
                          ? "active"
                          : ""
                      }
                    >
                      Fillers for Liquids + Creams - Ampoule Fillers
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("fillers-powders-granules")
                      }
                      className={
                        selectedCategory === "fillers-powders-granules"
                          ? "active"
                          : ""
                      }
                    >
                      Fillers for Powders + Granules
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("capping-closing-machines")
                      }
                      className={
                        selectedCategory === "capping-closing-machines"
                          ? "active"
                          : ""
                      }
                    >
                      Capping and Closing Machines
                    </button>
                    <button
                      onClick={() => onCategoryChange("labelling-machines")}
                      className={
                        selectedCategory === "labelling-machines"
                          ? "active"
                          : ""
                      }
                    >
                      Labelling Machines
                    </button>
                    <button
                      onClick={() => onCategoryChange("cartoning-machines")}
                      className={
                        selectedCategory === "cartoning-machines"
                          ? "active"
                          : ""
                      }
                    >
                      Cartoning Machines
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("overwrappers-shrinkwrappers-banders")
                      }
                      className={
                        selectedCategory ===
                        "overwrappers-shrinkwrappers-banders"
                          ? "active"
                          : ""
                      }
                    >
                      Overwrappers - Shrinkwrappers - Banders
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("container-handling-unscramblers")
                      }
                      className={
                        selectedCategory === "container-handling-unscramblers"
                          ? "active"
                          : ""
                      }
                    >
                      Container Handling - Unscramblers
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("washers-bottle-blowers-sterilisers")
                      }
                      className={
                        selectedCategory ===
                        "washers-bottle-blowers-sterilisers"
                          ? "active"
                          : ""
                      }
                    >
                      Washers - Bottle Blowers - Sterilisers
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("weighing-scales-checkweighers")
                      }
                      className={
                        selectedCategory === "weighing-scales-checkweighers"
                          ? "active"
                          : ""
                      }
                    >
                      Weighing Scales - Checkweighers
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("tablet-dedusters-dust-extractors")
                      }
                      className={
                        selectedCategory === "tablet-dedusters-dust-extractors"
                          ? "active"
                          : ""
                      }
                    >
                      Tablet Dedusters - Dust Extractors
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("coding-printing-folding-machines")
                      }
                      className={
                        selectedCategory === "coding-printing-folding-machines"
                          ? "active"
                          : ""
                      }
                    >
                      Coding - Printing - Folding Machines
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange(
                          "inspection-sorting-grading-metal-detectors"
                        )
                      }
                      className={
                        selectedCategory ===
                        "inspection-sorting-grading-metal-detectors"
                          ? "active"
                          : ""
                      }
                    >
                      Inspection - Sorting - Grading - Metal Detectors
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange(
                          "pumps-product-material-handling-plant"
                        )
                      }
                      className={
                        selectedCategory ===
                        "pumps-product-material-handling-plant"
                          ? "active"
                          : ""
                      }
                    >
                      Pumps + Product / Material Handling Plant
                    </button>
                    <button
                      onClick={() => onCategoryChange("laboratory-equipment")}
                      className={
                        selectedCategory === "laboratory-equipment"
                          ? "active"
                          : ""
                      }
                    >
                      Laboratory Equipment
                    </button>
                    <button
                      onClick={() =>
                        onCategoryChange("tanks-mixing-tanks-containers")
                      }
                      className={
                        selectedCategory === "tanks-mixing-tanks-containers"
                          ? "active"
                          : ""
                      }
                    >
                      Tanks - Mixing Tanks - Containers
                    </button>
                  </div>
                </li>
                <li
                  className={`nav-item dropdown ${
                    openDropdown === "manufacturers" ? "open" : ""
                  }`}
                >
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown("manufacturers")}
                  >
                    <span className="nav-icon">🏭</span>
                    <span className="nav-text-full">Manufacturers</span>
                    <span className="nav-text-mobile">Mfg</span>
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  <div className="dropdown-menu manufacturers-menu">
                    <button
                      onClick={() => {
                        onManufacturerFilter("QUADRO");
                        closeDropdowns();
                      }}
                    >
                      QUADRO
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("HOSOKAWA MICRON");
                        closeDropdowns();
                      }}
                    >
                      HOSOKAWA MICRON
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("HOSOKAWA ALPINE");
                        closeDropdowns();
                      }}
                    >
                      HOSOKAWA ALPINE
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("BECOMIX");
                        closeDropdowns();
                      }}
                    >
                      BECOMIX
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("ALEXANDERWERK");
                        closeDropdowns();
                      }}
                    >
                      ALEXANDERWERK
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("FITZPATRICK");
                        closeDropdowns();
                      }}
                    >
                      FITZPATRICK
                    </button>
                    <button
                      onClick={() => {
                        onManufacturerFilter("FREWITT");
                        closeDropdowns();
                      }}
                    >
                      FREWITT
                    </button>
                    <button onClick={() => onManufacturerFilter("BEPEX")}>
                      BEPEX
                    </button>
                    <button
                      onClick={() => onManufacturerFilter("PATTERSON-KELLEY")}
                    >
                      PATTERSON-KELLEY
                    </button>
                    <button onClick={() => onManufacturerFilter("MUNSON")}>
                      MUNSON
                    </button>
                    <button onClick={() => onManufacturerFilter("GEMCO")}>
                      GEMCO
                    </button>
                    <button onClick={() => onManufacturerFilter("COLLETTE")}>
                      COLLETTE
                    </button>
                    <button onClick={() => onManufacturerFilter("FORBERG")}>
                      FORBERG
                    </button>
                    <button onClick={() => onManufacturerFilter("GAULIN")}>
                      GAULIN
                    </button>
                    <button onClick={() => onManufacturerFilter("HOBART")}>
                      HOBART
                    </button>
                    <button onClick={() => onManufacturerFilter("SILVERSON")}>
                      SILVERSON
                    </button>
                    <button onClick={() => onManufacturerFilter("KORSCH")}>
                      KORSCH
                    </button>
                    <button onClick={() => onManufacturerFilter("MANESTY")}>
                      MANESTY
                    </button>
                    <button onClick={() => onManufacturerFilter("FETTE")}>
                      FETTE
                    </button>
                    <button onClick={() => onManufacturerFilter("BOSCH")}>
                      BOSCH
                    </button>
                    <button onClick={() => onManufacturerFilter("CAPSUGEL")}>
                      CAPSUGEL
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => onPageChange("sell-to-us")}
                    className={`nav-link ${
                      currentPage === "sell-to-us" ? "active" : ""
                    }`}
                  >
                    <span className="nav-icon">💰</span>
                    <span className="nav-text-full">Sell to Us</span>
                    <span className="nav-text-mobile">Sell</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => onPageChange("find-us")}
                    className={`nav-link ${
                      currentPage === "find-us" ? "active" : ""
                    }`}
                  >
                    <span className="nav-icon">📍</span>
                    <span className="nav-text-full">Find Us</span>
                    <span className="nav-text-mobile">Find</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => onPageChange("about-us")}
                    className={`nav-link ${
                      currentPage === "about-us" ? "active" : ""
                    }`}
                  >
                    <span className="nav-icon">ℹ️</span>
                    <span className="nav-text-full">About Us</span>
                    <span className="nav-text-mobile">About</span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => onPageChange("contact-us")}
                    className={`nav-link ${
                      currentPage === "contact-us" ? "active" : ""
                    }`}
                  >
                    <span className="nav-icon">📞</span>
                    <span className="nav-text-full">Contact Us</span>
                    <span className="nav-text-mobile">Contact</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
