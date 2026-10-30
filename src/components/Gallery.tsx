import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'real', label: '★ Real Gym Photos' },
    { key: 'interior', label: 'Gym Interior' },
    { key: 'strength', label: 'Strength Training' },
    { key: 'cardio', label: 'Cardio Area' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : activeCategory === 'real'
    ? GALLERY_ITEMS.filter((item) => item.isReal)
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D] relative overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#FF5A1F]" />
              <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest font-heading">
                VISUAL TOUR
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-3">
              INSIDE <span className="text-[#FF5A1F]">BURN & BLAST</span>
            </h2>
            <p className="text-[#BDBDBD] text-sm sm:text-base max-w-xl">
              Take a walk through our training zones, heavy iron stations, and modern cardio setup at CIDCO Cannought.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#151515] rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.key
                    ? 'bg-[#FF5A1F] text-white shadow-md shadow-[#FF5A1F]/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#151515] border border-white/10 hover:border-[#FF5A1F]/50 aspect-[4/3] cursor-pointer shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tags: Category and Real Gym Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                {item.isReal ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#FF5A1F] px-2 py-0.5 rounded shadow">
                    Verified Gym Photo
                  </span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A1F] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                    {item.categoryLabel}
                  </span>
                )}
                
                {/* Hover Zoom Icon */}
                <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                </div>
              </div>

              {/* Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A1F] block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Replaceable Note */}
        <div className="mt-8 flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-[#FF5A1F]" />
            <span>High-resolution photographs from the Burn & Blast Gym facility.</span>
          </div>
          <span className="hidden sm:inline">Click any image to view in fullscreen lightbox</span>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-[#FF5A1F] text-white transition-colors z-20 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#FF5A1F] border border-white/20 text-white transition-all z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#FF5A1F] border border-white/20 text-white transition-all z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            
            <div className="w-full mt-4 text-center">
              <span className="text-xs font-bold text-[#FF5A1F] uppercase tracking-wider">
                {filteredItems[lightboxIndex].categoryLabel} · {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-heading text-xl font-bold text-white uppercase mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-gray-300 max-w-xl mx-auto mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
