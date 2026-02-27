import { ThemeToggle } from './ThemeToggle.jsx';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#cv', label: 'CV' },
  { href: '#contact', label: 'Contact' },
];

export function NavBar({ activeSection, isDark, onThemeToggle }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--warm-border)]/70 bg-[color:var(--warm-paper)]/78 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
        <a href="#home" className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: 'var(--warm-ink)' }}>
          Hanie Moazeni
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={activeSection === link.href.replace('#', '') ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
}
