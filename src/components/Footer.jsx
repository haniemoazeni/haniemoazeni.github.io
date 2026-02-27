export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm" style={{ color: 'var(--warm-muted)' }}>
      <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--warm-border)' }}>
        <p>Copyright {currentYear} Hanie Moazeni. All rights reserved.</p>
        <a className="underline" href="mailto:moazeni.hanie@gmail.com">moazeni.hanie@gmail.com</a>
      </div>
    </footer>
  );
}
