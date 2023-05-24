import React from 'react';
import PropTypes from 'prop-types';
import './style.css'


const Nav = () => (
  <header>
    <h1 id="nav-title">Wood Heart Construction</h1>
    <nav>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
