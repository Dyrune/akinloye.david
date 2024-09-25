// src/App.js

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Hero from './components/home';
import About from './components/about';
import Projects from './components/projects';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';
import MenuIcon from './components/MenuIcon';
import Gallery from './components/Gallery';
import Services from './components/Services';
import CursorEffect from './components/CursorEffect'; // Import the CursorEffect

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <header className="header">
        <MenuIcon />
      </header>

      <CursorEffect /> {/* Add the CursorEffect component */}

      <div className="transition-container">
        <Routes location={location}>
          <Route path="/" element={
            <>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="projects" className="projects-section">
                <Projects />
              </section>
              <section id="contact"><ContactForm /></section>
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
