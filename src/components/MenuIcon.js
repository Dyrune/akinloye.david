import React, { useState, useEffect } from 'react';
import '../styles/MenuIcon.css'; // CSS for the Menu
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const MenuIcon = ({ className, activeSection }) => {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const isGalleryPage = location.pathname === '/gallery';
  const isServicesPage = location.pathname === '/services';

  const headerBgColor = isGalleryPage || isServicesPage 
    ? 'rgba(255, 255, 255, 1)' 
    : 'rgba(255, 255, 255, 1)';

  const iconColor = isGalleryPage || isServicesPage ? 'black' : 'black';

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`header ${className}`}
      style={{ backgroundColor: headerBgColor, padding: '5px 40px' }}
    >
      <div className={`profile-icons ${className}`}>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" rel="noopener noreferrer">
          <AiOutlineGlobal size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope size={24} />
        </a>
      </div>

      <div
        className={`menu-icon ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ color: iconColor }}
      >
        {isGalleryPage || isServicesPage ? (
          <Link to="/" className="back-button">Back to Main Page</Link>
        ) : (
          <>
            <div className="icon">&#9776;</div>
            <nav className={`nav-links ${hovered ? 'show' : 'hide'}`}>
              <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className={activeSection === 'hero' ? 'active' : ''}>Home</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
              <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default MenuIcon;
