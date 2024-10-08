import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null); // Reference for image section
  const socialIconsRef = useRef(null); // Reference for social icons
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    {
      title: "About Me",
      content: "Hi, I’m Akinloye T. David, an architect with a passion for crafting spaces that blend creativity, functionality, and sustainability. Originally from Lagos, Nigeria, I’ve always been fascinated by how architecture shapes the way we live, interact, and experience the world."
    },
    {
      title: "Experience",
      content: (
        <ul>
          <li><strong>Residential Design</strong>: Creating personalized homes.</li>
          <li><strong>Commercial Architecture</strong>: Crafting efficient business spaces.</li>
          <li><strong>Sustainable Architecture</strong>: Designing eco-friendly buildings.</li>
          <li><strong>Urban Planning</strong>: Developing strategic solutions for urban environments.</li>
        </ul>
      ),
    },
    {
      title: "Education",
      content: (
        <ul>
          <li><strong>Federal University of Technology</strong>: Bachelor of Architecture (B.Arch) - Graduated in 2020.</li>
          <li><strong>ABC Institute of Technology</strong>: Master of Architecture (M.Arch) - Graduated in 2013.</li>
          <li><strong>DEF Community College</strong>: Associate Degree in Architectural Technology - Graduated in 2008.</li>
        </ul>
      )
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, observerOptions);

    // Observe the title, text sections, image, and social icons
    [titleRef, textRef, imageRef, socialIconsRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer
      [titleRef, textRef, imageRef, socialIconsRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const handleNavigation = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="container">
        <div className="image-section" ref={imageRef}> {/* Reference for image section */}
          <img
            src="/images/IMG_0300 (1).JPG" // Ensure this path is correct
            alt="Architect Portrait"
            className="architect-image" // No fade-in class here
          />
        </div>

        <div className="text-section">
          <h2 ref={titleRef} className="fade-item">{sections[activeIndex].title}</h2>
          <div ref={textRef} className="fade-item content-box">
            {sections[activeIndex].content}
          </div>
          <div className="social-icons" ref={socialIconsRef}> {/* Reference for social icons */}
            <div className='ggre'>
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
            <div className='jor'>
              <a>0tnda@gmail.com</a>
              <a>+234 902 123 4567</a>
            </div>
          </div>

          <div className="navigation">
            {sections.map((section, index) => (
              <button
                key={index}
                className={`nav-button ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleNavigation(index)}
              >
                {index + 1}. {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
