import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typing", {
      strings: ["Bavithran", "Full Stack Developer", "Mern Stack Developer"], 
      typeSpeed: 100,  
      backSpeed: 60,   
      loop: true       
    });

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1 wow animate__animated animate__fadeInDown" data-wow-duration="2s" data-wow-delay="1s">
            Hi, I'm <span className="typing"></span> {}
          </div>
          <div className="text-2 wow animate__animated animate__slideInRight" data-wow-duration="2s" data-wow-delay="0.4s">
            I build interactive websites that run across platforms & devices.
          </div>
          <a href="#" className="wow animate__animated animate__slideInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
