// src/components/SmoothScroll.js

import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(containerRef.current, {
      damping: 0.07, // Adjust the damping for smoothness
    });

    return () => {
      scrollbar.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
