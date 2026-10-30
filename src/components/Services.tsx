import React from 'react';
import {
  Dumbbell,
  Flame,
  UserCheck,
  Scale,
  CalendarCheck,
  Apple,
  Activity,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_LIST, GymService } from '../data/gymData';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'Apple': return <Apple className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Dumbbell className="w-5 h-5" />;
    }
  };

  const handleServiceClick = (service: GymService) => {
    if (onSelectService) {
      onSelectService(service.title);
    } else {
      const el = document.querySelector('#enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FF5A1F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
              TRAIN WITH PURPOSE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            OUR FITNESS <span className="text-[#FF5A1F]">SERVICES</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed">
            Targeted fitness training, structured programming, and supportive guidance designed to help you build strength, improve endurance, and maintain a healthier lifestyle.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="group relative rounded-2xl bg-[#151515] border border-white/10 hover:border-[#FF5A1F]/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A1F]/10 cursor-pointer"
            >
              {/* Card Media Header */}
              <div className="relative h-44 overflow-hidden bg-black/40">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/30" />

                {/* Top Badge: Service Number & Icon */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#080808]/80 backdrop-blur-md border border-white/15 text-[#FF5A1F] flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono tracking-wider font-semibold text-gray-300 bg-black/60 border border-white/10">
                    0{index + 1}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FF5A1F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#FF5A1F] uppercase mb-1 block">
                    {service.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2.5 group-hover:text-[#FF5A1F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#BDBDBD] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div>
                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[10px] text-gray-400 bg-[#1F1F1F] px-2 py-0.5 rounded"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#FF5A1F] group-hover:underline">
                    <span>Enquire Details</span>
                    <span className="text-gray-400 font-normal">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
