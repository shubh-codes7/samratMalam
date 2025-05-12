import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
          
        
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> {companyInfo.contact.address}</p>
            <p><FaPhone /> {companyInfo.contact.phone}</p>
            <p><FaEnvelope /> {companyInfo.contact.email}</p>
            <p><FaWhatsapp /> {companyInfo.contact.whatsapp}</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href={companyInfo.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaWhatsapp />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {companyInfo.name}. All Rights Reserved.</p>
          <p>Developed by<a href="https://www.linkedin.com/in/shubhamcodes7/">Pillars</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 