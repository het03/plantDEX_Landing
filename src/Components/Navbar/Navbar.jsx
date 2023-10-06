import React from "react";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="brand">PlantDEX</div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="#working" className="nav-link">
            Working
          </a>
        </li>
        <li className="nav-item">
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </li>
        <li className="nav-item">
          <button className="get-app-btn">Get App</button>
        </li>
      </ul>
    </nav>
  );
}

export default CustomNavbar;
