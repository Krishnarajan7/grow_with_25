import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageLoader from './PageLoader';
import ScrollToTop from './ScrollToTop';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useScrollAnimation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <PageLoader />}
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;