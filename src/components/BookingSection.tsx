import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, CheckCircle2, Phone, Mail, MapPin, Calendar, Film, MessageCircle } from 'lucide-react';
import { Enquiry } from '../types';
import { CursorType } from './CustomCursor';
import { useTranslation } from '../context/I18nContext';

interface BookingSectionProps {
  onAddEnquiry: (enquiry: Enquiry) => void;
  prefillService?: string;
  prefillEventTitle?: string;
  onCursorChange: (type: CursorType, text?: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  onAddEnquiry,
  prefillService,
  prefillEventTitle,
  onCursorChange,
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    prefillService || 'Photography + Videography'
  );
  const [message, setMessage] = useState(
    prefillEventTitle ? `Hello! I would like to inquire about similar coverage to ${prefillEventTitle}.` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Photography',
    'Videography',
    'Cinematic Films',
    'Reels & Short Videos',
    'Photography + Videography',
    'Creative Visuals',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !phone.trim()) {
      setErrorMsg(t('booking.labels.errorRequired'));
      return;
    }

    setIsSubmitting(true);

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      eventDate: eventDate || 'Date to be finalized',
      eventLocation: eventLocation || 'Location to be finalized',
      pincode: pincode.trim(),
      eventType: selectedService,
      requiredServices: [selectedService],
      message: message.trim() || 'No additional notes provided.',
      submittedAt: 'Just now',
      status: 'New',
    };

    // Construct structured WhatsApp message for the studio (+91 98276 66173)
    const studioWhatsAppNumber = '919827666173';
    const waText = 
`✨ *NEW BOOKING INQUIRY - AURA STUDIO* ✨

👤 *Client Name:* ${name.trim()}
📱 *WhatsApp Number:* ${phone.trim()}
📧 *Email:* ${email.trim() || 'Not provided'}
🎯 *Required Service:* ${selectedService}
📅 *Event Date:* ${eventDate || 'To be finalized'}
📍 *Location / City:* ${eventLocation || 'To be finalized'}
📮 *PIN Code:* ${pincode.trim() || 'N/A'}

💬 *Client Message / Notes:*
${message.trim() || 'No additional notes provided.'}

🌐 _Sent directly from Aura Studio Website_`;

    const waUrl = `https://wa.me/${studioWhatsAppNumber}?text=${encodeURIComponent(waText)}`;

    try {
      // 1. Also send background backup notification to email
      await fetch('https://formsubmit.co/ajax/rajasahu69774@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Aura Studio Inquiry: ${name.trim()} (${selectedService})`,
          _captcha: 'false',
          _template: 'table',
          Name: name.trim(),
          WhatsApp_Number: phone.trim(),
          Email: email.trim() || 'Not provided',
          Event_Date: eventDate || 'To be finalized',
          Location: eventLocation || 'To be finalized',
          PIN_Code: pincode.trim() || 'N/A',
          Service_Requested: selectedService,
          Message: message.trim() || 'No additional message',
        }),
      });
    } catch (err) {
      console.warn('Background email submission notice:', err);
    } finally {
      onAddEnquiry(newEnquiry);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Automatically open WhatsApp with the complete prefilled inquiry
      // Works smoothly on both mobile devices (opens WhatsApp app) and desktop (opens WhatsApp Web)
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setEventDate('');
    setEventLocation('');
    setPincode('');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 bg-[#09090b] text-zinc-100 border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37]">
                {t('booking.badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
              {t('booking.heading')}
            </h2>
          </div>
          <p className="max-w-md text-zinc-300 font-editorial text-base sm:text-lg italic">
            “{t('booking.subtitle')}”
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#111115] border border-zinc-800 rounded-2xl p-6 sm:p-12 shadow-2xl">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800/80 pb-8 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-2">
                EST. 2026 • DIRECT CONTACT
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-4">
                {t('booking.storyPrompt')}
              </h3>
              <p className="text-zinc-400 text-sm font-sans leading-relaxed mb-8">
                {t('booking.storyDesc')}
              </p>

              <div className="space-y-4 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-black border border-zinc-800 text-[#d4af37]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{t('booking.hotline')}</span>
                    <a
                      href="https://wa.me/919827666173"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#d4af37] transition-colors"
                    >
                      +91 98276 66173
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-black border border-zinc-800 text-[#d4af37]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{t('booking.directEmail')}</span>
                    <a
                      href="mailto:rajasahu69774@gmail.com"
                      className="hover:text-[#d4af37] transition-colors break-all"
                    >
                      rajasahu69774@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-black border border-zinc-800 text-[#d4af37]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">{t('booking.ateliers')}</span>
                    <span className="text-zinc-200">{t('booking.mainBranchAddress')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 text-[11px] text-zinc-500">
              {t('booking.responseTime')}
            </div>
          </div>

          {/* Right Main Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase text-white">
                    {t('booking.success.title')}
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md font-sans leading-relaxed">
                    {t('booking.success.message', { name, phone })}
                  </p>

                  {/* Direct WhatsApp open button in case pop-up was blocked */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/919827666173?text=${encodeURIComponent(
                        `✨ *AURA STUDIO INQUIRY* ✨\n👤 Name: ${name}\n📱 WhatsApp: ${phone}\n🎯 Service: ${selectedService}\n📅 Date: ${eventDate || 'TBD'}\n📍 Location: ${eventLocation || 'TBD'}\n💬 Notes: ${message || 'N/A'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,211,102,0.35)] flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Open in WhatsApp (+91 98276 66173)</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-6 py-3 rounded-sm border border-zinc-700 bg-zinc-900 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:border-[#d4af37] transition-all"
                    >
                      {t('booking.success.another')}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-800 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.name')}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('booking.labels.namePlaceholder')}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.phone')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t('booking.labels.phonePlaceholder')}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.email')}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('booking.labels.emailPlaceholder')}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.date')}
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Location & PIN Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.location')}
                      </label>
                      <input
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        placeholder={t('booking.labels.locationPlaceholder')}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        {t('booking.labels.pincode')}
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder={t('booking.labels.pincodePlaceholder')}
                        className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white font-mono focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Required Service */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                      {t('booking.labels.requiredService')}
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                      {t('booking.labels.message')}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('booking.labels.messagePlaceholder')}
                      className="w-full px-4 py-3 rounded bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-[#d4af37] hover:bg-[#e6c45e] disabled:opacity-50 text-black font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_25px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2"
                    onMouseEnter={() => onCursorChange('button')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    {isSubmitting ? (
                      <span>{t('booking.labels.submitting')}</span>
                    ) : (
                      <>
                        <span>{t('booking.labels.submit')}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
