import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-in-out ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToTop}
        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 over:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 group border-0"
        size="icon"
      >
        <ChevronUp className="w-5 h-5 text-white group-hover:animate-bounce transition-transform duration-300" />
        <span className="sr-only">Scroll to top</span>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-orange-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500"></div>
        
        {/* Pulse ring effect */}
        <div className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
      </Button>
    </div>
  );
};

export default ScrollToTop;
