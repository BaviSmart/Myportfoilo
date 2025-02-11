import React, { useEffect, useRef } from 'react';
import baviImage from '../assets/images/bavi.jpg';
import resume from '../assets/files/Bavithran_Resume.pdf';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftColumn = document.querySelector('.column.left');
            const rightColumn = document.querySelector('.column.right');

            leftColumn.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
            rightColumn.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow');

            // Stop observing once animation is triggered
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          
          <div className="column left">
            <img src={baviImage} alt="bavi" />
          </div>
         
          <div className="column right">
            <h5>
              <span>Senior Full Stack Developer</span>
            </h5>
            <p>
              Full-stack web developer with over 2 years of experience, specializing in MERN (MongoDB, Express.js, React.js, Node.js) and CodeIgniter. Developed interactive, user-friendly websites,improving user engagement by 30%. Translated client requirements into scalable, maintainable applications, increasing development efficiency by 25%. Proficient in secure authorization, real-time analytics, and optimizing workflows, boosting productivity by 35%.
            </p>
            <a href={resume} download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
