import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Coach Mohsin, I am visiting the Burn & Blast Gym website and would like details about memberships and training.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151515] border border-white/15 text-white text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with <strong className="text-[#FF5A1F]">{BUSINESS_INFO.trainerName}</strong></span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="text-gray-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with Burn & Blast Gym on WhatsApp"
      >
        {/* Animated ring glow */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
        
        <MessageSquare className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
};
