import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/siteContent';
import { SmartImage } from './SmartImage';

type FilterCategory = 'Todos' | GalleryItem['category'];

const FILTER_OPTIONS: FilterCategory[] = [
  'Todos',
  'Ferrocemento',
  'Geomembrana',
  'Campo y Tilapia',
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const activePhoto =
    selectedIndex !== null ? filteredItems[selectedIndex] ?? null : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length,
        );
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category);
    setSelectedIndex(null);
  };

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 bg-[#F8FAFC] py-20 text-[#0D0D0D] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0D9488]">
              Galería de proyectos
            </p>
            <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-[#0D0D0D] sm:text-4xl">
              Obras, estanques y producción en el campo paraguayo
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Explore referencias de nuestras soluciones en ferrocemento,
              impermeabilización con geomembrana y acompañamiento en campo.
            </p>
          </div>

          {/* Controles interactivos de filtro */}
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-neutral-200 bg-white p-1.5 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleFilterChange(category)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D] ${
                    isActive
                      ? 'bg-[#0D0D0D] text-[#FFB800]'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-[#0D0D0D]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de fotos */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Ampliar imagen: ${item.title}`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-neutral-900 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
              >
                <SmartImage
                  src={item.imageUrl}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0D0D0D]/75 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
                >
                  <Expand className="h-4 w-4" />
                </span>
              </button>

              <figcaption className="p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                  <span className="text-[#0D9488]">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="mt-1.5 font-display text-lg font-extrabold text-[#0D0D0D]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  {item.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Lightbox accesible */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#161616] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <SmartImage
                src={activePhoto.imageUrl}
                alt={activePhoto.alt}
                fallbackLabel={activePhoto.title}
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Cerrar vista ampliada"
                className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D0D0D]/80 text-white transition-colors hover:bg-[#FFB800] hover:text-[#0D0D0D] focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + filteredItems.length) %
                          filteredItems.length,
                      )
                    }
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-[#0D0D0D]/80 text-white transition-colors hover:bg-[#FFB800] hover:text-[#0D0D0D]"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex + 1) % filteredItems.length,
                      )
                    }
                    aria-label="Foto siguiente"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-[#0D0D0D]/80 text-white transition-colors hover:bg-[#FFB800] hover:text-[#0D0D0D]"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col justify-between gap-2 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-medium text-[#2DD4BF]">
                  {activePhoto.category} · {activePhoto.location}
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-white">
                  {activePhoto.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">
                  {activePhoto.caption}
                </p>
              </div>
              <p className="text-xs font-semibold text-neutral-400 tabular-nums shrink-0">
                {selectedIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
