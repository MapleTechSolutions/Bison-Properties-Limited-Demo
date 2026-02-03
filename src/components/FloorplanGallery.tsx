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
        <div className="flex overflow-x-auto gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {floorplans.map((floorplan) => (
            <button
              key={floorplan.id}
              onClick={() => setActiveFloorplan(floorplan.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 touch-manipulation ${
                activeFloorplan === floorplan.id
                  ? "bg-[#0d9488] text-white"
                  : "bg-gray-100 text-[#4a4a4a] hover:bg-gray-200 active:bg-gray-200"
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
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white flex items-center justify-center transition-all duration-300 touch-manipulation"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="text-[#4a4a4a] text-xs sm:hidden">Swipe to browse</p>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white flex items-center justify-center transition-all duration-300 touch-manipulation"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {currentFloorplan.images.map((image, index) => (
                <div
                  key={`${currentFloorplan.id}-${index}`}
                  className="flex-shrink-0 w-[240px] sm:w-[300px] h-[180px] sm:h-[220px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d9488]/10 to-[#0d9488]/5 snap-start"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#0d9488]/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {image === "exterior" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        )}
                      </svg>
                      <p className="text-[#0d9488]/50 text-xs sm:text-sm capitalize">{image}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floorplan Details */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black">{currentFloorplan.name}</h3>
                <p className="text-[#0d9488] font-bold text-lg sm:text-xl">{currentFloorplan.price}</p>
              </div>
            </div>

            <p className="text-[#4a4a4a] mb-5 sm:mb-6 text-sm sm:text-base">{currentFloorplan.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-lg sm:rounded-xl">
                <p className="text-lg sm:text-2xl font-black text-black">{currentFloorplan.sqft}</p>
                <p className="text-[10px] sm:text-xs text-[#4a4a4a] uppercase tracking-wide">Sq Ft</p>
              </div>
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-lg sm:rounded-xl">
                <p className="text-lg sm:text-2xl font-black text-black">{currentFloorplan.beds}</p>
                <p className="text-[10px] sm:text-xs text-[#4a4a4a] uppercase tracking-wide">Beds</p>
              </div>
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-lg sm:rounded-xl">
                <p className="text-lg sm:text-2xl font-black text-black">{currentFloorplan.baths}</p>
                <p className="text-[10px] sm:text-xs text-[#4a4a4a] uppercase tracking-wide">Baths</p>
              </div>
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-lg sm:rounded-xl">
                <p className="text-lg sm:text-2xl font-black text-black">{currentFloorplan.garage}</p>
                <p className="text-[10px] sm:text-xs text-[#4a4a4a] uppercase tracking-wide">Garage</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] active:bg-[#0f766e] text-white font-bold py-3 px-5 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base touch-manipulation"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Floorplan PDF
              </a>
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white font-bold py-3 px-5 sm:px-6 rounded-xl transition-all duration-300 text-sm sm:text-base touch-manipulation"
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
