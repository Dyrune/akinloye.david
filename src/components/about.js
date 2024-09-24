import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';  // Import your CSS for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Video Background */}
      <video autoPlay muted loop className="background-video">
        <source src="/animations/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At <b>0tnda</b>, we are dedicated to transforming spaces with innovative and sustainable architectural design. 
          Our team of experienced architects and designers are committed to creating functional and aesthetically pleasing environments 
          that enhance the quality of life. With a portfolio spanning residential, commercial, and public projects, we specialize in 
          delivering exceptional results tailored to our clients' needs.
        </p>
        <p>
          Our mission is to blend creativity with practicality to produce designs that not only meet but exceed expectations. 
          We value collaboration, integrity, and excellence in every project we undertake, ensuring that each design is both visionary 
          and grounded in real-world functionality.
        </p>
        <Link to="/services" className="services-button">
          Go to Services
        </Link>
      </div>
    </section>
  );
};

export default About;

