import React, { useState, useEffect } from 'react';
import '../styles/projects.css'; // Import your CSS for styling
import { Link } from 'react-router-dom';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState('fade-in');

  const projects = [
    {
      title: 'The Hairy',
      description: 'A little bit of taste from mass',
      image: '/images/pexels-tomfisk-3419308.jpg',
      type: 'Clearic Building',
    },
    {
      title: 'Balcony',
      description: 'Something you won’t find outside.',
      image: '/images/pexels-rok-romih-1746122-3312663.jpg',
      type: 'Residential Building',
    },
    {
      title: 'Jrecked',
      description: 'Different from anything on Earth.',
      image: '/images/pexels-federico-orlandi-1423142-3260627.jpg',
      type: 'Community Building',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFade('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setFade('fade-in');
      }, 500); // Match this with the CSS transition duration
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setFade('fade-in');
    }, 500); // Match this with the CSS transition duration
  };

  const handleNext = () => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setFade('fade-in');
    }, 500); // Match this with the CSS transition duration
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleDotClick = (index) => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setFade('fade-in');
    }, 500); // Match this with the CSS transition duration
  };

  return (
    <section id="projects">
      <h2 className='featured'>Featured Projects</h2>
      <div className="project-display">
        <button className="control-btn" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className={`project-slider`}>
          <div className={`project-slide ${fade}`}>
            <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
            <div className="project-info">
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              <div className="project-type">
                <span>{projects[currentIndex].type}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="control-btn" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="dot-container">
        {projects.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => handleDotClick(index)} // Add click handler
          ></div>
        ))}
      </div>
      <Link to="/gallery">
        <button className="go-to-gallery-btn">Go to Gallery</button>
      </Link>
      <button className="pause-btn" onClick={handlePause}>
        {isPaused ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
      </button>
    </section>
  );
};

export default Projects;
