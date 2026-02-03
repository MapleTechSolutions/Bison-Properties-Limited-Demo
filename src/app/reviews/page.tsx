import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | Bison Properties Limited",
  description: "Read what happy homeowners have to say about Bison Properties Limited. Discover why families choose us for their new home in Regina.",
  keywords: ["Bison Properties reviews", "home builder testimonials", "Regina homeowner reviews"],
};

export default function ReviewsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0d9488]/20 rounded-full blur-[150px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#0d9488] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              5.0 Rating
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Customer
              <span className="text-[#0d9488]"> Reviews</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Don&apos;t just take our word for it. See what happy homeowners have to say about their Bison Properties experience.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0d9488]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Join Our Happy Homeowners?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Start your journey to homeownership today. Browse our available homes or contact our team.
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
