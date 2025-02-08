import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Facts from './components/Facts';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import 'animate.css';
import './App.css';
import { FaAngleUp } from 'react-icons/fa'; 


const App = () => {
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

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Facts />
      <Contact />
      <Footer />

      <div className={`scroll-up-btn ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
        <FaAngleUp size={24} />
      </div>
    </div>
  );
};

export default App;
