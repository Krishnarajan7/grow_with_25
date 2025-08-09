import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add stagger animation for child elements
          const children = entry.target.querySelectorAll('.stagger-children > *');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    const observeElements = () => {
      // Find all elements that should have scroll animations
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-up'
      );
      
      scrollElements.forEach((el) => {
        // Only add observer if element doesn't already have visible class
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });

      // Add parallax effect to hero sections
      const heroElements = document.querySelectorAll('.hero-parallax');
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        heroElements.forEach((el) => {
          const rate = scrolled * -0.5;
          (el).style.transform = `translateY(${rate}px)`;
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Delay to ensure DOM is ready
    const timeoutId = setTimeout(observeElements, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);
};