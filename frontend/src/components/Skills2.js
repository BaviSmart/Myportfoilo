import React, { useState } from 'react';

const Skills = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left wow animate__animated animate__fadeInUp animate__slower" data-wow-duration=".5s" data-wow-delay=".5s">
            <div className="text">My creative skills</div>
            <p>
            Frontend: React.js, React Native, HTML5, CSS3, JavaScript, Bootstrap, Material-UI, Ajax, Axios, jQuery,
      TypeScript.
            Backend: Node.js, Express.js, PHP, CodeIgniter, RESTful APIs, GraphQL.
            Databases: MySQL, MongoDB, Firebase.
            Tools: Git, GitHub, Postman, AWS (S3, SES), JSON, OAuth 2.0, JWT.
              <span id="dots">...</span> 
              <span id="more" style={{ display: isReadMore ? 'inline' : 'none' }}>
              Soft Skills: Innovative thinking, efficient prioritization, collaborative mindset, dedication, and reliability.
              </span>
            </p>
            <button onClick={toggleReadMore} id="myBtn">
              {isReadMore ? 'Read less' : 'Read more'}
            </button>
          </div>
          <div className="column right" data-wow-duration=".5s" data-wow-delay=".9s">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
