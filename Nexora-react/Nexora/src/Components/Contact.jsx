import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/contact/", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      setSuccess(false);
    }
  };
  
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
          <h2>Contact Us</h2>
          {success === true && <p style={{ color: "green" }}>Message sent!</p>}
          {success === false && <p style={{ color: "red" }}>Failed to send message.</p>}
          <form onSubmit={(e) => e.preventDefault()}>
            <input name="name" type="text" placeholder="Your Name"  value={formData.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
