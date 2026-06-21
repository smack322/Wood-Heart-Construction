import React from 'react';
import './AboutMe.css';
import aboutData from '../../content/about.json';

const AboutMe = () => (
  <section id="about" className="about-section">
    <div className="about-section__container">
      <div className="about-section__text">
        <span className="section-label">ABOUT US</span>
        <h2>{aboutData.about.heading}</h2>
        <p>{aboutData.about.body}</p>
      </div>
      <div className="about-section__image">
        <img src="/images/basement_6.jpg" alt="3 Wood Construction finished project" />
      </div>
    </div>
  </section>
);

export default AboutMe;
