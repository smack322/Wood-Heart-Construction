import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const UtilityBar = () => (
  <div className="utility-bar">
    <div className="utility-bar__links">
      <Link to="/contact" className="utility-bar__link">Get a Quote</Link>
      <span className="utility-bar__sep">|</span>
      <Link to="/portfolio" className="utility-bar__link">Project Gallery</Link>
    </div>
    <div className="utility-bar__phone">
      <a href="tel:3025301346" className="utility-bar__link">(302) 530-1346</a>
    </div>
  </div>
);

export default UtilityBar;
