import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (event, linkName) => {
    event.preventDefault();
    if (linkName === "Linkedin") {
      window.open("http://www.linkedin.com/in/bavismart", "_blank");
    } else if (linkName === "Github") {
      window.open("https://github.com/BaviSmart", "_blank");
    } else if (linkName === "Instagram") {
      window.open("https://www.instagram.com/bavismart10", "_blank");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response = await axios.post("http://localhost:5000/send-mail", formData);
      const response = await axios.post("https://myportfolio-bavi.vercel.app/send-mail", formData);

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form fields
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send your message. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          {/* Left Column */}
          <div
            className="column left wow animate__animated animate__fadeInLeft animate__slower"
            data-wow-duration=".5s"
            data-wow-delay=".3s"
          >
            <div className="text">Get in Touch</div>
            <p>
              I'm always open to new opportunities, collaborations, or even just a friendly chat! Feel free to
              reach out to me for any inquiries, feedback, or just to connect. I'm happy to help with anything you
              need!
            </p>
            <div className="icons contact-details">
              <div className="row">
                <i className="fauser_wrapper">
                  <FaPhone className="icon" />
                </i>
                <div className="info">
                  <div className="head1">Phone No</div>
                  <div className="sub-title">+91 8760833056</div>
                </div>
              </div>
              <div className="row">
                <i className="fauser_wrapper">
                  <FaEnvelope className="icon" />
                </i>
                <div className="info">
                  <div className="head2">Email</div>
                  <div className="sub-title">bavithran20@gmail.com</div>
                </div>
              </div>
              <div className="row">
                <i className="fauser_wrapper">
                  <FaLinkedin className="icon" />
                </i>
                <div className="info">
                  <div className="head3">Linkedin</div>
                  <div className="sub-title">
                    <a
                      href="#"
                      onClick={(e) => handleClick(e, "Linkedin")}
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/bavismart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
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
                />
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
