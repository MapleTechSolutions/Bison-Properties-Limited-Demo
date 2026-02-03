"use client";

import { useState } from "react";
import Link from "next/link";

const communities = [
  {
    id: "harbour-landing",
    name: "Harbour Landing",
    description: "A thriving community with excellent amenities, parks, and easy access to shopping and dining. Harbour Landing offers the perfect blend of suburban comfort and urban convenience.",
    schools: [
      "Harbour Landing School (K-8)",
      "École Monseigneur de Laval (French Immersion)",
      "Campbell Collegiate (nearby)",
    ],
    parks: [
      "Harbour Landing Park",
      "Community playground areas",
      "Walking and cycling trails",
      "Sports fields and tennis courts",
    ],
    services: [
      "Grocery stores and supermarkets",
      "Medical clinics and pharmacies",
      "Restaurants and cafes",
      "Shopping centers",
    ],
  },
  {
    id: "the-greens",
    name: "The Greens",
    description: "An environmentally conscious community featuring green spaces, energy-efficient homes, and a family-friendly atmosphere. The Greens is perfect for those who value sustainability and nature.",
    schools: [
      "The Greens Elementary (planned)",
      "Nearby schools within 5km",
      "School bus routes available",
    ],
    parks: [
      "Central green space",
      "Community gardens",
      "Natural wetland areas",
      "Walking paths throughout",
    ],
    services: [
      "Planned commercial center",
      "Quick access to Ring Road",
      "Future retail development",
      "Nearby amenities via Ring Road",
    ],
  },
  {
    id: "westerra",
    name: "Westerra",
    description: "A modern community on the west side of Regina with contemporary home designs and excellent connectivity. Westerra combines modern living with prairie charm.",
    schools: [
      "Schools within 10 minutes",
      "Future school sites planned",
      "School bus service available",
    ],
    parks: [
      "Community parks (developing)",
      "Green buffer zones",
      "Planned recreation facilities",
      "Trail connections to city network",
    ],
    services: [
      "Growing commercial area",
      "Easy highway access",
      "Future amenities planned",
      "Close to west-side shopping",
    ],
  },
];

export default function Communities() {
  const [activeTab, setActiveTab] = useState(communities[0].id);
  const [openAccordion, setOpenAccordion] = useState<string | null>("schools");

  const activeCommunity = communities.find((c) => c.id === activeTab) || communities[0];

  return (
    <section id="communities" className="py-12 sm:py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 sm:mb-4">
            Where are we building?
          </h2>
          <p className="text-[#4a4a4a] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover our communities and find the perfect neighborhood for your new home
          </p>
        </div>

        {/* Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 mb-8 sm:mb-10 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {communities.map((community) => (
            <button
              key={community.id}
              onClick={() => setActiveTab(community.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 touch-manipulation ${
                activeTab === community.id
                  ? "bg-[#0d9488] text-white"
                  : "bg-white text-[#4a4a4a] hover:bg-gray-100 active:bg-gray-100"
              }`}
            >
              {community.name}
            </button>
          ))}
        </div>

        {/* Community Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Info Column */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
              Why {activeCommunity.name}?
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              {activeCommunity.description}
            </p>

            {/* Accordions */}
            <div className="space-y-3">
              {/* Schools Accordion */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "schools" ? null : "schools")}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-black flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Schools
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#4a4a4a] transition-transform duration-300 ${
                      openAccordion === "schools" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === "schools" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    {activeCommunity.schools.map((school, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#4a4a4a]">
                        <svg className="w-4 h-4 text-[#0d9488] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {school}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Parks & Facilities Accordion */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "parks" ? null : "parks")}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-black flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Parks & Facilities
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#4a4a4a] transition-transform duration-300 ${
                      openAccordion === "parks" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === "parks" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    {activeCommunity.parks.map((park, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#4a4a4a]">
                        <svg className="w-4 h-4 text-[#0d9488] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {park}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nearby Services Accordion */}
              <div className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "services" ? null : "services")}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-black flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Nearby Services
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#4a4a4a] transition-transform duration-300 ${
                      openAccordion === "services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === "services" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    {activeCommunity.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#4a4a4a]">
                        <svg className="w-4 h-4 text-[#0d9488] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] active:bg-[#0f766e] text-white font-bold px-5 sm:px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto text-sm sm:text-base touch-manipulation"
              >
                Build in {activeCommunity.name}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Map Placeholder Column */}
          <div className="bg-gray-200 rounded-xl sm:rounded-2xl h-[280px] sm:h-[350px] lg:h-full lg:min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <div className="text-center p-4">
              <svg className="w-14 h-14 sm:w-20 sm:h-20 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-500 font-bold text-base sm:text-lg">{activeCommunity.name}</p>
              <p className="text-gray-400 text-sm">Interactive community map</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
