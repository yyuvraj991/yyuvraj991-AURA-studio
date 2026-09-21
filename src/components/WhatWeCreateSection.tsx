import React from 'react';
import { motion } from 'motion/react';
import { Camera, Video, Film, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface WhatWeCreateSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
  onSelectService: (serviceName: string) => void;
  onOpenAiStudio?: () => void;
}

export const WhatWeCreateSection: React.FC<WhatWeCreateSectionProps> = ({
  onCursorChange,
  onSelectService,
  onOpenAiStudio,
}) => {
  const { t, language } = useTranslation();
  const isHi = language === 'hi';

  const capabilities = [
    {
      id: 'photography',
      title: t('whatWeCreate.photography.title'),
      desc: t('whatWeCreate.photography.desc'),
      icon: Camera,
      badge: '01 • STILLS',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'videography',
      title: t('whatWeCreate.videography.title'),
      desc: t('whatWeCreate.videography.desc'),
      icon: Video,
      badge: '02 • MOTION',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cinematic-films',
      title: t('whatWeCreate.cinematicFilms.title'),
      desc: t('whatWeCreate.cinematicFilms.desc'),
      icon: Film,
      badge: '03 • CINEMA',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'reels',
      title: t('whatWeCreate.reels.title'),
      desc: t('whatWeCreate.reels.desc'),
      icon: Smartphone,
      badge: '04 • 9:16 VERTICAL',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'creative-visuals',
      title: t('whatWeCreate.creativeVisuals.title'),
      desc: t('whatWeCreate.creativeVisuals.desc'),
      icon: Sparkles,
      badge: '05 • CONCEPTS',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ai-creative-suite',
      title: isHi ? 'AI क्रिएटिव लैब (12+ कार्य)' : 'AI Creative Suite (12+ Workflows)',
      desc: isHi
        ? 'न्यूरल 8K रिस्टोरेशन, AI वीडियो जेनरेशन, हॉलीवुड कलर ट्रांसफर और ऑटोमेटेड रील्स के साथ पूर्ण एआई सुइट।'
        : '12+ specialized AI workflows — neural 8K upscaling, AI video diffusion, voice remastering, and viral reels automation.',
      icon: Sparkles,
      badge: '06 • AI LAB (NEW)',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      isAiCard: true,
    },
  ];

  return (
    <section
      id="create"
      className="py-24 sm:py-32 bg-[#0d0d10] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                {t('whatWeCreate.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white">
              {t('whatWeCreate.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm sm:text-base font-editorial italic">
            {t('whatWeCreate.subtitle')}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isLarge = idx === 0 || idx === 1;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative rounded-xl border border-zinc-800/80 bg-zinc-950/80 overflow-hidden flex flex-col justify-between p-8 hover:border-[#d4af37]/60 transition-all duration-500 shadow-xl ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {/* Background artistic texture on hover */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d4af37]">
                      {cap.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black/60 border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 tracking-wide">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-zinc-900 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (cap.id === 'ai-creative-suite' && onOpenAiStudio) {
                        onOpenAiStudio();
                      } else {
                        onSelectService(cap.title);
                      }
                    }}
                    className={`text-xs font-mono uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform ${
                      cap.id === 'ai-creative-suite'
                        ? 'text-purple-300 font-bold'
                        : 'text-[#d4af37]'
                    }`}
                  >
                    <span>
                      {cap.id === 'ai-creative-suite'
                        ? isHi
                          ? 'AI लैब एक्सप्लोर करें'
                          : 'Explore AI Lab'
                        : t('whatWeCreate.enquireService')}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] font-mono text-zinc-600">
                    {cap.id === 'ai-creative-suite' ? '12+ WORKFLOWS' : 'EST. 2026'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
