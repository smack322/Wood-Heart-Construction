import React from 'react';
import './contact.css';
import mapImageSrc from '../../images/wilmington.png'

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact__container">
        <div className="contact__info">
          <div>
          <h3>Contact Information</h3>
            <p className="contact-details">At 3 Wood Construction, we take pride in our attention to detail, dedication to quality, and unwavering commitment to your satisfaction. Our experts are ready to discuss your project, provide accurate quotes, and offer expert advice tailored to your needs.
            Let's collaborate on your next construction endeavor. Contact us today for a free consultation and a detailed quote.</p>
          </div>
          <h3>Phone</h3>
          <p className="contact-details"><strong>Victor Luna:</strong> (302) 530-1346</p>
          <h3>Email</h3>
          <p className="contact-details"><a href={`mailto:treewoodconstruccion@yahoo.com`}>treewoodconstruccion@yahoo.com</a></p>

        </div>
        <div className="contact__map">
          <img id="map" src={mapImageSrc} alt="Google Map of Wilmington, DE" />
        </div>
      </div>
    </div>
  );
};

export default Contact;