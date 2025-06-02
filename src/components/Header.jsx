import React from "react";
import "./Header.css";

const Header = ({
  selectedCategory,
  onCategoryChange,
  onManufacturerFilter,
  onPageChange,
  currentPage,
}) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-info">
          <span className="phone">+372 7 123 456</span>
          <span className="email">sales@tartupharma.com</span>
        </div>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            📘
          </a>
          <a href="#" aria-label="LinkedIn">
            💼
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
          <a href="#" aria-label="YouTube">
            📺
          </a>
        </div>
      </div>

      <div className="header-main">
        <div className="logo-section">
          <img
            src="/logo.svg"
            alt="Tartupharma Medical Equipments"
            className="logo"
          />
          <h1>Tartupharma Medical Equipments</h1>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <button
                onClick={() => onPageChange("home")}
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
              >
                Home
              </button>
            </li>
            <li className="dropdown">
              <button className="dropdown-toggle">
                Machines <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                <button
                  onClick={() =>
                    onCategoryChange("granulators-mills-compactors")
                  }
                  className={
                    selectedCategory === "granulators-mills-compactors"
                      ? "active"
                      : ""
                  }
                >
                  Granulators - Mills - Compactors
                </button>
                <button
                  onClick={() => onCategoryChange("mixers-powders-granules")}
                  className={
                    selectedCategory === "mixers-powders-granules"
                      ? "active"
                      : ""
                  }
                >
                  Mixers for Powders and Granules
                </button>
                <button
                  onClick={() => onCategoryChange("mixers-liquids-creams")}
                  className={
                    selectedCategory === "mixers-liquids-creams" ? "active" : ""
                  }
                >
                  Mixers for Liquids and Creams
                </button>
                <button
                  onClick={() => onCategoryChange("tablet-presses")}
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
                  onClick={() => onCategoryChange("fillers-powders-granules")}
                  className={
                    selectedCategory === "fillers-powders-granules"
                      ? "active"
                      : ""
                  }
                >
                  Fillers for Powders + Granules
                </button>
                <button
                  onClick={() => onCategoryChange("capping-closing-machines")}
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
                    selectedCategory === "labelling-machines" ? "active" : ""
                  }
                >
                  Labelling Machines
                </button>
                <button
                  onClick={() => onCategoryChange("cartoning-machines")}
                  className={
                    selectedCategory === "cartoning-machines" ? "active" : ""
                  }
                >
                  Cartoning Machines
                </button>
                <button
                  onClick={() =>
                    onCategoryChange("overwrappers-shrinkwrappers-banders")
                  }
                  className={
                    selectedCategory === "overwrappers-shrinkwrappers-banders"
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
                    selectedCategory === "washers-bottle-blowers-sterilisers"
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
                    onCategoryChange("pumps-product-material-handling-plant")
                  }
                  className={
                    selectedCategory === "pumps-product-material-handling-plant"
                      ? "active"
                      : ""
                  }
                >
                  Pumps + Product / Material Handling Plant
                </button>
                <button
                  onClick={() => onCategoryChange("laboratory-equipment")}
                  className={
                    selectedCategory === "laboratory-equipment" ? "active" : ""
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
            <li className="dropdown">
              <button className="dropdown-toggle">
                Manufacturers <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu manufacturers-menu">
                <button onClick={() => onManufacturerFilter("QUADRO")}>
                  QUADRO
                </button>
                <button onClick={() => onManufacturerFilter("HOSOKAWA MICRON")}>
                  HOSOKAWA MICRON
                </button>
                <button onClick={() => onManufacturerFilter("HOSOKAWA ALPINE")}>
                  HOSOKAWA ALPINE
                </button>
                <button onClick={() => onManufacturerFilter("BECOMIX")}>
                  BECOMIX
                </button>
                <button onClick={() => onManufacturerFilter("ALEXANDERWERK")}>
                  ALEXANDERWERK
                </button>
                <button onClick={() => onManufacturerFilter("FITZPATRICK")}>
                  FITZPATRICK
                </button>
                <button onClick={() => onManufacturerFilter("FREWITT")}>
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
            <li>
              <button
                onClick={() => onPageChange("sell-to-us")}
                className={`nav-link ${
                  currentPage === "sell-to-us" ? "active" : ""
                }`}
              >
                Sell to Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange("find-us")}
                className={`nav-link ${
                  currentPage === "find-us" ? "active" : ""
                }`}
              >
                Find Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange("about-us")}
                className={`nav-link ${
                  currentPage === "about-us" ? "active" : ""
                }`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => onPageChange("contact-us")}
                className={`nav-link ${
                  currentPage === "contact-us" ? "active" : ""
                }`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hide categories navigation on specific pages */}
      {!["sell-to-us", "find-us", "about-us", "contact-us"].includes(
        currentPage
      ) && (
        <div className="categories-nav">
          <h3>Categories</h3>
          <div className="categories-grid">
            <button
              onClick={() => onCategoryChange("granulators-mills-compactors")}
              className={`category-link ${
                selectedCategory === "granulators-mills-compactors"
                  ? "active"
                  : ""
              }`}
            >
              GRANULATORS - MILLS - COMPACTORS <span className="count">14</span>
            </button>
            <button
              onClick={() => onCategoryChange("mixers-powders-granules")}
              className={`category-link ${
                selectedCategory === "mixers-powders-granules" ? "active" : ""
              }`}
            >
              MIXERS FOR POWDERS AND GRANULES <span className="count">11</span>
            </button>
            <button
              onClick={() => onCategoryChange("mixers-liquids-creams")}
              className={`category-link ${
                selectedCategory === "mixers-liquids-creams" ? "active" : ""
              }`}
            >
              MIXERS FOR LIQUIDS AND CREAMS <span className="count">13</span>
            </button>
            <button
              onClick={() => onCategoryChange("sieves-sifters-filters")}
              className={`category-link ${
                selectedCategory === "sieves-sifters-filters" ? "active" : ""
              }`}
            >
              SIEVES, SIFTERS AND FILTERS <span className="count">1</span>
            </button>
            <button
              onClick={() => onCategoryChange("dryers-fluidbed")}
              className={`category-link ${
                selectedCategory === "dryers-fluidbed" ? "active" : ""
              }`}
            >
              DRYERS - FLUIDBED DRYERS - DE-HUMIDIFIERS{" "}
              <span className="count">20</span>
            </button>
            <button
              onClick={() => onCategoryChange("tablet-presses")}
              className={`category-link ${
                selectedCategory === "tablet-presses" ? "active" : ""
              }`}
            >
              TABLET PRESSES <span className="count">22</span>
            </button>
            <button
              onClick={() => onCategoryChange("capsule-filling")}
              className={`category-link ${
                selectedCategory === "capsule-filling" ? "active" : ""
              }`}
            >
              CAPSULE FILLING + PROCESSING MACHINES{" "}
              <span className="count">14</span>
            </button>
            <button
              onClick={() => onCategoryChange("coating-equipment")}
              className={`category-link ${
                selectedCategory === "coating-equipment" ? "active" : ""
              }`}
            >
              COATING EQUIPMENT <span className="count">9</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange(
                  "tablet-capsule-counting-packing-blisterpackers"
                )
              }
              className={`category-link ${
                selectedCategory ===
                "tablet-capsule-counting-packing-blisterpackers"
                  ? "active"
                  : ""
              }`}
            >
              TABLET/CAPSULE COUNTING + PACKING - BLISTERPACKERS{" "}
              <span className="count">31</span>
            </button>
            <button
              onClick={() => onCategoryChange("fillers-liquids-creams-ampoule")}
              className={`category-link ${
                selectedCategory === "fillers-liquids-creams-ampoule"
                  ? "active"
                  : ""
              }`}
            >
              FILLERS FOR LIQUIDS + CREAMS - AMPOULE FILLERS{" "}
              <span className="count">27</span>
            </button>
            <button
              onClick={() => onCategoryChange("fillers-powders-granules")}
              className={`category-link ${
                selectedCategory === "fillers-powders-granules" ? "active" : ""
              }`}
            >
              FILLERS FOR POWDERS + GRANULES <span className="count">5</span>
            </button>
            <button
              onClick={() => onCategoryChange("capping-closing-machines")}
              className={`category-link ${
                selectedCategory === "capping-closing-machines" ? "active" : ""
              }`}
            >
              CAPPING AND CLOSING MACHINES <span className="count">16</span>
            </button>
            <button
              onClick={() => onCategoryChange("labelling-machines")}
              className={`category-link ${
                selectedCategory === "labelling-machines" ? "active" : ""
              }`}
            >
              LABELLING MACHINES <span className="count">26</span>
            </button>
            <button
              onClick={() => onCategoryChange("cartoning-machines")}
              className={`category-link ${
                selectedCategory === "cartoning-machines" ? "active" : ""
              }`}
            >
              CARTONING MACHINES <span className="count">15</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("overwrappers-shrinkwrappers-banders")
              }
              className={`category-link ${
                selectedCategory === "overwrappers-shrinkwrappers-banders"
                  ? "active"
                  : ""
              }`}
            >
              OVERWRAPPERS - SHRINKWRAPPERS - BANDERS{" "}
              <span className="count">24</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("container-handling-unscramblers")
              }
              className={`category-link ${
                selectedCategory === "container-handling-unscramblers"
                  ? "active"
                  : ""
              }`}
            >
              CONTAINER HANDLING - UNSCRAMBLERS{" "}
              <span className="count">29</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("washers-bottle-blowers-sterilisers")
              }
              className={`category-link ${
                selectedCategory === "washers-bottle-blowers-sterilisers"
                  ? "active"
                  : ""
              }`}
            >
              WASHERS - BOTTLE BLOWERS - STERILISERS{" "}
              <span className="count">11</span>
            </button>
            <button
              onClick={() => onCategoryChange("weighing-scales-checkweighers")}
              className={`category-link ${
                selectedCategory === "weighing-scales-checkweighers"
                  ? "active"
                  : ""
              }`}
            >
              WEIGHING SCALES - CHECKWEIGHERS <span className="count">48</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("tablet-dedusters-dust-extractors")
              }
              className={`category-link ${
                selectedCategory === "tablet-dedusters-dust-extractors"
                  ? "active"
                  : ""
              }`}
            >
              TABLET DEDUSTERS - DUST EXTRACTORS{" "}
              <span className="count">20</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("coding-printing-folding-machines")
              }
              className={`category-link ${
                selectedCategory === "coding-printing-folding-machines"
                  ? "active"
                  : ""
              }`}
            >
              CODING - PRINTING - FOLDING MACHINES{" "}
              <span className="count">8</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("inspection-sorting-grading-metal-detectors")
              }
              className={`category-link ${
                selectedCategory ===
                "inspection-sorting-grading-metal-detectors"
                  ? "active"
                  : ""
              }`}
            >
              INSPECTION - SORTING - GRADING - METAL DETECTORS{" "}
              <span className="count">24</span>
            </button>
            <button
              onClick={() =>
                onCategoryChange("pumps-product-material-handling-plant")
              }
              className={`category-link ${
                selectedCategory === "pumps-product-material-handling-plant"
                  ? "active"
                  : ""
              }`}
            >
              PUMPS + PRODUCT / MATERIAL HANDLING PLANT{" "}
              <span className="count">23</span>
            </button>
            <button
              onClick={() => onCategoryChange("laboratory-equipment")}
              className={`category-link ${
                selectedCategory === "laboratory-equipment" ? "active" : ""
              }`}
            >
              LABORATORY EQUIPMENT <span className="count">37</span>
            </button>
            <button
              onClick={() => onCategoryChange("tanks-mixing-tanks-containers")}
              className={`category-link ${
                selectedCategory === "tanks-mixing-tanks-containers"
                  ? "active"
                  : ""
              }`}
            >
              TANKS - MIXING TANKS - CONTAINERS{" "}
              <span className="count">11</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
