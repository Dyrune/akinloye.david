import React, { useState, useEffect } from 'react';
import '../styles/home.css';

const BackgroundSlider = () => {
  // Sample project data
  const projects = [
    {
      title: "MaskOff",
      description: "A short description about Project 1.",
      image: "/images/pexels-rok-romih-1746122-3312663.jpg",
      technologies: ["React", "Nodejs"],
      link: "/projects/1",
    },
    {
      title: "Lucas",
      description: "A short description about Project 2.",
      image: "/images/pexels-federico-orlandi-1423142-3260627.jpg",
      technologies: ["Python", "Django"],
      link: "/projects/2",
    },
    {
      title: "6by6by6",
      description: "A short description about Project 3.",
      image: "/images/pexels-rok-romih-1746122-3312663.jpg",
      technologies: ["Python", "Django"],
      link: "/projects/3",
    },
    {
      title: "Just us",
      description: "A short description about Project 4.",
      image: "/images/pexels-tomfisk-3419308.jpg",
      technologies: ["Python", "Django"],
      link: "/projects/4",
    },
    {
      title: "Reagardless",
      description: "A short description about Project 5.",
      image: "/images/pexels-rok-romih-1746122-3312671.jpg",
      technologies: ["Python", "Django"],
      link: "/projects/5",
    },
  ];

  // Technology icons mapping
  const technologyIcons = {
    Nodejs: "/assets/icons8-autocad-48.png",
    React: "/assets/icons8-autocad-48.png",
    Python: "/assets/icons8-lumion-48.png",
    Django: "/assets/icons8-autocad-48.png",
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState("fade-in");
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setFade("fade-out"); // Start fade-out
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length); // Go to next slide
      setTimeout(() => setFade("fade-in"), 300); // Delay fade-in for smoother crossfade
      setProgress(0); // Reset progress
    }, 1200); // Match this with the CSS transition duration
  };

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide(); // Move to the next slide
    }, 7000); // Change every 3 seconds

    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [currentSlide]);

  const handleThumbnailClick = (index) => {
    setFade("fade-out"); // Start fade-out
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setFade("fade-in"), 300); // Delay fade-in for smoother crossfade
      setProgress(0); // Reset progress
    }, 1000); // Match this with the CSS transition duration
  };

  return (
    <div className="background-slider">
      <div
        className="slider"
        style={{
          backgroundImage: `url(${projects[currentSlide].image})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`content ${fade}`}>
          <h2 className={`slide-title ${fade}`}>{projects[currentSlide].title}</h2>
          <p>{projects[currentSlide].description}</p>

          {/* Display the technology icons */}
          <div className={`technologies ${fade}`}>
            {projects[currentSlide].technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                <img
                  src={technologyIcons[tech]} // Use the icon corresponding to the technology
                  alt={tech}
                  style={{ width: "30px", height: "30px", marginRight: "5px" }} // Adjust size as needed
                />
              </span>
            ))}
          </div>

          {/* Link to project */}
          <a href={projects[currentSlide].link} className="project-link">
            View Project
          </a>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Thumbnails for next two slides */}
      <div className="next-slides">
        {[1, 2].map((offset) => {
          const index = (currentSlide + offset) % projects.length;
          return (
            <div
              key={index}
              className="next-slide"
              style={{
                backgroundImage: `url(${projects[index].image})`,
                backgroundSize: "cover",
                width: "150px",
                height: "400px",
                marginTop: "10px",
                marginRight: "10px",
                boxShadow: "2px 2px 8px black",
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
                cursor: "pointer",
                transition: 'transform 0.5s ease', // Smooth transition for thumbnails
              }}
              onClick={() => handleThumbnailClick(index)}
            >
              <div
                className="next-content"
                style={{
                  textAlign: "center",
                  color: "transparent",
                  position: "absolute",
                  bottom: "5px",
                  left: "5px",
                }}
              >
                <h3>{projects[index].title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundSlider;
