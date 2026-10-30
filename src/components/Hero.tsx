import React, { useState } from 'react';
import { Star, ArrowRight, ShieldCheck, Dumbbell, Flame, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface HeroProps {
  onJoinClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  const [activeRealIndex, setActiveRealIndex] = useState(0);

  const realPhotos = [
    {
      url: '/src/assets/images/real/gym_real_1.jpg',
      label: 'Main Gym Floor',
      sub: 'USI bag, overhead lighting & consistency pillar',
    },
    {
      url: '/src/assets/images/real/gym_real_3.jpg',
      label: 'Official Storefront',
      sub: 'Illuminated 3D signboard at Connaught Place',
    },
    {
      url: '/src/assets/images/real/gym_real_2.jpg',
      label: 'Coach Mohsin Tamboli',
      sub: 'Deadlift platform with Elefas bumper plates',
    },
    {
      url: '/src/assets/images/real/gym_real_4.jpg',
      label: 'Resistance Aisle',
      sub: 'Modern machinery line & motivation pillars',
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Cinematic Scrim and Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_athlete_lifting_1793352854245.jpg"
          alt="Athlete training with barbell at Burn and Blast Gym"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-110 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to guarantee WCAG AA contrast and pure dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-black/40" />
        
        {/* Ambient subtle neon orange glow circles in background */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF5A1F]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#FF5A1F]/10 rounded-full blur-[110px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7">
            
            {/* Rating Trust Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#151515]/90 border border-white/10 backdrop-blur-md mb-6 shadow-md shadow-black/40">
              <div className="flex items-center gap-1 text-[#FF5A1F]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-[#FF5A1F]' : 'fill-[#FF5A1F]/70'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white">
                <span className="text-[#FF5A1F] font-bold text-sm">4.4</span>
                <span className="text-gray-400">/ 5.0</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-300">70 Google Reviews</span>
              </div>
            </div>

            {/* Main Athletic Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight uppercase mb-5 drop-shadow-xl text-balance">
              UNLEASH YOUR <br />
              <span className="text-[#FF5A1F] orange-text-glow">INNER BEAST.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-heading text-lg sm:text-2xl text-gray-200 tracking-wide uppercase font-semibold mb-3">
              Train Hard. Stay Strong. Transform Yourself.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl leading-relaxed mb-8">
              Your fitness journey starts here. Discover the right environment, professional guidance and motivation to push beyond your limits at Cannought Garden, Sambhajinagar.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => {
                  if (onJoinClick) onJoinClick();
                  else scrollTo('#enquiry');
                }}
                className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-heading text-base sm:text-lg font-bold tracking-wider rounded-lg shadow-xl shadow-[#FF5A1F]/30 hover:shadow-[#FF5A1F]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>JOIN OUR GYM</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onExploreClick) onExploreClick();
                  else scrollTo('#services');
                }}
                className="px-8 py-4 bg-[#151515]/90 hover:bg-[#202020] text-white font-heading text-base sm:text-lg font-semibold tracking-wider rounded-lg border border-white/15 hover:border-[#FF5A1F]/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                EXPLORE MORE
              </button>
            </div>

            {/* Hero Feature Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#1F1F1F] border border-white/10 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white uppercase tracking-wider">Quality Gear</p>
                  <p className="text-gray-400">Iron &amp; Machines</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#1F1F1F] border border-white/10 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white uppercase tracking-wider">Coach Mohsin</p>
                  <p className="text-gray-400">Personal Guidance</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#1F1F1F] border border-white/10 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white uppercase tracking-wider">High Energy</p>
                  <p className="text-gray-400">Motivating Vibe</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real Gym Facility Visual Showcase (Front Starting Page Image) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#151515] border border-white/15 p-3.5 shadow-2xl overflow-hidden group">
              
              {/* Active Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src={realPhotos[activeRealIndex].url}
                  alt={realPhotos[activeRealIndex].label}
                  className="w-full h-full object-cover object-center filter brightness-95 transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Badge: Verified Facility Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FF5A1F] text-white text-[11px] font-heading font-bold uppercase tracking-wider shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Facility
                  </span>
                  <span className="text-[10px] font-semibold text-gray-200 bg-black/70 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                    Connaught Place, N 5
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10">
                  <p className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                    {realPhotos[activeRealIndex].label}
                  </p>
                  <p className="text-[11px] text-gray-300 truncate">
                    {realPhotos[activeRealIndex].sub}
                  </p>
                </div>
              </div>

              {/* Thumbnails Strip / Switcher */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {realPhotos.map((item, idx) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveRealIndex(idx)}
                    className={`relative rounded-lg overflow-hidden aspect-[4/3] border transition-all cursor-pointer ${
                      activeRealIndex === idx
                        ? 'border-[#FF5A1F] ring-2 ring-[#FF5A1F]/40 scale-[1.02]'
                        : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                    }`}
                    title={item.label}
                  >
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Footer text */}
              <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] text-gray-400">
                <span>Inside Burn &amp; Blast Gym facility</span>
                <span className="text-[#FF5A1F] font-semibold cursor-pointer hover:underline" onClick={() => scrollTo('#gallery')}>
                  View all in gallery →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
