"use client";

import { useState } from "react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  {
    id: "residential",
    title: "Residential Services",
    description: "Complete home improvement solutions for homeowners. From new installations to repairs and maintenance, we protect your biggest investment.",
    features: ["Home renovations", "Kitchen & bathroom remodels", "Additions & extensions", "Interior & exterior work", "Custom projects"],
    gradient: "from-[#FCB215] to-[#e5a013]",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "commercial",
    title: "Commercial Services",
    description: "Professional services for businesses of all sizes. We minimize disruption and maximize quality for your commercial property.",
    features: ["Office buildouts", "Retail space renovation", "Restaurant & hospitality", "Warehouse improvements", "Property maintenance"],
    gradient: "from-[#094026] to-[#0a5530]",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "renovations",
    title: "Renovations",
    description: "Transform your space with expert renovation services. We bring your vision to life with quality craftsmanship and attention to detail.",
    features: ["Full home renovations", "Kitchen remodeling", "Bathroom upgrades", "Basement finishing", "Room additions"],
    gradient: "from-[#FCB215] to-[#e5a013]",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    description: "Fast, reliable repair services to fix issues and prevent future problems. Regular maintenance extends the life of your property.",
    features: ["Emergency repairs", "Preventive maintenance", "Damage assessment", "Quick turnaround", "Ongoing service plans"],
    gradient: "from-[#094026] to-[#0a5530]",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "construction",
    title: "New Construction",
    description: "Building from the ground up. Expert construction services for new builds, additions, and custom projects.",
    features: ["New home construction", "Commercial buildings", "Additions & extensions", "Custom builds", "Project management"],
    gradient: "from-[#FCB215] to-[#e5a013]",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<string>("residential");
  const activeService = services.find(s => s.id === activeId) || services[0];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FCB215]/10 text-[#094026] px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#094026] mb-4 md:mb-5">
            Professional Solutions That
            <span className="text-[#FCB215]"> Deliver</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From residential projects to commercial work, we deliver quality workmanship on every project.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Tabs */}
        <div className="lg:hidden mb-6 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-3 scroll-smooth-x">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 touch-manipulation whitespace-nowrap ${
                  activeId === service.id
                    ? "bg-[#094026] text-white shadow-lg"
                    : "bg-gray-100 text-[#094026] active:bg-gray-200"
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeId === service.id ? "bg-[#FCB215] text-[#094026]" : "bg-white"
                }`}>
                  {service.icon}
                </span>
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service Cards - Desktop Only */}
          <div className="hidden lg:block lg:col-span-1 space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group ${
                  activeId === service.id
                    ? "bg-[#094026] shadow-xl shadow-[#094026]/20"
                    : "bg-[#f8f9fa] hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeId === service.id
                      ? `bg-[#FCB215] text-[#094026] shadow-lg`
                      : "bg-white text-[#094026] group-hover:scale-105"
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      activeId === service.id ? "text-white" : "text-[#094026]"
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeId === service.id
                        ? "text-[#FCB215] rotate-0"
                        : "text-gray-400 -rotate-90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className="lg:col-span-2">
            <div className="bg-[#f8f9fa] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200/50 h-full">
              <div className={`inline-flex w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl items-center justify-center bg-gradient-to-br ${activeService.gradient} text-white shadow-lg mb-5 md:mb-6`}>
                {activeService.icon}
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#094026] mb-3 md:mb-4">
                {activeService.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-3 md:p-4 shadow-sm">
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br ${activeService.gradient} flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#094026] font-medium text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn-primary inline-flex w-full sm:w-auto justify-center"
              >
                Get a Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
