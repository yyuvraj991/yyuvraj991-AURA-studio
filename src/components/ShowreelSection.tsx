import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Film } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface ShowreelSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('01:00');
  const [showControls, setShowControls] = useState(true);

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 60;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
      setDuration(formatTime(total));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(err => console.error(err));
      } else {
        document.exitFullscreen().catch(err => console.error(err));
      }
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="showreel"
      className="relative py-24 sm:py-32 bg-[#09090b] border-t border-zinc-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                {t('showreel.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
              {t('showreel.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm sm:text-base font-editorial italic">
            {t('showreel.subtitle')}
          </p>
        </div>

        {/* Video Player Container */}
        <div
          ref={containerRef}
          id="showreel-player-container"
          onClick={togglePlay}
          onMouseEnter={() => {
            setShowControls(true);
            onCursorChange(isPlaying ? 'play' : 'play', isPlaying ? 'PAUSE' : 'PLAY');
          }}
          onMouseLeave={() => {
            onCursorChange('default');
          }}
          className="relative aspect-video sm:aspect-[21/9] w-full rounded-lg overflow-hidden border border-zinc-800 bg-black group cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play/Pause Pulsing Icon if paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#d4af37]/70 bg-black/60 backdrop-blur-md flex items-center justify-center text-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.4)] transform transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#d4af37] translate-x-1" />
              </div>
            </div>
          )}

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="px-3 py-1 rounded bg-black/70 border border-zinc-800/80 backdrop-blur-md text-[10px] tracking-widest uppercase text-zinc-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              {t('showreel.formatTag')}
            </div>
            <div className="px-3 py-1 rounded bg-black/70 border border-zinc-800/80 backdrop-blur-md text-[10px] tracking-widest text-[#d4af37] font-mono">
              {currentTime} / {duration}
            </div>
          </div>

          {/* Bottom Interactive Control Deck */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Scrubber Progress Bar */}
            <div
              id="showreel-scrubber-bar"
              onClick={handleSeek}
              className="w-full h-1.5 bg-zinc-800 hover:h-2.5 rounded-full mb-4 cursor-pointer relative overflow-hidden transition-all group/scrub"
            >
              <div
                className="h-full bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-200 transition-all duration-75 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover/scrub:opacity-100 shadow" />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  id="showreel-play-pause-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  id="showreel-restart-btn"
                  onClick={handleRestart}
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Restart Video"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  id="showreel-sound-btn"
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
                </button>

                <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                  {currentTime} <span className="text-zinc-600">/</span> {duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 hidden md:inline-block">
                  {t('showreel.directedBy')}
                </span>
                <button
                  id="showreel-fullscreen-btn"
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Narrative Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-900/90 text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>{t('showreel.optics')}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>{t('showreel.colorGrain')}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>{t('showreel.soundAudio')}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>{t('showreel.candidFilming')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
