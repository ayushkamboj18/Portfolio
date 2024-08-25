import React from 'react';

const SkillCard = () => (
  <div className="skill__card">
    <div className="skill__card-gradient">
      <div className="skill__card-content">
        <h3>
        Hey there! 👋 I'm a third-year Computer Science Engineering student with a passion for technology and innovation. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and am currently diving into Docker to enhance my containerization skills. With a strong foundation in Data Structures and Algorithms using C++, I love solving complex problems. I'm always eager to learn and stay updated with the latest tech trends, whether it's exploring new frameworks or contributing to open-source projects. Let's connect and build something amazing together! 🚀
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
