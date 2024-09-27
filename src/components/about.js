import React, { useEffect, useRef } from 'react';
import '../styles/about.css';

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null); // Added this for the Education section
  const experienceItemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in'); // Remove class when leaving the section
        }
      });
    }, observerOptions);

    // Observe each section
    [titleRef, textRef, experienceRef, educationRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Observe each experience item
    experienceItemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      // Clean up the observer
      [titleRef, textRef, experienceRef, educationRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });

      // Unobserve each experience item
      experienceItemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="image-section">
          <img
            src="/images/IMG_0300 (1).JPG" // Ensure this path is correct
            alt="Architect Portrait"
            className="architect-image"
          />
          <div className="social-icons">
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="text-section">
          <h2 ref={titleRef} className="fade-item">About Me</h2>
          <p ref={textRef} className="fade-item">
            Hi, I’m [Architect’s Name], an architect with a passion for crafting spaces that blend creativity, functionality, and sustainability. Originally from [Location], I’ve always been fascinated by how architecture shapes the way we live, interact, and experience the world.
          </p>

          <h3 ref={experienceRef} className="fade-item">Experience</h3>
          <ul>
            <li ref={el => experienceItemsRef.current[0] = el} className="fade-item"><strong>Residential Design</strong>: Creating personalized homes.</li>
            <li ref={el => experienceItemsRef.current[1] = el} className="fade-item"><strong>Commercial Architecture</strong>: Crafting efficient business spaces.</li>
            <li ref={el => experienceItemsRef.current[2] = el} className="fade-item"><strong>Sustainable Architecture</strong>: Designing eco-friendly buildings.</li>
            <li ref={el => experienceItemsRef.current[3] = el} className="fade-item"><strong>Urban Planning</strong>: Developing strategic solutions for urban environments.</li>
          </ul>

          <h3>Education</h3> {/* Education header */}
          <p ref={educationRef} className="fade-item">
            I hold a Bachelor's Degree in Architecture from XYZ University, where I developed my technical skills and gained a strong foundation in design principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
