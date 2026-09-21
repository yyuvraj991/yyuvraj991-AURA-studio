import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Film, Clock, X, Volume2, VolumeX, Maximize } from 'lucide-react';
import { VideoItem } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface VideographySectionProps {
  videos: VideoItem[];
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const VideographySection: React.FC<VideographySectionProps> = ({
  videos,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [modalMuted, setModalMuted] = useState(false);

  return (
    <section
      id="videography"
      className="py-24 sm:py-36 bg-[#09090b] text-zinc-100 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Film className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('videography.badge')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('videography.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-editorial text-sm sm:text-base italic">
            {t('videography.subtitle')}
          </p>
        </div>

        {/* Cinematic Film List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {videos.map((video) => {
            const isHovered = hoveredVideoId === video.id;

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group flex flex-col"
                onMouseEnter={() => {
                  setHoveredVideoId(video.id);
                  onCursorChange('play', 'FILM');
                }}
                onMouseLeave={() => {
                  setHoveredVideoId(null);
                  onCursorChange('default');
                }}
              >
                {/* 1. VIDEO THUMBNAIL (with live hover preview if hovered) */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-black cursor-pointer shadow-2xl"
                >
                  {isHovered ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-105 transition-transform duration-700"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={video.posterUrl}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-sm bg-black/80 border border-zinc-700/80 text-[10px] font-semibold tracking-wider text-[#d4af37] uppercase">
                      {video.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-sm bg-black/80 border border-zinc-700/80 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Orb */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#d4af37] bg-black/60 backdrop-blur-md flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all shadow-xl">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* 2. TITLE */}
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3
                    onClick={() => setActiveVideo(video)}
                    className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-[#d4af37] transition-colors cursor-pointer"
                  >
                    {video.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 uppercase shrink-0">
                    {video.client}
                  </span>
                </div>

                {/* 3. SHORT DESCRIPTION */}
                <p className="mt-2 text-zinc-400 text-sm font-editorial leading-relaxed italic">
                  {video.description}
                </p>

                {/* Tag Pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 4. WATCH FILM BUTTON */}
                <div className="mt-5">
                  <button
                    id={`watch-film-btn-${video.id}`}
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37] hover:text-white transition-colors group/btn"
                    onMouseEnter={() => onCursorChange('button')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <span>{t('videography.watchFilm')}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Modal Video Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-widest text-[#d4af37] uppercase px-2 py-0.5 rounded bg-zinc-800">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-display font-bold uppercase text-white truncate">
                    {activeVideo.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setModalMuted(!modalMuted)}
                    className="p-2 rounded-full bg-zinc-800 hover:text-[#d4af37] text-zinc-300 transition-colors"
                    aria-label="Toggle Audio"
                  >
                    {modalMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
                  </button>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                    aria-label="Close Player"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  muted={modalMuted}
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Footer narrative */}
              <div className="p-6 bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-zinc-400 font-editorial italic max-w-xl">
                  {activeVideo.description} • {t('videography.clientLabel')}: <strong className="text-zinc-200">{activeVideo.client}</strong>
                </p>
                <a
                  href="#contact"
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 rounded bg-[#d4af37] hover:bg-[#e6c45e] text-black text-[11px] font-bold tracking-widest uppercase transition-colors shrink-0"
                >
                  {t('videography.commissionSimilar')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
