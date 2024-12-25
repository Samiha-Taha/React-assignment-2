import React from 'react';

const Header = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Product Store</h1>
      <nav>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#products" className="navbar-link">Products</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

