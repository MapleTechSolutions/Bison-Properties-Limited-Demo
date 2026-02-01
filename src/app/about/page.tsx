import type { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us - Your Trusted Local Contractor",
  description: "Family-owned contracting company with 15+ years of experience. 500+ completed projects, fully licensed & insured. Professional services for residential and commercial properties.",
  keywords: ["about us", "local contractor", "family owned contractor", "licensed contractor", "insured contractor"],
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#094026] via-[#0a5530] to-[#063d22] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FCB215]/20 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#FCB215] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About
              <span className="text-[#FCB215]"> Our Company</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Family-owned and operated for over 15 years. We treat every project like it&apos;s our own home.
            </p>
          </div>
        </div>
      </section>

      <About />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
