import { AiServiceItem } from '../types';

export interface AiBusinessGuarantee {
  id: string;
  badge: string;
  badgeHi: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  iconName: string;
}

export const AI_BUSINESS_GUARANTEES: AiBusinessGuarantee[] = [
  {
    id: 'no-camera',
    badge: 'NO CAMERA',
    badgeHi: 'नो कैमरा',
    title: 'No Physical Camera Required',
    titleHi: 'किसी महंगे कैमरे की जरूरत नहीं',
    description: 'Zero expensive camera equipment, RED/Sony FX setups, or rental overhead. 100% created with cutting-edge neural generative engines.',
    descriptionHi: 'महंगे 4K कैमरों, लेंसों और स्टूडियो उपकरणों के किराए का खर्च 0%। पूरा वीडियो अत्याधुनिक न्यूरल AI तकनीक से तैयार होता है।',
    iconName: 'Camera',
  },
  {
    id: 'no-character',
    badge: 'NO CHARACTER',
    badgeHi: 'नो कैरेक्टर',
    title: 'No Real Actors or Cast Crew',
    titleHi: 'किसी असली एक्टर या कैरेक्टर की जरूरत नहीं',
    description: 'No casting auditions, no actor availability issues, no daily artist fees. Photorealistic generative digital personas crafted to perfection.',
    descriptionHi: 'एक्टर्स ढूंढने, ऑडिशन लेने या उनकी भारी दैनिक फीस का कोई झंझट नहीं। सजीव AI अवतार और कैरेक्टर सीधे तैयार किए जाते हैं।',
    iconName: 'Users',
  },
  {
    id: 'no-model',
    badge: 'NO MODEL',
    badgeHi: 'नो मॉडल',
    title: 'No Expensive Models or Stylists',
    titleHi: 'किसी महंगे मॉडल या मेकअप का खर्च नहीं',
    description: 'Skip ₹30,000+ fashion model bookings, wardrobes, makeup artists, and studio lights. Everything is generated digitally with luxury aesthetics.',
    descriptionHi: 'फैशन मॉडल्स, मेकअप आर्टिस्ट और वार्डरोब पर हजारों रुपये फूंकने की कोई जरूरत नहीं। विश्वस्तरीय लक्जरी लुक सीधे जनरेट होता है।',
    iconName: 'ScanFace',
  },
  {
    id: 'no-hidden-charges',
    badge: 'NO HIDDEN CHARGES',
    badgeHi: 'नो हिडन चार्ज',
    title: '100% Transparent Flat Pricing',
    titleHi: '100% पारदर्शी — कोई छुपा हुआ खर्च नहीं',
    description: 'What you see is what you pay. Transparent flat rates strictly between ₹5,000 and ₹10,000 with complete clarity upfront.',
    descriptionHi: 'जो दाम तय होगा वही लगेगा। ₹5,000 से ₹10,000 के बीच पारदर्शी रेट — कोई हिडन चार्ज, एक्स्ट्रा रेंडर चार्ज या सरप्राइज बिल नहीं।',
    iconName: 'ShieldCheck',
  },
  {
    id: 'no-other-charges',
    badge: 'NO OTHER CHARGES',
    badgeHi: 'नो अदर चार्ज',
    title: 'Zero Extra Overhead or Hidden Fees',
    titleHi: 'कोई अन्य या अतिरिक्त शुल्क नहीं',
    description: 'Commercial rights, audio licensing, scriptwriting, voiceover, and full HD/4K delivery are all included within your single flat price.',
    descriptionHi: 'कमर्शियल राइट्स, वॉयसओवर, म्यूजिक और फुल HD/4K एक्सपोर्ट — सब कुछ इसी पैकेज में शामिल है, कोई दूसरा चार्ज कभी नहीं लिया जाता।',
    iconName: 'CheckCircle2',
  },
];

/* ========================================================================
   THE 4 CORE AI WORKFLOWS REQUESTED BY THE USER:
   1. AI Film
   2. AI Cinematic
   3. AI Ad
   4. AI Powerful Ad
   Price Range: ₹5,000 - ₹10,000
   ======================================================================== */
export const AI_SERVICES: AiServiceItem[] = [
  {
    id: 'ai-business-ad',
    category: 'ad',
    categoryLabel: 'AI Business Ad',
    title: 'AI Business Ad (हाई-कन्वर्टिंग बिज़नेस ऐड)',
    titleHi: 'AI बिज़नेस ऐड (दुकान, शोरूम व ब्रांड विज्ञापन)',
    tagline: 'Price: ₹5,000 | First 3-Sec Hook • 9:16 Vertical & 16:9 Format',
    taglineHi: 'मूल्य: ₹5,000 | 9:16 रील्स व 16:9 विज्ञापन • बिक्री बढ़ाने वाला ऐड',
    description:
      'Specially engineered for local retail stores, showrooms, e-commerce brands, and restaurants. Stop viewers scrolling on Instagram Reels, Meta Ads, and YouTube Shorts with dynamic offer graphics, trending audio, and high-energy voiceover that drives immediate customer walk-ins and inquiries.',
    descriptionHi:
      'दुकानों, शोरूम, रेस्टोरेंट और ऑनलाइन बिज़नेस के लिए विशेष AI विज्ञापन। इंस्टाग्राम, मेटा और यूट्यूब पर दर्शकों को पहले 3 सेकंड में रोककर सीधे कॉल, मैसेज और बिक्री लाने वाला संपूर्ण विज्ञापन। नो कैमरा, नो मॉडल, नो हिडन चार्ज।',
    iconName: 'Zap',
    capabilities: [
      'Scroll-stopping first 3-second psychological hook',
      'Dynamic offer badges, discounts, store location, and WhatsApp CTA',
      'Native energetic Indian voiceover (Hindi / Hinglish / Regional)',
      'Delivered in 9:16 vertical & 16:9 landscape in under 24-48 hours',
    ],
    capabilitiesHi: [
      'पहले 3 सेकंड में ध्यान खींचने वाला विजुअल हुक',
      'फेस्टिवल ऑफर, डिस्काउंट स्टिकर्स और दुकान के पते/नंबर के ग्राफिक्स',
      'जोशीला और स्वाभाविक हिंदी व लोकल लैंग्वेज वॉयसओवर',
      'नो कैमरा, नो मॉडल — मात्र 24 से 48 घंटे में तैयार',
    ],
    toolsUsed: ['Runway Gen-3 Commercial', 'Premiere Pro AI', 'After Effects Kinetic', 'ElevenLabs Indian Studio'],
    turnaroundTime: '24 - 48 Hours',
    sampleVisual: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    badge: '₹5,000 • STARTER AD',
  },
  {
    id: 'ai-cinematic',
    category: 'cinematic',
    categoryLabel: 'AI Cinematic',
    title: 'AI Cinematic (4K सिनेमाई मोशन व लाइटिंग)',
    titleHi: 'AI सिनेमैटिक (4K लक्जरी मोशन व हॉलीवुड लाइटिंग)',
    tagline: 'Price: ₹7,000 | Hollywood Color Grading & Anamorphic Angles',
    taglineHi: 'मूल्य: ₹7,000 | हॉलीवुड एनामोर्फिक कैमरा एंगल्स व 4K सिनेमैटिक विजुअल्स',
    description:
      'Experience grand cinema production without hiring heavy cranes, lighting teams, or expensive film cameras. We produce Hollywood-grade anamorphic lighting, fluid sweeping camera fly-throughs, ray-traced reflections, and orchestral sound design that give your brand a high-end luxury appeal.',
    descriptionHi:
      'बिना किसी क्रेन, भारी लाइटिंग या महंगे कैमरे के हॉलीवुड स्टाइल 4K सिनेमैटिक वीडियो। भव्य कैमरा एंगल्स, परफेक्ट लाइटिंग और ओरिजिनल साउंडट्रैक के साथ आपके बिज़नेस को मिलता है एक बेहद प्रीमियम और लक्जरी ब्रांड लुक।',
    iconName: 'Camera',
    capabilities: [
      '4K Anamorphic cinematic aspect ratio and Hollywood Kodak color tones',
      'Fluid drone-style swoops and impossible camera angles generated via AI',
      'Ray-traced photorealistic lighting, reflections, and atmospheric depth',
      'Cinematic Dolby-grade sound mastering with impact sound effects',
    ],
    capabilitiesHi: [
      '4K एनामोर्फिक सिनेमैटिक रेशियो व हॉलीवुड कलर ग्रेडिंग',
      'ड्रोन जैसे असंभव और भव्य कैमरा मूवमेंट्स',
      'असली कांच, मार्बल और लक्जरी वातावरण की 3D लाइटिंग',
      'सिनेमा-हॉल जैसी प्रभावशाली साउंड डिजाइनिंग व म्यूज़िक',
    ],
    toolsUsed: ['Luma Dream Machine Pro', 'DaVinci Resolve Neural', 'Runway Gen-3 Alpha', 'Topaz Video 8K'],
    turnaroundTime: '48 Hours',
    sampleVisual: 'https://res.cloudinary.com/dsfl20cs1/image/upload/v1774929887/prompts/images/iqtk4y1jrnjfmbj2gyfs.jpg',
    badge: '₹7,000 • CINEMA GRADE',
  },
  {
    id: 'ai-film',
    category: 'film',
    categoryLabel: 'AI Film',
    title: 'AI Film (ब्रांड स्टोरी व विज़न फ़िल्म)',
    titleHi: 'AI फ़िल्म (भावनात्मक ब्रांड स्टोरीटेलिंग व कॉर्पोरेट फ़िल्म)',
    tagline: 'Price: ₹8,500 | Deep Narrative Storytelling & Brand Legacy',
    taglineHi: 'मूल्य: ₹8,500 | ग्राहकों के दिलों को छूने वाली भावनात्मक ब्रांड स्टोरी',
    description:
      'A complete cinematic brand film that tells your company story, founder vision, and customer journey. Generated using generative neural characters, atmospheric environments, and deeply moving narrative scripts that turn ordinary viewers into lifelong loyal brand advocates.',
    descriptionHi:
      'आपकी कंपनी, विचार और विज़न पर बनी एक मुकम्मल AI फ़िल्म। बिना किसी एक्टर या शूटिंग के, केवल उच्च-स्तरीय AI स्टोरीटेलिंग से तैयार की गई एक ऐसी फ़िल्म जो ग्राहकों के दिलों में आपका अटूट विश्वास स्थापित करती है।',
    iconName: 'Film',
    capabilities: [
      'Full narrative scriptwriting with emotional storytelling arcs',
      'Hyper-realistic AI generated character scenes and atmospheric worlds',
      'Custom cinematic music score synchronized to emotional peaks',
      'Broadcast-ready 4K master export for website hero, YouTube, and TV',
    ],
    capabilitiesHi: [
      'ग्राहकों का विश्वास जीतने वाली दिल छू लेने वाली स्क्रिप्ट',
      'सजीव डिजिटल कैरेक्टर और खूबसूरत सिनेमैटिक लोकेशन्स',
      'कस्टम बैकग्राउंड म्यूजिक और प्रेरणादायक वॉयसओवर',
      'वेबसाइट, यूट्यूब और एलईडी स्क्रीन के लिए 4K अल्ट्रा एचडी आउटपुट',
    ],
    toolsUsed: ['Midjourney v6.1 Ultra', 'Runway Gen-3 Film Edition', 'Suno AI Master', 'DaVinci Studio'],
    turnaroundTime: '48 - 72 Hours',
    sampleVisual: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    badge: '₹8,500 • BRAND FILM',
  },
  {
    id: 'ai-powerful-ad',
    category: 'powerful',
    categoryLabel: 'AI Powerful Ad',
    title: 'AI Powerful Ad (अल्ट्रा हाई-कन्वर्टिंग सेल्स इंजन)',
    titleHi: 'AI पावरफुल ऐड (3 हुक वेरिएशन्स व अधिकतम बिक्री)',
    tagline: 'Price: ₹10,000 | 3 Testable Hooks • Maximum ROAS & Orders',
    taglineHi: 'मूल्य: ₹10,000 | 3 अलग-अलग हुक वेरिएशन्स • मेटा व इंस्टाग्राम पर तूफानी बिक्री',
    description:
      'Our flagship commercial advertising powerhouse. Includes 3 distinct psychological hook openings (curiosity, problem-agitation, offer-first) so you can A/B test your ad budget on Meta/Instagram to guarantee maximum orders, leads, and Return On Ad Spend (ROAS).',
    descriptionHi:
      'हमारा सबसे शक्तिशाली कमर्शियल ऐड पैकेज। इसमें आपको 1 नहीं, बल्कि 3 अलग-अलग हुक (शुरुआती 3 सेकंड के टेस्टेबल वेरिएशन्स) मिलते हैं ताकि कम विज्ञापन खर्च में भी ज्यादा से ज्यादा ग्राहक, लीड्स और ऑर्डर्स मिलें। 100% पारदर्शी, नो हिडन चार्ज।',
    iconName: 'Rocket',
    capabilities: [
      '3 distinct psychological hook variations included for ad spend testing',
      'Direct response persuasion architecture proven to slash Cost-Per-Acquisition',
      'Ultra high-energy local Indian voiceover with urgent scarcity triggers',
      'Multiple aspect ratios included: 9:16 (Reels/Stories) + 1:1 (Feed) + 16:9 (YouTube)',
    ],
    capabilitiesHi: [
      '3 अलग-अलग हुक वेरिएशन्स — टेस्ट करें और सबसे ज्यादा बिकने वाला ऐड चलाएं',
      'फेसबुक व इंस्टाग्राम ऐड्स पर ग्राहक पाने का खर्च (CPA) 45% तक कम करना',
      'जोशीला और आत्मविश्वास से भरा वॉयसओवर और लिमिटेड टाइम ऑफर स्टिकर्स',
      'सभी साइज़ शामिल: 9:16 (रील्स), 1:1 (पोस्ट) और 16:9 (यूट्यूब)',
    ],
    toolsUsed: ['HeyGen Commercial Pro', 'Runway Gen-3 Turbo', 'CapCut Pro Enterprise', 'ElevenLabs Pro Dubbing'],
    turnaroundTime: '48 Hours',
    sampleVisual: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    badge: '₹10,000 • ULTIMATE POWERFUL',
  },
];

/* ========================================================================
   TRANSPARENT FLAT PACKAGES (₹5,000 - ₹10,000)
   ======================================================================== */
export interface AiTransparentPlan {
  id: string;
  name: string;
  nameHi: string;
  price: string;
  priceNum: number;
  badge: string;
  badgeHi: string;
  tagline: string;
  taglineHi: string;
  features: string[];
  featuresHi: string[];
  idealFor: string;
  idealForHi: string;
  popular?: boolean;
}

export const AI_TRANSPARENT_PLANS: AiTransparentPlan[] = [
  {
    id: 'starter-ai-ad',
    name: 'AI Business Ad',
    nameHi: 'AI बिज़नेस ऐड',
    price: '₹5,000',
    priceNum: 5000,
    badge: 'ENTRY LEVEL',
    badgeHi: 'शुरुआती ऐड',
    tagline: 'High-converting 9:16 video ad for retail shops, cafes & local businesses',
    taglineHi: 'दुकान, शोरूम व लोकल बिज़नेस के लिए पहले 3 सेकंड में ध्यान खींचने वाला ऐड',
    features: [
      '1x 9:16 Vertical High-Converting Video Ad',
      'First 3-Second Scroll Stopping Hook',
      'Dynamic Offer Badges, WhatsApp CTA & Store Address',
      'High-Energy Hindi / Hinglish Studio Voiceover',
      'NO Camera • NO Model • NO Actor Needed',
      'NO Hidden Charges • NO Other Charges',
      '24-48 Hours Delivery',
    ],
    featuresHi: [
      '1x 9:16 वर्टिकल हाई-कन्वर्टिंग वीडियो ऐड',
      'पहले 3 सेकंड में स्क्रॉल रोकने वाला आकर्षक हुक',
      'ऑफर स्टीकर्स, दुकान का पता व व्हाट्सएप बटन',
      'जोशीला और स्वाभाविक हिंदी वॉयसओवर',
      'नो कैमरा • नो मॉडल • नो एक्टर',
      'नो हिडन चार्ज • नो अदर चार्ज',
      '24 से 48 घंटे में डिलीवरी',
    ],
    idealFor: 'Local Shops, Retail Marts, Boutiques, Cafes',
    idealForHi: 'लोकल दुकानें, कपड़े की दुकानें, कैफ़े, सैलून, मिठाई की दुकानें',
  },
  {
    id: 'cinematic-ai-ad',
    name: 'AI Cinematic Ad',
    nameHi: 'AI सिनेमैटिक ऐड',
    price: '₹7,500',
    priceNum: 7500,
    badge: 'MOST POPULAR',
    badgeHi: 'सबसे ज्यादा लोकप्रिय',
    tagline: '4K luxury visuals, Hollywood lighting & ray-traced product motion',
    taglineHi: '4K हॉलीवुड स्टाइल सिनेमैटिक लाइटिंग, लक्जरी विजुअल्स व शानदार एंगल्स',
    features: [
      '1x 4K Ultra Cinematic Video Ad (9:16 + 16:9)',
      'Hollywood Kodak Color Grading & Anamorphic Lighting',
      'Ray-Traced 3D Luxury Reflections & Impossible Drone Angles',
      'Dolby-Grade Sound Design & Impact Beats',
      '2 Distinct Hook Variations Included for Ad Testing',
      'NO Camera • NO Model • NO Character Needed',
      'NO Hidden Charges • NO Other Charges',
      'Full Commercial Broadcast License Included',
    ],
    featuresHi: [
      '1x 4K अल्ट्रा सिनेमैटिक वीडियो ऐड (9:16 + 16:9)',
      'हॉलीवुड एनामोर्फिक लाइटिंग व कोडैक कलर टोन',
      '3D लक्जरी रिफ्लेक्शन और ड्रोन जैसे भव्य कैमरा एंगल्स',
      'डॉलबी-ग्रेड सिनेमैटिक साउंड इफेक्ट्स व बैकग्राउंड स्कोर',
      '2 अलग-अलग हुक वेरिएशन्स (टेस्टिंग के लिए)',
      'नो कैमरा • नो मॉडल • नो कैरेक्टर',
      'नो हिडन चार्ज • नो अदर चार्ज',
      'पूर्ण 100% कमर्शियल राइट्स शामिल',
    ],
    idealFor: 'Jewelry Brands, D2C Products, Real Estate, Fine Dining',
    idealForHi: 'ज्वेलरी शोरूम, ई-कॉमर्स प्रोडक्ट्स, लक्जरी रेस्टोरेंट, बिल्डर्स',
    popular: true,
  },
  {
    id: 'ultimate-powerful-ai',
    name: 'AI Powerful Ad & Film',
    nameHi: 'AI पावरफुल ऐड व फ़िल्म',
    price: '₹10,000',
    priceNum: 10000,
    badge: 'MAXIMUM SALES',
    badgeHi: 'अधिकतम सेल्स व ROAS',
    tagline: 'Cinema-grade brand film + 3 testable ad variations for maximum ROAS',
    taglineHi: 'मुकम्मल ब्रांड फ़िल्म + 3 टेस्टेबल हुक्स — मेटा व इंस्टाग्राम पर रिकॉर्ड बिक्री',
    features: [
      '1x Complete Cinematic Brand Film (Up to 60-90 sec)',
      '3x Distinct Psychological Hook Variations for Meta Ad Spend Testing',
      'All Aspect Ratios: 9:16 (Reels) + 1:1 (Feed) + 16:9 (YouTube)',
      'Narrative Emotional Storytelling & Generative Digital Cast',
      'Hyper-Converting Sales Script Architecture (AIDA Model)',
      'NO Camera • NO Model • NO Character Needed',
      'NO Hidden Charges • NO Other Charges',
      'Priority 48-Hour Express Production',
    ],
    featuresHi: [
      '1x संपूर्ण सिनेमैटिक ब्रांड फ़िल्म (60-90 सेकंड)',
      '3x अलग-अलग हुक वेरिएशन्स (कम बजट में ज्यादा बिक्री के लिए)',
      'सभी साइज़: 9:16 (रील्स), 1:1 (मेटा फीड) और 16:9 (यूट्यूब)',
      'भावनात्मक स्टोरीटेलिंग और सजीव AI विजुअल्स',
      'अधिकतम बिक्री लाने वाला डायरेक्ट-रिस्पॉन्स विज्ञापन ढांचा',
      'नो कैमरा • नो मॉडल • नो कैरेक्टर',
      'नो हिडन चार्ज • नो अदर चार्ज',
      'प्राथमिकता पर 48 घंटे में एक्सप्रेस डिलीवरी',
    ],
    idealFor: 'Startups, High-Growth Brands, Multi-City Stores, Influencer Brands',
    idealForHi: 'ग्रोइंग ब्रांड्स, बड़े शोरूम्स, स्टार्टअप्स, ऑनलाइन स्टोर्स',
  },
];
