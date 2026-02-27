import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.6, rootMargin: '0px 0px -35% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
