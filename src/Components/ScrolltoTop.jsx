import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnPageChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTopOnPageChange;
