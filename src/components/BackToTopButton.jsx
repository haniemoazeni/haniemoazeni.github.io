import { useEffect, useState } from 'react';

const CIRCUMFERENCE = 2 * Math.PI * 23;

export function BackToTopButton() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0;
      setProgress(ratio);
      setVisible(scrollY > 200);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      id="backToTopNew"
      type="button"
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-white/50 dark:border-slate-700/70 bg-white/65 dark:bg-slate-900/65 backdrop-blur-xl shadow-soft transition-all duration-300 hover:scale-[1.06]"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg className="block" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="23" stroke="currentColor" opacity="0.14" strokeWidth="2.5" />
        <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-90 30 30)" style={{ strokeDasharray: CIRCUMFERENCE, strokeDashoffset: CIRCUMFERENCE - CIRCUMFERENCE * progress }} />
        <path d="M30 21l0 18M30 21l-7 7M30 21l7 7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
