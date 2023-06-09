import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
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
        <form className="contact__form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;