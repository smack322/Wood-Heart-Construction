import React, { useState } from 'react';
import './style.css'
import logo from '../../images/J&P_Logo.png';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#home"><img id="logo" src={logo} alt="Logo" /></a>
      </div>
      <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#about">About</a>
          </li>
          <li className="navbar__item">
            <a href="#services">Services</a>
          </li>
          <li className="navbar__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={`navbar__toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="navbar__icon"></div>
        <div className="navbar__icon"></div>
        <div className="navbar__icon"></div>
      </div>
    </nav>
  );
};

export default Nav;
