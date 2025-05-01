import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Nexora Institute</Link>
      </div>
      <ul className="nav-links">
        <li>
        <a href="/" className="nav-link">Home</a> 
        </li>
        <li>
        <a href="about" className="nav-link">About</a>
        </li>
        <li>
          <a href="Placements" className="nav-link"> Placements</a>
        </li>
        <li>
        <a href="courselist" className="nav-link"> Courses</a>
        </li>
        <li>
        <a href="contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
