
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation();

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
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const observeElements = () => {
      // Clear any existing observations
      observer.disconnect();
      
      // Find all elements that should have scroll animations
      const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
      
      // Reset all elements to initial state
      scrollElements.forEach((el) => {
        el.classList.remove('visible');
        observer.observe(el);
      });
    };

    // Initial observation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(observeElements, 150);

    // Re-observe when route changes
    const routeChangeTimeout = setTimeout(observeElements, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(routeChangeTimeout);
    };
  }, [location.pathname]); // Re-run when route changes
};
