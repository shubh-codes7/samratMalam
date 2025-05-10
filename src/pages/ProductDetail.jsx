import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
    }
    
    setLoading(false);
  }, [id]);

  const handleSendWhatsApp = () => {
    if (!product || !selectedSize) return;
    
    const whatsappNumber = companyInfo.contact.whatsapp.replace(/\D/g, '');
    const message = `I'm interested in buying ${product.name} (${selectedSize.size}) for ₹${selectedSize.price}`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSendEmail = () => {
    if (!product || !selectedSize) return;
    
    const subject = `Order Inquiry: ${product.name}`;
    const body = `I'm interested in buying ${product.name} (${selectedSize.size}) for ₹${selectedSize.price}. Please provide more information.`;
    const mailtoUrl = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
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
            
            <div className="product-price">
              <h3>Price</h3>
              <span>₹{selectedSize?.price}</span>
            </div>
            
            <div className="product-actions">
              <button onClick={handleSendWhatsApp} className="btn btn-primary">
                Buy via WhatsApp
              </button>
              <button onClick={handleSendEmail} className="btn btn-secondary">
                Buy via Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 