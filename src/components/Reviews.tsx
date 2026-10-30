import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, VERIFIED_REVIEWS } from '../data/gymData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              TESTIMONIALS & PROOF
            </span>
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            REAL PEOPLE. <span className="text-[#FF5A1F]">REAL MOTIVATION.</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed text-balance">
            Real feedback from members who train, push their boundaries, and experience the supportive atmosphere at Burn & Blast Gym.
          </p>
        </div>

        {/* Rating Summary Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-[#151515] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#1F1F1F] border border-[#FF5A1F]/30 flex flex-col items-center justify-center">
              <span className="font-heading text-2xl font-black text-[#FF5A1F] leading-none">
                4.4
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase mt-0.5">
                OUT OF 5
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[#FF5A1F] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'fill-[#FF5A1F]' : 'fill-[#FF5A1F]/70'}`}
                  />
                ))}
                <span className="text-white text-xs font-bold ml-1.5">
                  4.4 Rating
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Based on <span className="text-white font-semibold">70 Google Reviews</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3.5 py-2 rounded-lg border border-emerald-500/20">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Verified Local Google Business Profile</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#FF5A1F]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#202020] border border-white/10 text-[#FF5A1F] font-heading font-bold text-sm flex items-center justify-center">
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {rev.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-[#FF5A1F]">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FF5A1F]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="mb-4 inline-block text-[11px] font-medium text-[#FF5A1F] bg-[#FF5A1F]/10 px-2.5 py-1 rounded border border-[#FF5A1F]/20">
                  {rev.highlight}
                </div>

                {/* Review Excerpt */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1 text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  Verified Member Review
                </span>
                <span>Chhatrapati Sambhajinagar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: READ MORE GOOGLE REVIEWS */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#252525] text-white hover:text-[#FF5A1F] border border-white/15 hover:border-[#FF5A1F]/50 font-heading text-sm font-bold tracking-wider uppercase rounded-lg transition-all shadow-md group"
          >
            <span>READ MORE GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
