import React, { useEffect, useRef } from "react";

import javascriptImg from "../assets/images/skills/javascript.png";
import nodeImg from "../assets/images/skills/node.png";
import reactImg from "../assets/images/skills/react.png";
import htmlImg from "../assets/images/skills/html.png";
import cssImg from "../assets/images/skills/css.png";
import bootstrapImg from "../assets/images/skills/bootstrap.png";
import typescriptImg from "../assets/images/skills/typescript.png";

import mongoImg from "../assets/images/skills/mongo.png";
import firebaseImg from "../assets/images/skills/firebase.png";
import expressImg from "../assets/images/skills/express4.png";
import phpImg from "../assets/images/skills/php.png";
import codeigniterImg from "../assets/images/skills/codeigniter.png";
import graphqlImg from "../assets/images/skills/graphql.png";
import awsImg from "../assets/images/skills/aws.png";

import gitImg from "../assets/images/skills/git2.png";
import gihubImg from "../assets/images/skills/github.png";

const skills = {
  Frontend: [
    { src: javascriptImg, title: "JavaScript" },
    { src: reactImg, title: "React" },
    { src: htmlImg, title: "HTML" },
    { src: cssImg, title: "CSS" },
    { src: bootstrapImg, title: "Bootstrap" },
    { src: typescriptImg, title: "Typescript" },
  ],
  Backend: [
    { src: nodeImg, title: "NodeJS" },
    { src: expressImg, title: "Express" },
    { src: codeigniterImg, title: "CodeIgniter" },
    { src: phpImg, title: "Php" },
    { src: graphqlImg, title: "Graphql" },
  ],
  Tools: [
    { src: awsImg, title: "AWS" },
    { src: mongoImg, title: "Mongo DB" },
    { src: firebaseImg, title: "Firebase" },
    { src: gitImg, title: "Git" },
    { src: gihubImg, title: "GitHub" },
  ],
};

const SkillsPage = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillsItems = document.querySelectorAll(".skill-item");
            skillsItems.forEach((item, index) => {
              item.style.animationDelay = `${index * 0.1}s`;
              item.classList.add("animate__animated", "animate__zoomIn");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="max-width">
        <h2 className="title">My skills</h2>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="skills-category">
            <h3 className="subheading">{category}</h3>
            <div className="skills-list">
              {skillsList.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img
                    src={skill.src}
                    alt={skill.title}
                    title={skill.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
