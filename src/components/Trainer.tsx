import React from 'react';
import { ShieldCheck, HeartHandshake, Dumbbell, MessageSquare, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface TrainerProps {
  onTrainClick?: () => void;
}

export const Trainer: React.FC<TrainerProps> = ({ onTrainClick }) => {
  const trainerPillars = [
    {
      title: 'Personal Guidance',
      desc: 'Individual focus on posture, controlled form, and daily progression during workout sets.',
      icon: Dumbbell,
    },
    {
      title: 'Supportive Coaching',
      desc: 'Encouraging mentorship that builds confidence for beginners and keeps seasoned members accountable.',
      icon: HeartHandshake,
    },
    {
      title: 'Consistent Motivation',
      desc: 'Keeping you energized and disciplined session after session so you never give up on your goals.',
      icon: Flame,
    },
  ];

  const handleTrainClick = () => {
    if (onTrainClick) {
      onTrainClick();
    } else {
      const el = document.querySelector('#enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trainer" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF5A1F]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              EXPERT COACHING
            </span>
            <span className="w-6 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            YOUR FITNESS. <span className="text-[#FF5A1F]">OUR GUIDANCE.</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed text-balance">
            Get motivated, stay consistent and work towards your fitness goals with personal guidance and supportive coaching.
          </p>
        </div>

        {/* Profile Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#151515] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Real Trainer Portrait (Mohsin Tamboli in action) */}
            <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-full bg-black/60 overflow-hidden flex items-center justify-center">
              <img
                src={BUSINESS_INFO.trainerRealImage}
                alt="Trainer Mohsin Tamboli deadlifting at Burn and Blast Gym"
                className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#151515]" />
              
              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FF5A1F] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Head Coach · Mohsin Tamboli
                </span>
                <span className="text-[11px] font-semibold text-gray-300 bg-black/75 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                  Deadlift Station
                </span>
              </div>
            </div>

            {/* Right: Bio & Coaching Approach */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold tracking-widest text-[#FF5A1F] uppercase">
                    Head Trainer
                  </span>
                  <span className="text-xs text-gray-400">
                    Burn & Blast Gym
                  </span>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                  {BUSINESS_INFO.trainerName}
                </h3>

                <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed mb-6">
                  Get motivated, stay consistent and work towards your fitness goals with personal guidance and supportive coaching. At Burn & Blast Gym, every member receives attentive guidance on exercise technique, posture, and healthy habits.
                </p>

                {/* Real Member Testimonial Quote */}
                <div className="p-4 rounded-xl bg-[#1C1C1C] border border-white/5 mb-8 relative">
                  <div className="text-2xl text-[#FF5A1F] font-serif leading-none absolute top-3 left-3 opacity-40">
                    &ldquo;
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 italic pl-6 leading-relaxed">
                    &ldquo;Joining Burn &amp; Blast Gym has been one of the best decisions for my fitness journey. The biggest reason is our trainer Mohsin Tamboli — not just an amazing coach but truly like a big brother to everyone in the gym.&rdquo;
                  </p>
                  <p className="text-[11px] text-gray-400 text-right mt-2 font-medium">
                    — Verified Google Review Excerpt
                  </p>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {trainerPillars.map((p) => {
                    const IconComp = p.icon;
                    return (
                      <div key={p.title} className="p-3.5 rounded-lg bg-[#1F1F1F] border border-white/5">
                        <div className="w-8 h-8 rounded-md bg-[#2A2A2A] text-[#FF5A1F] flex items-center justify-center mb-2">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h4 className="font-heading text-xs font-bold text-white uppercase mb-1">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 leading-normal">
                          {p.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleTrainClick}
                  className="px-6 py-3.5 bg-[#FF5A1F] hover:bg-[#E04810] text-white font-heading font-bold text-sm tracking-wider uppercase rounded-lg shadow-lg shadow-[#FF5A1F]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Flame className="w-4 h-4" />
                  <span>TRAIN WITH MOHSIN</span>
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Mohsin Sir, I am interested in personal training and guidance at Burn & Blast Gym.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#1F1F1F] hover:bg-[#282828] text-gray-200 hover:text-white border border-white/10 hover:border-emerald-500/50 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
