import React from 'react';
import './AboutMe.css';
import jesus from '../../images/jesus.JPG'
import vicDog from '../../images/vic_dog.jpg'
import raptor from '../../images/raptor.jpg'

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h2>About Us</h2>
      <div className="about-me__content">
        <div className="about-me__image-container">
        <p id="about-us">
          3 Wood Construction is a family-run company specializing in interior and exterior woodwork. With creativity and meticulous attention to detail, we transform spaces into stunning works of art. 
          From custom cabinetry to exquisite outdoor structures, our skilled artisans blend traditional techniques with innovative design concepts. As a family-run business, we value personalized service and building lasting relationships. 
          We collaborate closely with you, listening to your vision and exceeding your expectations. Whether it's renovating your home's interior or enhancing outdoor living, trust our expertise and unwavering commitment to quality. Let us bring warmth, character, and beauty to your space.
          </p>
        <img
              id="vic"
              className="aboutMe-pics"
              src={vicDog}
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