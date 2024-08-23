import React, { useState, useEffect, useRef } from 'react';
import products from './product'; // Import the product data

function Products() {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null); // Reference to the search input

  useEffect(() => {
    setProductData(products);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = searchTerm.trim() === ''
    ? productData
    : productData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Focus on the search input when the component mounts
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className="content">
      <h1>Our Products</h1>
      <div className="search-bar">
        <input
          ref={searchInputRef} // Assign the reference
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

