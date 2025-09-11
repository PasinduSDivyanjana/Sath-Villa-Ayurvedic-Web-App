// rfce
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-logo">🌿 Sath Villa Naadi Ayurveda Resort</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/ayurveda">Ayurveda</Link></li>
        <li><Link to="/products">Ayurveda Product</Link></li>
        <li><Link to="/add_product">Add Product</Link></li>
        <li><Link to="/inquire">Inquire</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;