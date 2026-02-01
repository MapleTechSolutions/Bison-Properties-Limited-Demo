import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Quality Guaranteed",
      description: "Every project completed to the highest standards with meticulous attention to detail.",
    },
    {
      number: "02",
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. Detailed estimates provided before work begins.",
    },
    {
      number: "03",
      title: "On-Time Completion",
      description: "We respect your time. Projects finished on schedule with minimal disruption.",
    },
    {
      number: "04",
      title: "Clear Communication",
      description: "Stay informed throughout your project with regular updates and responsive service.",
    },
    {
      number: "05",
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience in the industry.",
    },
    {
      number: "06",
      title: "100% Satisfaction",
      description: "We&apos;re not happy until you&apos;re happy. Your satisfaction is guaranteed.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-[#094026] relative overflow-hidden">
      {/* Background elements - simplified for mobile performance */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FCB215]/10 rounded-full blur-[80px] md:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#063d22]/30 rounded-full blur-[60px] md:blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FCB215] px-4 md:px-5 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-5">
            The
            <span className="text-[#FCB215]"> Difference</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            When you choose us, you&apos;re choosing quality, reliability, and a team that genuinely cares about your project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-8 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl active:bg-white/10 transition-all duration-200"
            >
              <div className="text-4xl md:text-6xl font-black text-[#FCB215]/10 absolute top-3 md:top-4 right-3 md:right-4 group-active:text-[#FCB215]/20 transition-colors">
                {reason.number}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative">{reason.title}</h3>
              <p className="text-white/60 leading-relaxed relative text-sm md:text-base">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#FCB215] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#094026] mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-[#094026]/80 font-medium text-sm md:text-base">
                Contact us today for a free, no-obligation estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[#FCB215] bg-[#094026] active:bg-[#063d22] transition-colors uppercase tracking-wider text-sm shadow-lg touch-manipulation w-full sm:w-auto">
                Get Free Estimate
              </Link>
              <a href="tel:5551234567" className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[#094026] bg-white/20 active:bg-white/30 transition-colors uppercase tracking-wider text-sm border border-[#094026]/20 touch-manipulation w-full sm:w-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
