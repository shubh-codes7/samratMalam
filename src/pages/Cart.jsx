import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { companyInfo } from '../data/companyInfo';
import './Cart.css';

const Cart = () => {
  const { cartItems, totalAmount, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, size, newQuantity);
  };

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    const whatsappNumber = companyInfo.contact.whatsapp.replace(/\D/g, '');
    let message = "I would like to order the following items:\n\n";
    
    cartItems.forEach(item => {
      message += `${item.name} (${item.selectedSize.size}) - Quantity: ${item.quantity} - ₹${item.selectedSize.price * item.quantity}\n`;
    });
    
    message += `\nTotal Amount: ₹${totalAmount}`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSendEmail = () => {
    if (cartItems.length === 0) return;
    
    const subject = "New Order Request";
    let body = "I would like to order the following items:\n\n";
    
    cartItems.forEach(item => {
      body += `${item.name} (${item.selectedSize.size}) - Quantity: ${item.quantity} - ₹${item.selectedSize.price * item.quantity}\n`;
    });
    
    body += `\nTotal Amount: ₹${totalAmount}`;
    const mailtoUrl = `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="cart-page">
      <div className="container">
        
        <h1>Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/#products" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              <div className="cart-header">
                <div className="cart-header-product">Product</div>
                <div className="cart-header-price">Price</div>
                <div className="cart-header-quantity">Quantity</div>
                <div className="cart-header-total">Total</div>
                <div className="cart-header-action">Action</div>
              </div>
              
              {cartItems.map((item) => (
                <div className="cart-item" key={`${item.id}-${item.selectedSize.size}`}>
                  <div className="cart-item-product">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>Size: {item.selectedSize.size}</p>
                    </div>
                  </div>
                  
                  <div className="cart-item-price">
                    ₹{item.selectedSize.price}
                  </div>
                  
                  <div className="cart-item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.selectedSize.size, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.selectedSize.size, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item-total">
                    ₹{item.selectedSize.price * item.quantity}
                  </div>
                  
                  <div className="cart-item-action">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id, item.selectedSize.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total Amount:</span>
                <span className="total-amount">₹{totalAmount}</span>
              </div>
              
              <div className="cart-actions">
                <button onClick={handleSendWhatsApp} className="btn btn-primary">
                  Buy via WhatsApp
                </button>
                <button onClick={handleSendEmail} className="btn btn-primary">
                  Buy via Email
                </button>
                <Link to="/#products" className="btn btn-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 