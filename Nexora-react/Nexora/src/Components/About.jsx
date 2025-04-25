import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero">
        <h1>About Nexora Institute</h1>
        <p>Empowering learners with cutting-edge skills for the modern world.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Nexora Institute is a premier educational platform offering top-notch training in Web Development,
            Data Science, Artificial Intelligence, and more. We’re passionate about turning beginners into industry-ready professionals.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To bridge the gap between academia and industry by offering practical, real-world training that
            ensures 100% placement opportunities for all our students.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ Industry-aligned curriculum</li>
            <li>✅ Hands-on projects and mentorship</li>
            <li>✅ 5000+ satisfied students with a 4.8+ rating</li>
            <li>✅ Trusted by 200+ hiring partners</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
