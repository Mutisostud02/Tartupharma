import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onProductSelect }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = "/images/placeholder-machine.svg";
          }}
        />
        <div className="image-overlay">
          <button
            className="details-btn"
            onClick={() => onProductSelect && onProductSelect(product.id)}
          >
            Details
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-title">
          <a href={`/listings/${product.id.toLowerCase()}`}>
            {product.id} - {product.name}
          </a>
        </h3>

        <div className="product-meta">
          <span className="manufacturer">{product.manufacturer}</span>
          <span className="model">{product.model}</span>
          <span className="type">{product.type}</span>
        </div>

        <div className="product-actions">
          <button className="contact-btn">Contact for Price</button>
          <button className="inquiry-btn">Send Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
