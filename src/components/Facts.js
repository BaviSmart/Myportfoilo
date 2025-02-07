import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaDesktop, FaSmile } from 'react-icons/fa';

const FactsSection = () => {
  // State to track if the section is in view
  const [isInView, setIsInView] = useState(false);

  // Refs for each counter section
  const sectionRef = useRef(null);

  // Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view, trigger the animation
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // Unobserve after it's in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up the observer on unmount
      }
    };
  }, []);

  return (
    <div className="container facts" ref={sectionRef}>
      <div className="counterup">
        <div className="col">
          <i className="fauser_wrapper"><FaUsers className="fa fa-users" /></i>
          <h2>
            {isInView && <CountUp start={0} end={6} duration={2} />}
            +
          </h2>
          <h3>Completed Projects</h3>
        </div>
        <div className="col">
          <i className="fadesktop_wrapper"><FaDesktop className="fa fa-desktop" /></i>
          <h2>
            {isInView && <CountUp start={0} end={500} duration={2} />}
            +
          </h2>
          <h3>Total Web Pages</h3>
        </div>
        <div className="col">
          <i className="fahappy_wrapper"><FaSmile className="fa fa-smile" /></i>
          <h2>
            {isInView && <CountUp start={0} end={350} duration={2} />}
            +
          </h2>
          <h3>Happy Clients</h3>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
