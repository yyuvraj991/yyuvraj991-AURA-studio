import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, MapPin, Sparkles } from 'lucide-react';
import { PhotoItem } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface PhotographySectionProps {
  photos: PhotoItem[];
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({
  photos,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filters = ['ALL', 'PHOTO', 'PORTRAIT', 'EVENT', 'EDITORIAL', 'COMMERCIAL'];

  const filteredPhotos = activeFilter === 'ALL'
    ? photos
    : photos.filter((p) => p.category.toUpperCase() === activeFilter.toUpperCase());

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setZoomLevel(1);
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setZoomLevel(1);
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => (prev === 1 ? 1.75 : prev === 1.75 ? 2.5 : 1));
  };

  return (
    <section
      id="photography"
      className="py-24 sm:py-36 bg-[#09090b] text-zinc-100 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('photography.badge')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('photography.heading')}
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {t(`photography.filters.${filter}`) || filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout (as required in PRD Section 7) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => {
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                onClick={() => {
                  setZoomLevel(1);
                  setLightboxIndex(index);
                }}
                className="break-inside-avoid group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 cursor-pointer shadow-lg"
                onMouseEnter={() => onCursorChange('view', 'INSPECT')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Hover Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#d4af37] mb-1">
                    {photo.category} • {photo.year}
                  </span>
                  <h4 className="text-lg font-display font-bold uppercase text-white mb-2">
                    {photo.title}
                  </h4>
                  <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    {photo.location}
                  </div>
                  <div className="mt-2 text-[10px] text-zinc-500 font-mono border-t border-zinc-800 pt-1.5 truncate">
                    {photo.cameraDetails}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox with Zoom & Keyboard Controls */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="w-full max-w-7xl flex items-center justify-between z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#d4af37]">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-xs font-display font-semibold tracking-widest uppercase text-zinc-300">
                  {filteredPhotos[lightboxIndex].title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  id="lightbox-zoom-btn"
                  onClick={toggleZoom}
                  className="p-2 rounded-full bg-zinc-800/80 hover:bg-[#d4af37] hover:text-black text-zinc-300 transition-colors"
                  title={t('photography.toggleZoom')}
                >
                  {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>
                <button
                  id="lightbox-close-btn"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label={t('photography.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Image Stage with Zoom */}
            <div
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center overflow-hidden my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].title}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-h-[75vh] max-w-full object-contain transition-transform duration-300 rounded shadow-2xl cursor-zoom-in"
                onClick={toggleZoom}
              />

              {/* Prev / Next arrows */}
              <button
                id="lightbox-prev-btn"
                onClick={prevPhoto}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-zinc-700/80 text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all backdrop-blur-md"
                aria-label={t('photography.previousPhoto')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                id="lightbox-next-btn"
                onClick={nextPhoto}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-zinc-700/80 text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all backdrop-blur-md"
                aria-label={t('photography.nextPhoto')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Meta Bar */}
            <div
              className="w-full max-w-3xl text-center border-t border-zinc-800/80 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 font-mono z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{filteredPhotos[lightboxIndex].cameraDetails}</span>
              <span className="text-[#d4af37] font-sans font-semibold">
                {filteredPhotos[lightboxIndex].location} • {filteredPhotos[lightboxIndex].year}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
