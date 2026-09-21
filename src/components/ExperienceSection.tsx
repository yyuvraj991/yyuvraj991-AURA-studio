import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface ExperienceSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('experience.step1Title'),
      desc: t('experience.step1Desc'),
      icon: Search,
      badge: 'CONSULTATION',
    },
    {
      number: '02',
      title: t('experience.step2Title'),
      desc: t('experience.step2Desc'),
      icon: Compass,
      badge: 'VISUAL STRATEGY',
    },
    {
      number: '03',
      title: t('experience.step3Title'),
      desc: t('experience.step3Desc'),
      icon: Camera,
      badge: 'CINEMA COVERAGE',
    },
    {
      number: '04',
      title: t('experience.step4Title'),
      desc: t('experience.step4Desc'),
      icon: Sparkles,
      badge: 'EDITING & COLOR',
    },
    {
      number: '05',
      title: t('experience.step5Title'),
      desc: t('experience.step5Desc'),
      icon: CheckCircle2,
      badge: 'ARCHIVE DELIVERY',
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-36 bg-[#09090b] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-black/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#d4af37]">
              {t('experience.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-4">
            {t('experience.heading')}
          </h2>
          <p className="text-zinc-400 font-editorial text-base sm:text-lg italic">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Five-Stage Journey Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative rounded-xl bg-[#0f0f13] border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-[#d4af37]/70 transition-all duration-300"
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {/* Step Index & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-zinc-600 group-hover:text-[#d4af37] transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 rounded bg-black border border-zinc-800 text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#d4af37] block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                  <span>STEP {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#d4af37] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
