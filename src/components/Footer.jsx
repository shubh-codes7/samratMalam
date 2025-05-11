import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2>{companyInfo.name}</h2>
            <p>{companyInfo.tagline}</p>
            <p>Since {companyInfo.foundedYear}</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><i className="icon-location"></i> {companyInfo.contact.address}</p>
            <p><i className="icon-phone"></i> {companyInfo.contact.phone}</p>
            <p><i className="icon-email"></i> {companyInfo.contact.email}</p>
            <p><i className="icon-whatsapp"></i> WhatsApp: {companyInfo.contact.whatsapp}</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="icon-facebook"></i>
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="icon-instagram"></i>
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="icon-twitter"></i>
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {companyInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 