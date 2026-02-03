"use client";

import { useState, useRef } from "react";

const floorplans = [
  {
    id: "maple",
    name: "The Maple",
    sqft: "1,650",
    beds: 3,
    baths: 2,
    garage: 2,
    description: "A thoughtfully designed starter home with open-concept living and modern finishes.",
    price: "From $349,900",
    images: ["exterior", "kitchen", "living", "master"],
  },
  {
    id: "birch",
    name: "The Birch",
    sqft: "1,850",
    beds: 3,
    baths: 2.5,
    garage: 2,
    description: "Perfect for growing families with spacious bedrooms and a bonus room option.",
    price: "From $389,900",
    images: ["exterior", "kitchen", "living", "master"],
  },
  {
    id: "cedar",
    name: "The Cedar",
    sqft: "2,100",
    beds: 4,
    baths: 3,
    garage: 2,
    description: "Generous living spaces with a main-floor office and luxurious master suite.",
    price: "From $459,900",
    images: ["exterior", "kitchen", "living", "master"],
  },
  {
    id: "oak",
    name: "The Oak",
    sqft: "2,400",
    beds: 4,
    baths: 3.5,
    garage: 3,
    description: "Our executive series featuring premium finishes and expanded entertainment areas.",
    price: "From $524,900",
    images: ["exterior", "kitchen", "living", "master"],
  },
];

export default function FloorplanGallery() {
  const [activeFloorplan, setActiveFloorplan] = useState(floorplans[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentFloorplan = floorplans.find((f) => f.id === activeFloorplan) || floorplans[0];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 sm:mb-4">
            Find the Perfect Floorplan
          </h2>
          <p className="text-[#4a4a4a] text-sm sm:text-lg max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed floorplans built for modern living
          </p>
        </div>

        {/* Floorplan Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto gap-3 mb-8 sm:mb-10 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {floorplans.map((floorplan) => (
            <button
              key={floorplan.id}
              onClick={() => setActiveFloorplan(floorplan.id)}
              className={`px-5 sm:px-6 py-3.5 sm:py-3 rounded-2xl sm:rounded-full font-bold text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0 touch-manipulation active:scale-[0.97] ${
                activeFloorplan === floorplan.id
                  ? "bg-[#0d9488] text-white shadow-lg shadow-[#0d9488]/25"
                  : "bg-gray-100 text-[#4a4a4a] active:bg-gray-200"
              }`}
            >
              {floorplan.name}
            </button>
          ))}
        </div>

        {/* Floorplan Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Image Carousel */}
          <div className="relative">
            {/* Navigation buttons - hidden on mobile */}
            <div className="hidden sm:flex items-center justify-between mb-4">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white flex items-center justify-center transition-all duration-200 touch-manipulation"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white flex items-center justify-center transition-all duration-200 touch-manipulation"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {currentFloorplan.images.map((image, index) => (
                <div
                  key={`${currentFloorplan.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[300px] h-[200px] sm:h-[220px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d9488]/10 to-[#0d9488]/5 snap-center"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-[#0d9488]/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {image === "exterior" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        )}
                      </svg>
                      <p className="text-[#0d9488]/50 text-sm capitalize">{image}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Swipe hint on mobile */}
            <div className="flex items-center justify-center gap-2 mt-3 sm:hidden text-gray-400">
              <span className="text-sm">Swipe for more</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Floorplan Details */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-black text-black">{currentFloorplan.name}</h3>
                <p className="text-[#0d9488] font-bold text-xl">{currentFloorplan.price}</p>
              </div>
            </div>

            <p className="text-[#4a4a4a] mb-6 text-base">{currentFloorplan.description}</p>

            {/* Specs - 2x2 grid on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-2xl">
                <p className="text-2xl font-black text-black">{currentFloorplan.sqft}</p>
                <p className="text-xs text-[#4a4a4a] uppercase tracking-wide mt-1">Sq Ft</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl">
                <p className="text-2xl font-black text-black">{currentFloorplan.beds}</p>
                <p className="text-xs text-[#4a4a4a] uppercase tracking-wide mt-1">Beds</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl">
                <p className="text-2xl font-black text-black">{currentFloorplan.baths}</p>
                <p className="text-xs text-[#4a4a4a] uppercase tracking-wide mt-1">Baths</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl">
                <p className="text-2xl font-black text-black">{currentFloorplan.garage}</p>
                <p className="text-xs text-[#4a4a4a] uppercase tracking-wide mt-1">Garage</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#0d9488] hover:bg-[#0f766e] active:bg-[#0f766e] active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 text-base touch-manipulation shadow-lg shadow-[#0d9488]/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Floorplan PDF
              </a>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-3 border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white active:scale-[0.98] font-bold py-4 px-6 rounded-2xl transition-all duration-200 text-base touch-manipulation"
              >
                Book a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
