import React from 'react';
import { Flame, MapPin, Phone, MessageSquare, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Trainer Profile', href: '#trainer' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Facility Gallery', href: '#gallery' },
    { label: 'Member Reviews', href: '#reviews' },
    { label: 'Membership Enquiry', href: '#enquiry' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF5A1F] to-[#d64109] flex items-center justify-center text-white shadow-md shadow-[#FF5A1F]/30">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wider leading-none text-white">
                  BURN & BLAST
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#BDBDBD] font-semibold uppercase leading-tight">
                  GYM · SAMBHAJINAGAR
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Burn & Blast Gym (बर्न एंड ब्लास्ट जिम) is a premier fitness and strength training destination dedicated to helping individuals build strength, discipline, and confidence with expert coaching and quality equipment.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-2.5">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#151515] hover:bg-[#FF5A1F] border border-white/10 hover:border-transparent text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-gray-400 hover:text-[#FF5A1F] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gray-600">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact & Location
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
              <p className="text-gray-300 leading-relaxed text-xs">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <p className="text-xs text-gray-400 pl-6.5">
              <span className="text-gray-500 font-medium">Landmark:</span> {BUSINESS_INFO.landmark}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <Phone className="w-4 h-4 text-[#FF5A1F] shrink-0" />
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="text-white hover:text-[#FF5A1F] font-semibold transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 font-semibold transition-colors"
              >
                {BUSINESS_INFO.whatsappDisplay}
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-[#151515] border border-white/5 text-[11px] text-gray-400">
                Trainer: <span className="text-white font-medium">{BUSINESS_INFO.trainerName}</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            &copy; 2026 {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>CIDCO Cannought, Chhatrapati Sambhajinagar</span>
            <span>·</span>
            <span className="text-gray-400 font-semibold">4.4 Google Rated</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
