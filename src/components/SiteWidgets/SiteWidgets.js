import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SiteWidgets = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Link
        to="/contact"
        className={`floating-cta ${visible ? 'visible' : ''}`}
        aria-label="Get a free estimate"
      >
        Get a Free Estimate
      </Link>
      <button
        className={`scroll-to-top ${visible ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        &#8679;
      </button>
    </>
  );
};

export default SiteWidgets;
