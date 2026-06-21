import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import aboutData from '../../content/about.json';
import _svcRaw from '../../content/services.json';
const servicesData = _svcRaw.list;

const Footer = () => (
  <footer className="footer">
    <div className="footer__columns">

      {/* Column 1 — About Us */}
      <div className="footer__col footer__col--about">
        <img
          src="/images/3_wood_logo.png"
          alt="3 Wood Construction"
          className="footer__logo"
        />
        <p>3 Wood Construction is a family-run company specializing in interior and exterior woodwork in Wilmington, Delaware.</p>
        <p>We transform spaces into stunning works of art with creativity and meticulous attention to detail.</p>
      </div>

      {/* Column 2 — Sitemap */}
      <div className="footer__col">
        <h4 className="footer__col-heading">Sitemap</h4>
        <ul className="footer__list">
          <li><Link to="/about">About Us</Link></li>
          <li className="footer__list-divider" />
          {servicesData.map((s) => (
            <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>
          ))}
          <li className="footer__list-divider" />
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Column 3 — Contact Info */}
      <div className="footer__col">
        <h4 className="footer__col-heading">Contact</h4>
        <ul className="footer__list">
          <li>
            <a href={`tel:${aboutData.phone.replace(/\D/g, '')}`}>
              {aboutData.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${aboutData.email}`}>{aboutData.email}</a>
          </li>
          <li>{aboutData.address}</li>
        </ul>
      </div>

      {/* Column 4 — Social */}
      <div className="footer__col">
        <h4 className="footer__col-heading">Follow Us</h4>
        <ul className="footer__list footer__social">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100093234410520"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="footer__social-icon" />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tree_wood_construction_company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="footer__social-icon" />
              Instagram
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div className="footer__bottom">
      <p>© {new Date().getFullYear()} 3 Wood Construction LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
