import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons';
const emailAddress = '3woodconstruction@gmail.com';
const Footer = () => (

  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section">
      <h3>SOCIAL</h3>
        <ul>
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faFacebookF} /> <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100093234410520">FACEBOOK</a></li>
          {/* <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faTwitter} /> Twitter</li> */}
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faInstagramSquare} /> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tree_wood_construction_company">INSTAGRAM</a></li>
          <li className="social-item"><FontAwesomeIcon className="fa-2x" icon={faEnvelope} /> <a target="_blank" rel="noopener noreferrer" href={`mailto:${emailAddress}`}>EMAIL</a></li>
        </ul>
        
      </div>
      <div className="footer__section">
      <h3>ABOUT</h3>
        <p id="footer-about">3 Wood Construction: Creating stunning woodwork with creativity and attention to detail. Custom cabinetry, outdoor structures, and more. Personalized service, exceeding expectations. Trust our expertise for warmth, character, and beauty.</p>

      </div>
      <div className="footer__section">
        <h3>LINKS</h3>
          <ul>
            <li className="social-item"><a href="#about">ABOUT</a></li>
            <li className="social-item"><a href="#services">SERVICES</a></li>
            <li className="social-item"><a href="#projects">PROJECTS</a></li>
            <li className="social-item"><a href="#contact">CONTACT</a></li>
          </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <p>3 Wood Construction LLC. All rights reserved. &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
