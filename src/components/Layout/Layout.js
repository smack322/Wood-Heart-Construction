import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UtilityBar from '../UtilityBar/UtilityBar';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SiteWidgets from '../SiteWidgets/SiteWidgets';

const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on every route change (skip if hash present)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return (
    <>
      <UtilityBar />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SiteWidgets />
    </>
  );
};

export default Layout;
