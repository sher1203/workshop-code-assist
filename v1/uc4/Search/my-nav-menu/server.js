const express = require('express');
const app = express();
const port = 3000;

// Sample product data (replace with your actual data source)
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'This is a description for Product 1.',
    image: 'product1.jpg' // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'This is a description for Product 2.',
    image: 'product2.jpg' // Replace with actual image URL
  }
];

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// API endpoint to get product data
app.get('/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
