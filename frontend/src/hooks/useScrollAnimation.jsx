import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const observeElements = () => {
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
      );
      scrollElements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);
};
