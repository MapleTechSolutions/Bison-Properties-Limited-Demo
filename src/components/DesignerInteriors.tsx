"use client";

import { useState, useRef } from "react";

const themes = [
  {
    id: "coastal",
    name: "Coastal Villa",
    tagline: "Open, Airy, & Refreshing",
    description: "Light colors, natural textures, and ocean-inspired accents create a relaxing retreat.",
    images: [1, 2, 3, 4, 5],
  },
  {
    id: "loft",
    name: "Loft Living",
    tagline: "Modern, Sleek, Minimalist",
    description: "Clean lines, industrial elements, and contemporary finishes for urban sophistication.",
    images: [1, 2, 3, 4, 5],
  },
  {
    id: "farmhouse",
    name: "Urban Farmhouse",
    tagline: "Warm, Earthy, Cozy",
    description: "Rustic charm meets modern comfort with natural wood tones and vintage-inspired details.",
    images: [1, 2, 3, 4, 5],
  },
];

export default function DesignerInteriors() {
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentTheme = themes.find((t) => t.id === activeTheme) || themes[0];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-black">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3">
            Ready to get started?
          </h2>
          <p className="text-white/60 text-sm sm:text-lg">
            Choose a Designer Interior™
          </p>
        </div>

        {/* Theme Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 sm:gap-4 mb-8 sm:mb-10 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setActiveTheme(theme.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 touch-manipulation ${
                activeTheme === theme.id
                  ? "bg-[#0d9488] text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white active:bg-white/20"
              }`}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Theme Description */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentTheme.tagline}</h3>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">{currentTheme.description}</p>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 -translate-x-1/2 hidden md:flex"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 translate-x-1/2 hidden md:flex"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Images */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentTheme.images.map((num, index) => (
              <div
                key={`${currentTheme.id}-${index}`}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[350px] h-[160px] sm:h-[200px] md:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 snap-start"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/30 text-xs sm:text-sm">{currentTheme.name} - Image {num}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <p className="text-center text-white/40 text-xs sm:text-sm mt-3 sm:mt-4 md:hidden">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}
