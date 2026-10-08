import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import hiTranslations from '../locales/hi.json';

export type Language = 'en' | 'hi';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'hi', label: 'Hindi', shortLabel: 'हिंदी', nativeName: 'हिंदी' },
  { code: 'en', label: 'English', shortLabel: 'EN', nativeName: 'English' },
];

const translations: Record<Language, any> = {
  en: enTranslations,
  hi: hiTranslations,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, variables?: Record<string, string | number>) => string;
  isHindi: boolean;
  supportedLanguages: LanguageOption[];
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = 'aura_cinematics_language_v2';

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') {
        return saved;
      }
    } catch {
      // ignore
    }
    // Default language is Hindi whenever the website opens
    return 'hi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  const t = useMemo(() => {
    return (path: string, variables?: Record<string, string | number>): string => {
      const keys = path.split('.');
      
      // Try current language first
      let currentVal = translations[language];
      for (const k of keys) {
        if (currentVal && typeof currentVal === 'object' && k in currentVal) {
          currentVal = currentVal[k];
        } else {
          currentVal = undefined;
          break;
        }
      }

      // Fallback to English if not found
      if (currentVal === undefined) {
        let fallbackVal = translations.en;
        for (const k of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && k in fallbackVal) {
            fallbackVal = fallbackVal[k];
          } else {
            fallbackVal = undefined;
            break;
          }
        }
        currentVal = fallbackVal;
      }

      if (typeof currentVal !== 'string') {
        return path;
      }

      if (!variables) {
        return currentVal;
      }

      // Replace {variableName}
      let result = currentVal;
      for (const [vKey, vVal] of Object.entries(variables)) {
        result = result.replace(new RegExp(`\\{${vKey}\\}`, 'g'), String(vVal));
      }
      return result;
    };
  }, [language]);

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isHindi: language === 'hi',
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
