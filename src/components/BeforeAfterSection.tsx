import React, { useState, useRef, useEffect } from 'react';
import { Sliders, Sparkles, Wand2, Layers } from 'lucide-react';
import { BeforeAfterItem } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface BeforeAfterSectionProps {
  items: BeforeAfterItem[];
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  items,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = items[selectedIndex] || items[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="before-after"
      className="py-24 sm:py-36 bg-[#0c0c0f] text-zinc-100 border-t border-zinc-900 select-none"
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Wand2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('beforeAfter.badge')}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('beforeAfter.heading')}
            </h2>
          </div>

          {/* Example Selector Tabs */}
          <div className="flex items-center gap-2">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedIndex === idx
                    ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="bg-[#111115] border border-zinc-800 rounded-xl p-4 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                {t('beforeAfter.caseStudy')}: {currentItem.title}
              </span>
              <p className="text-sm text-zinc-300 font-editorial italic mt-1">
                {currentItem.description}
              </p>
            </div>

            <div className="text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded border border-zinc-800 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{currentItem.techNotes}</span>
            </div>
          </div>

          {/* Draggable Image Stage */}
          <div
            ref={containerRef}
            id="before-after-slider-container"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-video sm:aspect-[21/10] w-full rounded-lg overflow-hidden border border-zinc-800 bg-black cursor-ew-resize group"
            onMouseEnter={() => onCursorChange('view', 'DRAG')}
            onMouseLeave={() => onCursorChange('default')}
          >
            {/* 1. Final Graded Image (Right / Base) */}
            <img
              src={currentItem.finalImage}
              alt="Final Graded Photo"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Label for Final */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-black/70 border border-[#d4af37]/60 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">
              {t('beforeAfter.finalMaster')}
            </div>

            {/* 2. Raw Unedited Image (Left / Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.rawImage}
                alt="Raw Unedited Photo"
                className="absolute inset-0 w-full h-full object-cover max-w-none select-none filter contrast-90 brightness-95"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />

              {/* Label for Raw */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-black/70 border border-zinc-700 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-zinc-300">
                {t('beforeAfter.flatLog')}
              </div>
            </div>

            {/* 3. Draggable Vertical Divider Bar */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Grip */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#d4af37] border-2 border-white shadow-2xl flex items-center justify-center text-black font-extrabold text-xs">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Quick instructions & slider progress bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 font-mono">
            <span>{t('beforeAfter.dragInstructions')}</span>
            <span>{t('beforeAfter.splitRatio', { raw: Math.round(sliderPosition), graded: Math.round(100 - sliderPosition) })}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
