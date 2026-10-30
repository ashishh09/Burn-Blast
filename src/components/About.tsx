import React from 'react';
import { Dumbbell, UserCheck, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const About: React.FC = () => {
  const aboutFeatures = [
    {
      title: 'Quality Equipment',
      desc: 'Precision dumbbells, Olympic barbells, power racks, and targeted cable machinery maintained daily.',
      icon: Dumbbell,
    },
    {
      title: 'Personal Guidance',
      desc: 'Attentive, hands-on supervision from supportive coaches who focus closely on correct posture and form.',
      icon: UserCheck,
    },
    {
      title: 'Motivating Environment',
      desc: 'High-energy fitness community and music that powers your workouts and keeps your discipline intact.',
      icon: Flame,
    },
    {
      title: 'Clean and Hygienic Space',
      desc: 'Regularly sanitized benches, clean free-weight floor, and hygienic workout atmosphere.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-white/5">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-0.5 bg-[#FF5A1F]" />
          <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
            ABOUT BURN & BLAST GYM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Gym Facility Photograph (Official Storefront) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#151515]">
              <img
                src={BUSINESS_INFO.storefrontRealImage}
                alt="Official storefront of Burn and Blast Gym at Connaught Place"
                className="w-full h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#151515]/90 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#FF5A1F] uppercase tracking-wider block">
                      OFFICIAL ENTRANCE
                    </span>
                    <p className="font-heading text-lg font-bold text-white tracking-wide">
                      BURN &amp; BLAST GYM
                    </p>
                    <p className="text-xs text-gray-400">
                      CIDCO Cannought Garden, Sambhajinagar
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FF5A1F]/20 border border-[#FF5A1F]/40 rounded-lg text-[#FF5A1F] font-bold text-sm shrink-0">
                    <span>4.4 ★</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent frame decoration */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FF5A1F]/30 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </div>

          {/* Right Column: About Content & Feature Cards */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase mb-6 text-balance">
              WE DON&apos;T JUST BUILD BODIES. <br />
              <span className="text-[#FF5A1F]">WE BUILD CONFIDENCE.</span>
            </h2>

            <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed mb-8">
              Burn & Blast Gym is a fitness destination dedicated to helping people work towards their fitness goals. With quality equipment, personal guidance and an energetic atmosphere, we help members stay motivated and consistent on their fitness journey.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-[#151515] border border-white/10 hover:border-[#FF5A1F]/40 transition-all duration-300 group shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1F1F1F] group-hover:bg-[#FF5A1F] text-[#FF5A1F] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Core Values Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>Beginner & Advanced Friendly</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>Safe Lifting Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" />
                <span>Zero Intimidation Culture</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
