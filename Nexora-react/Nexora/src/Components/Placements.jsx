import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Placements.css";

const placementData = [
  {
    name: "John Doe",
    company: "Google",
    position: "Software Engineer",
    year: "2024",
    image: "/images/students/john.jpg",
  },
  {
    name: "Jane Smith",
    company: "Microsoft",
    position: "Data Analyst",
    year: "2024",
    image: "/images/students/jane.jpg",
  },
  {
    name: "Ravi Kumar",
    company: "Amazon",
    position: "Cloud Engineer",
    year: "2023",
    image: "/images/students/ravi.jpg",
  },
];

export default function Placements() {
  return (
    <div className="placements-page">
    <Navbar />
    <section className="placements">     
      <h2 className="placements-title">Our Student Placements</h2>
      <div className="placement-cards">
        {placementData.map((student, index) => (
          <div className="placement-card" key={index}>
            <img src={student.image} alt={student.name} className="student-img" />
            <h3>{student.name}</h3>
            <p>{student.position} at <strong>{student.company}</strong></p>
            <span className="placement-year">Batch: {student.year}</span>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
    
  );
}
