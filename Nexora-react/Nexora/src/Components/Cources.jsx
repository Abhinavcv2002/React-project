import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from 'axios';
import "./css/Style.css";



const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses/')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <>
      <Nav />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center mb-10">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleCourseClick(course.id)}
            >
              {course.image && (
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseList;