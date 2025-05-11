import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const { addToCart } = useCart();

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
    }
    
    setLoading(false);
  }, [id]);

  function handleAddToCart () {
    if (!product || !selectedSize) return;
    addToCart(product, selectedSize, quantity);
    
    // Show notification
    setNotification({
      show: true,
      message: `${product.name} (${selectedSize.size}) added to cart!`
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedSize) return 0;
    return selectedSize.price * quantity;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {notification.show && (
        <div className="notification">
          {notification.message}
        </div>
      )}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/#products">Products</Link> / <span>{product.name}</span>
        </div>
        
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-detail-content">
            <h1>{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            
            <div className="product-benefits">
              <h3>Benefits</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-sizes">
              <h3>Available Sizes</h3>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-option ${selectedSize?.size === size.size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="product-quantity">
              <h3>Quantity</h3>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="product-price">
              <h3>Price</h3>
              <div className="price-details">
                <span className="unit-price">₹{selectedSize?.price} x {quantity}</span>
                <span className="total-price">₹{calculateTotalPrice()}</span>
              </div>
            </div>
            
            <div className="product-actions">
              <button onClick={handleAddToCart} className="btn btn-primary">
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-secondary">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 