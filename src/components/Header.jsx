import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/companyInfo';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>{companyInfo.shortName}</h1>
          </Link>
          
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
              <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
              <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 