import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaBook } from "react-icons/fa";

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const educationCards = document.querySelectorAll(".education .resume-wrap");
            educationCards.forEach((card, index) => {
              card.style.animationDelay = `${index * 0.2}s`;
              card.classList.add("animate__animated", "animate__fadeInRight");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="education" id="education" ref={educationRef}>
      <div className="max-width">
        <h2 className="title">Education</h2>

        <div className="resume-wrap d-flex">
          <div className="icon-card d-flex align-items-center justify-content-center">
            <FaGraduationCap size={30} />
          </div>
          <div className="card text pl-3">
            <h2>Anna University</h2>
            <span className="position">Bachelor of Engineering</span>
            <p className="stream">
              <strong>Mechanical Engineering</strong>
            </p>
            <p className="location">Trichy - Tamilnadu</p>
            <span className="date">2013-2017</span>
          </div>
        </div>

        <div className="resume-wrap d-flex">
          <div className="icon-card d-flex align-items-center justify-content-center">
            <FaBook size={30} />
          </div>
          <div className="card text pl-3">
            <h2>Sri Vivekananda HR Sec School</h2>
            <span className="position">Matriculation</span>
            <p className="stream">
              <strong>Maths, Biology</strong>
            </p>
            <p className="location">Kachirayapalayam - Tamilnadu</p>
            <span className="date">2011-2013</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
