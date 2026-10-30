import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NavbarProps {
  onJoinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Trainer', href: '#trainer' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3.5'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0 select-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF5A1F] to-[#d64109] flex items-center justify-center text-white shadow-md shadow-[#FF5A1F]/30 group-hover:scale-105 transition-transform duration-200">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-wider leading-none text-white group-hover:text-[#FF5A1F] transition-colors">
                  BURN & BLAST
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#BDBDBD] font-semibold uppercase leading-tight">
                  GYM · SAMBHAJINAGAR
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-gray-300 hover:text-[#FF5A1F] transition-colors duration-200 whitespace-nowrap tracking-wide py-1 border-b-2 border-transparent hover:border-[#FF5A1F]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors whitespace-nowrap"
                title="Call Burn & Blast Gym"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  if (onJoinClick) {
                    onJoinClick();
                  } else {
                    handleLinkClick('#enquiry');
                  }
                }}
                className="px-5 py-2.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E04810] rounded-lg shadow-lg shadow-[#FF5A1F]/25 hover:shadow-[#FF5A1F]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
              >
                JOIN NOW
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="p-2 rounded-lg bg-[#151515] border border-white/10 text-[#FF5A1F] hover:bg-white/5 active:scale-95 transition-all"
                aria-label="Call gym"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#151515] border border-white/10 text-white hover:text-[#FF5A1F] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#111111] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-[#FF5A1F] flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 fill-white" />
                </div>
                <span className="font-heading text-xl font-bold tracking-wider text-white">
                  BURN & BLAST
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-400 hover:text-white"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-4 py-3 text-base font-medium text-gray-200 hover:text-[#FF5A1F] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#enquiry');
              }}
              className="block w-full text-center py-3 px-4 font-semibold tracking-wider uppercase text-white bg-[#FF5A1F] hover:bg-[#E04810] rounded-lg shadow-md transition-colors"
            >
              JOIN OUR GYM
            </a>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1F1F1F] text-gray-200 rounded-lg border border-white/10 hover:border-[#FF5A1F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1F1F1F] text-gray-200 rounded-lg border border-white/10 hover:border-emerald-500 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-center text-gray-500 pt-1">
              CIDCO Cannought, Sambhajinagar
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
