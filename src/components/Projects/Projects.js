import React, { useState, useEffect, useCallback } from 'react';
import './projects.css';
import _projRaw from '../../content/projects.json';
const projectsData = _projRaw.list;

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior-residential', label: 'Interior Residential' },
  { id: 'exterior-residential', label: 'Exterior Residential' },
  { id: 'interior-commercial', label: 'Interior Commercial' },
  { id: 'exterior-commercial', label: 'Exterior Commercial' },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { photos, index, title }

  const filtered =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const openLightbox = (project, startIndex = 0) => {
    setLightbox({ photos: project.photos, index: startIndex, title: project.title });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const prev = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length }));
  }, []);

  const next = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.photos.length }));
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <span className="section-label-dark">OUR PORTFOLIO</span>
        <h2>Featured Projects</h2>
      </div>

      {/* Filter pills */}
      <div className="projects__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`projects__filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="projects__grid">
        {filtered.length === 0 ? (
          <p className="projects__empty">No projects in this category yet. Check back soon!</p>
        ) : (
          filtered.map((project) => (
            <div
              key={project.id}
              className="project-thumb"
              onClick={() => openLightbox(project, 0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(project, 0)}
              aria-label={`Open ${project.title} gallery`}
            >
              <img
                src={project.photos[0]}
                alt={project.title}
                loading="lazy"
              />
              <div className="project-thumb__overlay">
                <span className="project-thumb__title">{project.title}</span>
                {project.photos.length > 1 && (
                  <span className="project-thumb__count">{project.photos.length} photos</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="lightbox__img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.photos[lightbox.index]}
              alt={`${lightbox.title} — ${lightbox.index + 1} of ${lightbox.photos.length}`}
            />
            <div className="lightbox__caption">
              <span className="lightbox__caption-title">{lightbox.title}</span>
              <span className="lightbox__caption-count">{lightbox.index + 1} / {lightbox.photos.length}</span>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Thumbnail strip */}
          {lightbox.photos.length > 1 && (
            <div className="lightbox__thumbs" onClick={(e) => e.stopPropagation()}>
              {lightbox.photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`thumb ${i + 1}`}
                  className={`lightbox__thumb ${i === lightbox.index ? 'active' : ''}`}
                  onClick={() => setLightbox((lb) => ({ ...lb, index: i }))}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
