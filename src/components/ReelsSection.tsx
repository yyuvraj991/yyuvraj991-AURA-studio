import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Smartphone, Film, X, Volume2, VolumeX, Instagram, ExternalLink } from 'lucide-react';
import { ReelItem } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface ReelsSectionProps {
  reels: ReelItem[];
  onSelectEventSlug?: (slug: string) => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

const ReelCard: React.FC<{
  reel: ReelItem;
  onSelect: () => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}> = ({ reel, onSelect, onCursorChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(reel.videoUrl);

  useEffect(() => {
    setCurrentSrc(reel.videoUrl);
  }, [reel.videoUrl]);

  const handleVideoError = () => {
    if (reel.backupVideoUrl && currentSrc !== reel.backupVideoUrl) {
      setCurrentSrc(reel.backupVideoUrl);
    }
  };

  useEffect(() => {
    const startPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay will succeed when muted
        });
      }
    };
    startPlay();

    const el = videoRef.current;
    if (el) {
      el.addEventListener('loadedmetadata', startPlay);
      el.addEventListener('canplay', startPlay);
    }
    return () => {
      if (el) {
        el.removeEventListener('loadedmetadata', startPlay);
        el.removeEventListener('canplay', startPlay);
      }
    };
  }, [currentSrc]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onCursorChange('play', 'WATCH');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onCursorChange('default');
    // Keep playing continuously as requested by the user ("taki video chalte rahe")
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-[#d4af37]/60 relative group cursor-pointer bg-zinc-950 shadow-xl transition-all"
    >
      {/* Video & Poster Container - Continuous Live Playback */}
      <video
        ref={videoRef}
        src={currentSrc}
        poster={reel.posterUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleVideoError}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          isHovered ? 'scale-105 brightness-105' : 'scale-100 brightness-95'
        }`}
      />

      {/* Top Indicators: Live Badge & Instagram Link */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>LIVE REEL</span>
        </span>

        {reel.instagramUrl && (
          <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <Instagram className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      {/* Center Play Icon Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 rounded-full backdrop-blur-md border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] transition-all duration-300 shadow-2xl ${
            isHovered
              ? 'scale-110 bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.7)]'
              : 'bg-black/60 opacity-80 group-hover:opacity-100'
          }`}
        >
          <Play className="w-5 h-5 fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Bottom Title Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex flex-col justify-end p-4 z-10 pointer-events-none">
        <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase mb-1">
          9:16 CINEMATIC CUT
        </span>
        <h4 className="text-sm font-display font-bold text-white uppercase line-clamp-1 group-hover:text-[#d4af37] transition-colors">
          {reel.title}
        </h4>
        <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
          {reel.caption}
        </p>
      </div>
    </motion.div>
  );
};

export const ReelsSection: React.FC<ReelsSectionProps> = ({
  reels,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [modalVideoSrc, setModalVideoSrc] = useState<string>('');
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (activeReel) {
      setModalVideoSrc(activeReel.videoUrl);
    }
  }, [activeReel]);

  const handleModalVideoError = () => {
    if (activeReel?.backupVideoUrl && modalVideoSrc !== activeReel.backupVideoUrl) {
      setModalVideoSrc(activeReel.backupVideoUrl);
    }
  };

  useEffect(() => {
    if (activeReel && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current.play().catch(() => {
        setIsMuted(true);
        if (modalVideoRef.current) {
          modalVideoRef.current.muted = true;
          modalVideoRef.current.play().catch(() => {});
        }
      });
    }
  }, [activeReel]);

  return (
    <section
      id="reels"
      className="py-24 sm:py-32 bg-[#0c0c0f] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Smartphone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('reels.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('reels.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-editorial text-base sm:text-lg italic">
            “{t('reels.comingSoon')}”
          </p>
        </div>

        {/* If no real reels yet, show minimal section */}
        {reels.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
              <Film className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase block mb-2">
              9:16 VERTICAL CINEMA • EST. 2026
            </span>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mb-3">
              {t('reels.comingSoon')}
            </h3>

            <p className="text-sm text-zinc-400 font-sans max-w-md mx-auto leading-relaxed mb-8">
              {t('reels.comingSoonDesc')}
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span>Instagram & TikTok Reels in Production</span>
            </div>
          </motion.div>
        ) : (
          /* When real reels are available, display the reel gallery */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {reels.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                onSelect={() => setActiveReel(reel)}
                onCursorChange={onCursorChange}
              />
            ))}
          </div>
        )}
      </div>

      {/* Vertical Reel Video Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Close reel"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Actions: Sound Toggle + Optional Instagram Link */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {activeReel.instagramUrl && (
                  <a
                    href={activeReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg hover:opacity-95 transition-all hover:scale-105"
                    title="Open in Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                )}
              </div>

              {/* Video Element */}
              <video
                ref={modalVideoRef}
                src={modalVideoSrc || activeReel.videoUrl}
                poster={activeReel.posterUrl}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                onError={handleModalVideoError}
                className="w-full h-full object-cover"
              />

              {/* Reel Info Footer */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block mb-1">
                  STUDIO SHORT STORY • {activeReel.views} VIEWS
                </span>
                <h3 className="text-base font-display font-bold text-white uppercase">
                  {activeReel.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {activeReel.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
