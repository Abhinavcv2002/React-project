import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";  
import Footer from "./Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar /> 
      
      <header className="hero">
        <h1>Welcome to Nexora Institute</h1>
        <p>Your future starts here — learn, grow, and succeed.</p>
        <Link to="/about" className="btn">Learn More</Link>
      </header>

      <section className="features">
      {/* <Link to="/Course" className="nav-link">
        <div className="feature">
          <h2>Top Courses</h2>
          <p>We offer industry-relevant training in Web Dev, AI, Data Science, and more.</p>
        </div>
        </Link> */}
        <Link to="/Placements" className="nav-link">
        <div className="feature">
          <h2>100% Placement</h2>
          <p>We partner with top companies to ensure our students get real opportunities.</p>
        </div>
        </Link>
        {/* <Link to="/Reviews" className="nav-link">
        <div className="feature">
          <h2>Student Reviews</h2>
          <p>Over 5,000 learners have rated us 4.8+ on average. Join the tribe!</p>
        </div>
        </Link> */}
      </section>

      <Footer />
    </div>
  );
}
