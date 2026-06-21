import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import './Home.css';
import aboutData from '../content/about.json';
import _svcRaw from '../content/services.json';
import _projRaw from '../content/projects.json';
const servicesData = _svcRaw.list;
const projectsData = _projRaw.list;

const Home = () => (
  <>
    <Hero />

    {/* ── About teaser ── */}
    <section className="home-about">
      <div className="home-about__inner">
        <div className="home-about__text">
          <span className="section-label">ABOUT US</span>
          <h2>{aboutData.about.heading}</h2>
          <p>{aboutData.about.body}</p>
          <Link to="/about" className="home__text-link">Learn About Us →</Link>
        </div>
        <div className="home-about__image">
          <img src="/images/basement_6.jpg" alt="Finished basement project" loading="lazy" />
        </div>
      </div>
    </section>

    {/* ── Services teaser ── */}
    <section className="home-services">
      <div className="home-section-header">
        <span className="section-label">WHAT WE DO</span>
        <h2>Our Services</h2>
      </div>
      <div className="home-services__grid">
        {servicesData.slice(0, 3).map((s) => (
          <Link to={`/services#${s.id}`} key={s.id} className="home-service-card">
            <div className="home-service-card__img">
              <img src={s.image} alt={s.title} loading="lazy" />
            </div>
            <div className="home-service-card__body">
              <h3>{s.title}</h3>
              <p>{s.description.length > 110 ? s.description.slice(0, 110) + '…' : s.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-section-footer">
        <Link to="/services" className="home__outline-btn">View All Services →</Link>
      </div>
    </section>

    {/* ── Portfolio teaser ── */}
    <section className="home-portfolio">
      <div className="home-section-header">
        <span className="section-label">OUR WORK</span>
        <h2>Featured Projects</h2>
      </div>
      <div className="home-portfolio__grid">
        {projectsData.slice(0, 3).map((p) => (
          <Link to="/portfolio" key={p.id} className="home-portfolio-card">
            <div className="home-portfolio-card__img">
              <img src={p.photos[0]} alt={p.title} loading="lazy" />
            </div>
            <div className="home-portfolio-card__label">
              <h3>{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-section-footer">
        <Link to="/portfolio" className="home__outline-btn">View Full Portfolio →</Link>
      </div>
    </section>

    {/* ── CTA strip ── */}
    <section className="home-cta">
      <h2>Ready to Start Your Project?</h2>
      <p>Contact us today for a free consultation and detailed estimate.</p>
      <Link to="/contact" className="home-cta__btn">Get a Free Estimate</Link>
    </section>
  </>
);

export default Home;
