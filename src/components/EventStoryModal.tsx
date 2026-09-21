import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Film, Camera, Users, Sparkles, Play, ArrowRight, Check } from 'lucide-react';
import { Project } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface EventStoryModalProps {
  project: Project | null;
  onClose: () => void;
  onBookSimilar: (category: string, title: string) => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const EventStoryModal: React.FC<EventStoryModalProps> = ({
  project,
  onClose,
  onBookSimilar,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isPlayingHighlight, setIsPlayingHighlight] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="event-story-overlay"
        className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex flex-col items-center justify-start p-0 sm:p-4 md:p-6"
      >
        {/* Floating Close Button */}
        <button
          id="close-event-story-btn"
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#d4af37] transition-all shadow-2xl group"
          onMouseEnter={() => onCursorChange('button')}
          onMouseLeave={() => onCursorChange('default')}
          aria-label="Close Project Story"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Modal Container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-5xl bg-[#0d0d10] border border-zinc-800 rounded-none sm:rounded-xl overflow-hidden my-auto shadow-2xl relative text-zinc-200 pb-16"
        >
          {/* Hero Banner with Cover Image / Video Highlight */}
          <div className="relative w-full h-[45vh] sm:h-[55vh] min-h-[380px] overflow-hidden">
            {isPlayingHighlight ? (
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={project.highlightVideoUrl} type="video/mp4" />
              </video>
            ) : (
              <>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-black/40 to-black/60" />
                
                {/* Play Highlight Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    id="play-story-highlight-btn"
                    onClick={() => setIsPlayingHighlight(true)}
                    className="px-6 py-3 rounded-full bg-black/60 border border-[#d4af37] backdrop-blur-md text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    onMouseEnter={() => onCursorChange('play')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">
                      {t('eventStory.watchHighlight')}
                    </span>
                  </button>
                </div>
              </>
            )}

            {/* Top Metadata Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-sm bg-black/70 border border-zinc-700 text-[10px] font-semibold tracking-widest uppercase text-[#d4af37]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-sm bg-black/70 border border-zinc-700 text-[10px] tracking-wider text-zinc-300 font-mono">
                /event/{project.slug}
              </span>
            </div>
          </div>

          {/* Title & Core Details Header */}
          <div className="px-6 sm:px-12 -mt-12 relative z-10">
            <div className="bg-[#121216] border border-zinc-800 rounded-lg p-6 sm:p-8 shadow-xl">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-400 font-medium mb-3">
                <span className="flex items-center gap-1.5 text-[#d4af37]">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-2">
                {project.title}
              </h1>
              <p className="text-zinc-400 font-editorial text-lg italic mb-6">
                {project.subtitle}
              </p>

              <div className="border-t border-zinc-800/80 pt-6">
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#d4af37] mb-2">
                  {t('eventStory.storyNarrative')}
                </h3>
                <p className="text-zinc-300 leading-relaxed font-body text-sm sm:text-base mb-4">
                  {project.shortStory}
                </p>
                <p className="text-zinc-400 leading-relaxed font-body text-sm sm:text-base">
                  {project.fullStory}
                </p>
              </div>
            </div>
          </div>

          {/* Best Photographs Section */}
          <div className="px-6 sm:px-12 mt-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#d4af37]" />
                <h3 className="text-sm sm:text-base font-display font-bold tracking-[0.18em] uppercase text-white">
                  {t('eventStory.bestPhotographs', { count: project.bestPhotos.length })}
                </h3>
              </div>
              <span className="text-[11px] text-zinc-500 italic">{t('eventStory.inspectHighRes')}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.bestPhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPhoto(photo)}
                  className="aspect-[4/3] rounded overflow-hidden border border-zinc-800/80 bg-zinc-900 group cursor-pointer relative"
                  onMouseEnter={() => onCursorChange('view')}
                  onMouseLeave={() => onCursorChange('default')}
                >
                  <img
                    src={photo}
                    alt={`${project.title} still ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-black/70 text-white text-[10px] tracking-widest font-semibold uppercase rounded">
                      {t('eventStory.viewStill')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Behind the Scenes & Team Involved */}
          <div className="px-6 sm:px-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BTS Stills */}
            <div>
              <h3 className="text-sm font-display font-bold tracking-[0.18em] uppercase text-white mb-4 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#d4af37]" />
                {t('eventStory.bts')}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.btsPhotos.map((bts, idx) => (
                  <div key={idx} className="aspect-video rounded overflow-hidden border border-zinc-800">
                    <img src={bts} alt="Behind the camera" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-400 mt-3 font-editorial italic">
                {t('eventStory.btsDesc')}
              </p>
            </div>

            {/* Crew & Artists */}
            <div>
              <h3 className="text-sm font-display font-bold tracking-[0.18em] uppercase text-white mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#d4af37]" />
                {t('eventStory.crewTitle')}
              </h3>
              <div className="bg-[#121216] border border-zinc-800 rounded p-4 divide-y divide-zinc-800/60">
                {project.team.map((member, idx) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{member.role}</span>
                    <span className="text-zinc-100 font-semibold">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Book Similar Coverage Banner */}
          <div className="px-6 sm:px-12 mt-14">
            <div className="p-8 rounded-lg bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-amber-950/20 border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#d4af37] block mb-1">
                  {t('eventStory.readyToCraft')}
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
                  {t('eventStory.bookSimilar')}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-md">
                  {t('eventStory.bookSimilarDesc')}
                </p>
              </div>

              <button
                id="book-similar-btn"
                onClick={() => {
                  onClose();
                  onBookSimilar(project.category, project.title);
                }}
                className="px-6 py-3 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] text-black font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-lg flex items-center gap-2 shrink-0"
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <span>{t('eventStory.reserveDates')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.article>

        {/* High-res Image Zoom Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-white"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Enlarged gallery still"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded shadow-2xl"
            />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
