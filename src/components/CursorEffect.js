// src/components/CursorEffect.js

import React, { useEffect } from 'react';
import '../styles/CursorEffect.css';

const colors = [
  'rgba(255, 0, 0, 0.7)',
  'rgba(0, 255, 0, 0.7)',
  'rgba(0, 0, 255, 0.7)',
  'rgba(255, 255, 0, 0.7)',
  'rgba(255, 0, 255, 0.7)',
  'rgba(0, 255, 255, 0.7)',
  'rgba(255, 165, 0, 0.7)',
  'rgba(75, 0, 130, 0.7)',
  'rgba(128, 0, 128, 0.7)',
  'rgba(255, 192, 203, 0.7)',
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const CursorEffect = () => {
  useEffect(() => {
    const cursorEffect = document.getElementById('cursor-effect');
    let cursorX = 0;
    let cursorY = 0;
    let effectX = 0;
    let effectY = 0;
    const dragFactor = 0.1; // Adjust this value to make it draggier

    const handleMouseMove = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursorEffect.style.opacity = 1; // Fade in
      cursorEffect.classList.add('breathe'); // Add breathing class on move

      // Change color on each move
      cursorEffect.style.background = getRandomColor();
    };

    const handleMouseLeave = () => {
      cursorEffect.style.opacity = 0; // Fade out
      cursorEffect.classList.remove('breathe'); // Remove breathing class on mouse leave
    };

    const updateCursorEffect = () => {
      // Update effect position with some drag
      effectX += (cursorX - effectX) * dragFactor;
      effectY += (cursorY - effectY) * dragFactor;

      cursorEffect.style.left = `${effectX - 15}px`; // Centering effect
      cursorEffect.style.top = `${effectY - 15}px`; // Centering effect

      requestAnimationFrame(updateCursorEffect);
    };

    // Start the animation loop
    requestAnimationFrame(updateCursorEffect);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div id="cursor-wrapper">
      <div id="cursor-effect"></div>
    </div>
  );
};

export default CursorEffect;
