const socialLinks = [
  { href: 'https://www.linkedin.com/in/hanie-moazeni-0727b424a', label: 'LinkedIn' },
  { href: 'https://github.com/haniemoazeni', label: 'GitHub' },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24 reveal" data-reveal>
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] font-body font-medium" style={{ color: 'var(--tc)' }}>Contact</p>
      <h2 className="font-display text-4xl md:text-5xl font-light leading-none" style={{ color: 'var(--warm-ink)' }}>Lets Connect</h2>
      <div className="mt-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-3" style={{ color: 'var(--warm-body)' }}>
          <p>For admissions and portfolio review, email me or connect below.</p>
          <p>Email: <a className="underline" href="mailto:moazeni.hanie@gmail.com">moazeni.hanie@gmail.com</a></p>
        </div>
        <div className="md:col-span-5 no-print flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn-secondary rounded-xl px-4 py-2 text-sm font-medium">{link.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
