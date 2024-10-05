import React from "react";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Topbar from "./components/topbar/Topbar";

// Replace with your actual EmailJS User ID

import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <Header />

      {/* Sections */}
      <section id="intro">
        <Intro />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
