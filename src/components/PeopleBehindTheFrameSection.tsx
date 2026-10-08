import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  CheckCircle,
  Video,
  Camera,
  Compass,
  Sparkles,
  Scissors,
  Music,
  MapPin,
  ArrowRight,
  Bot,
} from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface CreativeArtist {
  id: string;
  name: string;
  role: string;
  roleHi: string;
  discipline: 'post' | 'cinema' | 'photo' | 'aerial' | 'audio' | 'directing';
  city: string;
  cityHi: string;
  experience: string;
  experienceHi: string;
  tools: string[];
  bio: string;
  bioHi: string;
  avatar: string;
  specialty: string;
  specialtyHi: string;
  hasBotLogo?: boolean;
}

interface PeopleBehindTheFrameSectionProps {
  onSelectArtistRole?: (role: string) => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const PeopleBehindTheFrameSection: React.FC<PeopleBehindTheFrameSectionProps> = ({
  onSelectArtistRole,
  onCursorChange,
}) => {
  const { t, isHindi } = useTranslation();
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const artists: CreativeArtist[] = [
    {
      id: 'artist-1',
      name: 'Kundan Nishad',
      role: 'Lead Cinematic Film Editor',
      roleHi: 'मुख्य सिनेमैटिक फ़िल्म एडिटर',
      discipline: 'post',
      city: 'Bhilai / Raipur',
      cityHi: 'भिलाई / रायपुर',
      experience: '7+ Years',
      experienceHi: '7+ वर्ष अनुभव',
      tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
      bio: 'Specializing in emotive rhythm pacing, non-linear celebration arcs, and cinematic multi-cam event assemblies.',
      bioHi: 'भावुक लयबद्ध गति, नॉन-लीनियर कथा-प्रवाह और मल्टी-कैमरा विवाह फुटेज के सिनेमैटिक संपादन में विशेषज्ञता।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1789832994/ChatGPT_Image_Sep_19_2026_09_04_21_PM.png',
      specialty: 'Long-Form Wedding Feature Films',
      specialtyHi: 'वेडिंग फ़ीचर फ़िल्म्स व लॉन्ग-फ़ॉर्म कट्स',
    },
    {
      id: 'artist-2',
      name: 'Shubham',
      role: 'Master Colorist & Finishing Artist',
      roleHi: 'मास्टर कलर ग्रेडर व फ़िनिशिंग आर्टिस्ट',
      discipline: 'post',
      city: 'Bhilai / Central India',
      cityHi: 'भिलाई / मध्य भारत',
      experience: '6+ Years',
      experienceHi: '6+ वर्ष अनुभव',
      tools: ['DaVinci Resolve Studio', 'Color Grading Panel', 'ACES Workflow'],
      bio: 'Crafting organic Kodak 2383 film-print emulation, custom skin-tone palettes, and mood-adaptive evening lighting grades.',
      bioHi: 'प्राकृतिक कोडक 2383 फ़िल्म प्रिंट लुक, बेदाग स्किन-टोन पैलेट और शाम की रोशनी का सिनेमाई ग्रेडिंग।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Filmic Color Science & Tone Balancing',
      specialtyHi: 'फ़िल्मी कलर साइंस एवं टोन बैलेंसिंग',
      hasBotLogo: true,
    },
    {
      id: 'artist-3',
      name: 'Damesh',
      role: 'Short-Form Video & Reels Master Editor',
      roleHi: 'शॉर्ट-फ़ॉर्म वीडियो व रील्स मास्टर एडिटर',
      discipline: 'post',
      city: 'Bhilai / Raipur',
      cityHi: 'भिलाई / रायपुर',
      experience: '5+ Years',
      experienceHi: '5+ वर्ष अनुभव',
      tools: ['Final Cut Pro', 'CapCut Pro Desktop', 'Motion'],
      bio: 'High-retention 9:16 vertical storytelling, rhythmic audio transitions, kinetic speed ramps, and viral teaser cuts.',
      bioHi: '9:16 वर्टिकल स्टोरीटेलिंग, संगीत-ताल पर आधारित कट्स, स्पीड रैंप और आकर्षक टीज़र एडिटिंग।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1789837136/damesh.png',
      specialty: 'High-Impact 9:16 Vertical Cinema Cuts',
      specialtyHi: 'प्रभावशाली 9:16 वर्टिकल रील्स व टीज़र',
    },
    {
      id: 'artist-4',
      name: 'Mukesh Sahu',
      role: 'Creative Director & Music Video Producer (Manve Films)',
      roleHi: 'क्रिएटिव डायरेक्टर एवं म्यूज़िक वीडियो प्रोड्यूसर (मानवे फ़िल्म्स)',
      discipline: 'cinema',
      city: 'Bhilai / Raipur',
      cityHi: 'भिलाई / रायपुर',
      experience: '8+ Years',
      experienceHi: '8+ वर्ष अनुभव',
      tools: ['Manve Films (YouTube)', 'Music Albums', 'Sony Cinema Line', 'DaVinci Resolve'],
      bio: 'Visionary creator behind Manve Films, directing hit music albums, song videos, dynamic YouTube productions, and cinematic visual stories.',
      bioHi: 'मानवे फ़िल्म्स यूट्यूब चैनल के निर्माता, सुपरहिट म्यूज़िक एल्बम्स, सॉन्ग्स और भव्य सिनेमाई वीडियो निर्माण के कुशल निर्देशक।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Music Albums, Songs & YouTube Video Production',
      specialtyHi: 'म्यूज़िक एल्बम्स, सॉन्ग्स व यूट्यूब वीडियो निर्माण',
      hasBotLogo: true,
    },
    {
      id: 'artist-5',
      name: 'Ravi',
      role: 'Principal Editorial & Candid Photographer',
      roleHi: 'मुख्य एडिटोरियल व कैंडिड फ़ोटोग्राफ़र',
      discipline: 'photo',
      city: 'Bhilai / Central India',
      cityHi: 'भिलाई / मध्य भारत',
      experience: '7+ Years',
      experienceHi: '7+ वर्ष अनुभव',
      tools: ['Sony A7R V', 'Hasselblad X2D', 'Leica 35mm f/1.4 Summilux'],
      bio: 'Unobtrusive documentary style, capturing fleeting micro-expressions, bridal intimate portraits, and timeless family candids.',
      bioHi: 'स्वाभाविक दस्तावेज़ी शैली, सूक्ष्म भावों, दुल्हन के भावुक पलों और पारिवारिक खुशियों को कैमरे में संजोना।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Fine-Art Emotional Photojournalism',
      specialtyHi: 'फ़ाइन-आर्ट इमोशनल कैंडिड फ़ोटोग्राफ़ी',
      hasBotLogo: true,
    },
    {
      id: 'artist-6',
      name: 'Pankaj',
      role: 'Licensed Drone & FPV Aerial Pilot',
      roleHi: 'लाइसेंस्ड ड्रोन व FPV एरियल पायलट',
      discipline: 'aerial',
      city: 'Bhilai / Pan-India',
      cityHi: 'भिलाई / पैन-इंडिया',
      experience: '6+ Years',
      experienceHi: '6+ वर्ष अनुभव',
      tools: ['DJI Inspire 3 (8K Full Frame)', 'Custom FPV 6S CineWhoop'],
      bio: 'Architectural reveal angles, dynamic low-altitude courtyard flythroughs, and cinematic high-elevation landscape establishing vistas.',
      bioHi: 'विशाल वेन्यू के विहंगम दृश्य, आंगन व मंडप के बीच से गतिशील FPV शॉट्स और लैंडस्केप सिनेमैटिक्स।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Precision Courtyard & Landscape Flythroughs',
      specialtyHi: 'प्रिसिजन वेन्यू फ़्लाईथ्रू व एरियल व्यू',
      hasBotLogo: true,
    },
    {
      id: 'artist-8',
      name: 'Devraj Singh',
      role: 'Creative Visual Director & Gaffer',
      roleHi: 'क्रिएटिव विजुअल डायरेक्टर व लाइटिंग हेड',
      discipline: 'directing',
      city: 'Jaipur / Raipur',
      cityHi: 'जयपुर / रायपुर',
      experience: '10+ Years',
      experienceHi: '10+ वर्ष अनुभव',
      tools: ['Aputure Electro Storm', 'Nanlite Pavotube', 'Wireless DMX'],
      bio: 'Sculpting dimensional light across massive celebration banquets without disturbing sacred ceremonies or guests.',
      bioHi: 'पवित्र रस्मों में बिना किसी बाधा के बड़े मंडपों व महलों में सिनेमाई प्रकाश व्यवस्था तैयार करना।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Atmospheric Heritage Lighting Design',
      specialtyHi: 'ऐतिहासिक वेन्यू व उत्सव लाइटिंग डिज़ाइन',
      hasBotLogo: true,
    },
    {
      id: 'artist-9',
      name: 'Meera Chawla',
      role: 'VFX & Motion Graphics Specialist',
      roleHi: 'VFX व मोशन ग्राफ़िक्स विशेषज्ञ',
      discipline: 'post',
      city: 'Pune / Remote',
      cityHi: 'पुणे / रिमोट',
      experience: '6+ Years',
      experienceHi: '6+ वर्ष अनुभव',
      tools: ['After Effects', 'Blender', 'Cinema 4D'],
      bio: 'Bespoke vintage typography title cards, subtle atmospheric particle enhancement, and clean digital object cleanup.',
      bioHi: 'विंटेज सिनेमाई टाइटल कार्ड्स, सूक्ष्म वातावरण कण और आधुनिक ग्राफ़िक्स क्लीनअप।',
      avatar: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1791441483/chat-bot-icon-virtual-smart-260nw-2478937553.webp',
      specialty: 'Vintage Title Typography & Visual Cleanup',
      specialtyHi: 'सिनेमाई टाइटल्स व विजुअल मोशन डिज़ाइन',
      hasBotLogo: true,
    },
  ];

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const matchesDiscipline =
        selectedDiscipline === 'all' || artist.discipline === selectedDiscipline;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        artist.name.toLowerCase().includes(q) ||
        artist.role.toLowerCase().includes(q) ||
        artist.roleHi.toLowerCase().includes(q) ||
        artist.city.toLowerCase().includes(q) ||
        artist.cityHi.toLowerCase().includes(q) ||
        artist.specialty.toLowerCase().includes(q) ||
        artist.specialtyHi.toLowerCase().includes(q) ||
        artist.tools.some((tk) => tk.toLowerCase().includes(q));
      return matchesDiscipline && matchesSearch;
    });
  }, [artists, selectedDiscipline, searchQuery]);

  const handleInquireRole = (role: string) => {
    if (onSelectArtistRole) {
      onSelectArtistRole(role);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="people-behind-the-frame"
      className="py-24 sm:py-32 bg-[#060608] text-zinc-300 relative overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[#d4af37] text-[11px] font-mono tracking-widest uppercase mb-4 shadow-inner">
            <Users className="w-3.5 h-3.5" />
            <span>{t('peopleBehindTheFrame.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-zinc-100 tracking-tight mb-4 font-serif">
            {t('peopleBehindTheFrame.heading')}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t('peopleBehindTheFrame.supportingText')}
          </p>

          <p className="text-[#d4af37] text-xs font-mono tracking-wider mt-2">
            {t('peopleBehindTheFrame.supportingLine')}
          </p>
        </div>

        {/* 50+ Highlight Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-[#d4af37]/50 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#d4af37] mb-1">
              {t('peopleBehindTheFrame.pillar1Num')}
            </div>
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1">
              {t('peopleBehindTheFrame.pillar1Label')}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              {t('peopleBehindTheFrame.pillar1Detail')}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-[#d4af37]/50 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-zinc-100 mb-1">
              {t('peopleBehindTheFrame.pillar2Num')}
            </div>
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1">
              {t('peopleBehindTheFrame.pillar2Label')}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              {t('peopleBehindTheFrame.pillar2Detail')}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-[#d4af37]/50 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-zinc-100 mb-1">
              {t('peopleBehindTheFrame.pillar3Num')}
            </div>
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1">
              {t('peopleBehindTheFrame.pillar3Label')}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              {t('peopleBehindTheFrame.pillar3Detail')}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-[#d4af37]/50 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#d4af37] mb-1">
              {t('peopleBehindTheFrame.pillar4Num')}
            </div>
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-1">
              {t('peopleBehindTheFrame.pillar4Label')}
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              {t('peopleBehindTheFrame.pillar4Detail')}
            </div>
          </div>
        </div>

        {/* Search & Discipline Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-900">
          {/* Discipline Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedDiscipline('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedDiscipline === 'all'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              {t('peopleBehindTheFrame.filterAll')}
            </button>

            <button
              onClick={() => setSelectedDiscipline('post')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                selectedDiscipline === 'post'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Scissors className="w-3 h-3" />
              <span>{t('peopleBehindTheFrame.filterPost')}</span>
            </button>

            <button
              onClick={() => setSelectedDiscipline('cinema')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                selectedDiscipline === 'cinema'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Video className="w-3 h-3" />
              <span>{t('peopleBehindTheFrame.filterCinematography')}</span>
            </button>

            <button
              onClick={() => setSelectedDiscipline('photo')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                selectedDiscipline === 'photo'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Camera className="w-3 h-3" />
              <span>{t('peopleBehindTheFrame.filterPhotography')}</span>
            </button>

            <button
              onClick={() => setSelectedDiscipline('aerial')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                selectedDiscipline === 'aerial'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Compass className="w-3 h-3" />
              <span>{t('peopleBehindTheFrame.filterAerial')}</span>
            </button>

            <button
              onClick={() => setSelectedDiscipline('directing')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                selectedDiscipline === 'directing'
                  ? 'bg-[#d4af37] text-black font-semibold'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
              onMouseEnter={() => onCursorChange('button')}
              onMouseLeave={() => onCursorChange('default')}
            >
              <Sparkles className="w-3 h-3" />
              <span>{t('peopleBehindTheFrame.filterLighting')}</span>
            </button>

            {artists.some((a) => a.discipline === 'audio') && (
              <button
                onClick={() => setSelectedDiscipline('audio')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                  selectedDiscipline === 'audio'
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <Music className="w-3 h-3" />
                <span>{t('peopleBehindTheFrame.filterAudio')}</span>
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('peopleBehindTheFrame.searchPlaceholder')}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Artists & Editors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArtists.map((artist) => {
            const displayRole = isHindi ? artist.roleHi : artist.role;
            const displayCity = isHindi ? artist.cityHi : artist.city;
            const displayExp = isHindi ? artist.experienceHi : artist.experience;
            const displayBio = isHindi ? artist.bioHi : artist.bio;
            const displaySpecialty = isHindi ? artist.specialtyHi : artist.specialty;

            return (
              <div
                key={artist.id}
                className="rounded-xl bg-zinc-950/70 border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] transition-all duration-300 group"
              >
                <div>
                  {/* Header with Avatar and Verified Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={artist.avatar}
                          alt={artist.name}
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/bot-avatar.jpg';
                          }}
                          className="w-12 h-12 rounded-full object-cover border border-zinc-700 group-hover:border-[#d4af37] transition-colors"
                        />
                        {artist.hasBotLogo && (
                          <div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0a0a0c] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-md shadow-black/80 ring-1 ring-black"
                            title="AI CineBot"
                            aria-label="AI CineBot"
                          >
                            <Bot className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-semibold text-zinc-100 group-hover:text-[#d4af37] transition-colors">
                            {artist.name}
                          </h3>
                          {artist.hasBotLogo && (
                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                              <Bot className="w-2.5 h-2.5" />
                              <span>BOT</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 font-mono">
                          {displayRole}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 p-1 rounded bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-mono flex items-center gap-1 border border-[#d4af37]/20">
                      <CheckCircle className="w-3 h-3" />
                      {t('peopleBehindTheFrame.badgeVerified')}
                    </span>
                  </div>

                  {/* Location & Experience Meta */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      {displayCity}
                    </span>
                    <span>•</span>
                    <span>{displayExp}</span>
                  </div>

                  {/* Bio & Specialty */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {displayBio}
                  </p>

                  {/* Specialty Pill */}
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 font-mono">
                      ✦ {displaySpecialty}
                    </span>
                  </div>
                </div>

                {/* Tools & Commission Action */}
                <div className="pt-4 border-t border-zinc-900 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {artist.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-black/60 text-zinc-400 text-[10px] font-mono border border-zinc-800/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInquireRole(artist.role)}
                    className="w-full py-2.5 rounded bg-zinc-900 hover:bg-[#d4af37] hover:text-black text-zinc-300 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 group/btn"
                    onMouseEnter={() => onCursorChange('button')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <span>{t('peopleBehindTheFrame.inquireRole')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke Crew Formation Callout Banner */}
        <div className="rounded-2xl border border-zinc-800/90 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono uppercase tracking-wider mb-4 border border-[#d4af37]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('peopleBehindTheFrame.collaborativeManifesto')}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-light text-zinc-100 font-serif mb-4">
            {t('peopleBehindTheFrame.collaborativeTitle')}
          </h3>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {t('peopleBehindTheFrame.collaborativeText')}
          </p>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e6c45e] transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            onMouseEnter={() => onCursorChange('button')}
            onMouseLeave={() => onCursorChange('default')}
          >
            <span>{t('peopleBehindTheFrame.ctaInquire')}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
