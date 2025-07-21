
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Remove visible class when element goes out of view (for re-triggering)
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    const observeElements = () => {
      // Clear any existing observations
      observer.disconnect();
      
      // Find all elements that should have scroll animations
      const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
      
      // Reset all elements to initial state and add staggered delays
      scrollElements.forEach((el, index) => {
        el.classList.remove('visible');
        
        // Add staggered delay based on order in DOM
        const delay = Math.floor(index / 3) * 0.1; // Group every 3 elements
        (el).style.transitionDelay = `${delay}s`;
        
        observer.observe(el);
      });
    };

    // Initial observation after DOM is ready
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);
};
