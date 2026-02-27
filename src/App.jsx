import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar.jsx';
import { Hero } from './components/Hero.jsx';
import { ProjectsSection } from './components/ProjectsSection.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { SkillsSection } from './components/SkillsSection.jsx';
import { CvSection } from './components/CvSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTopButton } from './components/BackToTopButton.jsx';
import { SkipLink } from './components/SkipLink.jsx';
import { GradientBackdrop } from './components/GradientBackdrop.jsx';
import { useRevealAnimation } from './hooks/useRevealAnimation.js';
import { useScrollSpy } from './hooks/useScrollSpy.js';

const sections = ['home', 'work', 'about', 'skills', 'cv', 'contact'];

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useRevealAnimation();
  const activeSection = useScrollSpy(sections);

  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="font-body min-h-screen">
      <SkipLink />
      <GradientBackdrop />
      <NavBar
        activeSection={activeSection}
        isDark={theme === 'dark'}
        onThemeToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
