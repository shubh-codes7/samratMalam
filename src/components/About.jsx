import { companyInfo } from '../data/companyInfo';
import productImage from '../assets/Products/product.png';
import { FaBullseye, FaEye, FaMedal } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          
          <div className="about-text">
            <p>{companyInfo.about}</p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaBullseye />
                </div>
                <div className="feature-content">
                  <h3>Our Mission</h3>
                  <p>{companyInfo.mission}</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaEye />
                </div>
                <div className="feature-content">
                  <h3>Our Vision</h3>
                  <p>{companyInfo.vision}</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <FaMedal />
                </div>
                <div className="feature-content">
                  <h3>Quality Assurance</h3>
                  <p>We adhere to the highest standards of quality in all our products, ensuring safety and efficacy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={productImage} alt="Samrat Malam Pharmaceuticals" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 