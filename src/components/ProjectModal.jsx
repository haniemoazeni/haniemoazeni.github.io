import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FALLBACK_IMAGE } from '../constants.js';

export function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
    setIsClosing(false);
  }, [project]);

  const images = useMemo(() => {
    if (!project?.images?.length) return [];
    return project.images.map((img) => (typeof img === 'string' ? { src: img, caption: '' } : img));
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(onClose, 220);
  };

  return createPortal(
    <div
      id="modal"
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      onPointerDown={(event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) handleClose();
      }}
    >
      <div className="w-full flex justify-center">
        <div ref={panelRef} className="relative max-w-4xl w-full rounded-3xl bg-white dark:bg-slate-900 shadow-soft my-6 border border-slate-200/70 dark:border-slate-800/70 overflow-hidden">
          <button type="button" onClick={handleClose} className="absolute right-3 top-3 z-20 rounded-full border border-slate-300/80 dark:border-slate-700/80 px-3 py-1.5 text-xs bg-white/90 dark:bg-slate-900/90">Close</button>
          <div className="p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{project.summary}</p>
            <div className="relative mt-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <img src={images[activeIndex]?.src ?? project.thumb} alt={images[activeIndex]?.caption ?? project.title} className="w-full h-auto" onError={(e) => { e.currentTarget.src = FALLBACK_IMAGE; }} />
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex justify-center gap-2">
                  <button type="button" className="px-2 py-1 border rounded" onClick={() => setActiveIndex((p) => (p - 1 + images.length) % images.length)}>&lt;</button>
                  <button type="button" className="px-2 py-1 border rounded" onClick={() => setActiveIndex((p) => (p + 1) % images.length)}>&gt;</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
