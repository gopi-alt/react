import React, { useEffect, useRef } from "react";
import "./skills.css"; // Ensure to create and link this CSS file

function Skills() {
  const skillsData = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS", level: 75 },
    { name: "HTML", level: 90 },
    { name: "MongoDB", level: 70 },
  ];

  // Using refs to access progress elements
  const progressRefs = useRef([]);

  // Setting up the progress bars animation
  useEffect(() => {
    // Loop through each skill and set width based on level
    progressRefs.current.forEach((progress, index) => {
      if (progress) {
        progress.style.width = `${skillsData[index].level}%`;
      }
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">
              {skill.name}
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                ref={(el) => (progressRefs.current[index] = el)} // Assigning refs to progress elements
              ></div>
              <div className="tooltip">{skill.level}%</div> {/* Tooltip */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
