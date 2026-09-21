import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Camera, Film, Palette, Award } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface AboutSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();

  const verifiedStats = [
    { number: '140+', label: t('about.stats.s1Label'), detail: t('about.stats.s1Detail') },
    { number: '90+', label: t('about.stats.s2Label'), detail: t('about.stats.s2Detail') },
    { number: '35+', label: t('about.stats.s3Label'), detail: t('about.stats.s3Detail') },
    { number: '8', label: t('about.stats.s4Label'), detail: t('about.stats.s4Detail') },
  ];

  const pillars = [
    {
      icon: <Camera className="w-5 h-5 text-[#d4af37]" />,
      title: t('about.pillars.p1Title'),
      desc: t('about.pillars.p1Desc'),
    },
    {
      icon: <Film className="w-5 h-5 text-[#d4af37]" />,
      title: t('about.pillars.p2Title'),
      desc: t('about.pillars.p2Desc'),
    },
    {
      icon: <Palette className="w-5 h-5 text-[#d4af37]" />,
      title: t('about.pillars.p3Title'),
      desc: t('about.pillars.p3Desc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-36 bg-[#09090b] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('about.badge')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('about.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-editorial text-sm sm:text-base italic">
            {t('about.quote')}
          </p>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-zinc-300">
            <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-wide">
              {t('about.whoWeAre')}
            </h3>
            <p className="font-body text-sm sm:text-base leading-relaxed">
              {t('about.bioP1')}
            </p>
            <p className="font-editorial text-lg text-zinc-400 italic leading-relaxed">
              {t('about.bioP2')}
            </p>

            <div className="pt-4 border-t border-zinc-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#d4af37] p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Arjun Verma"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-white text-sm uppercase block">
                  {t('about.founderName')}
                </span>
                <span className="text-xs text-[#d4af37] font-mono">
                  {t('about.founderRole')}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85"
                alt="Studio Crew at Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-black/70 backdrop-blur-md border border-zinc-800 text-xs text-zinc-300 font-mono">
                <span className="text-[#d4af37] font-bold block mb-0.5">{t('about.atelierBadge')}</span>
                {t('about.atelierDesc')}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-[#111115] border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="p-3 rounded-lg bg-black border border-zinc-800 w-fit mb-4">
                {p.icon}
              </div>
              <h4 className="text-lg font-display font-bold uppercase text-white mb-2">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-body leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Experience Counters (PRD Section 12) */}
        <div className="border-t border-zinc-800/80 pt-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t('about.statsTitle')}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {verifiedStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#d4af37]">
                  {stat.number}
                </span>
                <span className="text-xs font-bold font-display uppercase tracking-widest text-white mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-zinc-500 font-mono mt-0.5">
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
