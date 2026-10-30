import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Send,
  Building,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Contact: React.FC = () => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMsg, setQuickMsg] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) return;

    const text = `*Quick Message - Burn & Blast Gym*\n• *Name:* ${quickName.trim()}\n• *Phone:* ${quickPhone.trim()}\n• *Message:* ${
      quickMsg.trim() || 'I want to know more about Burn & Blast Gym.'
    }`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setQuickSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              VISIT OUR LOCATION
            </span>
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            COME TRAIN <span className="text-[#FF5A1F]">WITH US.</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed text-balance">
            Conveniently situated at Connaught Place, CIDCO Cannought Garden in Chhatrapati Sambhajinagar. Drop by for a facility tour or get in touch below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Business Info & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Box */}
            <div className="p-8 rounded-3xl bg-[#151515] border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#FF5A1F] block mb-1">
                  OFFICIAL LOCATION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {BUSINESS_INFO.hindiName}
                </p>
              </div>

              {/* Address with Landmark */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Address
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Landmark Callout */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Prominent Landmark
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">
                    {BUSINESS_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-lg bg-[#1F1F1F] text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                    Contact Phone
                  </h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#FF5A1F] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    WhatsApp: {BUSINESS_INFO.whatsappDisplay}
                  </p>
                </div>
              </div>

              {/* 3 Dedicated Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                
                {/* 1. Call Now Button */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="w-full py-3.5 px-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-[#FF5A1F]/20 transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW ({BUSINESS_INFO.phoneDisplay})</span>
                </a>

                {/* 2. WhatsApp Button */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Burn & Blast Gym, I would like to get more information about gym membership and facilities.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#1F1F1F] hover:bg-[#282828] text-white border border-white/10 hover:border-emerald-500/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>CHAT ON WHATSAPP</span>
                </a>

                {/* 3. Get Directions Button */}
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#1F1F1F] hover:bg-[#282828] text-white border border-white/10 hover:border-sky-500/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-2.5"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>

              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Location Embed & Quick Contact Message */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Container */}
            <div className="rounded-3xl bg-[#151515] border border-white/10 overflow-hidden shadow-xl">
              <div className="p-4 bg-[#1F1F1F] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                    INTERACTIVE MAP · CIDCO CANNOUGHT
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FF5A1F] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[340px] sm:h-[400px] bg-black">
                <iframe
                  title="Burn and Blast Gym Google Map"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="p-4 bg-[#151515] flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
                <span>Near Maharana Pratap Singh Garden, Cannought Place</span>
                <span className="text-white font-medium">Pin: 431003</span>
              </div>
            </div>

            {/* Quick Contact Enquiry Mini-Card */}
            <div className="p-6 rounded-2xl bg-[#151515] border border-white/10">
              <h4 className="font-heading text-lg font-bold text-white uppercase mb-2">
                Quick Enquiry
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Have a quick question? Drop your name and number to connect directly.
              </p>

              {quickSent ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Opening WhatsApp message with your question...</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1F1F] text-white text-xs border border-white/10 focus:border-[#FF5A1F] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Mobile Number *"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1F1F] text-white text-xs border border-white/10 focus:border-[#FF5A1F] focus:outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Short message or question (optional)"
                    value={quickMsg}
                    onChange={(e) => setQuickMsg(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#1F1F1F] text-white text-xs border border-white/10 focus:border-[#FF5A1F] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Quick Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
