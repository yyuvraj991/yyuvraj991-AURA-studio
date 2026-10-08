import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldCheck,
  Zap,
  Film,
  Camera,
  ScanFace,
  Users,
  Rocket,
  Sparkles,
  DollarSign,
  X,
  Layers,
  ArrowRight,
  Target,
  BadgePercent
} from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';
import {
  AI_SERVICES,
  AI_BUSINESS_GUARANTEES,
  AI_TRANSPARENT_PLANS,
  AiTransparentPlan
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

  const categories = [
    { id: 'all', labelEn: 'All 4 Formats', labelHi: 'सभी 4 प्रारूप' },
    { id: 'ad', labelEn: 'AI Business Ad (₹5K)', labelHi: 'AI बिज़नेस ऐड (₹5,000)' },
    { id: 'cinematic', labelEn: 'AI Cinematic (₹7K)', labelHi: 'AI सिनेमैटिक (₹7,000)' },
    { id: 'film', labelEn: 'AI Film (₹8.5K)', labelHi: 'AI फ़िल्म (₹8,500)' },
    { id: 'powerful', labelEn: 'AI Powerful Ad (₹10K)', labelHi: 'AI पावरफुल ऐड (₹10,000)' },
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
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'ScanFace':
        return <ScanFace className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 pt-20 pb-24 font-sans selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      {/* Top Breadcrumb & Quick Booking Header */}
      <div className="border-b border-zinc-800/80 bg-black/60 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 hover:text-[#d4af37] transition-colors group uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#d4af37]" />
            <span>{isHi ? 'मुख्य स्टूडियो पर वापस जाएं' : 'Back to Main Studio'}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
              <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>AI BUSINESS ADS • ₹5,000 - ₹10,000</span>
            </span>

            <button
              onClick={() => onBookAiService('AI Business Ad Order (₹5,000 - ₹10,000)', 'Inquiry for AI Business Ad')}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
              className="px-4 py-1.5 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] text-black font-semibold text-[11px] tracking-widest uppercase transition-all shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            >
              {isHi ? 'विज्ञापन बुक करें' : 'BOOK AI AD NOW'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-14 sm:py-20 border-b border-zinc-800/80">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-900/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#d4af37]/15 blur-[110px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-950/60 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isHi ? 'AI बिज़नेस ऐड्स • फ्लैट प्राइस ₹5,000 - ₹10,000' : 'AI BUSINESS ADS • FLAT PRICE ₹5,000 - ₹10,000'}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white uppercase max-w-4xl mx-auto leading-[1.15]"
          >
            {isHi ? (
              <>
                सिर्फ <span className="text-[#d4af37] font-serif italic">AI फ़िल्म, AI सिनेमैटिक</span> व <span className="text-cyan-400">पावरफुल ऐड्स</span>
              </>
            ) : (
              <>
                Pure <span className="text-[#d4af37] font-serif italic">AI Film, AI Cinematic</span> & <span className="text-cyan-400">Powerful Ads</span>
              </>
            )}
          </motion.h1>

          {/* User's Core Guarantees Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
          >
            {[
              { en: 'NO CAMERA', hi: 'नो कैमरा' },
              { en: 'NO CHARACTER', hi: 'नो कैरेक्टर' },
              { en: 'NO MODEL', hi: 'नो मॉडल' },
              { en: 'NO HIDDEN CHARGES', hi: 'नो हिडन चार्ज' },
              { en: 'NO OTHER CHARGES', hi: 'नो अदर चार्ज' },
            ].map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono font-bold tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>{isHi ? item.hi : item.en}</span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            {isHi
              ? 'किसी महंगे 4K कैमरे, एक्टर, मॉडल या छिपे हुए खर्च की बिल्कुल जरूरत नहीं। केवल अत्याधुनिक AI से तैयार 4K सिनेमैटिक वीडियो, भावनात्मक ब्रांड फ़िल्म और 9:16 रील्स विज्ञापन — फ्लैट ₹5,000 से ₹10,000 में!'
              : 'Zero camera crews, zero actors, zero model expenses, and zero surprise hidden charges. 100% pure neural cinema — 4K anamorphic visuals, viral 9:16 Meta reels, and high-converting commercial ads delivered at a transparent ₹5,000 to ₹10,000.'}
          </motion.p>

          {/* Quick CTA Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto"
          >
            <button
              onClick={() => {
                const el = document.getElementById('ai-core-services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center gap-2"
            >
              <span>{isHi ? '4 AI प्रारूप देखें' : 'View 4 AI Formats'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('ai-pricing-plans');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs uppercase tracking-widest transition-all flex items-center gap-2"
            >
              <DollarSign className="w-4 h-4 text-[#d4af37]" />
              <span>{isHi ? 'पैकेज (₹5,000 - ₹10,000)' : 'Pricing (₹5,000 - ₹10,000)'}</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================
          SECTION 1: THE 5 "NO" GUARANTEES
          (नो कैमरा • नो कैरेक्टर • नो मॉडल • नो हिडन चार्ज • नो अदर चार्ज)
          ======================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-800/80">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/40 bg-red-950/30 text-red-300 text-xs font-mono tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            <span>{isHi ? 'हमारी 5 स्पष्ट गारंटियां' : 'OUR 5 ZERO-OVERHEAD GUARANTEES'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white tracking-tight">
            {isHi ? (
              <>
                शून्य झंझट, <span className="text-[#d4af37] font-serif italic">शून्य अतिरिक्त खर्च</span>
              </>
            ) : (
              <>
                Zero Production Headaches, <span className="text-[#d4af37] font-serif italic">Zero Extra Cost</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            {isHi
              ? 'पारंपरिक एजेंसियों के लंबे बिलों और छिपे खर्चों को हमेशा के लिए अलविदा कहें। हमारी स्पष्ट नीतियां आपको 100% मन की शांति देती हैं।'
              : 'No complicated camera crews, no expensive agency retainers, and zero surprise bills. Pure AI commercial production tailored for smart businesses.'}
          </p>
        </div>

        {/* 5 Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {AI_BUSINESS_GUARANTEES.map((g, idx) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#0f0f13] border border-zinc-800 hover:border-red-500/40 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-red-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase bg-red-950/70 border border-red-500/40 text-red-300">
                    {isHi ? g.badgeHi : g.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    {getServiceIcon(g.iconName)}
                  </div>
                </div>

                <h3 className="text-sm font-display font-bold uppercase text-white leading-snug">
                  {isHi ? g.titleHi : g.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                  {isHi ? g.descriptionHi : g.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>100% ASSURED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 2: ONLY THE 4 CORE AI WORKFLOWS REQUESTED
          1. AI Business Ad (₹5,000)
          2. AI Cinematic (₹7,000)
          3. AI Film (₹8,500)
          4. AI Powerful Ad (₹10,000)
          ======================================================================== */}
      <section id="ai-core-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isHi ? '4 मुख्य AI सेवाएं' : '4 CORE AI PRODUCTION SERVICES'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
              {isHi ? 'AI फ़िल्म • AI सिनेमैटिक • AI ऐड • AI पावरफुल ऐड' : 'AI Film • AI Cinematic • AI Ad • AI Powerful Ad'}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              {isHi
                ? 'सिर्फ ₹5,000 से ₹10,000 के बीच — अपने बिज़नेस के लिए चुनें सबसे उपयुक्त और प्रभावशाली AI विज्ञापन।'
                : 'Priced transparently between ₹5,000 and ₹10,000. Engineered for direct response, Instagram Reels, and brand prestige.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => onCursorChange('button')}
                  onMouseLeave={() => onCursorChange('default')}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all uppercase ${
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

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#0e0e12] border border-zinc-800 hover:border-cyan-500/50 flex flex-col justify-between overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Visual Header */}
                {service.sampleVisual && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                    <img
                      src={service.sampleVisual}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-black/40" />

                    {/* Price Badge */}
                    {service.badge && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono tracking-widest font-bold uppercase bg-black/80 border border-[#d4af37]/60 text-[#d4af37] backdrop-blur-md shadow-lg">
                        {service.badge}
                      </div>
                    )}

                    {/* Turnaround Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 border border-zinc-700 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{service.turnaroundTime}</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                      {service.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {isHi ? service.titleHi : service.title}
                  </h3>

                  <p className="text-xs font-mono text-[#d4af37] mt-1">
                    {isHi ? service.taglineHi : service.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 mt-3 font-sans leading-relaxed">
                    {isHi ? service.descriptionHi : service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-zinc-800/80">
                    {(isHi ? service.capabilitiesHi : service.capabilities).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{isHi ? 'विस्तृत विवरण देखें' : 'View Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                  </button>

                  <button
                    onClick={() =>
                      onBookAiService(
                        service.title,
                        `Selected Service: ${service.title} | Fixed Transparent Price Guarantee`
                      )
                    }
                    className="px-5 py-2 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                  >
                    {isHi ? 'यह विज्ञापन बुक करें' : 'Book This Ad'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================
          SECTION 3: TRANSPARENT PACKAGES (₹5,000 - ₹10,000)
          ======================================================================== */}
      <section id="ai-pricing-plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-zinc-800/80">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono tracking-widest uppercase mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{isHi ? 'पारदर्शी मूल्य निर्धारण' : 'TRANSPARENT FLAT PRICING'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white tracking-tight">
            {isHi ? (
              <>
                ₹5,000 से ₹10,000 — <span className="text-[#d4af37] font-serif italic">100% फिक्स रेट्स</span>
              </>
            ) : (
              <>
                Flat ₹5,000 to ₹10,000 — <span className="text-[#d4af37] font-serif italic">Zero Hidden Charges</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            {isHi
              ? 'कोई अतिरिक्त खर्च नहीं। हर पैकेज में कमर्शियल लाइसेंस, वॉयसओवर, ओरिजिनल म्यूजिक और 4K एक्सपोर्ट शामिल है।'
              : 'Every package comes fully loaded with commercial broadcast rights, studio voiceover, kinetic graphics, and fast delivery.'}
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {AI_TRANSPARENT_PLANS.map((plan: AiTransparentPlan, pIdx: number) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#141520] to-[#0c0d12] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/10'
                    : 'bg-[#0f0f13] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4af37] text-black font-mono font-bold text-[10px] tracking-widest uppercase shadow-md">
                    {isHi ? plan.badgeHi : plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                      {isHi ? plan.badgeHi : plan.badge}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">NO EXTRA FEES</span>
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase text-white">
                    {isHi ? plan.nameHi : plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-[#d4af37]">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase">/ FLAT RATE</span>
                  </div>

                  <p className="text-xs text-zinc-400 mt-2 font-sans">
                    {isHi ? plan.taglineHi : plan.tagline}
                  </p>

                  <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                      {isHi ? 'पैकेज में क्या शामिल है:' : "WHAT'S INCLUDED:"}
                    </span>
                    {(isHi ? plan.featuresHi : plan.features).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-6 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                      {isHi ? 'किसके लिए सबसे उपयुक्त:' : 'IDEAL FOR:'}
                    </span>
                    <p className="text-xs text-zinc-300 mt-1 font-sans">
                      {isHi ? plan.idealForHi : plan.idealFor}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() =>
                      onBookAiService(
                        `${plan.name} (${plan.price})`,
                        `Selected Plan: ${plan.name} at ${plan.price}. No camera, no model, no hidden charges.`
                      )
                    }
                    className={`w-full py-3 rounded font-mono font-bold text-xs uppercase tracking-widest transition-all ${
                      isPopular
                        ? 'bg-[#d4af37] hover:bg-[#e6c45e] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                    }`}
                  >
                    {isHi ? `${plan.price} में ऑर्डर करें` : `ORDER FOR ${plan.price}`}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-t from-cyan-950/40 via-zinc-900 to-zinc-950 border border-cyan-500/40 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-white">
            {isHi ? 'क्या आप अपने बिज़नेस का पहला AI विज्ञापन शुरू करने के लिए तैयार हैं?' : 'Ready to Launch Your High-Converting AI Business Ad?'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mt-3 font-sans">
            {isHi
              ? 'नो कैमरा, नो कैरेक्टर, नो मॉडल, नो हिडन चार्ज, नो अदर चार्ज। सिर्फ ₹5,000 से ₹10,000 में अपना शक्तिशाली AI कमर्शियल विज्ञापन बुक करें।'
              : 'Zero camera setup, zero actors, zero model booking, zero hidden charges. Start scaling your sales with cinema-grade AI commercials today.'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookAiService('AI Business Ad Campaign', 'Inquiry for AI Business Ad (₹5,000 - ₹10,000)')}
              className="w-full sm:w-auto px-8 py-3.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              {isHi ? 'विज्ञापन बुक करें (₹5,000 - ₹10,000)' : 'BOOK AI AD (₹5,000 - ₹10,000)'}
            </button>
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto px-6 py-3.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono tracking-widest uppercase transition-colors"
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
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-zinc-300 font-sans leading-relaxed mt-4">
                {isHi ? selectedServiceModal.descriptionHi : selectedServiceModal.description}
              </p>

              {/* Guarantees Reminder inside Modal */}
              <div className="mt-4 p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs text-red-200 font-mono">
                <span className="text-red-400 font-bold">100% TRANSPARENT:</span>{' '}
                {isHi
                  ? 'नो कैमरा • नो कैरेक्टर • नो मॉडल • नो हिडन चार्ज • नो अदर चार्ज'
                  : 'No Camera • No Character • No Model • No Hidden Charges • No Other Charges'}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800">
                <h4 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2">
                  {isHi ? 'मुख्य विशेषताएं' : 'Key Capabilities & Commercial Features'}
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
                    {isHi ? 'उपयोग किए जाने वाले AI इंजनों' : 'AI Production Engines'}
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
                    onBookAiService(svc.title, `AI Business Ad: ${svc.title}`);
                  }}
                  className="px-6 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_12px_rgba(34,211,238,0.4)]"
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
