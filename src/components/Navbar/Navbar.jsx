import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/Hotel">
        <li>Our Apartment</li>
      </Link>
      <Link to="/Rio">
        <li>Rio</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
      <Link to="/login">
        <div className="navbar_button">
          <button type="button">Login</button>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
