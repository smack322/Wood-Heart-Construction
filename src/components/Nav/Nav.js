import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

const SERVICE_LINKS = [
  { label: 'Interior Woodwork',       href: '/services#interior-woodwork' },
  { label: 'Cabinetry & Millwork',    href: '/services#cabinetry-millwork' },
  { label: 'Exterior Woodwork',       href: '/services#exterior-woodwork' },
  { label: 'Custom Woodworking',      href: '/services#custom-woodworking' },
  { label: 'Design & Consultation',   href: '/services#design-consultation' },
  { label: 'Renovations & Remodeling',href: '/services#renovations-remodeling' },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <Link to="/" onClick={closeAll}>
          <img src="/images/3_wood_logo.png" alt="3 Wood Construction" />
        </Link>
      </div>

      <div className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar__list">

          {/* About Us — direct link */}
          <li className="navbar__item">
            <NavLink to="/about" onClick={closeAll} className={({ isActive }) => isActive ? 'active' : ''}>
              About Us
            </NavLink>
          </li>

          {/* Services dropdown */}
          <li className="navbar__item navbar__item--has-dropdown">
            <button
              className="navbar__dropdown-trigger"
              onClick={() => toggleDropdown('services')}
              aria-expanded={activeDropdown === 'services'}
            >
              Services <span className={`navbar__arrow ${activeDropdown === 'services' ? 'open' : ''}`}>▾</span>
            </button>
            <ul className={`navbar__dropdown ${activeDropdown === 'services' ? 'open' : ''}`}>
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} onClick={closeAll}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="navbar__item">
            <NavLink to="/portfolio" onClick={closeAll} className={({ isActive }) => isActive ? 'active' : ''}>
              Portfolio
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <button
        className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
      </button>
    </nav>
  );
};

export default Nav;
