import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [hash]);

  return <Services />;
};

export default ServicesPage;
