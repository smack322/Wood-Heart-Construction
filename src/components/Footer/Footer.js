import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagramSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section">
        <h3>About</h3>
        <p>3 Wood Construction: Creating stunning woodwork with creativity and attention to detail. Custom cabinetry, outdoor structures, and more. Personalized service, exceeding expectations. Trust our expertise for warmth, character, and beauty.</p>
      </div>
      <div className="footer__section">
        <h3>Links</h3>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__section">
        <h3>Social</h3>
        <ul>
        <li><FontAwesomeIcon icon={faEnvelope} /> Email</li>
          <li><FontAwesomeIcon icon={faFacebookF} /> Facebook</li>
          <li><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
          <li><FontAwesomeIcon icon={faInstagramSquare} /> Instagram</li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <p>3 Wood Construction. All rights reserved. &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
