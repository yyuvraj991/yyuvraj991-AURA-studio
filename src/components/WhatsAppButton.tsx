import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface WhatsAppButtonProps {
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onCursorChange }) => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '919827666173'; // Studio business number
  const prefilledMessage = encodeURIComponent(
    t('whatsapp.prefill') || 'Hello, I would like to enquire about your photography/videography services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 shadow-xl animate-in fade-in duration-200">
          {t('whatsapp.tooltip')}
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setShowTooltip(true);
          onCursorChange('button');
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
          onCursorChange('default');
        }}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 group"
        aria-label={t('whatsapp.ariaLabel')}
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
