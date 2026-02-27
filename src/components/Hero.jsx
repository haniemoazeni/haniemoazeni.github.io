export function Hero() {
  return (
    <header id="home" className="relative overflow-hidden" style={{ backgroundColor: 'var(--warm-linen)' }}>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-7 reveal-left" data-reveal>
            <p className="inline-flex items-center gap-2 text-[0.68rem] uppercase font-body font-medium tracking-[0.18em]" style={{ color: 'var(--warm-muted)' }}>
              B.Arch | Architecture and Spatial Design
            </p>
            <h1 className="mt-5 font-display leading-none">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light" style={{ color: 'var(--warm-ink)' }}>Hanie</span>
              <span className="block font-medium italic" style={{ color: 'var(--tc)', fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>Moazeni</span>
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed max-w-[38rem]" style={{ color: 'var(--warm-body)' }}>
              Recent B.Arch graduate with a strong interest in interdisciplinary collaboration, using computational tools and
              creative craft to design culturally grounded, human-centered spaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 no-print">
              <a href="#work" className="btn-primary inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium">View Selected Work</a>
              <a href="mailto:moazeni.hanie@gmail.com" className="btn-secondary inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium">Email me</a>
              <a href="/assets/Hanie Moazeni_CV_design.pdf" download className="btn-secondary inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium">Download CV</a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end reveal-right" data-reveal>
            <img src="/assets/images/portrait-desktop.png" alt="Portrait of Hanie Moazeni" className="block w-full max-w-sm h-auto object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
}
