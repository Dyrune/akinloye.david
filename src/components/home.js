import React, { useState, useEffect } from 'react';
import '../styles/home.css'; // Styles for Hero Section

const Hero = () => {
  const writeups = [
    "Building your dreams with elegance and precision.",
    "Innovating the future of design.",
    "Crafting experiences that inspire.",
    "Turning ideas into reality.",
    "Engineering perfection in every detail.",
    "Designing with passion and purpose."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % writeups.length);
    }, 20000); // Change the text every 20 seconds

    return () => clearInterval(interval);
  }, [writeups.length]);

  return (
    <section id="hero" className="hero">
      <h1 className='brand-name'>0tnda</h1>
      <p className="sliding-text">{writeups[currentIndex]}</p>
      <button className='view'>View My Work</button>
    </section>
  );
};

export default Hero;