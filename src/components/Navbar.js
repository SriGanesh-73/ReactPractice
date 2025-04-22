import React from 'react';

function Navbar() {
  return (
    <nav>
      <img src="logo.png" alt="Restaurant Logo" />
      <ul>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#book-table">Book Table</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Login / Signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;