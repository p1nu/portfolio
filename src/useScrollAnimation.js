import { useEffect } from 'react';

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true // Set to false if you want animation to repeat
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class when element enters viewport
            entry.target.classList.add('visible');
            
            // If triggerOnce is true, stop observing this element
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else {
            // If we want repeatable animations, remove visible class when element leaves
            if (!triggerOnce) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );

    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );

    // Debug: log how many elements we found
    console.log('Found animated elements:', animatedElements.length);

    animatedElements.forEach((el) => {
      // Debug: log each element
      console.log('Observing:', el.className);
      observer.observe(el);
    });

    // Cleanup
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, triggerOnce]);
}