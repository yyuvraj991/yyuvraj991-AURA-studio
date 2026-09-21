import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowLeft,
  Film,
  Camera,
  Layers,
  Palette,
  Mic,
  Music,
  Send,
  BookOpen,
  ScanFace,
  Compass,
  CheckCircle2,
  Clock,
  Wand2,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info,
  Play,
  Package,
  Building,
  Utensils,
  Users,
  Calendar,
  Briefcase,
  TrendingUp,
  Heart,
  BadgePercent,
  XCircle,
  AlertCircle,
  Target,
  BarChart3,
  DollarSign,
  Rocket
} from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';
import {
  AI_SERVICES,
  HOW_AI_MAKES_OUR_WORK_BETTER,
  BUSINESS_AI_ROI_CASES,
  BusinessAiRoiCase,
} from '../data/aiData';
import { AiServiceItem } from '../types';

interface AiStudioPageProps {
  onBackToHome: () => void;
  onBookAiService: (serviceName: string, notes?: string) => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const AiStudioPage: React.FC<AiStudioPageProps> = ({
  onBackToHome,
  onBookAiService,
  onCursorChange,
}) => {
  const { language } = useTranslation();
  const isHi = language === 'hi';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<AiServiceItem | null>(null);

  // Interactive Business AI ROI State
  const [selectedRoiIndex, setSelectedRoiIndex] = useState<number>(0);
  const currentRoiCase: BusinessAiRoiCase = BUSINESS_AI_ROI_CASES[selectedRoiIndex];

  const categories = [
    { id: 'all', labelEn: 'All Business Ads', labelHi: 'सभी बिज़नेस ऐड्स' },
    { id: 'video', labelEn: 'Video & Meta Ads', labelHi: 'वीडियो व मेटा ऐड्स' },
    { id: 'product', labelEn: '3D Product Shoots', labelHi: '3D प्रोडक्ट शूट्स' },
    { id: 'spokesperson', labelEn: 'AI Spokesperson & UGC', labelHi: 'डिजिटल अवतार व UGC' },
    { id: 'retail', labelEn: 'Local Retail & Stores', labelHi: 'लोकल दुकान व शोरूम' },
    { id: 'restaurant', labelEn: 'Food & Hospitality', labelHi: 'फ़ूड व रेस्टोरेंट' },
    { id: 'realestate', labelEn: 'Real Estate & NeRF', labelHi: 'रियल एस्टेट' },
    { id: 'campaign', labelEn: 'Campaigns & 30-Day Reels', labelHi: '30-दिन कंटेंट व रील्स' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? AI_SERVICES
      : AI_SERVICES.filter((item) => item.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Mic':
        return <Mic className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Music':
        return <Music className="w-5 h-5" />;
      case 'ScanFace':
        return <ScanFace className="w-5 h-5" />;
      case 'Send':
        return <Send className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Building':
        return <Building className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 pt-20 pb-24 font-sans selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      {/* Top Breadcrumb & Controls Bar */}
      <div className="border-b border-zinc-800/80 bg-black/40 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-[#d4af37] transition-colors group uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#d4af37]" />
            <span>{isHi ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Main Studio'}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
              <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>AURA BUSINESS ADS AI</span>
            </span>

            <button
              onClick={() => onBookAiService('Custom Business Ad Production Package', 'Inquiry for Business Ad')}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
              className="px-4 py-1.5 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] text-black font-semibold text-[11px] tracking-widest uppercase transition-all shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            >
              {isHi ? 'बिज़नेस ऐड बुक करें' : 'ORDER BUSINESS AD'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-zinc-800/80">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-cyan-900/20 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#d4af37]/10 blur-[110px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-950/50 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6"
          >
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isHi ? 'बिज़नेस विज्ञापन व कमर्शियल AI स्टूडियो' : 'COMMERCIAL AI & BUSINESS AD ENGINE'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white uppercase max-w-4xl mx-auto leading-[1.15]"
          >
            {isHi ? (
              <>
                स्मार्ट AI से बनाएं <span className="text-[#d4af37] font-serif italic">हाई-कन्वर्टिंग</span> बिज़नेस ऐड्स
              </>
            ) : (
              <>
                Supercharge Your Brand with <span className="text-[#d4af37] font-serif italic">AI Business Ads</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            {isHi
              ? 'दुकानों, ई-कॉमर्स, रेस्टोरेंट्स और ब्रांड्स के लिए 3D वर्चुअल प्रोडक्ट शूट्स, स्क्रॉल-स्टॉपिंग 9:16 वीडियो विज्ञापन और डिजिटल AI स्पोक्सपर्सन — पारंपरिक ऐड एजेंसी से 82% कम खर्च और सिर्फ 48 घंटे में डिलीवरी।'
              : 'Scroll-stopping 9:16 Meta video ads, ray-traced 3D product shoots, and photorealistic multilingual AI brand avatars engineered to drive 3x higher sales and customer orders at 82% lower cost than traditional ad agencies.'}
          </motion.p>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto"
          >
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">82%</span>
              <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-wider">
                {isHi ? 'बजट की भारी बचत' : 'Ad Budget Saved'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">48h</span>
              <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-wider">
                {isHi ? 'सुपरफास्ट डिलीवरी' : 'Rapid Delivery'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#d4af37]">3x</span>
              <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-wider">
                {isHi ? 'ज्यादा बिक्री व ROAS' : 'Higher Ad ROAS'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-center backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">20+</span>
              <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-wider">
                {isHi ? 'भारतीय व वैश्विक भाषाएँ' : 'Languages Dubbing'}
              </p>
            </div>
          </motion.div>

          {/* Direct Section Quick Jump Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto"
          >
            <button
              onClick={() => {
                const el = document.getElementById('business-roi-calculator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 text-xs font-mono text-cyan-200 transition-all flex items-center gap-2"
            >
              <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isHi ? 'बिज़नेस ROI व बचत तुलना' : 'ROI & Savings Calculator'}</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('why-ai-ads');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-[#d4af37]/60 text-xs font-mono text-zinc-300 transition-all flex items-center gap-2"
            >
              <Target className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{isHi ? 'पारंपरिक एजेंसी बनाम हमारा AI' : 'Why Our AI Ads Win'}</span>
            </button>

            <button
              onClick={() => {
                setActiveCategory('all');
                const el = document.getElementById('all-business-ads-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-all flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>{isHi ? 'समस्त 10+ बिज़नेस ऐड्स' : 'All 10+ Business Ads'}</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 1: BUSINESS AI ROI & SECTOR CALCULATOR
          (बिज़नेस, दुकानों, और ब्रांड्स के लिए AI समाधान + ROI कैलकुलेटर)
          ======================================================================== */}
      <section id="business-roi-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-800/80">
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-zinc-900/80 to-black border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
                  <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHi ? 'बिज़नेस ROI व पैकेज कैलकुलेटर' : 'BUSINESS ROI & DELIVERABLES CALCULATOR'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white tracking-tight">
                  {isHi ? (
                    <>
                      अपने बिज़नेस के अनुसार <span className="text-cyan-400 font-serif italic">बचत व रिजल्ट्स</span> देखें
                    </>
                  ) : (
                    <>
                      Compare Costs & Returns for <span className="text-cyan-400 font-serif italic">Your Industry</span>
                    </>
                  )}
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-2xl font-sans leading-relaxed">
                  {isHi
                    ? 'अपनी इंडस्ट्री चुनें और देखें कि पारंपरिक विज्ञापन एजेंसियों के भारी भरकम खर्च की तुलना में हमारे AI बिज़नेस ऐड्स से आपको कितनी बचत और क्या-क्या तैयार विज्ञापन मिलते हैं।'
                    : 'Select your sector to view transparent side-by-side cost comparisons, deliverable breakdowns, and delivery timelines against traditional ad agencies.'}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveCategory('all');
                  const el = document.getElementById('all-business-ads-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 text-xs font-mono uppercase tracking-wider transition-all shrink-0 flex items-center gap-2"
              >
                <span>{isHi ? 'सभी विज्ञापन सेवाएँ देखें' : 'Explore All Ad Formats'}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Business Category ROI Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {BUSINESS_AI_ROI_CASES.map((item, idx) => {
                const isActive = selectedRoiIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedRoiIndex(idx)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                        : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    {isHi ? item.categoryNameHi : item.categoryName}
                  </button>
                );
              })}
            </div>

            {/* Interactive ROI & Deliverables Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Cost & Speed Comparison */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-black/70 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                      {isHi ? 'लागत व समय तुलना' : 'Cost & Speed Comparison'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest font-bold uppercase bg-emerald-950/80 border border-emerald-500/50 text-emerald-300">
                      {currentRoiCase.savingsPercentage}
                    </span>
                  </div>

                  {/* Traditional Agency vs Aura AI Box */}
                  <div className="space-y-4">
                    {/* Traditional */}
                    <div className="p-4 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-1">
                        <span>{isHi ? 'पारंपरिक ऐड एजेंसी खर्च:' : 'Traditional Ad Agency:'}</span>
                        <span className="text-red-400 line-through font-semibold">{currentRoiCase.traditionalCost}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                        <span>{isHi ? 'डिलीवरी का समय:' : 'Production Timeline:'}</span>
                        <span>{currentRoiCase.traditionalTime}</span>
                      </div>
                    </div>

                    {/* Aura AI */}
                    <div className="p-4 rounded-lg bg-cyan-950/40 border border-cyan-500/50 shadow-lg">
                      <div className="flex items-center justify-between text-xs text-cyan-200 font-mono mb-1">
                        <span className="font-bold">{isHi ? 'ऑरा AI बिज़नेस पैकेज:' : 'Aura Business AI:'}</span>
                        <span className="text-lg font-bold text-cyan-300 font-mono">{currentRoiCase.auraAiCost}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
                        <span>{isHi ? 'सुपरफास्ट डिलीवरी:' : 'Guaranteed Delivery:'}</span>
                        <span className="font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{currentRoiCase.auraAiTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                    {isHi ? 'उपयुक्त व्यापार व उद्योग:' : 'Ideal For:'}
                  </span>
                  <p className="text-xs text-zinc-300 font-sans">
                    {isHi ? currentRoiCase.bestForHi : currentRoiCase.bestFor}
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Deliverables Checklist */}
              <div className="lg:col-span-7 p-6 rounded-xl bg-black/70 border border-zinc-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                      {isHi ? 'इस पैकेज में क्या-क्या मिलेगा:' : 'Full Deliverables Included in This Package:'}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      4K • COMMERCIAL RIGHTS
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {(isHi ? currentRoiCase.deliverablesHi : currentRoiCase.deliverables).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400 font-mono">
                    {isHi ? '💡 कोई नया शूट या कैमरा क्रू बुलाने की जरूरत नहीं' : '💡 Zero physical studio or camera crew rental needed'}
                  </div>

                  <button
                    onClick={() =>
                      onBookAiService(
                        `Business AI: ${currentRoiCase.categoryName}`,
                        `Selected Sector: ${currentRoiCase.categoryName} (${currentRoiCase.auraAiCost})`
                      )
                    }
                    className="px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] shrink-0 text-center"
                  >
                    {isHi ? 'यह पैकेज अभी बुक करें' : 'Book This Package'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 2: WHY OUR AI BUSINESS ADS BEAT TRADITIONAL AD AGENCIES
          (पारंपरिक ऐड एजेंसी बनाम हमारा AI विज्ञापन)
          ======================================================================== */}
      <section id="why-ai-ads" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-800/80">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono tracking-widest uppercase mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>{isHi ? 'पारंपरिक एजेंसी बनाम हमारा AI' : 'TRADITIONAL AGENCY VS AURA COMMERCIAL AI'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white tracking-tight">
            {isHi ? (
              <>
                हमारा AI विज्ञापन पारंपरिक ऐड एजेंसी से <span className="text-[#d4af37] font-serif italic">10x बेहतर</span> क्यों है?
              </>
            ) : (
              <>
                Why Our AI Commercials Outperform <span className="text-[#d4af37] font-serif italic">Traditional Agencies</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            {isHi
              ? 'पारंपरिक एजेंसियां भारी भरकम फीस, लंबा समय और बिना गारंटी वाले वीडियो देती हैं। हमारा AI बिज़नेस विज्ञापन मॉडल आपको तेज स्पीड, 3 हुक वेरिएशन्स और 80% बचत के साथ उच्चतम बिक्री देता है।'
              : 'Traditional video production is plagued by slow timelines, inflated equipment rental fees, and single rigid cuts. We deliver agile, high-converting commercials with 3 testable hooks in 48 hours.'}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_AI_MAKES_OUR_WORK_BETTER.map((pillar, pIdx) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.08 }}
                className="rounded-2xl bg-[#0e0e12] border border-zinc-800 hover:border-[#d4af37]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/5"
              >
                <div>
                  {/* Top Metric Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 text-[#d4af37] flex items-center justify-center">
                      {getServiceIcon(pillar.iconName)}
                    </div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-mono font-bold text-[#d4af37] block">
                        {pillar.metric}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                        {isHi ? pillar.metricLabelHi : pillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold uppercase text-white leading-snug">
                    {isHi ? pillar.titleHi : pillar.title}
                  </h3>

                  {/* Comparison: Traditional Pain vs Aura AI Advantage */}
                  <div className="mt-5 space-y-3">
                    {/* Traditional Pain */}
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold mb-1">
                        <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                        <span>{isHi ? 'पारंपरिक एजेंसी की समस्या' : 'Traditional Agency Bottleneck'}</span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        {isHi ? pillar.traditionalPainHi : pillar.traditionalPain}
                      </p>
                    </div>

                    {/* Aura AI Advantage */}
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{isHi ? 'ऑरा AI का विशेष समाधान' : 'Aura AI Business Advantage'}</span>
                      </div>
                      <p className="text-xs text-emerald-100/90 leading-relaxed font-sans">
                        {isHi ? pillar.aiAdvantageHi : pillar.aiAdvantage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>ADVANTAGE 0{pIdx + 1}</span>
                  <span className="text-cyan-400/80 uppercase tracking-widest font-semibold">HIGH ROI PROVEN</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================
          SECTION 3: ALL 10+ BUSINESS AD WORKFLOWS & CAPABILITIES
          ======================================================================== */}
      <section id="all-business-ads-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isHi ? 'विज्ञापन सेवा कैटलॉग' : 'COMMERCIAL AD CATALOG'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
              {isHi ? 'समस्त 10+ बिज़नेस विज्ञापन व सेवाएँ' : 'All 10+ AI Business Ad Formats & Services'}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              {isHi
                ? 'ई-कॉमर्स, रिटेल शोरूम, रेस्टोरेंट, रियल एस्टेट और सोशल मीडिया ग्रोथ के लिए विशेष रूप से डिज़ाइन किए गए उच्च-रूपांतरण विज्ञापन।'
                : 'Engineered specifically for high-conversion performance on Meta, Instagram, YouTube, and retail marketing channels.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => onCursorChange('button')}
                  onMouseLeave={() => onCursorChange('default')}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all uppercase ${
                    isSelected
                      ? 'bg-cyan-400 text-black font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {isHi ? cat.labelHi : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-[#0f0f13] border border-zinc-800 hover:border-cyan-500/50 flex flex-col justify-between overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  {/* Top Image Preview */}
                  {service.sampleVisual && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                      <img
                        src={service.sampleVisual}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-black/40" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest font-bold uppercase bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 backdrop-blur-md">
                          {service.badge}
                        </div>
                      )}

                      {/* Turnaround Badge */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/80 border border-zinc-700 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        <span>{service.turnaroundTime}</span>
                      </div>
                    </div>
                  )}

                  {/* Content Padding */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                        {service.categoryLabel}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-bold uppercase text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {isHi ? service.titleHi : service.title}
                    </h3>

                    <p className="text-xs font-mono text-[#d4af37] mt-1 line-clamp-1">
                      {isHi ? service.taglineHi : service.tagline}
                    </p>

                    <p className="text-xs text-zinc-400 mt-3 font-sans line-clamp-3 leading-relaxed">
                      {isHi ? service.descriptionHi : service.description}
                    </p>

                    {/* Capabilities List */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-zinc-800/80">
                      {(isHi ? service.capabilitiesHi : service.capabilities).slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>{isHi ? 'विस्तृत विवरण' : 'View Details'}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                    </button>

                    <button
                      onClick={() =>
                        onBookAiService(
                          `Business Ad: ${service.title}`,
                          `Selected Ad Format: ${service.title} (${service.categoryLabel})`
                        )
                      }
                      className="px-4 py-1.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                    >
                      {isHi ? 'यह विज्ञापन बुक करें' : 'Book This Ad'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================
          COMMERCIAL GUARANTEES & TRANSPARENCY
          ======================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <ShieldCheck className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="text-base font-display font-bold uppercase text-white">
              {isHi ? '100% पूर्ण कमर्शियल राइट्स' : '100% Commercial Usage Rights'}
            </h4>
            <p className="text-xs text-zinc-400 font-sans mt-2 leading-relaxed">
              {isHi
                ? 'सभी विज्ञापनों, 3D रेंडर्स और वॉयसओवर के साथ पूर्ण व्यावसायिक अधिकार मिलते हैं। आप इन्हें मेटा, यूट्यूब, टीवी, होर्डिंग्स और डिजिटल स्क्रीन पर बेझिझक चला सकते हैं।'
                : 'Every ad deliverable includes full commercial broadcast rights. Run them freely across Meta Ads, YouTube, OTT platforms, websites, and retail billboards.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <Target className="w-6 h-6 text-[#d4af37] mb-3" />
            <h4 className="text-base font-display font-bold uppercase text-white">
              {isHi ? 'मनोवैज्ञानिक बिक्री हुक्स' : 'High-Converting Sales Psychology'}
            </h4>
            <p className="text-xs text-zinc-400 font-sans mt-2 leading-relaxed">
              {isHi
                ? 'हम केवल सुंदर वीडियो नहीं बनाते, बल्कि AIDA (Attention, Interest, Desire, Action) फार्मूले पर आधारित स्क्रिप्ट्स तैयार करते हैं जो दर्शकों से तुरंत खरीदारी करवाती हैं।'
                : 'Every video ad is structured using battle-tested direct response formulas (AIDA & Hook-Story-Offer) engineered to capture attention and scale ad conversions.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <Users className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-base font-display font-bold uppercase text-white">
              {isHi ? 'स्वाभाविक स्थानीय वॉयसओवर' : 'Authentic Indian Dialects'}
            </h4>
            <p className="text-xs text-zinc-400 font-sans mt-2 leading-relaxed">
              {isHi
                ? 'कोई रोबोटिक आवाज़ नहीं! हम हिंदी, हिंग्लिश और क्षेत्रीय बोलियों में ऊर्जावान, स्वाभाविक स्टूडियो वॉयसओवर देते हैं जो आपके ग्राहकों से सीधा दिल का रिश्ता जोड़ता है।'
                : 'Zero robotic tonality. Our neural voice engines generate energetic, authentic Hindi, Hinglish, and regional Indian accents that build trust with your target buyers.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-t from-cyan-950/40 via-zinc-900 to-zinc-950 border border-cyan-500/40 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white">
            {isHi ? 'क्या आप अपने बिज़नेस की बिक्री 3x बढ़ाने के लिए तैयार हैं?' : 'Ready to 3x Your Business Sales With AI Ads?'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mt-3 font-sans">
            {isHi
              ? 'चाहे आपको ई-कॉमर्स प्रोडक्ट शूट चाहिए, इंस्टाग्राम वीडियो विज्ञापन, या 30-दिन का रील्स पैकेज — आज ही हमारे साथ अपना पहला विज्ञापन प्लान करें।'
              : 'Whether you need 3D virtual product shoots, viral 9:16 Meta video ads, or a full 30-day brand content engine, launch your campaign with us today.'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookAiService('Complete Business AI Ad Suite', 'Inquiry for full business ad campaign')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              {isHi ? 'पहला विज्ञापन बुक करें' : 'START YOUR BUSINESS AD'}
            </button>
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono tracking-widest uppercase transition-colors"
            >
              {isHi ? 'मुख्य स्टूडियो देखें' : 'RETURN TO HOME'}
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedServiceModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full bg-[#111115] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 relative"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-300">
                    {selectedServiceModal.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white mt-2">
                    {isHi ? selectedServiceModal.titleHi : selectedServiceModal.title}
                  </h3>
                  <p className="text-xs font-mono text-[#d4af37] mt-0.5">
                    {isHi ? selectedServiceModal.taglineHi : selectedServiceModal.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-zinc-300 font-sans leading-relaxed mt-4">
                {isHi ? selectedServiceModal.descriptionHi : selectedServiceModal.description}
              </p>

              <div className="mt-6 pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
                  {isHi ? 'मुख्य विशेषताएं और कमर्शियल क्षमताएं' : 'Key Capabilities & Conversion Features'}
                </h4>
                <ul className="space-y-2">
                  {(isHi ? selectedServiceModal.capabilitiesHi : selectedServiceModal.capabilities).map(
                    (cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                    {isHi ? 'उपयोग किए जाने वाले AI टूल्स' : 'AI Production Engines'}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    {selectedServiceModal.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const svc = selectedServiceModal;
                    setSelectedServiceModal(null);
                    onBookAiService(svc.title, `Business Ad: ${svc.title} (${svc.categoryLabel})`);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                >
                  {isHi ? 'यह विज्ञापन बुक करें' : 'Book This Business Ad'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
