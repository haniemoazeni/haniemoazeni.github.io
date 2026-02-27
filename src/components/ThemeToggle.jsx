export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button id="themeToggle" type="button" aria-label="Toggle dark mode" aria-pressed={isDark} onClick={onToggle}>
      <span className="toggle-track" aria-hidden="true"><span className="toggle-knob" /></span>
      <span>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
