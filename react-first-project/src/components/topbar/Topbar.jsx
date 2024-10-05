import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Testimonials</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
