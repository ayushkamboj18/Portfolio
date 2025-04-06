import React, { useState } from 'react';
import { github } from '../assets';
import { projects } from '../constants';

const ProjectCard = ({ name, description, tags, image, source_code_link, demo_link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="project-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {}} // Adding empty click handler for touch devices
    >
      <div className={`project-card ${isHovered ? 'hovered' : ''}`}>
        <div className="project-card__image">
          <div className="image-wrapper">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="project-card__content">
          <div className="project-card__header">
            <h3>{name}</h3>
            <div className="project-links">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="project-link-icon"
                title="View Code"
              >
                <img src={github} alt="github" />
              </div>
              {demo_link && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(demo_link, "_blank");
                  }}
                  className="project-link-icon demo"
                  title="Live Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag.name} className={`project-tag ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="project-card__backdrop"></div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="section-header">
          <p>My work</p>
          <h2>Projects.</h2>
        </div>
        <p className="section-description">
          Following projects showcases my skills and experience through
          real-world examples of my work.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;