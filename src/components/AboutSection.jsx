const highlights = [
  'Winner, Faculty Wall Design Competition (2021)',
  'Active Member, Faculty of Architecture Student Association (2021-2023)',
  'Organizer, Negahman Exhibition (2021)',
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24 reveal" data-reveal>
      <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] font-body font-medium" style={{ color: 'var(--tc)' }}>Profile</p>
      <h2 className="font-display text-4xl md:text-5xl font-light leading-none" style={{ color: 'var(--warm-ink)' }}>About Me</h2>
      <div className="mt-8 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-4 text-base leading-relaxed" style={{ color: 'var(--warm-body)' }}>
          <p>I am Hanie, an architecture graduate passionate about interdisciplinary design and human-centered spaces.</p>
          <p>Software: Rhino / Grasshopper, Revit, AutoCAD, SketchUp, V-Ray, Enscape, Adobe Suite, QGIS.</p>
          <p>Languages: Persian (native), English (fluent).</p>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-2xl border p-6 shadow-sm" style={{ borderColor: 'var(--warm-border)', backgroundColor: 'var(--warm-linen)' }}>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--warm-ink)' }}>Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm list-disc list-inside" style={{ color: 'var(--warm-body)' }}>
              {highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
