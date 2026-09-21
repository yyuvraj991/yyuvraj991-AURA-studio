import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useTranslation, Language } from '../context/I18nContext';
import { CursorType } from './CustomCursor';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
  onCursorChange?: (type: CursorType, text?: string) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'desktop',
  onCursorChange,
  className = '',
}) => {
  const { language, setLanguage, supportedLanguages, t } = useTranslation();

  if (variant === 'mobile') {
    return (
      <div className={`p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/90 ${className}`}>
        <div className="flex items-center gap-2 mb-3 text-zinc-400 text-xs font-mono tracking-wider uppercase">
          <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{t('lang.switcherAria')}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {supportedLanguages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`py-2.5 px-3 rounded-lg text-xs font-sans font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/60'
                }`}
              >
                <span>{lang.nativeName}</span>
                {isActive && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Header Switcher: Elegant, glass pill with gold micro-indicator
  return (
    <div
      className={`relative inline-flex items-center p-0.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-inner transition-colors duration-200 hover:border-zinc-700 ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-2 pr-1 text-zinc-400 flex items-center">
        <Globe className="w-3 h-3 text-[#d4af37]/90" />
      </div>

      <div className="flex items-center gap-0.5">
        {supportedLanguages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              onMouseEnter={() => onCursorChange?.('button')}
              onMouseLeave={() => onCursorChange?.('default')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider transition-all duration-300 relative select-none ${
                isActive
                  ? 'bg-[#d4af37] text-black shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
              }`}
              title={`Switch to ${lang.label}`}
            >
              {lang.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};
