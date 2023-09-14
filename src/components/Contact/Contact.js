import React from 'react';
import './contact.css';
import mapImageSrc from '../../images/wilmington.png'

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact__container">
        <div className="contact__info">
          <h3>Address</h3>
          <p>123 Main Street, Wilmington, De, 19801</p>
          <h3>Phone</h3>
          <p>(302) 530-1346</p>
          <h3>Email</h3>
          <p>treewoodconstruccion@yahoo.com</p>
        </div>
        <div className="contact__map">
          <img src={mapImageSrc} alt="Google Map of Wilmington, DE" />
        </div>
      </div>
    </div>
  );
};

export default Contact;