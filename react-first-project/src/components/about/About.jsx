import React from "react";
import "./about.css";
import MyPhoto from "../../assets/m1.jpg"; // Import your photo
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide"; // Import Slide animation

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Left side - Photo */}
        <Fade left>
          <div className="about-photo">
            <Zoom>
              <img src={MyPhoto} alt="R.Gopi Maries" />
            </Zoom>
          </div>
        </Fade>

        {/* Right side - Text */}
        <Fade right>
          <div className="about-text">
            <Slide right>
              <p>
                Hello! I'm R.Gopi Maries, a passionate and dedicated full-stack
                developer with a knack for building efficient and scalable web
                applications. With a strong foundation in both front-end and
                back-end technologies, I love bringing creative ideas to life in
                the digital world.
              </p>
            </Slide>
            <Slide right>
              <p>
                With expertise in React.js, Node.js, Express, and MongoDB, I
                enjoy working across the entire stack to build modern web
                applications from start to finish. I take pride in writing
                clean, maintainable code and following best practices to deliver
                high-quality products.
              </p>
            </Slide>
            <Slide right>
              <p>
                When I'm not coding, you can find me exploring new tech trends,
                learning about emerging frameworks, or contributing to
                open-source projects.
              </p>
            </Slide>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
