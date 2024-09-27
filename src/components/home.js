import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';

const BackgroundSlider = () => {
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

  const technologyIcons = {
    Nodejs: "/assets/icons8-autocad-48.png",
    React: "/assets/icons8-autocad-48.png",
    Python: "/assets/icons8-lumion-48.png",
    Django: "/assets/icons8-autocad-48.png",
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const slideDuration = 7000; // 7 seconds per slide

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();

      // Reverse progress circle after countdown ends (0s)
      if (progressCircle.current) {
        // Reverse progress to full (reset) with smooth transition
        progressCircle.current.querySelector('circle').style.transition = 'stroke-dashoffset 0.5s ease-out';
        progressCircle.current.querySelector('circle').style.strokeDashoffset = '125.6'; // Full circle (reversed)
      }

      // Reset timer content
      if (progressContent.current) {
        progressContent.current.textContent = '7s'; // Reset to 7 seconds
      }
    }, slideDuration);

    let start;
    const updateProgress = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / slideDuration, 1); // Cap at 1 (100%)

      if (progressCircle.current) {
        const dashoffset = 125.6 * (1 - progress); // Progress forward
        progressCircle.current.querySelector('circle').style.strokeDashoffset = dashoffset;
        progressCircle.current.querySelector('circle').style.transition = 'stroke-dashoffset 0.1s linear'; // Smooth progress
      }

      if (progressContent.current) {
        progressContent.current.textContent = `${Math.ceil((slideDuration - elapsed) / 1000)}s`;
      }

      // Detect when countdown hits 0, and start reversing the circle smoothly
      if (progress === 1) {
        // Add a delay of 0.3s for the reverse animation to be noticeable
        setTimeout(() => {
          if (progressCircle.current) {
            progressCircle.current.querySelector('circle').style.transition = 'stroke-dashoffset 0.5s ease-out';
            progressCircle.current.querySelector('circle').style.strokeDashoffset = '125.6'; // Full reset
          }
        }, 300);
      }

      if (progress < 1) {
        requestAnimationFrame(updateProgress); // Continue progress update
      } else {
        start = null; // Reset start for the next slide
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      clearInterval(slideInterval);
      cancelAnimationFrame(animationFrame);
    };
  }, [currentSlide]);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
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
        <div className="content fade-in">
          <h2 className="slide-title">{projects[currentSlide].title}</h2>
          <p>{projects[currentSlide].description}</p>

          <div className="technologies">
            {projects[currentSlide].technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                <img
                  src={technologyIcons[tech]}
                  alt={tech}
                  style={{ width: "30px", height: "30px", marginRight: "5px" }}
                />
              </span>
            ))}
          </div>

          <a href={projects[currentSlide].link} className="project-link">
            View Project
          </a>
        </div>

        {/* Progress Circle */}
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle
              cx="24"
              cy="24"
              r="20"
              strokeDasharray="125.6" // 2 * Math.PI * 20
              strokeDashoffset="125.6" // Start with full circle
              stroke="#fff" // Change progress bar color to white
              strokeWidth="4"
              fill="none"
              style={{ transition: 'stroke-dashoffset 0.1s linear' }} // Smooth progress
            ></circle>
          </svg>
          <span ref={progressContent}>7s</span>
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
