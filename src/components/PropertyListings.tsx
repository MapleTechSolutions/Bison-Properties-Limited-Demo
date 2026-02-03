"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const developments = [
  {
    id: 1,
    name: "The Maple",
    community: "Harbour Landing",
    priceFrom: "$429,900",
    beds: "3-4",
    baths: "2.5",
    sqft: "1,850",
    status: "Now Building",
    description: "Open concept living with modern finishes",
  },
  {
    id: 2,
    name: "The Oakwood",
    community: "The Greens",
    priceFrom: "$389,900",
    beds: "3",
    baths: "2",
    sqft: "1,650",
    status: "Move-In Ready",
    description: "Perfect for growing families",
  },
  {
    id: 3,
    name: "The Birchview",
    community: "Westerra",
    priceFrom: "$459,900",
    beds: "4",
    baths: "3",
    sqft: "2,100",
    status: "Now Building",
    description: "Spacious layouts with premium upgrades",
  },
  {
    id: 4,
    name: "The Cedar",
    community: "Harbour Landing",
    priceFrom: "$524,900",
    beds: "4-5",
    baths: "3.5",
    sqft: "2,400",
    status: "Coming Soon",
    description: "Luxury living with designer finishes",
  },
  {
    id: 5,
    name: "The Pinehurst",
    community: "The Greens",
    priceFrom: "$349,900",
    beds: "2-3",
    baths: "2",
    sqft: "1,400",
    status: "Foundation Stage",
    description: "Smart starter home design",
  },
];

export default function PropertyListings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Move-In Ready":
        return "bg-[#0d9488] text-white";
      case "Now Building":
        return "bg-black text-white";
      case "Foundation Stage":
        return "bg-amber-500 text-white";
      case "Coming Soon":
        return "bg-gray-600 text-white";
      default:
        return "bg-white text-black border border-gray-200";
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d9488]/10 text-[#0d9488] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Current Developments
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3">
              Homes We&apos;re <span className="text-[#0d9488]">Building</span>
            </h2>
            <p className="text-[#4a4a4a] text-sm sm:text-base md:text-lg max-w-xl">
              From foundation to finishing touches, explore our current home developments across Regina&apos;s best communities.
            </p>
          </div>
          {/* Navigation arrows - hidden on mobile, users can swipe */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 touch-manipulation ${
                canScrollLeft
                  ? "border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 touch-manipulation ${
                canScrollRight
                  ? "border-[#0d9488] text-[#0d9488] hover:bg-[#0d9488] hover:text-white active:bg-[#0d9488] active:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Developments Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {developments.map((dev) => (
            <div
              key={dev.id}
              className="flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl active:scale-[0.99] transition-all duration-200 group snap-center"
            >
              {/* Image Placeholder - Blueprint style */}
              <div className="relative h-52 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-[#0d9488]/60 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-white/40 text-sm font-medium">{dev.name}</p>
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusStyle(dev.status)}`}>
                    {dev.status}
                  </span>
                </div>
                {/* Community Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-black">
                    {dev.community}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-black mb-1">{dev.name}</h3>
                <p className="text-sm text-[#4a4a4a] mb-3">{dev.description}</p>
                <p className="text-sm text-[#4a4a4a] mb-1">Starting from</p>
                <p className="text-2xl font-black text-[#0d9488] mb-4">{dev.priceFrom}</p>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-[#4a4a4a] pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{dev.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>{dev.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{dev.sqft} Sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint on mobile - more visible */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:hidden text-gray-400">
          <span className="text-sm">Swipe for more</span>
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/listings"
            className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-800 active:bg-gray-900 active:scale-[0.98] text-white font-bold px-6 sm:px-8 py-5 rounded-2xl transition-all duration-200 w-full sm:w-auto touch-manipulation"
          >
            View All Developments
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
