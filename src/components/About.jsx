import React from 'react';

const SkillCard = () => (
  <div className="skill__card">
    <div className="skill__card-gradient">
      <div className="skill__card-content">
        <h3>
          I am passionate about web development and have been sharpening my skills in front-end technologies. I specialize in creating dynamic and responsive user interfaces using React. Additionally, I have a foundational understanding of backend development, particularly within the MERN stack (MongoDB, Express.js, React, and Node.js).
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <p>Introduction</p>
        <h2>What I do.</h2>
      </div>
        <SkillCard />
    </section>
  );
};

export default About;
