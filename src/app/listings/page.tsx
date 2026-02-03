"use client";

import { useState } from "react";
import Link from "next/link";

const allDevelopments = [
  {
    id: 1,
    name: "The Birchview",
    community: "Harbour Landing",
    priceFrom: "$429,900",
    beds: "3-4",
    baths: "2.5",
    sqft: "1,850",
    status: "Now Building",
    description: "Open concept living with modern finishes and a spacious backyard.",
  },
  {
    id: 2,
    name: "The Maple",
    community: "The Greens",
    priceFrom: "$389,900",
    beds: "3",
    baths: "2",
    sqft: "1,650",
    status: "Move-In Ready",
    description: "Perfect starter home with smart layouts and energy-efficient design.",
  },
  {
    id: 3,
    name: "The Cedar",
    community: "Westerra",
    priceFrom: "$459,900",
    beds: "4",
    baths: "3",
    sqft: "2,100",
    status: "Now Building",
    description: "Spacious family home with premium upgrades throughout.",
  },
  {
    id: 4,
    name: "The Oakwood",
    community: "Harbour Landing",
    priceFrom: "$524,900",
    beds: "4-5",
    baths: "3.5",
    sqft: "2,400",
    status: "Coming Soon",
    description: "Luxury living with designer finishes and a walk-out basement.",
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
    description: "Efficient design perfect for first-time buyers.",
  },
  {
    id: 6,
    name: "The Aspen",
    community: "Harbour Landing",
    priceFrom: "$399,900",
    beds: "3",
    baths: "2.5",
    sqft: "1,750",
    status: "Now Building",
    description: "Classic design with modern amenities and a double garage.",
  },
  {
    id: 7,
    name: "The Willow",
    community: "Westerra",
    priceFrom: "$479,900",
    beds: "4",
    baths: "3",
    sqft: "2,200",
    status: "Move-In Ready",
    description: "Contemporary style with open living spaces and bonus room.",
  },
  {
    id: 8,
    name: "The Spruce",
    community: "The Greens",
    priceFrom: "$369,900",
    beds: "3",
    baths: "2",
    sqft: "1,550",
    status: "Foundation Stage",
    description: "Thoughtful design with room to grow.",
  },
];

const communities = ["All Communities", "Harbour Landing", "The Greens", "Westerra"];
const statuses = ["All Stages", "Move-In Ready", "Now Building", "Foundation Stage", "Coming Soon"];

export default function ListingsPage() {
  const [selectedCommunity, setSelectedCommunity] = useState("All Communities");
  const [selectedStatus, setSelectedStatus] = useState("All Stages");
  const [priceRange, setPriceRange] = useState("all");

  const filteredDevelopments = allDevelopments.filter((dev) => {
    const communityMatch = selectedCommunity === "All Communities" || dev.community === selectedCommunity;
    const statusMatch = selectedStatus === "All Stages" || dev.status === selectedStatus;

    const priceNum = parseInt(dev.priceFrom.replace(/[$,]/g, ""));
    let priceMatch = true;
    if (priceRange === "under400") priceMatch = priceNum < 400000;
    else if (priceRange === "400to500") priceMatch = priceNum >= 400000 && priceNum < 500000;
    else if (priceRange === "over500") priceMatch = priceNum >= 500000;

    return communityMatch && statusMatch && priceMatch;
  });

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
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Current Developments
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Homes We&apos;re <span className="text-[#0d9488]">Building</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Explore our current home developments across Regina. From foundation to finish,
            we build quality homes in vibrant communities.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-[#f5f5f5] border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {/* Community Filter */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Community</label>
              <select
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0d9488] focus:outline-none min-w-[180px]"
              >
                {communities.map((community) => (
                  <option key={community} value={community}>
                    {community}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Build Stage</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0d9488] focus:outline-none min-w-[180px]"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Starting Price</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0d9488] focus:outline-none min-w-[180px]"
              >
                <option value="all">All Prices</option>
                <option value="under400">Under $400,000</option>
                <option value="400to500">$400,000 - $500,000</option>
                <option value="over500">Over $500,000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Developments Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="container-custom">
          <p className="text-[#4a4a4a] mb-6">
            Showing {filteredDevelopments.length} of {allDevelopments.length} home models
          </p>

          {filteredDevelopments.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDevelopments.map((dev) => (
                <div
                  key={dev.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
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
                    <p className="text-sm text-[#4a4a4a] mb-3 line-clamp-2">{dev.description}</p>
                    <p className="text-sm text-[#4a4a4a] mb-1">Starting from</p>
                    <p className="text-2xl font-black text-[#0d9488] mb-4">{dev.priceFrom}</p>

                    {/* Features */}
                    <div className="flex items-center gap-4 text-sm text-[#4a4a4a] mb-4 pt-4 border-t border-gray-100">
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

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold py-3 rounded-xl transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-bold text-black mb-2">No home models found</h3>
              <p className="text-[#4a4a4a] mb-4">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => {
                  setSelectedCommunity("All Communities");
                  setSelectedStatus("All Stages");
                  setPriceRange("all");
                }}
                className="text-[#0d9488] hover:text-[#0f766e] font-bold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Custom Build CTA */}
      <section className="py-16 px-4 bg-[#0d9488]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Want to customize your home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We can build your dream home from scratch. Choose your lot, floorplan, and finishes.
            Let&apos;s create something perfect for your family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Start a Custom Build
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
