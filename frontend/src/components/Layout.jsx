import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Layout = ({ children }) => {
  useScrollAnimation(); // ✅ Correct: call custom hook at top level

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
