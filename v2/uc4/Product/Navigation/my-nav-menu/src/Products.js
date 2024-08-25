import React, { useState, useEffect } from 'react';
import products from './product'; // Import the product data

function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products); // Set the product data in the state
  }, []);

  return (
    <div className="content">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productData.map(product => (
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

