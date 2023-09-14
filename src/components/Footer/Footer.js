import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagramSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons';
const emailAddress = 'treewoodconstruccion@yahoo.com';
const Footer = () => (

  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section">
      <h3>Social</h3>
        <ul>
        <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faEnvelope} /> <a href={`mailto:${emailAddress}`}>Email</a></li>
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faFacebookF} /> <a href="https://www.facebook.com/profile.php?id=100093234410520">Facebook</a></li>
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faTwitter} /> Twitter</li>
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faInstagramSquare} /> <a href="https://www.instagram.com/treewoodconstrution/">Instagram</a></li>
        </ul>
        
      </div>
      <div className="footer__section">
      <h3>About</h3>
        <p>3 Wood Construction: Creating stunning woodwork with creativity and attention to detail. Custom cabinetry, outdoor structures, and more. Personalized service, exceeding expectations. Trust our expertise for warmth, character, and beauty.</p>

      </div>
      <div className="footer__section">
        <h3>Links</h3>
          <ul>
            <li className="social-item"><a href="#about">About</a></li>
            <li className="social-item"><a href="#services">Services</a></li>
            <li className="social-item"><a href="#projects">Projects</a></li>
            <li className="social-item"><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <p>3 Wood Construction. All rights reserved. &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
