import React from "react";

const Project = ({ img, github, liveDemo, title }) => {
  return (
    <article className="portfolio-item">
      <div className="image">
        <img src={img} alt="img" />
      </div>
      <h3>{title}</h3>
      <div className="cta">
        <a href={github} className="btn" target="_blank">
          Github
        </a>
        <a href={liveDemo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Project;
