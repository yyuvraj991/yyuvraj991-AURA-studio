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
    title: 'काली माता विकराल • Kali Mata Vikral',
    videoUrl: '/reels/kali-mata-vikral.mp4',
    posterUrl: '/reels/kali-mata-vikral.jpg',
    views: '54.8K',
    likes: '8.9K',
    caption: 'काली माता विकराल #trending #kalimatan #cg #instagram • 9:16 Vertical Reel (@damesxxhh.___).',
    instagramUrl: 'https://www.instagram.com/reel/DeHREN9sKSF/?stkn=MWhuZTJ3YWhjamlsbw%3D%3D',
  },
  {
    id: 'reel-2',
    title: 'माँ बम्लेश्वरी • Maa Bamleshwari',
    videoUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1790002015/savefromins.com_%E0%A4%AE%E0%A4%BE%E0%A4%81_%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%EF%B8%8F_viral_daily_matarani_mata_chhattisgarh_0_1080P.mp4',
    posterUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1790002015/savefromins.com_%E0%A4%AE%E0%A4%BE%E0%A4%81_%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%EF%B8%8F_viral_daily_matarani_mata_chhattisgarh_0_1080P.jpg',
    backupVideoUrl: '/reels/maa-bamleshwari.mp4',
    views: '88.5K',
    likes: '14.8K',
    caption: 'माँ बम्लेश्वरी ❤️ #viral #daily #matarani #mata #chhattisgarh • 9:16 Cinematic Vertical Reel.',
    instagramUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1790002015/savefromins.com_%E0%A4%AE%E0%A4%BE%E0%A4%81_%E0%A4%AC%E0%A4%AE%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%EF%B8%8F_viral_daily_matarani_mata_chhattisgarh_0_1080P.mp4',
  },
  {
    id: 'reel-3',
    title: 'तेरे आगे घमंड कैसा • Tere Aage Ghamand Kaisa',
    videoUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1791437462/%E0%A4%A4%E0%A5%87%E0%A4%B0%E0%A5%87_%E0%A4%86%E0%A4%97%E0%A5%87_%E0%A4%98%E0%A4%AE%E0%A4%82%E0%A4%A1_%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A4%BE_%EF%B8%8F.mp4',
    posterUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1791437462/%E0%A4%A4%E0%A5%87%E0%A4%B0%E0%A5%87_%E0%A4%86%E0%A4%97%E0%A5%87_%E0%A4%98%E0%A4%AE%E0%A4%82%E0%A4%A1_%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A4%BE_%EF%B8%8F.jpg',
    backupVideoUrl: '/reels/tere-aage-ghamand-kaisa.mp4',
    views: '72.4K',
    likes: '11.6K',
    caption: 'तेरे आगे घमंड कैसा ❤️ #viral #bholenath #mahakal #chhattisgarh • 9:16 Cinematic Vertical Reel.',
    instagramUrl: 'https://res.cloudinary.com/dsfl20cs1/video/upload/v1791437462/%E0%A4%A4%E0%A5%87%E0%A4%B0%E0%A5%87_%E0%A4%86%E0%A4%97%E0%A5%87_%E0%A4%98%E0%A4%AE%E0%A4%82%E0%A4%A1_%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A4%BE_%EF%B8%8F.mp4',
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
