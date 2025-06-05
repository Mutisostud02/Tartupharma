import "./ProductCard.css";

const ProductCard = ({
  product,
  onProductSelect,
  onContactForPrice,
  onSendInquiry,
}) => {
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
          <button
            onClick={() => onProductSelect && onProductSelect(product.id)}
            className="product-title-btn"
          >
            {product.id} - {product.name}
          </button>
        </h3>

        <div className="product-meta">
          <span className="manufacturer">{product.manufacturer}</span>
          <span className="model">{product.model}</span>
          <span className="type">{product.type}</span>
        </div>

        <div className="product-actions">
          <button
            className="contact-btn"
            onClick={() => onContactForPrice && onContactForPrice(product)}
          >
            Contact for Price
          </button>
          <button
            className="inquiry-btn"
            onClick={() => onSendInquiry && onSendInquiry(product)}
          >
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
