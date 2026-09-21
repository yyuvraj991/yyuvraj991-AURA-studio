import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Film, Eye, Heart, Sparkles } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface CreativeVisionSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const CreativeVisionSection: React.FC<CreativeVisionSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.7]);

  const visionPillars = [
    {
      icon: Eye,
      tag: t('creativeVision.pill1'),
      desc: t('creativeVision.pill1Desc'),
    },
    {
      icon: Heart,
      tag: t('creativeVision.pill2'),
      desc: t('creativeVision.pill2Desc'),
    },
    {
      icon: Film,
      tag: t('creativeVision.pill3'),
      desc: t('creativeVision.pill3Desc'),
    },
    {
      icon: Sparkles,
      tag: t('creativeVision.pill4'),
      desc: t('creativeVision.pill4Desc'),
    },
  ];

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative py-28 sm:py-40 bg-black text-white border-t border-zinc-900 overflow-hidden"
    >
      {/* Background cinematic visual with parallax scale */}
      <motion.div
        style={{ scale: imageScale, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Cinematic frame concept"
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/40 bg-black/60 backdrop-blur-md mb-6">
            <Film className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] font-mono tracking-[0.28em] uppercase text-[#d4af37]">
              {t('creativeVision.badge')}
            </span>
          </div>

          {/* Headline: EVERY FRAME HAS A STORY. */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white mb-8 leading-[1.08]"
          >
            {t('creativeVision.heading')}
          </motion.h2>

          {/* Vision Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg sm:text-2xl md:text-3xl font-editorial italic text-zinc-200 leading-relaxed font-light max-w-3xl mx-auto"
          >
            “{t('creativeVision.text')}”
          </motion.p>
        </div>

        {/* 4 Pillars of Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-900">
          {visionPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-zinc-950/60 border border-zinc-900/80 backdrop-blur-sm flex flex-col items-start"
              >
                <div className="p-2 rounded bg-black border border-zinc-800 text-[#d4af37] mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white mb-2">
                  {p.tag}
                </h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
