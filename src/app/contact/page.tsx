import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Bison Properties Limited",
  description: "Contact Bison Properties Limited to find your new home. Call (306) 123-1234 or fill out our form. Discover new homes in Regina's best communities.",
  keywords: ["contact home builder", "Regina new homes", "schedule tour", "home inquiry"],
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d9488]/20 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Contact
              <span className="text-[#0d9488]"> Us</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Ready to find your new home? Get in touch with our team and we&apos;ll help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <Contact />

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-[#f5f5f5] rounded-3xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-[#0d9488] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-black font-bold text-lg">Showhome Location</p>
              <p className="text-gray-500 text-sm">123 Sample Street, Regina, SK</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
