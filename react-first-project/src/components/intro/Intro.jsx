import React from "react";
import "./intro.css";
import Fade from "react-reveal/Fade"; // Import Fade animation
import Zoom from "react-reveal/Zoom";
import BackgroundImage from "../../assets/b1.jpg"; // Adjust the path accordingly
// Import Zoom animation

function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="container intro-container">
        <Fade bottom>
          <h1>Welcome to My Portfolio!</h1>
        </Fade>
        <Fade bottom>
          <p className="intro-description">
            Hi, I'm R.Gopi Maries, a passionate full-stack developer dedicated
            to crafting beautiful and functional web applications. With a strong
            focus on both client-side and server-side technologies, I strive to
            build experiences that engage users and drive results.
          </p>
        </Fade>
        <Fade bottom>
          <h2>What You'll Find Here:</h2>
        </Fade>
        <Zoom>
          <ul className="topics-list">
            <li>1. My Technical Skills</li>
            <li>2. Projects I've Worked On</li>
            <li>3. My Professional Journey</li>
            <li>4. Let's Get in Touch!</li>
          </ul>
        </Zoom>
      </div>
    </section>
  );
}

export default Intro;
