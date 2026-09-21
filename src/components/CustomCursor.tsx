import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export type CursorType = 'default' | 'view' | 'play' | 'button' | 'hidden';

export interface CustomCursorProps {
  cursorType: CursorType;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType, cursorText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible || cursorType === 'hidden') {
    return null;
  }

  const isExpanded = cursorType === 'view' || cursorType === 'play';
  const isButton = cursorType === 'button';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Trailing interactive circle */}
      <motion.div
        id="custom-cursor-follower"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isExpanded ? 76 : isButton ? 44 : 28,
          height: isExpanded ? 76 : isButton ? 44 : 28,
          backgroundColor: isExpanded
            ? 'rgba(212, 175, 55, 0.92)'
            : isButton
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(255, 255, 255, 0.08)',
          borderColor: isExpanded
            ? 'rgba(212, 175, 55, 1)'
            : isButton
            ? 'rgba(212, 175, 55, 0.8)'
            : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="rounded-full border backdrop-blur-[2px] flex items-center justify-center text-center shadow-lg transition-colors"
      >
        {isExpanded && (
          <span className="text-[10px] font-bold tracking-widest text-[#09090b] font-display uppercase">
            {cursorType === 'play' ? (cursorText || 'PLAY') : (cursorText || 'VIEW')}
          </span>
        )}
        {isButton && (
          <span className="text-xs text-[#d4af37] font-semibold">
            →
          </span>
        )}
      </motion.div>

      {/* Center sharp dot */}
      <motion.div
        id="custom-cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isExpanded ? 0 : isButton ? 1.4 : 1,
          opacity: isExpanded ? 0 : 1,
        }}
        className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"
      />
    </div>
  );
};
