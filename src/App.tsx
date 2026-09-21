/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_PROJECTS,
  INITIAL_GALLERIES,
  INITIAL_ENQUIRIES,
  INITIAL_REELS,
} from './data/initialData';
import { Project, Enquiry, PrivateGallery } from './types';
import { CustomCursor, CursorType } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeCreateSection } from './components/WhatWeCreateSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ConceptShowcaseSection } from './components/ConceptShowcaseSection';
import { BehindTheLensSection } from './components/BehindTheLensSection';
import { PeopleBehindTheFrameSection } from './components/PeopleBehindTheFrameSection';
import { ReelsSection } from './components/ReelsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { EventStoryModal } from './components/EventStoryModal';
import { PrivateGalleryModal } from './components/PrivateGalleryModal';
import { AiStudioPage } from './components/AiStudioPage';
import { I18nProvider } from './context/I18nContext';

function AppContent() {
  // Page Navigation: 'home' | 'ai'
  const [currentPage, setCurrentPage] = useState<'home' | 'ai'>('home');

  // Persistence via localStorage for Projects, Enquiries, and Client Vaults
  // Uses v2 key to ensure honest new 2026 studio state without stale mock project seeds
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('aura_projects_v2');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem('aura_enquiries_v2');
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  const [galleries, setGalleries] = useState<PrivateGallery[]>(() => {
    const saved = localStorage.getItem('aura_galleries_v2');
    return saved ? JSON.parse(saved) : INITIAL_GALLERIES;
  });

  // Modals & Navigation Overlays
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  // Booking form prefill state
  const [bookingPrefill, setBookingPrefill] = useState<{
    service?: string;
    eventTitle?: string;
  }>({});

  // Custom Cursor state
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string | undefined>(undefined);

  // Synchronize to localStorage
  useEffect(() => {
    localStorage.setItem('aura_projects_v2', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('aura_enquiries_v2', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('aura_galleries_v2', JSON.stringify(galleries));
  }, [galleries]);

  const handleCursorChange = (type: CursorType, text?: string) => {
    setCursorType(type);
    setCursorText(text);
  };

  const handlePrefillBooking = (service?: string, title?: string) => {
    setBookingPrefill({
      service: service || 'Photography + Videography',
      eventTitle: title,
    });
    if (currentPage === 'ai') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleBookFromAi = (serviceName: string, notes?: string) => {
    handlePrefillBooking(`AI: ${serviceName}`, notes);
  };

  const handleNavigate = (page: 'home' | 'ai', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddEnquiry = (newEnq: Enquiry) => {
    setEnquiries((prev) => [newEnq, ...prev]);
  };

  const handleUpdateEnquiryStatus = (enquiryId: string, status: Enquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === enquiryId ? { ...e, status } : e))
    );
  };

  const handleAddProject = (project: Project) => {
    setProjects((prev) => [project, ...prev]);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleAddGallery = (gallery: PrivateGallery) => {
    setGalleries((prev) => [gallery, ...prev]);
  };

  const unreadEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#d4af37]/30 selection:text-[#fef08a] overflow-x-hidden font-sans">
      {/* 1. Desktop Custom Interactive Cursor */}
      <CustomCursor cursorType={cursorType} cursorText={cursorText} />

      {/* 2. Top Navigation Bar (with Multilingual Switcher: EN | हिंदी) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onCursorChange={handleCursorChange}
      />

      {currentPage === 'ai' ? (
        /* Dedicated AI Studio & Workflows Page */
        <AiStudioPage
          onBackToHome={() => handleNavigate('home')}
          onBookAiService={handleBookFromAi}
          onCursorChange={handleCursorChange}
        />
      ) : (
        <main>
          {/* Step 1: Cinematic Hero ("YOUR MOMENTS. OUR VISION.") */}
          <HeroSection onCursorChange={handleCursorChange} />

          {/* Step 2: Concept / Demo Showcase (Placed right above Reels) */}
          <ConceptShowcaseSection
            onSelectConcept={(conceptTitle) =>
              handlePrefillBooking('Creative Visuals', conceptTitle)
            }
            onCursorChange={handleCursorChange}
          />

          {/* Step 3: Reels & Short Stories (Vertical Cinema) */}
          <ReelsSection
            reels={INITIAL_REELS}
            onSelectEventSlug={() => {}}
            onCursorChange={handleCursorChange}
          />

          {/* Step 4: What We Create (Photography, Videography, Cinematic Films, Reels, Creative Visuals, AI Lab) */}
          <WhatWeCreateSection
            onSelectService={(svc) => handlePrefillBooking(svc)}
            onOpenAiStudio={() => handleNavigate('ai')}
            onCursorChange={handleCursorChange}
          />

          {/* Step 5: The Experience (Discover -> Plan -> Capture -> Create -> Deliver) */}
          <ExperienceSection onCursorChange={handleCursorChange} />

          {/* Step 7: Behind The Lens (Authentic single-lead setup & creative values) */}
          <BehindTheLensSection onCursorChange={handleCursorChange} />

          {/* Step 8: The People Behind The Frame (50+ Creative Professionals & Editors Network) */}
          <PeopleBehindTheFrameSection
            onSelectArtistRole={(role) => handlePrefillBooking(role)}
            onCursorChange={handleCursorChange}
          />

          {/* Step 9: Let's Create Something Meaningful (Direct Booking / Contact) */}
          <BookingSection
            onAddEnquiry={handleAddEnquiry}
            prefillService={bookingPrefill.service}
            prefillEventTitle={bookingPrefill.eventTitle}
            onCursorChange={handleCursorChange}
          />
        </main>
      )}

      {/* Step 11: Honest Studio Footer */}
      <Footer
        onOpenClientPortal={() => setIsClientPortalOpen(true)}
        onCursorChange={handleCursorChange}
        onNavigateAiStudio={() => handleNavigate('ai')}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton onCursorChange={handleCursorChange} />

      {/* Event Story Detail Modal (when real projects are opened) */}
      <EventStoryModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookSimilar={(cat, title) => handlePrefillBooking(cat, title)}
        onCursorChange={handleCursorChange}
      />

      {/* Private Client Gallery Portal Modal */}
      <PrivateGalleryModal
        galleries={galleries}
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
        onCursorChange={handleCursorChange}
      />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
