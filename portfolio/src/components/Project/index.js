// Project.js
import React from 'react';
import './index.css';

function Project({ title, description, link, image }) {
  return (
    <div className="project-container">
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
