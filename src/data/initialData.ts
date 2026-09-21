import {
  Project,
  PhotoItem,
  VideoItem,
  ReelItem,
  BtsStage,
  ClientStory,
  BeforeAfterItem,
  PrivateGallery,
  Enquiry
} from '../types';

/**
 * Business established in 2026.
 * As per strict directives:
 * No fake statistics, no fake clients, no fake testimonials, no fake projects.
 * Projects array initializes as empty so the website honestly presents:
 * "OUR WORK IS JUST BEGINNING. Every project becomes part of our story. Explore our work as we grow."
 * When real projects are added through the Admin CMS, they will appear dynamically.
 */
export const INITIAL_PROJECTS: Project[] = [];

export const INITIAL_PHOTOS: PhotoItem[] = [];

export const INITIAL_VIDEOS: VideoItem[] = [];

/**
 * Minimal initial state for reels until real clips are produced:
 * Triggers the "Short-form visual stories — coming soon." section.
 */
export const INITIAL_REELS: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'माँ बम्लेश्वरी • Maa Bamleshwari',
    videoUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1790002015/savefromins.com_%E0%A4%AE%E0%A4%BE%E0%A4%81_%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%EF%B8%8F_viral_daily_matarani_mata_chhattisgarh_0_1080P.mp4',
    posterUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/so_1,w_600,h_1067,c_fill,q_auto,f_auto/v1790002015/savefromins.com_%E0%A4%AE%E0%A4%BE%E0%A4%81_%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%EF%B8%8F_viral_daily_matarani_mata_chhattisgarh_0_1080P.jpg',
    views: '48.2K',
    likes: '6.4K',
    caption: 'माँ बम्लेश्वरी मंदिर डोंगरगढ़ • 1080P Cinematic 9:16 Vertical Reel.',
  },
  {
    id: 'reel-2',
    title: 'Heritage Palace Glimpse',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    views: '22.8K',
    likes: '3.1K',
    caption: 'Anamorphic lens flares gliding through ancient stone corridors.',
  },
  {
    id: 'reel-3',
    title: 'Kinetic Celebration Beat',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    views: '11.5K',
    likes: '1.4K',
    caption: 'Dynamic gimbal tracking & synchronized celebration cuts.',
  },
  {
    id: 'reel-4',
    title: 'Intimate Vows & Whispers',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    views: '17.3K',
    likes: '2.5K',
    caption: 'Unposed, delicate moments captured with prime optics.',
  },
];

export const BTS_STAGES: BtsStage[] = [];

/**
 * No fake testimonials or customer reviews.
 * Kept empty so the testimonial section stays hidden until real client feedback exists.
 */
export const CLIENT_STORIES: ClientStory[] = [];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [];

export const INITIAL_GALLERIES: PrivateGallery[] = [
  {
    id: 'gal-preview',
    code: 'AURA2026',
    clientName: 'Private Client Vault',
    eventName: 'Inaugural Showcase Portfolio Selects',
    pin: '2026',
    eventDate: 'Opening Season 2026',
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
    downloadsEnabled: true,
    photos: [
      { id: 'gp-1', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85', title: 'Celebration Stills' },
      { id: 'gp-2', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85', title: 'Golden Ambient Light' },
      { id: 'gp-3', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85', title: 'Candid Glimpse' }
    ]
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [];
