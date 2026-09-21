import React from 'react';
import { motion } from 'motion/react';
import { Quote, Play, ArrowRight, Star } from 'lucide-react';
import { ClientStory } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface ClientStoriesSectionProps {
  stories: ClientStory[];
  onSelectProjectSlug: (slug: string) => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const ClientStoriesSection: React.FC<ClientStoriesSectionProps> = ({
  stories,
  onSelectProjectSlug,
  onCursorChange,
}) => {
  const { t } = useTranslation();

  return (
    <section
      id="stories"
      className="py-24 sm:py-36 bg-[#0c0c0f] text-zinc-100 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Quote className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('clientStories.badge')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('clientStories.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-editorial text-sm sm:text-base italic">
            {t('clientStories.subtitle')}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#111115] border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 hover:border-zinc-700 transition-colors shadow-xl group"
            >
              <div>
                {/* Event Photo Preview Header */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-zinc-800 mb-6">
                  <img
                    src={story.eventPhoto}
                    alt={story.eventTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-[#d4af37] bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                    {story.date}
                  </div>
                </div>

                {/* Client Quote */}
                <p className="text-sm sm:text-base text-zinc-200 font-editorial italic leading-relaxed mb-6">
                  {story.message}
                </p>
              </div>

              {/* Client Profile and View Story CTA */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={story.clientPhoto}
                    alt={story.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/60"
                  />
                  <div>
                    <h4 className="text-xs font-bold font-display uppercase text-white">
                      {story.clientName}
                    </h4>
                    <span className="text-[10px] text-zinc-400 font-mono block truncate max-w-[150px]">
                      {story.eventTitle}
                    </span>
                  </div>
                </div>

                {story.projectSlug && (
                  <button
                    onClick={() => onSelectProjectSlug(story.projectSlug!)}
                    className="px-3 py-1.5 rounded-sm border border-zinc-700 hover:border-[#d4af37] hover:text-[#d4af37] text-zinc-300 text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1 shrink-0"
                    onMouseEnter={() => onCursorChange('button')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <span>{t('clientStories.viewStory')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
