import React from 'react';
import './Header.css'; // Importing the external CSS

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Welcome to My Coding Club</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
