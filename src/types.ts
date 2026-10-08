export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Wedding' | 'Festival' | 'Cultural' | 'Birthday' | 'Corporate' | 'Portrait' | 'Fashion' | 'Music' | 'Other';
  date: string;
  location: string;
  coverImage: string;
  highlightVideoUrl: string;
  shortStory: string;
  fullStory: string;
  bestPhotos: string[];
  btsPhotos: string[];
  team: { role: string; name: string }[];
  featured?: boolean;
}

export interface ConceptItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  youtubeUrl?: string;
  tag?: string;
  aspect: 'tall' | 'wide' | 'square';
  description: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'PORTRAIT' | 'EVENT' | 'PHOTO' | 'EDITORIAL' | 'COMMERCIAL';
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  cameraDetails: string;
  location: string;
  year: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  posterUrl: string;
  duration: string;
  client: string;
  description: string;
  tags: string[];
}

export interface ReelItem {
  id: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
  views: string;
  likes: string;
  caption: string;
  eventSlug?: string;
  instagramUrl?: string;
  backupVideoUrl?: string;
}

export interface BtsStage {
  id: string;
  number: string;
  phrase: string;
  heading: string;
  description: string;
  imageUrl: string;
  gearUsed: string;
  quote: string;
}

export interface ClientStory {
  id: string;
  clientName: string;
  eventTitle: string;
  date: string;
  clientPhoto: string;
  eventPhoto: string;
  message: string;
  highlightVideoUrl?: string;
  projectSlug?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  category: string;
  rawImage: string;
  finalImage: string;
  techNotes: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventLocation: string;
  pincode?: string;
  eventType: string;
  requiredServices: string[];
  message: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Booked' | 'Archived';
}

export interface PrivateGallery {
  id: string;
  code: string; // e.g. ABC123
  clientName: string;
  eventName: string;
  pin: string;
  eventDate: string;
  coverImage: string;
  photos: { id: string; url: string; title: string }[];
  highlightVideo?: string;
  downloadsEnabled: boolean;
}

export interface CreativeProfessional {
  id: string;
  name: string;
  discipline: 'Cinematography' | 'Photography' | 'Drone & Aerial' | 'Post-Production' | 'Sound & Audio' | 'Lighting & Directing';
  role: string;
  location: string;
  specialty: string;
  avatarUrl: string;
  experienceTag?: string;
  signatureGear?: string;
}

export interface AiServiceItem {
  id: string;
  category: 'product' | 'video' | 'spokesperson' | 'retail' | 'restaurant' | 'realestate' | 'campaign' | 'business' | string;
  categoryLabel: string;
  title: string;
  titleHi: string;
  tagline: string;
  taglineHi: string;
  description: string;
  descriptionHi: string;
  iconName: string;
  capabilities: string[];
  capabilitiesHi: string[];
  toolsUsed: string[];
  turnaroundTime: string;
  sampleVisual?: string;
  badge?: string;
}
