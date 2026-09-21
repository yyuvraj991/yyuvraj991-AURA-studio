import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ChevronLeft, ChevronRight, Play, Pause, Sparkles, Film, Award, CheckCircle2 } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface BehindTheLensSectionProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

interface Principle {
  number: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

interface StudioLeader {
  id: string;
  tabLabelEn: string;
  tabLabelHi: string;
  badgeEn: string;
  badgeHi: string;
  directorTitleEn: string;
  directorTitleHi: string;
  nameEn: string;
  nameHi: string;
  roleEn: string;
  roleHi: string;
  image: string;
  imageAlt: string;
  bioEn: string;
  bioHi: string;
  principlesHeadingEn: string;
  principlesHeadingHi: string;
  principles: Principle[];
}

export const BehindTheLensSection: React.FC<BehindTheLensSectionProps> = ({ onCursorChange }) => {
  const { t, isHindi } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const leaders: StudioLeader[] = [
    {
      id: 'yuvraj',
      tabLabelEn: '01 • Yuvraj',
      tabLabelHi: '01 • युवराज',
      badgeEn: 'FOUNDER & VISUAL LEAD',
      badgeHi: 'संस्थापक एवं विजुअल लीड',
      directorTitleEn: 'THE CREATIVE BEHIND THE CAMERA',
      directorTitleHi: 'कैमरे के पीछे का कलाकार',
      nameEn: 'Yuvraj',
      nameHi: 'युवराज',
      roleEn: 'Director of Photography & Founder',
      roleHi: 'संस्थापक एवं मुख्य सिनेमैटोग्राफ़र',
      image: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1789834056/yuvraj.png',
      imageAlt: 'Yuvraj - Founder & Visual Lead',
      bioEn:
        'We started this studio out of a genuine passion for natural light, visual rhythm, and authentic human emotion. Rather than relying on rehearsed poses or artificial theatrics, we bring fresh eyes, patient observation, and relentless care to every frame.',
      bioHi:
        'हमने ऑरा सिनेमैटिक्स की शुरुआत इस सरल विश्वास के साथ की: सबसे मार्मिक दृश्य भारी-भरकम क्रू या शोरगुल से नहीं, बल्कि सूक्ष्म अवलोकन, सच्ची सहानुभूति और कला के प्रति जुनून से पैदा होते हैं। एक नए स्टूडियो के रूप में, हर प्रोजेक्ट हमारे लिए दिल के करीब है।',
      principlesHeadingEn: 'Our Guiding Values',
      principlesHeadingHi: 'हमारे मूल सिद्धांत',
      principles: [
        {
          number: '01',
          titleEn: 'Fresh Eyes, No Templates',
          titleHi: 'ताज़ा दृष्टि, कोई तय ढांचा नहीं',
          descEn:
            'Every celebration has its own heartbeat. We treat your story as an original film, never repeating formulaic shots.',
          descHi:
            'हर आयोजन अनोखा होता है। हम रटे-रटाए पोज़ से बचते हैं और हर कहानी को एक मौलिक फ़िल्म की तरह रचते हैं।',
        },
        {
          number: '02',
          titleEn: 'Unobtrusive Presence',
          titleHi: 'सहज और शांत उपस्थिति',
          descEn:
            'We believe the best moments happen when people forget the camera is there. We document candidly and respectfully.',
          descHi:
            'लोग तब सबसे सुंदर दिखते हैं जब वे कैमरे को भूल जाते हैं। हम शांत और आदरपूर्ण तरीक़े से काम करते हैं।',
        },
        {
          number: '03',
          titleEn: 'Obsession with Craft',
          titleHi: 'बारीकियों पर निरंतर ध्यान',
          descEn:
            'From deliberate composition to filmic color grading, we obsess over every frame so your memories endure.',
          descHi:
            'सटीक कम्पोज़ीशन से लेकर फ़िल्मी कलर ग्रेडिंग तक, हम हर फ़्रेम पर जी-जान लगाते हैं।',
        },
      ],
    },
    {
      id: 'partner',
      tabLabelEn: '02 • Partner',
      tabLabelHi: '02 • पार्टनर',
      badgeEn: 'CO-FOUNDER & CREATIVE PARTNER',
      badgeHi: 'सह-संस्थापक एवं क्रिएटिव पार्टनर',
      directorTitleEn: 'THE VISION & PRODUCTION CO-DIRECTOR',
      directorTitleHi: 'विज़न व प्रोडक्शन के सह-निर्देशक',
      nameEn: 'Partner Name',
      nameHi: 'पार्टनर का नाम',
      roleEn: 'Co-Founder & Creative Director',
      roleHi: 'सह-संस्थापक एवं रचनात्मक निर्देशक',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85',
      imageAlt: 'Co-Founder & Creative Partner',
      bioEn:
        'Partnering closely on every project to manage lighting architecture, visual design, and real-time storytelling balance. Ensuring each shoot flows seamlessly from raw celebratory emotion to enduring cinematic art.',
      bioHi:
        'हर प्रोजेक्ट में विजुअल डिज़ाइन, लाइटिंग आर्किटेक्चर और स्टोरीटेलिंग के समन्वय का नेतृत्व। यह सुनिश्चित करना कि हर शूट सहजता से वास्तविक भावनाओं को स्थायी सिनेमाई कला में रूपांतरित करे।',
      principlesHeadingEn: 'Guiding Focus',
      principlesHeadingHi: 'मार्गदर्शक दृष्टिकोण',
      principles: [
        {
          number: '01',
          titleEn: 'Cinematic Lighting',
          titleHi: 'सिनेमैटिक लाइटिंग',
          descEn:
            'Balancing ambient festive glow with delicate accent lighting to craft painterly cinematic frames.',
          descHi:
            'त्योहारी चमक और सूक्ष्म लाइटिंग के सामंजस्य से पेंटिंग जैसी सिनेमाई छवियाँ तैयार करना।',
        },
        {
          number: '02',
          titleEn: 'Seamless Direction',
          titleHi: 'सहज रचनात्मक निर्देशन',
          descEn:
            'Keeping couples and families relaxed and spontaneous while coordinating multi-camera coverage.',
          descHi:
            'परिवार और वर-वधू को तनावमुक्त रखते हुए मल्टी-कैमरा कवरेज को सुचारू रूप से संचालित करना।',
        },
        {
          number: '03',
          titleEn: 'Archival Quality',
          titleHi: 'स्थायी संग्रहणीय गुणवत्ता',
          descEn:
            'Curating crystal-clear audio and timeless finishing so your visual legacy looks spectacular for decades.',
          descHi:
            'क्रिस्टल क्लियर ऑडियो और क्लासिक फिनिशिंग ताकि आपकी यादें दशकों तक जीवंत रहें।',
        },
      ],
    },
  ];

  // 3-second automatic slide interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, leaders.length]);

  const currentLeader = leaders[currentIndex];

  const handlePrev = () => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section
      id="behind-the-lens"
      className="py-24 sm:py-36 bg-[#08080a] text-zinc-100 border-t border-zinc-900 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.07),rgba(255,255,255,0))]" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('behindTheLens.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white mb-3">
              {t('behindTheLens.heading')}
            </h2>
            <p className="text-zinc-400 font-editorial text-lg sm:text-xl italic">
              “{t('behindTheLens.subtitle')}”
            </p>
          </div>

          {/* Top Status & 3s Indicator */}
          <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800/90 rounded-xl px-3.5 py-2 backdrop-blur-md self-start md:self-auto shadow-lg">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPaused ? 'bg-zinc-500' : 'bg-[#d4af37]'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPaused ? 'bg-zinc-400' : 'bg-[#d4af37]'}`} />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-zinc-300 uppercase">
                {isPaused ? (isHindi ? 'रोका गया (Paused)' : 'PAUSED ON HOVER') : (isHindi ? 'ऑटो 3 सेकंड' : 'AUTO 3 SECONDS')}
              </span>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 rounded text-zinc-400 hover:text-[#d4af37] transition-colors"
              title={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
              aria-label={isPaused ? 'Resume auto-slide' : 'Pause auto-slide'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Cinematic Masterpiece Card */}
        <div className="relative bg-gradient-to-b from-zinc-950 via-[#0d0d12] to-zinc-950 border border-zinc-800/90 hover:border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.06)] transition-all duration-500 overflow-hidden">
          {/* Cinema Camera HUD Corner Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/50 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/50 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/50 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/50 pointer-events-none" />

          {/* Film Metadata Header Strip */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-8 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <span className="flex items-center gap-2">
              <Film className="w-3 h-3 text-[#d4af37]" />
              <span>AURA CINEMATICS • STUDIO DIRECTORS</span>
            </span>
            <span className="text-[#d4af37] hidden sm:inline">24 FPS • ARRI RAW GRADE</span>
            <span>PROFILE 0{currentIndex + 1} / 0{leaders.length}</span>
          </div>

          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={currentLeader.id}
              custom={slideDirection}
              initial={{ opacity: 0, x: slideDirection * 45, filter: 'blur(4px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: slideDirection * -45, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Creative Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-zinc-800 group shadow-2xl bg-zinc-900">
                  {/* Subtle golden corner lights */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/20 z-10" />
                  
                  <img
                    src={currentLeader.image}
                    alt={currentLeader.imageAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* Camera Viewfinder Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-10 h-10 border border-[#d4af37] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                    </div>
                  </div>

                  {/* Bottom Portrait Badge & Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-lg text-[10px] font-mono tracking-widest uppercase bg-black/85 backdrop-blur-md border border-[#d4af37] text-[#d4af37] shadow-lg font-semibold">
                        {isHindi ? currentLeader.badgeHi : currentLeader.badgeEn}
                      </span>
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md border border-zinc-700">
                        EST. 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Craft Ethos */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-mono tracking-[0.25em] uppercase mb-3">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    {isHindi ? currentLeader.directorTitleHi : currentLeader.directorTitleEn}
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight leading-none mb-2">
                    {isHindi ? currentLeader.nameHi : currentLeader.nameEn}
                  </h3>

                  <p className="text-sm font-mono text-[#d4af37]/90 font-medium">
                    {isHindi ? currentLeader.roleHi : currentLeader.roleEn}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed border-l-2 border-[#d4af37]/40 pl-4 py-1">
                  {isHindi ? currentLeader.bioHi : currentLeader.bioEn}
                </p>

                {/* Guiding Principles Cards */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                      {isHindi ? currentLeader.principlesHeadingHi : currentLeader.principlesHeadingEn}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {currentLeader.principles.map((principle, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#d4af37]/40 hover:bg-zinc-900/90 transition-all duration-300 group"
                      >
                        <span className="text-[10px] font-mono text-[#d4af37] font-bold block mb-1">
                          {principle.number} //
                        </span>
                        <span className="text-xs font-display font-bold text-white block mb-1.5 group-hover:text-[#d4af37] transition-colors">
                          {isHindi ? principle.titleHi : principle.titleEn}
                        </span>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          {isHindi ? principle.descHi : principle.descEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* SLIDE CONTROL DOCK - Positioned exactly where user circled, styled with high craftsmanship */}
          <div
            id="partner-slide-controls"
            className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
          >
            {/* Left: Interactive Profile Tabs with live 3-second progress timer */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {leaders.map((leader, index) => {
                const isActive = currentIndex === index;
                return (
                  <button
                    key={leader.id}
                    id={`slide-partner-tab-${leader.id}`}
                    onClick={() => goToSlide(index)}
                    className={`relative overflow-hidden flex-1 sm:flex-initial px-4 py-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? 'bg-zinc-900 border border-[#d4af37] text-white shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                        : 'bg-black/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {/* Small Leader Thumbnail */}
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-700 flex-shrink-0">
                      <img src={leader.image} alt={leader.nameEn} className="w-full h-full object-cover object-top" />
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="font-bold text-xs">
                        {isHindi ? leader.tabLabelHi : leader.tabLabelEn}
                      </span>
                      <span className="text-[9px] text-zinc-500">
                        {leader.id === 'yuvraj' ? 'Founder' : 'Co-Founder'}
                      </span>
                    </div>

                    {/* 3-Second Active Progress Bar Line */}
                    {isActive && !isPaused && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800 overflow-hidden">
                        <motion.div
                          key={`${currentIndex}-${isPaused}`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, ease: 'linear' }}
                          className="h-full bg-gradient-to-r from-[#d4af37] via-amber-300 to-[#d4af37]"
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Slide Controls (Prev / Next & 3s Auto badge) */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">
                  {isHindi ? 'स्लाइड' : 'Slide'}:{' '}
                  <span className="text-[#d4af37] font-bold">0{currentIndex + 1}</span> / 0{leaders.length}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  ⏱ 3s
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="slide-partner-prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous partner profile"
                  className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-[#d4af37] hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all group flex items-center gap-2 text-xs font-mono shadow-md"
                  title="Previous profile"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#d4af37]" />
                  <span className="hidden sm:inline text-xs text-zinc-300">
                    {isHindi ? 'पिछला' : 'Prev'}
                  </span>
                </button>

                <button
                  id="slide-partner-next-btn"
                  onClick={handleNext}
                  aria-label="Next partner profile"
                  className="p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/60 hover:border-[#d4af37] hover:bg-[#d4af37]/20 text-white transition-all group flex items-center gap-2 text-xs font-mono shadow-md"
                  title="Next profile"
                >
                  <span className="hidden sm:inline text-xs font-semibold text-[#d4af37]">
                    Next
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#d4af37]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


