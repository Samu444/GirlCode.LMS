import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="GirlCode-Logo.png"
          alt="GirlCode Logo"
        />
      </div>
      <nav className="nav-links">
        <a href="#">Programs</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="signup-button">Sign-up</a>
        <a href="#" className="login-button">Login</a>
      </div>
    </header>
  );
}

export default Header;
