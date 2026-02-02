import Link from "next/link";

const services = [
  {
    title: "Lawn Care",
    description: "Professional lawn maintenance including weekly mowing, trimming, and edging to keep your property looking its best.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    description: "Transform your outdoor space with tree trimming, garden beds, mulching, and comprehensive landscape design.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Snow Removal",
    description: "Reliable winter services including plowing, salting, and sidewalk clearing with fast emergency response times.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Rental Services",
    description: "Complete property management including tenant screening, rent collection, and maintenance coordination.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f04d22]/10 text-[#110a0c] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#110a0c] mb-5">
            Our <span className="text-[#f04d22]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From lawn care to property management, we deliver quality service and exceptional results on every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#f04d22]/20 hover:shadow-xl hover:shadow-[#f04d22]/5 transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#110a0c] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#110a0c]/20">
                <div className="text-[#f04d22]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#110a0c] mb-3 group-hover:text-[#f04d22] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-[#f04d22] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
