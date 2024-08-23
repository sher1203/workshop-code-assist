// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [activeLink, setActiveLink] = useState(null); // Track active link

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//     setShowMenu(false); // Close the menu after clicking a link
//   };

//   return (
//     <div className="container">
//       <nav>
//         <div className="logo">My Website</div>
//         <button className="menu-toggle" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </button>
//         <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
//           <li className={activeLink === 'home' ? 'active' : ''}>
//             <a href="/" onClick={() => handleLinkClick('home')}>Home</a>
//           </li>
//           <li className={activeLink === 'about' ? 'active' : ''}>
//             <a href="/about" onClick={() => handleLinkClick('about')}>About</a>
//           </li>
//           <li className={activeLink === 'services' ? 'active' : ''}>
//             <a href="/services" onClick={() => handleLinkClick('services')}>Services</a>
//           </li>
//           <li className={activeLink === 'contact' ? 'active' : ''}>
//             <a href="/contact" onClick={() => handleLinkClick('contact')}>Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         {/* Your main content goes here */}
//       </main>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

