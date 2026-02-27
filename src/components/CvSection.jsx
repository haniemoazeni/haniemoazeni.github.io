export function CvSection() {
  return (
    <section id="cv" className="mx-auto max-w-6xl px-6 py-16 md:py-24 reveal" data-reveal>
      <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--warm-ink)' }}>CV</h2>
      <div className="mt-8 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-4" style={{ color: 'var(--warm-body)' }}>
          <p>B.Arch - Shahid Beheshti University (2019 - 2024)</p>
          <p>Teaching Assistant - Digital Fabrication Lab (2023 - 2025)</p>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-2xl border p-6" style={{ borderColor: 'var(--warm-border)' }}>
            <h3 className="font-semibold" style={{ color: 'var(--warm-ink)' }}>Download</h3>
            <a href="/assets/Hanie Moazeni_CV_design.pdf" download className="mt-2 inline-flex items-center rounded-xl bg-slate-900 text-white px-3 py-2 shadow-soft">CV (PDF)</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
