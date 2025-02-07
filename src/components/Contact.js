import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
   
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
                  <div className="sub-title">bavithran20@gmail.com</div>
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
          </div>
          <div
            className="column right wow animate__animated animate__fadeInUp animate__slower"
            data-wow-duration=".8s"
            data-wow-delay=".8s"
          >
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
