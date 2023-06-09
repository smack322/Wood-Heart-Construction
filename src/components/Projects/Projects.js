import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Residential Renovation',
      image: '/images/project1.jpg',
    },
    {
      title: 'Commercial Construction',
      image: '/images/project2.jpg',
    },
    {
      title: 'Outdoor Living Space',
      image: '/images/project3.jpg',
    },
  ];

  return (
    <div className="projects">
      <h2>Our Projects</h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project__overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;