import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import WOW from 'wowjs';
import civilImage from '../assets/images/civil.jpg';
import portfolioImage from '../assets/images/Portfolio.jpg';
import beedesk from '../assets/images/logobackgrey.jpg';
import skyhms from '../assets/images/skyhms.png';
import mis from '../assets/images/mis_bg.png';
import bkgengine from '../assets/images/bookingengine.jpg';

const Projects = () => {
  // Initialize WOW.js animations
  useEffect(() => {
    new WOW.WOW({
      live: false, // Disable live DOM detection
    }).init();
  }, []);

  // Handle click for all projects
  const handleClick = (event, projectName) => {
    event.preventDefault();
    if (projectName === "M Construction") {
        window.open('https://tomato-silvana-70.tiiny.site/', '_blank');
    } else if (projectName === "MIS Mobile App") {
        window.open('https://svr1-app2.skyhms.in/mob_login/?deviceid=12ba9f62-a459-4497-86e5-c0911516620d&&userid=5385&edata=', '_blank');
    } else if (projectName === "SKYHMS") {
        window.open('https://devnew.skyhms.in/reservation/newfoe/?module=HKG&dbcon=SWJYempuQWY2ZHc0bFMwekJnVFVhdmo2N3FPVFVWSjlNTTJJdW1TaXBqL1hpdW9VVzdQLzhEeXJGS2RhYjE5VXR1MWhaYnZkK1p2RXpjN3ZJcXVTV25hbVNSRUdQN0xjdzcwRnh0TDNEZzUrQXZmSXNidWZxU0k2a29OR2lQUFNkQTg1SFk1TGUrNjN1VCsxTWVmdlFKVVU1UUQwOW5hbXVoZDdKNDVIRFZVPQ==&userid=9&cmpid=8&propid=13', '_blank');
    } else if (projectName === "BEEDESK") {
        window.open('https://beedesk.skyhms.in/beedesk/adminuser?isadminuser=1', '_blank');
    } else if (projectName === "BOOKING ENGINE") {
        window.open('https://devnew.skyhms.in/bookings/bookapi?apikeys=D3v3lop', '_blank');
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="project-content">
          
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="img-wrapper">
              <img className="inner-img" src={mis} width="auto" height="100%" alt="MIS Mobile App" />
              <div className="overlay">
                <div className="btn">
                  <a target="_blank" rel="noopener noreferrer" href="#" onClick={(e) => handleClick(e, "MIS Mobile App")}>
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>MIS Mobile App</h5>
              </div>
            </div>
          </div>

          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover" src={skyhms} width="100%" height="auto" alt="SKYHMS" />
              <div className="overlay">
                <div className="btn">
                  <a target="_blank" rel="noopener noreferrer" href="#" onClick={(e) => handleClick(e, "SKYHMS")}>
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>SKYHMS</h5>
              </div>
            </div>
          </div>

          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover" src={beedesk} width="100%" height="auto" alt="BEEDESK" />
              <div className="overlay">
                <div className="btn">
                  <a target="_blank" rel="noopener noreferrer" href="#" onClick={(e) => handleClick(e, "BEEDESK")}>
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>BEEDESK</h5>
              </div>
            </div>
          </div>

          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay="1s">
            <div className="img-wrapper">
              <img className="inner-img hascover" src={bkgengine} width="auto" height="100%" alt="BOOKING ENGINE" />
              <div className="overlay">
                <div className="btn">
                  <a target="_blank" rel="noopener noreferrer" href="#" onClick={(e) => handleClick(e, "BOOKING ENGINE")}>
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>BOOKING ENGINE</h5>
              </div>
            </div>
          </div>

          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration=".5s" data-wow-delay=".6s">
            <div className="img-wrapper">
              <img className="inner-img hascover" src={portfolioImage} width="100%" height="100%" alt="My Portfolio" />
              <div className="overlay">
                <div className="btn">
                  <a rel="noopener noreferrer" href="#home">
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>My Portfolio</h5>
              </div>
            </div>
          </div>
    
          <div className="card wow animate__animated animate__fadeInRight" data-wow-duration="500ms" data-wow-delay="0s">
            <div className="img-wrapper">
              <img className="inner-img hascover" src={civilImage} width="100%" height="100%" alt="M Construction" />
              <div className="overlay">
                <div className="btn">
                  <a target="_blank" rel="noopener noreferrer" href="#" onClick={(e) => handleClick(e, "M Construction")}>
                    <i><FaArrowRight className="fa-arrow-right" /></i>
                  </a>
                </div>
                <h5>M Construction</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
