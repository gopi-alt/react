import React from "react";
import "./portfolio.css";
import Fade from "react-reveal/Fade"; // Import Fade for animations

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      link: "https://github.com/gopi-alt/react", // Replace with actual project link
    },
    {
      title: "Personal Blog",
      description:
        "A personal blogging platform built using React and Express.",
      link: "https://github.com/gopi-alt/blog", // Replace with actual project link
    },
    // Add more projects here
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container portfolio-container">
        <h2>My Portfolio</h2>
        <div className="portfolio-items">
          {projects.map((project, index) => (
            <Fade bottom key={index}>
              <div className="portfolio-item">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
