"use client";

import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Arts, Culture & Events",
    description: "From the Regina Symphony to summer festivals at Wascana Centre, the city offers rich cultural experiences.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Strong Economy",
    description: "A thriving economy with stable employment in tech, agriculture, energy, and government sectors.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Parks & Recreation",
    description: "Wascana Park, one of the largest urban parks in North America, plus countless trails and green spaces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Affordable Living",
    description: "Build your dream home at prices that make sense. Quality craftsmanship without the big city price tag.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function CityFeatures() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d9488]/10 text-[#0d9488] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Saskatchewan&apos;s Capital
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 sm:mb-4">
              Why Build in <span className="text-[#0d9488]">Regina?</span>
            </h2>
            <p className="text-[#4a4a4a] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Regina combines prairie hospitality with modern urban living. It&apos;s where families
              put down roots, businesses thrive, and communities flourish. Build your home where
              quality of life comes standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-[#4a4a4a]">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Family-friendly communities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4a4a4a]">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Top-rated schools</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4a4a4a]">
                <svg className="w-5 h-5 text-[#0d9488]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Short commute times</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Regina Skyline */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/regina-skyline.jpg"
                alt="Saskatchewan Legislative Building at sunset reflected in Wascana Lake"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <p className="text-white font-bold text-base sm:text-lg">Saskatchewan Legislative Building</p>
                <p className="text-white/80 text-xs sm:text-sm">The heart of Regina at Wascana Centre</p>
              </div>
            </div>
            {/* Floating stat - positioned better on mobile */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:-left-6 bg-[#0d9488] text-white rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl">
              <p className="text-2xl sm:text-3xl font-black">260K+</p>
              <p className="text-white/80 text-xs sm:text-sm">Population & Growing</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 mt-8 sm:mt-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-[#0d9488] group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300 shadow-sm">
                <div className="scale-75 sm:scale-100">{feature.icon}</div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-black mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-[#4a4a4a] text-xs sm:text-sm leading-relaxed hidden sm:block">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#communities"
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 active:bg-gray-800 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto touch-manipulation"
          >
            Explore Our Communities
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
