import React, { useState, useEffect, Suspense, lazy } from 'react';
import 'animate.css';
import './App.css';
import { FaAngleUp } from 'react-icons/fa';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// Lazy-load heavy components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Facts = lazy(() => import('./components/Facts'));
const Contact = lazy(() => import('./components/Contact'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackdrop(false); 
    }, 1000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      {showBackdrop ? (
        <Backdrop
          sx={{backgroundColor: '#fff', color: '#20a6ff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: '#20a6ff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        >
          <Home />
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Facts />
          <Contact />
          <Footer />
        </Suspense>
      )}

      <div
        className={`scroll-up-btn ${showScroll ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <FaAngleUp size={24} />
      </div>
    </div>
  );
};

export default App;
