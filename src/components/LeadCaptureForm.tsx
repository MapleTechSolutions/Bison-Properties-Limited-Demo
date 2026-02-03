"use client";

import { useState } from "react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    community: "",
    message: "",
    isRealtor: false,
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Form Section */}
          <div className="bg-[#0d9488] p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">
              Ready to build your dream home?
            </h2>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
              Let&apos;s start your home building journey. Our team will guide you through every step.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white placeholder-white/60 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white placeholder-white/60 font-medium"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white placeholder-white/60 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white placeholder-white/60 font-medium"
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white/60 font-medium appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" className="bg-[#0f766e] text-white">I would like to...</option>
                    <option value="showhome-tour" className="bg-[#0f766e] text-white">Visit a Showhome</option>
                    <option value="build-new" className="bg-[#0f766e] text-white">Build a New Home</option>
                    <option value="floorplans" className="bg-[#0f766e] text-white">See Floorplans</option>
                    <option value="pricing" className="bg-[#0f766e] text-white">Get Pricing</option>
                    <option value="general" className="bg-[#0f766e] text-white">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <select
                    name="community"
                    value={formData.community}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white/60 font-medium appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="" className="bg-[#0f766e] text-white">Where do you want to build?</option>
                    <option value="harbour-landing" className="bg-[#0f766e] text-white">Harbour Landing</option>
                    <option value="the-greens" className="bg-[#0f766e] text-white">The Greens</option>
                    <option value="westerra" className="bg-[#0f766e] text-white">Westerra</option>
                    <option value="any" className="bg-[#0f766e] text-white">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your dream home - size, style, must-haves..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white placeholder-white/60 font-medium resize-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="isRealtor"
                    checked={formData.isRealtor}
                    onChange={handleChange}
                    className="w-5 h-5 mt-0.5 rounded border-white/30 bg-white/10 text-[#0d9488] focus:ring-white/50 cursor-pointer"
                  />
                  <span className="text-white/80 text-sm">I am working with a realtor</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-0.5 rounded border-white/30 bg-white/10 text-[#0d9488] focus:ring-white/50 cursor-pointer"
                  />
                  <span className="text-white/80 text-sm">
                    I consent to receive communications from Bison Properties Limited *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 active:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 mt-4 touch-manipulation text-sm sm:text-base"
              >
                Start My Journey
              </button>
            </form>
          </div>

          {/* Image Section - Construction/Building themed */}
          <div className="relative h-64 lg:h-auto bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
            {/* Blueprint grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Placeholder for lifestyle image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-[#0d9488]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Build With Confidence</h3>
                <p className="text-white/60 max-w-xs mx-auto">
                  From your first consultation to handing over the keys, we&apos;re with you every step of the way.
                </p>
                <div className="flex justify-center gap-8 mt-8">
                  <div className="text-center">
                    <p className="text-[#0d9488] text-2xl font-bold">500+</p>
                    <p className="text-white/50 text-sm">Homes Built</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#0d9488] text-2xl font-bold">15+</p>
                    <p className="text-white/50 text-sm">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#0d9488] text-2xl font-bold">3</p>
                    <p className="text-white/50 text-sm">Communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
