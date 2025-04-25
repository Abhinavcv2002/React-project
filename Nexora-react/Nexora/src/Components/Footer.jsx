import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // for social media icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Nexora Institute. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <ul className="footer-links">
            <h2>Quick Links</h2>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-center">
          <ul className="footer-links">
            <h2>Popular Courses</h2>
            <li><a href="/about">Master In DevOps</a></li>
            <li><a href="/about">Full Stack Web Developement : PHP</a></li>
            <li><a href="/about">Vmware vSphere</a></li>
            <li><a href="/about">CompTIA A+</a></li>
            <li><a href="/about">Mobile Application Development : Flutter</a></li>
            <li><a href="/about">MERN Stack</a></li>
            <li><a href="/about">UI/UX</a></li>
            <li><a href="/about">Advanced Diploma In Cyber Security</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
