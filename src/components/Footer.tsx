import React from 'react';
import { Film, Lock, ArrowUp, Instagram, Youtube, Sparkles } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface FooterProps {
  onOpenClientPortal: () => void;
  onOpenAdmin?: () => void;
  onCursorChange: (type: CursorType, text?: string) => void;
  onNavigateAiStudio?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenClientPortal,
  onCursorChange,
  onNavigateAiStudio,
}) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-zinc-900 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded border border-[#d4af37]/60 flex items-center justify-center bg-black text-[#d4af37]">
                <Film className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-[0.22em] text-white uppercase">
                  AURA
                </span>
                <span className="text-[8px] tracking-[0.35em] text-zinc-400 font-sans uppercase -mt-1">
                  CINEMATICS
                </span>
              </div>
            </div>

            <p className="text-sm font-editorial italic text-zinc-300 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-[#d4af37]">
              <Sparkles className="w-3 h-3" />
              <span>{t('footer.estBadge')}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
              {t('footer.navHeading')}
            </h5>
            <ul className="space-y-2 text-xs font-sans tracking-wide">
              {onNavigateAiStudio && (
                <li>
                  <button
                    onClick={onNavigateAiStudio}
                    className="hover:text-purple-300 text-purple-400 font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('footer.aiStudioLink')}</span>
                  </button>
                </li>
              )}
              <li>
                <a href="#reels" className="hover:text-white transition-colors text-amber-200/90 font-medium">
                  {t('footer.reelsLink')}
                </a>
              </li>
              <li>
                <a href="#create" className="hover:text-white transition-colors">
                  {t('footer.createLink')}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {t('footer.experienceLink')}
                </a>
              </li>
              <li>
                <a href="#concept-showcase" className="hover:text-white transition-colors">
                  {t('footer.conceptLink')}
                </a>
              </li>
              <li>
                <a href="#behind-the-lens" className="hover:text-white transition-colors">
                  {t('footer.btsLink')}
                </a>
              </li>
              <li>
                <a href="#people-behind-the-frame" className="hover:text-white transition-colors">
                  {t('footer.networkLink')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t('footer.contactLink')}
                </a>
              </li>
            </ul>
          </div>

          {/* Client & Studio Links */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
              {t('footer.clientAccessHeading')}
            </h5>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t('footer.clientAccessDesc')}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenClientPortal}
                className="px-3.5 py-2 rounded bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] text-zinc-200 text-xs font-mono flex items-center gap-1.5 transition-colors"
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t('footer.clientPortalBtn')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            <span>© {new Date().getFullYear()} Aura Cinematics. EST. 2026.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#d4af37] transition-colors py-1"
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
