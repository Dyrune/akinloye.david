import React, { useState, useEffect } from 'react';
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

const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const App = () => {
  const [headerBg, setHeaderBg] = useState('rgba(255, 255, 255, 1)');
  const [hideScrollbar, setHideScrollbar] = useState(false);
  const [projectsOpacity, setProjectsOpacity] = useState(0);
  const [isFullPageView, setIsFullPageView] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const location = useLocation();

  const changeBackgroundAndScrollbar = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const section = document.getElementById('projects');
    const sectionTop = section ? section.offsetTop : 0;
    const sectionHeight = section ? section.offsetHeight : 0;

    if (location.pathname === '/gallery') {
      setHeaderBg('rgba(255, 255, 255, 1)');
      setHideScrollbar(false);
      return;
    }

    if (scrollPosition + viewportHeight >= sectionTop) {
      const opacity = Math.min((scrollPosition + viewportHeight) / (sectionHeight * 0.5), 1);
      setProjectsOpacity(opacity);
      setHeaderBg(`rgba(0, 0, 0, ${Math.min(opacity, 1)})`);
      setHideScrollbar(true);
    } else {
      setProjectsOpacity(0);
      setHeaderBg('rgba(255, 255, 255, 1)');
      setHideScrollbar(false);
    }

    if (scrollPosition + viewportHeight >= sectionTop + sectionHeight) {
      setIsFullPageView(true);
    } else {
      setIsFullPageView(false);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(section.id);
        }
      });
      changeBackgroundAndScrollbar();
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={`App ${hideScrollbar ? 'hide-scrollbar' : ''}`}>
      <header className="header" style={{ backgroundColor: headerBg }}>
        <MenuIcon isInProjectsSection={isFullPageView} activeSection={activeSection} />
      </header>

      <Routes>
        <Route path="/" element={
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="projects" className="projects-section" style={{ opacity: projectsOpacity }}>
              <Projects />
            </section>
            <section id="contact">
              <ContactForm />
            </section>
          </>
        } />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
