"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/regina-hero.webp"
          alt="Wascana Lake sunset with Saskatchewan Legislative Building"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability - stronger on mobile for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-black/30" />
      </div>

      {/* Teal Vertical Accent Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 md:w-3 bg-[#0d9488]" />

      <div className="container-custom relative z-10 pt-16 pb-20 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 font-medium">
            Building Dreams in Saskatchewan&apos;s Capital
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
            We Build
            <br />
            <span className="text-[#0d9488]">Quality Homes</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Creating vibrant communities across Regina. From foundation to finishing touches, we craft homes built to last.
          </p>

          {/* CTA Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="#communities"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#0d9488] hover:bg-[#0f766e] active:bg-[#0f766e] text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl touch-manipulation"
            >
              Our Communities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 active:bg-white/20 text-white font-bold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 text-base sm:text-lg border border-white/30 touch-manipulation"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Trust Indicators - Better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 font-medium text-sm sm:text-base">500+ Homes Built</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 font-medium text-sm sm:text-base">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 font-medium text-sm sm:text-base">Award-Winning Builder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
