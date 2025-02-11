import React, { useState, useEffect } from 'react';
import { FaAccusoft, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (window.scrollY > 300) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
        <div className="max-width">
          <div className="logo">
            <FaAccusoft />
            <a href="#">Portfo<span>lio</span></a>
          </div>
          <ul className="menu">
            <li><a href="#home" className="menu-btn active">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#skills" className="menu-btn">Skills</a></li>
            <li><a href="#projects" className="menu-btn">Projects</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Scroll-up Button */}
      {showScrollUpBtn && (
        <button className="scroll-up-btn" onClick={() => window.scrollTo(0, 0)}>
          ↑
        </button>
      )}
    </>
  );
};

export default Navbar;
