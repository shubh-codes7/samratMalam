import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products by category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Discover our range of high-quality pharmaceutical products designed to improve your health and well-being.
        </p>
        
        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 