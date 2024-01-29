import React from 'react';
import './AboutMe.css';
import jesus from '../../images/jesus.JPG'
import vicWorking from '../../images/victor_working.jpg'
import raptor from '../../images/raptor.jpg'
import basement from '../../images/basement_6.jpg'

const AboutMe = () => {
  return (
    <div id="about" className="about-me">

      <h2>ABOUT US</h2>
      <div className="about-me__content">
        <div className="about-me__image-container">
        <div className="navbar__slogan">
        3 Wood Construction LLC
      </div>

        <p id="about-us">
          3 Wood Construction is a family-run company specializing in interior and exterior woodwork located in Wilmington Delaware. We transform spaces into stunning works of art with creativity and meticulous attention to detail. 
          Our skilled artisans blend traditional techniques with innovative design concepts from custom cabinetry to exquisite outdoor structures. 
          We collaborate closely with you, listening to your vision and exceeding your expectations. Whether it's renovating your home's interior or enhancing an outdoor living space, trust our expertise and unwavering commitment to quality. Let us bring warmth, character, and beauty to your space.
          </p>
          <img
                    id="basement"
                    className="aboutMe-pics"
                    src={basement}
                    alt="Plywood board"
      >
      </img>
        <img
              id="vic"
              className="aboutMe-pics"
              src={vicWorking}
              alt="Plywood board"
              />
                      <img
              id="raptor"
              className="aboutMe-pics"
              src={raptor}
              alt="Plywood board"
              />
              <img
              id="jesus"
              className="aboutMe-pics"
              src={jesus}
              alt="Plywood board"
              />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;