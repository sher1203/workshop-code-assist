import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">My Shop</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <div className="content">
        {/* Content will be dynamically loaded here */}
      </div>
    </div>
  );
}

export default App;

