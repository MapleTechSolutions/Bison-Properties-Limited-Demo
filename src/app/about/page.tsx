import type { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Bison Property Management",
  description: "Client Focused, Results Driven. Bison Property Management provides professional lawn care, landscaping, snow removal and rental services in Lyn, Ontario near Brockville.",
  keywords: ["about Bison Property Management", "Lyn Ontario property management", "local lawn care", "Brockville landscaping"],
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#110a0c] via-[#1a1315] to-[#110a0c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f04d22]/20 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#f04d22] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              About
              <span className="text-[#f04d22]"> Bison Property</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Client Focused, Results Driven. We treat every property as if it were our own.
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
