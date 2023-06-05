import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faFacebookF } from '@fortawesome/free-solid-svg-icons'
// import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>
    <div className="container">
      <ul className="flex-row">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul className="flex-row">
        <li><FontAwesomeIcon icon={faCoffee} /></li>
        <li><FontAwesomeIcon icon={faEnvelope} /></li>
        <li><FontAwesomeIcon icon={faCoffee} /></li>
        <li></li>
      </ul>
      <p>&copy; 2023 J & V Construction</p>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
