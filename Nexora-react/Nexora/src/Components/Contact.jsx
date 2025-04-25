import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Whether you have a question about our courses, pricing, or anything else — our team is ready to help.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@nexora.institute</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Nexora Institute, Tech Park, Bengaluru, India</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
