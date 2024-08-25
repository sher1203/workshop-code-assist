import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Track active link

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowMenu(false); // Close the menu after clicking a link
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">My Website</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li className={activeLink === 'home' ? 'active' : ''}>
            <a href="/" onClick={() => handleLinkClick('home')}>Home</a>
          </li>
          <li className={activeLink === 'about' ? 'active' : ''}>
            <a href="/about" onClick={() => handleLinkClick('about')}>About</a>
          </li>
          <li className={activeLink === 'services' ? 'active' : ''}>
            <a href="/services" onClick={() => handleLinkClick('services')}>Services</a>
          </li>
          <li className={activeLink === 'contact' ? 'active' : ''}>
            <a href="/contact" onClick={() => handleLinkClick('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
}

export default App;

