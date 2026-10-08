import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, Film, Sparkles, ExternalLink } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenClientPortal: () => void;
  onOpenAdmin?: () => void;
  unreadEnquiriesCount?: number;
  onCursorChange: (type: CursorType) => void;
  currentPage?: 'home' | 'ai';
  onNavigate?: (page: 'home' | 'ai', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenClientPortal,
  onCursorChange,
  currentPage = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.conceptShowcase'), href: '#concept-showcase' },
    { name: t('nav.reels'), href: '#reels' },
    { name: t('nav.whatWeCreate'), href: '#create' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.behindTheLens'), href: '#behind-the-lens' },
    { name: t('nav.network'), href: '#people-behind-the-frame' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPage === 'ai') {
      onNavigate?.('home', href.replace('#', ''));
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAiLabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate?.('ai');
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPage === 'ai') {
      onNavigate?.('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Studio Brand with EST. 2026 */}
          <a
            href="#"
            id="brand-logo-link"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 group"
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
          >
            <div className="w-8 h-8 rounded border border-[#d4af37]/60 flex items-center justify-center bg-black/50 text-[#d4af37] group-hover:border-[#d4af37] transition-colors">
              <Film className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg font-bold tracking-[0.2em] text-zinc-100 group-hover:text-[#d4af37] transition-colors uppercase">
                  AURA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#d4af37] px-1.5 py-0.2 rounded bg-black/60 border border-[#d4af37]/30">
                  EST. 2026
                </span>
              </div>
              <span className="text-[8px] tracking-[0.32em] text-zinc-400 font-sans uppercase -mt-0.5">
                CREATIVE STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-medium tracking-[0.14em] text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#d4af37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap uppercase"
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {link.name}
              </a>
            ))}

            {/* Dedicated AI Business Ads Link */}
            <button
              id="nav-ai-lab-desktop-btn"
              onClick={handleAiLabClick}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all duration-300 ${
                currentPage === 'ai'
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-400'
                  : 'bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-300 hover:text-white border border-cyan-500/40'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
              <span>{t('nav.aiStudio')}</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/30 text-cyan-200 font-bold">
                ADS
              </span>
            </button>

            {/* FontStudio Creative Tool External Link */}
            <a
              id="nav-fontstudio-desktop-btn"
              href="https://fontstudio.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all duration-300 bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 hover:text-white border border-amber-500/40"
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
              title="FontStudio PRO - Indian Typography & Calligraphy Studio"
            >
              <span>FONTSTUDIO</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
            </a>
          </nav>

          {/* Header Actions: Language Switcher + Client Portal + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Multilingual Switcher: EN | हिंदी */}
            <LanguageSwitcher onCursorChange={onCursorChange} />

            {/* Client Vault Access */}
            <button
              id="nav-client-portal-btn"
              onClick={onOpenClientPortal}
              className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 bg-black/40 transition-colors"
              title={t('nav.clientPortal')}
              aria-label={t('nav.clientPortal')}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button */}
            <a
              id="nav-enquire-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 rounded-sm bg-[#d4af37] text-black font-semibold text-[11px] tracking-widest uppercase hover:bg-[#e6c45e] transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center gap-1.5"
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <span>{t('nav.letsCreate')}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher onCursorChange={onCursorChange} />
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden animate-in fade-in duration-200">
          <div className="space-y-4 flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              {t('nav.mobileNavTitle')}
            </span>

            {/* Mobile AI Lab Highlight Button */}
            <button
              id="mobile-nav-ai-lab-btn"
              onClick={handleAiLabClick}
              className={`p-3 rounded-xl flex items-center justify-between transition-all ${
                currentPage === 'ai'
                  ? 'bg-cyan-500 text-black font-bold border border-cyan-400 shadow-lg'
                  : 'bg-gradient-to-r from-cyan-950/80 to-zinc-900 border border-cyan-500/50 text-cyan-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-display uppercase tracking-widest text-sm font-semibold">
                  {t('nav.aiStudio')}
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-200 uppercase font-bold">
                COMMERCIAL
              </span>
            </button>

            {/* Mobile FontStudio Tool Highlight */}
            <a
              id="mobile-nav-fontstudio-btn"
              href="https://fontstudio.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl flex items-center justify-between transition-all bg-gradient-to-r from-amber-950/60 to-zinc-900 border border-amber-500/40 text-amber-200"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="font-display uppercase tracking-widest text-sm font-semibold text-white">
                  FontStudio PRO
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-[#fef08a] border border-amber-500/30 uppercase font-bold flex items-center gap-1">
                <span>TOOL</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-display tracking-widest text-zinc-200 hover:text-[#d4af37] transition-colors uppercase py-1 border-b border-zinc-900/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Language / भाषा:</span>
              <LanguageSwitcher onCursorChange={onCursorChange} />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenClientPortal();
                }}
                className="w-full py-3 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-zinc-300 flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t('nav.clientPortal')}</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-3.5 rounded-sm bg-[#d4af37] text-black text-center font-semibold text-xs tracking-widest uppercase block"
            >
              {t('nav.letsCreate')}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
