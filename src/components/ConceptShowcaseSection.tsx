import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Play, X, Sparkles, Film, Camera, Youtube, ExternalLink } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';
import { ConceptItem } from '../types';

interface ConceptShowcaseSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

const getYoutubeId = (url?: string): string => {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : '';
};

export const ConceptShowcaseSection: React.FC<ConceptShowcaseSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<ConceptItem | null>(null);

  const conceptItems: ConceptItem[] = [
    {
      id: 'showcase-portrait',
      title: t('conceptShowcase.items.portrait'),
      subtitle: t('conceptShowcase.items.portraitSubtitle'),
      category: 'Cinematic Reel',
      mediaType: 'video',
      mediaUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1789971876/0921.mp4',
      youtubeUrl: 'https://youtu.be/JNd1rt0AYP8?si=vGMeMwsLii78xI-e',
      aspect: 'tall',
      description: t('conceptShowcase.items.portraitDesc'),
    },
    {
      id: 'showcase-event',
      title: t('conceptShowcase.items.eventMoments'),
      subtitle: t('conceptShowcase.items.eventMomentsSubtitle'),
      category: 'Festive Music Video',
      mediaType: 'video',
      mediaUrl: 'https://i.ytimg.com/vi/ioX_Jt5mxPM/maxresdefault.jpg',
      youtubeUrl: 'https://youtu.be/ioX_Jt5mxPM?si=v2OMAjda65At5BM1',
      aspect: 'wide',
      description: t('conceptShowcase.items.eventMomentsDesc'),
    },
    {
      id: 'showcase-emotion',
      title: t('conceptShowcase.items.emotionalMoments'),
      subtitle: t('conceptShowcase.items.emotionalMomentsSubtitle'),
      category: 'Emotion & Connection',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      aspect: 'square',
      description: t('conceptShowcase.items.emotionalMomentsDesc'),
    },
  ];

  return (
    <section
      id="concept-showcase"
      className="py-24 sm:py-36 bg-[#08080a] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                {t('conceptShowcase.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
              {t('conceptShowcase.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm sm:text-base font-editorial italic">
            {t('conceptShowcase.subtitle')}
          </p>
        </div>

        {/* 6 Visual Craft & Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conceptItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-xl border border-zinc-800/80 bg-black overflow-hidden aspect-[4/3] cursor-pointer shadow-xl hover:border-[#d4af37] transition-all duration-500"
                onMouseEnter={() =>
                  onCursorChange(item.mediaType === 'video' ? 'play' : 'view', item.mediaType === 'video' ? 'WATCH' : 'VIEW')
                }
                onMouseLeave={() => onCursorChange('default')}
              >
                {/* Media Image / Video Poster */}
                {item.mediaType === 'video' && item.mediaUrl.endsWith('.mp4') ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    >
                      <source src={item.mediaUrl} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-black/60 border border-[#d4af37] text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-5 h-5 fill-[#d4af37] translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      onError={(e) => {
                        if (item.id === 'showcase-event') {
                          (e.currentTarget as HTMLImageElement).src = '/showcase/mera-raja-khamhariya.jpg';
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {(item.youtubeUrl || item.mediaType === 'video') && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-black/70 border border-[#d4af37] text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-5 h-5 fill-[#d4af37] translate-x-0.5" />
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Film Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold tracking-widest uppercase bg-black/80 border border-[#d4af37]/60 text-[#d4af37]">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-300 bg-black/70 px-2 py-0.5 rounded border border-zinc-800">
                    {item.youtubeUrl ? 'YOUTUBE FILM' : item.mediaType === 'video' ? 'CINEMA CLIP' : 'STILL FRAME'}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <h3 className="text-lg font-display font-bold uppercase text-white mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans line-clamp-1">
                    {item.description}
                  </p>
                  {item.youtubeUrl && (
                    <div className="mt-2 pointer-events-auto">
                      <a
                        href={item.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-600/80 hover:bg-red-600 text-white text-[11px] font-mono tracking-wide transition-colors shadow-lg backdrop-blur-sm"
                      >
                        <Youtube className="w-3.5 h-3.5 fill-current" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Video Preview Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveItem(null)}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:border-[#d4af37] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#111115] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {activeItem.youtubeUrl ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${getYoutubeId(activeItem.youtubeUrl)}?autoplay=1&rel=0`}
                    title={activeItem.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : activeItem.mediaType === 'video' ? (
                  <video controls autoPlay playsInline className="w-full h-full object-cover">
                    <source src={activeItem.mediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={activeItem.mediaUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black border border-[#d4af37] text-[#d4af37]">
                      {activeItem.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {activeItem.youtubeUrl ? 'YOUTUBE CINEMA' : activeItem.mediaType === 'video' ? 'CINEMATIC VIDEO' : 'STILL PHOTOGRAPHY'}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans mt-2 max-w-xl">
                    {activeItem.description}
                  </p>
                  {activeItem.youtubeUrl && (
                    <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
                      <a
                        href={activeItem.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-medium tracking-wide transition-all shadow-lg hover:shadow-red-600/30"
                      >
                        <Youtube className="w-4 h-4 fill-current" />
                        <span>Watch on YouTube</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>
                      <a
                        href={activeItem.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-[#d4af37] underline decoration-zinc-700 hover:decoration-[#d4af37] underline-offset-4 transition-colors break-all"
                      >
                        {activeItem.youtubeUrl}
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  onClick={() => setActiveItem(null)}
                  className="px-6 py-3 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] text-black font-semibold text-xs tracking-widest uppercase transition-all shrink-0 text-center"
                >
                  {t('conceptShowcase.enquireThisStyle')}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
