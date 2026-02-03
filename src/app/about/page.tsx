import type { Metadata } from "next";
import About from "@/components/About";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Bison Properties Limited",
  description: "Bold Builds Further. Learn about Bison Properties Limited, an award-winning home builder creating vibrant communities across Regina.",
  keywords: ["about Bison Properties", "Regina home builder", "new homes Regina", "property development"],
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d9488]/20 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About
              <span className="text-[#0d9488]"> Bison Properties</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Bold Builds Further. Creating quality homes and vibrant communities across Regina.
            </p>
          </div>
        </div>
      </section>

      <About />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0d9488]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Explore our available homes and communities. Your perfect home is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/listings"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Browse Homes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
