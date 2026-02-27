import { useEffect, useMemo, useState } from 'react';
import { projects } from '../data/projects.js';
import { FALLBACK_IMAGE } from '../constants.js';
import { ProjectModal } from './ProjectModal.jsx';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'academic', label: 'Academic' },
  { value: 'professional', label: 'Professional' },
  { value: 'competition', label: 'Competition' },
  { value: 'research', label: 'Research' },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (activeFilter === 'all') url.searchParams.delete('type');
    else url.searchParams.set('type', activeFilter);
    window.history.replaceState({}, '', url);
  }, [activeFilter]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.typology === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-24 reveal rounded-3xl border" data-reveal style={{ backgroundColor: 'var(--warm-linen)', borderColor: 'var(--warm-border)' }}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-[0.65rem] uppercase font-body font-medium mb-3 tracking-[0.18em]" style={{ color: 'var(--tc)' }}>Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-none" style={{ color: 'var(--warm-ink)' }}>Selected Work</h2>
        </div>
        <div className="no-print flex flex-wrap gap-2 shrink-0">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button key={f.value} type="button" onClick={() => setActiveFilter(f.value)} className={`filter-pill rounded-full px-4 py-1.5 text-xs font-body font-medium ${isActive ? 'active' : ''}`}>
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div id="projectsGrid" className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} index={index} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function ProjectCard({ project, onSelect, index }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article
      className="group rounded-2xl overflow-hidden card-hover cursor-pointer"
      style={{ backgroundColor: 'var(--warm-paper)', border: '1px solid var(--warm-border)', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)', transition: `opacity .6s ease ${index * 0.07}s, transform .6s ease ${index * 0.07}s` }}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(); } }}
    >
      <div className="aspect-[4/3] overflow-hidden relative" style={{ backgroundColor: 'var(--warm-paper)' }}>
        <img src={project.thumb} alt={project.title} className="h-full w-full object-cover" loading={index < 2 ? 'eager' : 'lazy'} onLoad={() => setLoaded(true)} onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; setLoaded(true); }} />
        <span className="absolute top-3 right-3 rounded-full px-2.5 py-1 text-[0.6rem] uppercase font-body font-medium border border-[#d9cec1] bg-[rgba(245,240,235,0.88)] text-[#2e2420] dark:border-slate-600 dark:bg-[rgba(31,45,61,0.88)] dark:text-slate-100">{project.typology}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-medium leading-tight" style={{ color: 'var(--warm-ink)' }}>{project.title}</h3>
        <p className="mt-1.5 text-xs" style={{ color: 'var(--warm-muted)' }}>{project.location} | {project.year}</p>
        <p className="mt-3 text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--warm-body)' }}>{project.summary}</p>
      </div>
    </article>
  );
}
