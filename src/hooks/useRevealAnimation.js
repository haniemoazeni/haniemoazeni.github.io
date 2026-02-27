import { useEffect } from 'react';

export function useRevealAnimation() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
