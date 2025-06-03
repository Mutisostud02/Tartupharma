import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedCategory, onCategoryChange, currentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Don't show sidebar on these pages
  const hiddenPages = ["home", "sell-to-us", "find-us", "about-us", "contact-us", "product-detail"];
  
  if (hiddenPages.includes(currentPage)) {
    return null;
  }

  const categories = [
    {
      id: "granulators-mills-compactors",
      name: "GRANULATORS - MILLS - COMPACTORS",
      count: 14
    },
    {
      id: "mixers-powders-granules",
      name: "MIXERS FOR POWDERS AND GRANULES",
      count: 11
    },
    {
      id: "mixers-liquids-creams",
      name: "MIXERS FOR LIQUIDS AND CREAMS",
      count: 13
    },
    {
      id: "sieves-sifters-filters",
      name: "SIEVES, SIFTERS AND FILTERS",
      count: 1
    },
    {
      id: "dryers-fluidbed",
      name: "DRYERS - FLUIDBED DRYERS - DE-HUMIDIFIERS",
      count: 20
    },
    {
      id: "tablet-presses",
      name: "TABLET PRESSES",
      count: 22
    },
    {
      id: "capsule-filling",
      name: "CAPSULE FILLING + PROCESSING MACHINES",
      count: 14
    },
    {
      id: "coating-equipment",
      name: "COATING EQUIPMENT",
      count: 9
    },
    {
      id: "tablet-capsule-counting-packing-blisterpackers",
      name: "TABLET/CAPSULE COUNTING + PACKING - BLISTERPACKERS",
      count: 31
    },
    {
      id: "fillers-liquids-creams-ampoule",
      name: "FILLERS FOR LIQUIDS + CREAMS - AMPOULE FILLERS",
      count: 27
    },
    {
      id: "fillers-powders-granules",
      name: "FILLERS FOR POWDERS + GRANULES",
      count: 5
    },
    {
      id: "capping-closing-machines",
      name: "CAPPING AND CLOSING MACHINES",
      count: 16
    },
    {
      id: "labelling-machines",
      name: "LABELLING MACHINES",
      count: 26
    },
    {
      id: "cartoning-machines",
      name: "CARTONING MACHINES",
      count: 15
    },
    {
      id: "overwrappers-shrinkwrappers-banders",
      name: "OVERWRAPPERS - SHRINKWRAPPERS - BANDERS",
      count: 24
    },
    {
      id: "container-handling-unscramblers",
      name: "CONTAINER HANDLING - UNSCRAMBLERS",
      count: 29
    },
    {
      id: "washers-bottle-blowers-sterilisers",
      name: "WASHERS - BOTTLE BLOWERS - STERILISERS",
      count: 11
    },
    {
      id: "weighing-scales-checkweighers",
      name: "WEIGHING SCALES - CHECKWEIGHERS",
      count: 48
    },
    {
      id: "tablet-dedusters-dust-extractors",
      name: "TABLET DEDUSTERS - DUST EXTRACTORS",
      count: 20
    },
    {
      id: "coding-printing-folding-machines",
      name: "CODING - PRINTING - FOLDING MACHINES",
      count: 8
    },
    {
      id: "inspection-sorting-grading-metal-detectors",
      name: "INSPECTION - SORTING - GRADING - METAL DETECTORS",
      count: 24
    },
    {
      id: "pumps-product-material-handling-plant",
      name: "PUMPS + PRODUCT / MATERIAL HANDLING PLANT",
      count: 23
    },
    {
      id: "laboratory-equipment",
      name: "LABORATORY EQUIPMENT",
      count: 37
    },
    {
      id: "tanks-mixing-tanks-containers",
      name: "TANKS - MIXING TANKS - CONTAINERS",
      count: 11
    }
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">
          <span className="sidebar-icon">📂</span>
          Categories
        </h3>
        <button 
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="sidebar-content">
          <div className="categories-list">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`category-item ${
                  selectedCategory === category.id ? "active" : ""
                }`}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
