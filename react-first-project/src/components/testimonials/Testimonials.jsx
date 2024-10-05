import React from "react";
import "./testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Great work! Highly recommended!"</p>
            <p>- Client 1</p>
          </div>
          <div className="testimonial">
            <p>"Professional and timely delivery."</p>
            <p>- Client 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
