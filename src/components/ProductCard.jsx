import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.shortDescription}</p>
        
        <div className="product-sizes">
          <p>Size:</p>
          <div className="size-options">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-option ${selectedSize.size === size.size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-price">
          <span>₹{selectedSize.price}</span>
        </div>
        
        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 