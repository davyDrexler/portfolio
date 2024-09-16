import React from 'react';
import './index.css';

function SkillCard({ image, title, description }) {
  return (
    <div className="skill-card">
      <img src={image} alt={title} className="skill-card-image" />
      <p className="skill-card-title">{title}</p>
      <p className="skill-card-description">{description}</p>
    </div>
  );
}

export default SkillCard;