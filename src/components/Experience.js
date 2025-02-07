import React, { useEffect, useRef } from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const experienceCards = document.querySelectorAll(".experience .resume-wrap");
            experienceCards.forEach((card, index) => {
              card.style.animationDelay = `${index * 0.2}s`;
              card.classList.add("animate__animated", "animate__fadeInRight");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="experience" id="experience" ref={experienceRef}>
      <div className="max-width">
        <h2 className="title">Experience</h2>

        <div className="resume-wrap d-flex">
          <div className="icon-card d-flex align-items-center justify-content-center">
            <FaBriefcase size={30} />
          </div>
          <div className="card text pl-3">
            <h2>Full Stack Developer</h2>
            <span className="position">Raspberry Infosystems Private Limited</span>
            <p className="location">Chennai - Tamilnadu</p>
            <p className="date">Jan 2023 - Present</p>
          </div>
        </div>

        <div className="resume-wrap d-flex">
          <div className="icon-card d-flex align-items-center justify-content-center">
            <FaBriefcase size={30} />
          </div>
          <div className="card text pl-3">
            <h2>Web Devlopment Course</h2>
            <span className="position">CADD Centre</span>
            <p className="location">Chennai - Tamilnadu</p>
            <p className="date">July 2022 - Dec 2022</p>
          </div>
        </div>
        <div className="resume-wrap d-flex">
          <div className="icon-card d-flex align-items-center justify-content-center">
            <FaBriefcase size={30} />
          </div>
          <div className="card text pl-3">
            <h2>Production Engineer</h2>
            <span className="position">Sundaram Fasteners Limited</span>
            <p className="location">Chennai - Tamilnadu</p>
            <p className="date">Nov 2018 - Oct 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
