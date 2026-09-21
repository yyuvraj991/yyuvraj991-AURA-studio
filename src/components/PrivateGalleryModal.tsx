import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Download, Heart, Share2, Sparkles, Check, Key, ShieldCheck, Film } from 'lucide-react';
import { PrivateGallery } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface PrivateGalleryModalProps {
  galleries: PrivateGallery[];
  isOpen: boolean;
  onClose: () => void;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const PrivateGalleryModal: React.FC<PrivateGalleryModalProps> = ({
  galleries,
  isOpen,
  onClose,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [accessCode, setAccessCode] = useState('ABC123');
  const [pinInput, setPinInput] = useState('');
  const [authenticatedGallery, setAuthenticatedGallery] = useState<PrivateGallery | null>(null);
  const [authError, setAuthError] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<Record<string, boolean>>({});
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    const target = galleries.find(
      (g) => g.code.trim().toUpperCase() === accessCode.trim().toUpperCase()
    );

    if (!target) {
      setAuthError(t('privateGallery.notFound'));
      return;
    }

    if (target.pin && pinInput.trim() !== target.pin) {
      setAuthError(t('privateGallery.invalidPin'));
      return;
    }

    setAuthenticatedGallery(target);
  };

  const toggleFavorite = (photoId: string) => {
    setFavoriteIds((prev) => ({
      ...prev,
      [photoId]: !prev[photoId],
    }));
  };

  const handleBatchDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  const handleShareGallery = () => {
    if (authenticatedGallery) {
      const shareUrl = `${window.location.origin}/studio/client/${authenticatedGallery.code}`;
      navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  const favoritesCount = Object.values(favoriteIds).filter(Boolean).length;

  return (
    <div
      id="private-client-gallery-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-[#0e0e12] border border-zinc-800 rounded-2xl overflow-hidden my-auto shadow-2xl">
        {/* Floating Close Button */}
        <button
          id="close-client-portal-btn"
          onClick={() => {
            setAuthenticatedGallery(null);
            setAuthError('');
            onClose();
          }}
          className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-[#d4af37] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!authenticatedGallery ? (
          /* Authentication Screen (PRD Section 16) */
          <div className="p-8 sm:p-14 max-w-lg mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-black border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">
              {t('privateGallery.title')}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-editorial italic mb-8">
              {t('privateGallery.subtitle')}
            </p>

            <form onSubmit={handleVerify} className="space-y-4 text-left">
              {authError && (
                <div className="p-3 rounded bg-red-950/40 border border-red-800 text-red-300 text-xs">
                  {authError}
                </div>
              )}

              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1">
                  {t('privateGallery.codeLabel')}
                </label>
                <input
                  type="text"
                  required
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="ABC123"
                  className="w-full px-4 py-2.5 rounded bg-black border border-zinc-700 text-white font-mono uppercase tracking-widest text-sm focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1">
                  {t('privateGallery.pinLabel')}
                </label>
                <input
                  type="password"
                  required
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="••••"
                  maxLength={6}
                  className="w-full px-4 py-2.5 rounded bg-black border border-zinc-700 text-white font-mono tracking-widest text-sm focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                id="unlock-vault-btn"
                className="w-full py-3.5 mt-4 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] text-black font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-lg flex items-center justify-center gap-2"
                onMouseEnter={() => onCursorChange('button')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <Key className="w-4 h-4" />
                <span>{t('privateGallery.unlock')}</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 text-[11px] text-zinc-500 font-mono text-center">
              Private client archive. Enter your confidential access code & PIN provided by the studio.
            </div>
          </div>
        ) : (
          /* Unlocked Private Gallery View */
          <div className="p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
            {/* Gallery Top Banner */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 aspect-[21/9] sm:aspect-[24/8] mb-8">
              <img
                src={authenticatedGallery.coverImage}
                alt={authenticatedGallery.eventName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#d4af37] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t('privateGallery.encryptedBadge')} • /studio/client/{authenticatedGallery.code}</span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-display font-bold uppercase text-white">
                    {authenticatedGallery.clientName}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                    {authenticatedGallery.eventName} • {authenticatedGallery.eventDate}
                  </p>
                </div>

                {/* Actions: Download All & Share Link */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleShareGallery}
                    className="px-3.5 py-2 rounded bg-black/70 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copiedShare ? t('privateGallery.shareCopied') : t('privateGallery.share')}
                  </button>

                  <button
                    onClick={handleBatchDownload}
                    disabled={isDownloading}
                    className="px-4 py-2 rounded bg-[#d4af37] hover:bg-[#e6c45e] text-black text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {isDownloading ? t('privateGallery.preparingZip') : t('privateGallery.downloadMaster')}
                  </button>
                </div>
              </div>
            </div>

            {/* Notification if download clicked */}
            {downloadSuccess && (
              <div className="mb-6 p-4 rounded bg-emerald-950/60 border border-emerald-700 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                {t('privateGallery.downloadSuccess')}
              </div>
            )}

            {/* Status Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 text-xs text-zinc-400 font-mono">
              <span>{t('privateGallery.stillsAvailable', { count: authenticatedGallery.photos.length })}</span>
              <span className="text-[#d4af37]">
                {t('privateGallery.albumSelected', { count: favoritesCount })}
              </span>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {authenticatedGallery.photos.map((photo) => {
                const isFav = !!favoriteIds[photo.id];

                return (
                  <div
                    key={photo.id}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-zinc-800 bg-black"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                      onClick={() => setActivePhoto(photo.url)}
                    />

                    {/* Top Action Icons */}
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                      <button
                        onClick={() => toggleFavorite(photo.id)}
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-white hover:border-rose-500 transition-colors"
                        title={t('privateGallery.favoriteTooltip')}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isFav ? 'text-rose-500 fill-rose-500' : 'text-zinc-300'
                          }`}
                        />
                      </button>

                      <a
                        href={photo.url}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-white hover:border-[#d4af37] transition-colors"
                        title={t('privateGallery.downloadSingle')}
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Bottom Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                      <span className="text-[11px] font-mono text-zinc-300 truncate block">
                        {photo.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* High-res individual inspection popup */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-white"
              onClick={() => setActivePhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto}
              alt="Expanded preview"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};
