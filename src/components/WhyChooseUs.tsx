import React from 'react';
import {
  Users,
  ShieldCheck,
  Zap,
  Sparkles,
  HeartPulse,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5A1F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              THE BURN & BLAST ADVANTAGE
            </span>
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            WHY <span className="text-[#FF5A1F]">CHOOSE US</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed text-balance">
            We deliver the ideal blend of high-caliber equipment, welcoming community energy, and real one-on-one attention in Chhatrapati Sambhajinagar.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF5A1F]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1F1F1F] group-hover:bg-[#FF5A1F] text-[#FF5A1F] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-500 group-hover:text-[#FF5A1F] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#FF5A1F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#BDBDBD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                <span>Verified Facility Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Numbers Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-black text-[#FF5A1F] mb-1">
              4.4 ★
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
              Google Rating
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-black text-white mb-1">
              70+
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
              Google Reviews
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-black text-[#FF5A1F] mb-1">
              100%
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
              Dedicated Guidance
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl sm:text-4xl font-black text-white mb-1">
              CIDCO
            </p>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
              Cannought Garden
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
