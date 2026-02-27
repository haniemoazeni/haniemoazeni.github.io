const SKILLS = [
  { title: 'Modeling and BIM', items: ['Rhino / Grasshopper', 'Revit', 'AutoCAD', 'SketchUp'] },
  { title: 'Visualization', items: ['V-Ray / Enscape', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'] },
  { title: 'Analysis and Research', items: ['Environmental studies', 'QGIS', 'Physical prototyping', 'Fabrication'] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 reveal" data-reveal style={{ backgroundColor: 'var(--warm-paper)' }}>
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] font-body font-medium" style={{ color: 'var(--tc)' }}>Expertise</p>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-none" style={{ color: 'var(--warm-ink)' }}>Skills and Tools</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger" data-reveal>
          {SKILLS.map((col) => (
            <div key={col.title} className="skill-card rounded-2xl p-7" style={{ backgroundColor: 'var(--warm-linen)', border: '1px solid var(--warm-border)' }}>
              <h3 className="font-display text-xl font-medium mb-4" style={{ color: 'var(--warm-ink)' }}>{col.title}</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--warm-body)' }}>
                {col.items.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
