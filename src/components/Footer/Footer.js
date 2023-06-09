import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram,faInstagramSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__section">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer__section">
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
      <p>&copy; {new Date().getFullYear()} J & V Construction. All rights reserved.</p>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
