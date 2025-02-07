import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; 

const ContactSection = () => {

  const handleClick = (event, linkName) => {
    event.preventDefault();
    if (linkName === "Linkedin") {
        window.open('http://www.linkedin.com/in/bavismart', '_blank');
    } else if (linkName === "Github") {
        window.open('https://github.com/BaviSmart', '_blank');
    } else if (linkName === "Instagram") {
        window.open('https://www.instagram.com/bavismart10', '_blank');
    } 
  };
  
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div
            className="column left wow animate__animated animate__fadeInLeft animate__slower"
            data-wow-duration=".5s"
            data-wow-delay=".3s"
          >
            <div className="text">Get in Touch</div>
            <p>
            I'm always open to new opportunities, collaborations, or even just a friendly chat! Feel free to reach out to me for any inquiries, feedback, or just to connect. I'm happy to help with anything you need!
            </p>
            <div className="icons contact-details">
              <div className='icon-left'>
              <div className="row">
              <i className="fauser_wrapper"><FaPhone className="fa-phone"/></i>
                <div className="info">
                  <div className="head1">Phone No</div>
                  <div className="sub-title">+91 8760833056</div>
                </div>
              </div>
              <div className="row">
              <i className="faenvelope_wrapper"><FaEnvelope className="fa-envelope"/></i>
                <div className="info">
                  <div className="head2">Email</div>
                  <div className="sub-title"><a href="mailto:bavithran20@gmail.com" target='_blank' rel="noopener noreferrer">bavithran20@gmail.com</a></div>
                </div>
              </div>
              <div className="row">
              <i className="famarkeralt_wrapper"><FaMapMarkerAlt className="fa-map-marker-alt"/></i>
                <div className="info">
                  <div className="head3">Address</div>
                  <div className="sub-title">Chennai, Tamilnadu.</div>
                </div>
              </div>
              </div>

              <div className='icon-right'>
              <div className="row">
              <i className="fauser_wrapper"><FaLinkedin className="fa-phone"/></i>
                <div className="info">
                  <div className="head1">Linkedin</div>
                  <div className="sub-title"><a href="#" onClick={(e) => handleClick(e, "Linkedin")} rel="noopener noreferrer">linkedin.com/in/bavismart</a></div>
                </div>
              </div>
              <div className="row">
              <i className="faenvelope_wrapper"><FaGithub className="fa-envelope"/></i>
                <div className="info">
                  <div className="head2">Github</div>
                  <div className="sub-title"><a href="#" onClick={(e) => handleClick(e, "Github")} rel="noopener noreferrer">github.com/BaviSmart</a></div>
                </div>
              </div>
              <div className="row">
              <i className="famarkeralt_wrapper"><FaInstagram className="fa-map-marker-alt"/></i>
                <div className="info">
                  <div className="head3">Instagram</div>
                  <div className="sub-title"><a href="#" onClick={(e) => handleClick(e, "Instagram")} rel="noopener noreferrer">bavismart10</a></div>
                </div>
              </div>
              </div>

            </div>
          </div>
          <div
            className="column right wow animate__animated animate__fadeInUp animate__slower"
            data-wow-duration=".8s"
            data-wow-delay=".8s"
          >    
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
