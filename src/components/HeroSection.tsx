import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface HeroSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();

  const handleScrollTo = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Background Cinematic Hero Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          src="https://res.cloudinary.com/dsfl20cs1/image/upload/v1789970842/ChatGPT_Image_Sep_21_2026_11_35_31_AM.png"
          alt="Aura Cinematics Heritage"
          className="w-full h-full object-cover opacity-70 transition-opacity duration-1000"
        />

        {/* Film Vignette & Multi-Tone Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.75)_100%)]" />
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Studio Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-black/60 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#fef08a] font-medium">
            {t('hero.emblem')}
          </span>
        </motion.div>

        {/* Primary Headline: YOUR MOMENTS. OUR VISION. */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-tight uppercase max-w-4xl"
        >
          <span className="block text-zinc-100 drop-shadow-md">
            {t('hero.headlinePart1')}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#b48c1e]">
            {t('hero.headlinePart2')}
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-base sm:text-xl text-zinc-200 font-editorial font-light tracking-wide leading-relaxed italic"
        >
          “{t('hero.subtitle')}”
        </motion.p>

        {/* CTAs: "LET'S CREATE" and "EXPLORE" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <a
            id="hero-create-cta"
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#d4af37] text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#e6c45e] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2"
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
          >
            <span>{t('hero.ctaCreate')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="hero-explore-cta"
            href="#reels"
            onClick={(e) => handleScrollTo(e, 'reels')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-black/60 border border-zinc-700 text-zinc-200 font-semibold text-xs tracking-[0.2em] uppercase hover:border-[#d4af37] hover:text-white backdrop-blur-md transition-all duration-300 text-center"
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
          >
            {t('hero.ctaExplore')}
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <a
          href="#reels"
          onClick={(e) => handleScrollTo(e, 'reels')}
          className="text-zinc-500 hover:text-[#d4af37] transition-colors p-2"
          aria-label={t('hero.ctaExplore')}
          onMouseEnter={() => onCursorChange('button')}
          onMouseLeave={() => onCursorChange('default')}
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
