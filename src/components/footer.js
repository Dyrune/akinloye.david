// src/components/Footer.js
import React from 'react';
import '../styles/footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}
        <nav className="footer-nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social Media Links */}
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:akindior@gmail.com">Email</a>
        </div>

        {/* Contact Info */}
        <div className="footer-info">
          <p>© 2024 Tona Company. All rights reserved.</p>
          <p>Call us: <a href="tel:+2342343423233">+234 234 3423 233</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
