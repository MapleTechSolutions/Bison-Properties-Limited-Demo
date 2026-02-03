import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="section-padding pb-8 md:pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 md:gap-3 mb-5 md:mb-6">
                {/* Bison Silhouette */}
                <svg
                  className="w-12 h-10 md:w-16 md:h-12"
                  viewBox="0 0 80 50"
                  fill="none"
                >
                  {/* Bison body - charging position facing right */}
                  <path
                    d="M68 28c2-1 4-3 4-6 0-2-1-4-3-5l-2-1c0-2-1-4-3-5-1-1-3-2-5-2h-3c-1-2-3-4-6-5-2-1-5-1-7 0l-3 2c-3-1-6-1-9 0-2 1-4 2-5 4l-2-1c-3-1-6 0-8 2-2 1-3 3-3 5l-1 3c-2 1-4 3-5 5-1 3-1 5 1 7l2 2v4c0 2 1 3 2 3h3l1-5h2l1 5h3c1 0 2-1 2-3v-2h8v2c0 2 1 3 2 3h3l1-5h2l1 5h3c1 0 2-1 2-3v-4l4-2c2-1 3-3 3-5l1-2z"
                    fill="#110a0c"
                    stroke="#f04d22"
                    strokeWidth="2"
                  />
                  {/* Horn */}
                  <path
                    d="M62 14c1-2 3-3 5-3 1 0 3 1 3 2 0 2-1 3-3 4l-3 1-2-4z"
                    fill="#110a0c"
                    stroke="#f04d22"
                    strokeWidth="1.5"
                  />
                  {/* Eye */}
                  <circle cx="58" cy="18" r="1.5" fill="#f04d22" />
                </svg>
                <div>
                  <span className="text-lg md:text-xl font-black text-[#f04d22]">BISON</span>
                  <span className="block text-[10px] md:text-xs text-white font-semibold tracking-wider uppercase">PROPERTY</span>
                  <span className="block text-[10px] md:text-xs text-white font-semibold tracking-wider uppercase">MANAGEMENT</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                Your trusted property management and landscaping team. We treat every property as if it were our own.
              </p>
              <div className="flex gap-2 md:gap-3">
                {["facebook", "instagram", "linkedin"].map((social) => (
                  <a
                    key={social}
                    href={social === "linkedin" ? "https://linkedin.com/in/BisonPropMgmt" : `https://${social}.com/BisonPropMgmt`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-10 md:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center active:bg-[#f04d22] active:border-[#f04d22] active:text-white transition-all duration-200 touch-manipulation"
                    aria-label={social}
                  >
                    {social === "facebook" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/reviews", label: "Reviews" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 active:text-[#f04d22] transition-colors flex items-center gap-2 group py-1 touch-manipulation text-sm md:text-base">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-[#f04d22] opacity-0 group-active:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Our Services</h4>
              <ul className="space-y-2 md:space-y-3">
                {["Lawn Care", "Landscaping", "Snow Removal", "Rentals"].map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-gray-400 active:text-[#f04d22] transition-colors flex items-center gap-2 group py-1 touch-manipulation text-sm md:text-base">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-[#f04d22] opacity-0 group-active:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Contact</h4>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a href="tel:3437000770" className="flex items-center gap-3 text-gray-400 active:text-[#f04d22] transition-colors touch-manipulation">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#110a0c] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base">343-700-0770</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Sales@BisonPropertyManagement.ca" className="flex items-center gap-3 text-gray-400 active:text-[#f04d22] transition-colors touch-manipulation">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#110a0c] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base break-all">Sales@BisonPropertyManagement.ca</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#110a0c] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#f04d22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm md:text-base">
                    <div>Service Area</div>
                    <div className="text-gray-500">Contact for details</div>
                    <div className="text-[#f04d22] font-bold">Free Quotes</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              &copy; {currentYear} Bison Property Management. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-500 active:text-[#f04d22] transition-colors touch-manipulation">Privacy Policy</a>
              <a href="#" className="text-gray-500 active:text-[#f04d22] transition-colors touch-manipulation">Terms of Service</a>
              <a href="/sitemap.xml" className="text-gray-500 active:text-[#f04d22] transition-colors touch-manipulation">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
