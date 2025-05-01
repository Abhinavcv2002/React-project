import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./css/Style.css";
import Nav from './Nav';


const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then(res => {
        setCourse(res.data);
        setLoading(false);  
      })
      .catch(err => {
        setError('Error loading course details.');
        setLoading(false);
        console.error('Error:', err);
      });
  }, [id]);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleBack = () => {
    navigate('/courselist'); 
  };

  return (
    <div className="course-details">
      {/* <Nav /> */}
      <button className="back-button" onClick={handleBack}>Back</button>
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} className="course-image" />
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Eligibility:</strong> {course.eligibility}</p>
      <p><strong>Fee:</strong> ₹{course.fee}</p>
    </div>
  );
}

export default CourseDetails;