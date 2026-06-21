import React from 'react';
import './style.css';
import aboutData from '../../content/about.json';

const Hero = () => {
  const { block1, block2 } = aboutData.hero;

  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: 'url(/images/dark_wood.jpg)' }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__block">
          <span className="hero__label">{block1.label}</span>
          <h2 className="hero__heading">{block1.heading}</h2>
          <p className="hero__body">{block1.body}</p>
          <a href={block1.linkHref} className="hero__link">{block1.linkText} →</a>
        </div>

        <div className="hero__divider" />

        <div className="hero__block">
          <span className="hero__label">{block2.label}</span>
          <h2 className="hero__heading">{block2.heading}</h2>
          <p className="hero__body">{block2.body}</p>
          <a href={block2.linkHref} className="hero__link">{block2.linkText} →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
