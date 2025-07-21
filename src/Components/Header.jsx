import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-md header">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand logo" href="#">
          <img src="GirlCode-Logo.png" alt="GirlCode Logo" />
        </a>

        {/* Toggle button for collapsed nav */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto nav-links">
            <li className="nav-item">
              <a className="nav-link" href="#">Programs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="auth-buttons d-flex">
            <a href="#" className="signup-button">Sign-up</a>
            <a href="#" className="login-button">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
