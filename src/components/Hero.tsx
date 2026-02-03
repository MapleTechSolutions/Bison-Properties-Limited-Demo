"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#110a0c]">
      {/* Optimized gradient background - reduced blur for mobile performance */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#110a0c] via-[#1a1315] to-[#0a0608]" />
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#f04d22]/15 md:bg-[#f04d22]/20 rounded-full blur-[80px] md:blur-[150px] -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-5 md:mb-6">
              Client Focused
              <br />
              <span className="text-[#f04d22]">
                Results Driven
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Professional property management &amp; landscaping services.
              We treat every property as if it were our own.
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 md:mb-12">
              <Link href="/contact" className="btn-primary text-base w-full sm:w-auto">
                Get Free Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:3437000770" className="btn-outline-white text-base w-full sm:w-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                343-700-0770
              </a>
            </div>

            {/* Trust indicators - Scroll on mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">Local Team</span>
              </div>
            </div>
          </div>

          {/* Right - Quote Form (Desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
                <p className="text-white/60">We&apos;ll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none focus:ring-1 focus:ring-[#f04d22] transition-all text-white placeholder-white/40 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none focus:ring-1 focus:ring-[#f04d22] transition-all text-white placeholder-white/40 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none focus:ring-1 focus:ring-[#f04d22] transition-all text-white placeholder-white/40 font-medium"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none focus:ring-1 focus:ring-[#f04d22] transition-all text-white/60 font-medium">
                    <option value="" className="bg-[#110a0c]">Select Service Type</option>
                    <option value="lawn-care" className="bg-[#110a0c]">Lawn Care</option>
                    <option value="landscaping" className="bg-[#110a0c]">Landscaping</option>
                    <option value="snow-removal" className="bg-[#110a0c]">Snow Removal</option>
                    <option value="rental-services" className="bg-[#110a0c]">Rental Services</option>
                    <option value="other" className="bg-[#110a0c]">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your property..."
                    rows={3}
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none focus:ring-1 focus:ring-[#f04d22] transition-all text-white placeholder-white/40 font-medium resize-none"
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-4">
                  Request Free Quote
                </button>
              </form>

              <p className="text-center text-sm text-white/40 mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>

          {/* Mobile Quick Quote Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center justify-between touch-manipulation"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f04d22] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">Quick Quote Form</p>
                  <p className="text-white/60 text-sm">Tap to fill out the form</p>
                </div>
              </div>
              <svg className={`w-5 h-5 text-[#f04d22] transition-transform duration-300 ${isFormVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Form - Expandable */}
            <div className={`overflow-hidden transition-all duration-300 ease-out ${isFormVisible ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none text-white placeholder-white/40 font-medium text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none text-white placeholder-white/40 font-medium text-base"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none text-white placeholder-white/40 font-medium text-base"
                  />
                  <select className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-[#f04d22] focus:outline-none text-white/60 font-medium text-base">
                    <option value="" className="bg-[#110a0c]">Select Service Type</option>
                    <option value="lawn-care" className="bg-[#110a0c]">Lawn Care</option>
                    <option value="landscaping" className="bg-[#110a0c]">Landscaping</option>
                    <option value="snow-removal" className="bg-[#110a0c]">Snow Removal</option>
                    <option value="rental-services" className="bg-[#110a0c]">Rental Services</option>
                  </select>
                  <button type="submit" className="w-full btn-primary py-4">
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - Optimized for mobile */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="group p-3 md:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 group-hover:text-[#f04d22] transition-colors">500+</div>
              <div className="text-white/50 font-medium uppercase text-[10px] sm:text-xs tracking-wider">Properties Served</div>
            </div>
            <div className="group p-3 md:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 group-hover:text-[#f04d22] transition-colors">100%</div>
              <div className="text-white/50 font-medium uppercase text-[10px] sm:text-xs tracking-wider">Satisfaction</div>
            </div>
            <div className="group p-3 md:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 group-hover:text-[#f04d22] transition-colors">24hr</div>
              <div className="text-white/50 font-medium uppercase text-[10px] sm:text-xs tracking-wider">Response Time</div>
            </div>
            <div className="group p-3 md:p-0">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 group-hover:text-[#f04d22] transition-colors">5.0</div>
              <div className="text-white/50 font-medium uppercase text-[10px] sm:text-xs tracking-wider">Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
