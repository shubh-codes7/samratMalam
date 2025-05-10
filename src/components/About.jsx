import { companyInfo } from '../data/companyInfo';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/images/about/company.jpg" alt="Samrat Malam Pharmaceuticals" />
          </div>
          <div className="about-text">
            <p>{companyInfo.about}</p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-mission"></i>
                </div>
                <div className="feature-content">
                  <h3>Our Mission</h3>
                  <p>{companyInfo.mission}</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-vision"></i>
                </div>
                <div className="feature-content">
                  <h3>Our Vision</h3>
                  <p>{companyInfo.vision}</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="icon-quality"></i>
                </div>
                <div className="feature-content">
                  <h3>Quality Assurance</h3>
                  <p>We adhere to the highest standards of quality in all our products, ensuring safety and efficacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 