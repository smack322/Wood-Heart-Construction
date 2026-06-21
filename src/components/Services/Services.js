import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './services.css';
import _svcRaw from '../../content/services.json';
const servicesData = _svcRaw.list;

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  // Track which service row is in view for the sticky sub-nav highlight
  useEffect(() => {
    const handleScroll = () => {
      for (const service of servicesData) {
        const el = document.getElementById(service.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            setActiveId(service.id);
            return;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="services">
      {/* Sticky jump-link sub-nav */}
      <div className="services__subnav">
        <div className="services__subnav-inner">
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`services__subnav-link ${activeId === s.id ? 'active' : ''}`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Alternating image/text rows */}
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          className={`service-row ${index % 2 === 0 ? 'service-row--img-left' : 'service-row--img-right'}`}
        >
          <div className="service-row__image">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-row__content">
            <span className="service-row__number">0{index + 1}</span>
            <h3 className="service-row__title">{service.title}</h3>
            <p className="service-row__desc">{service.description}</p>
            <Link to="/contact" className="service-row__link">Get a Quote →</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
