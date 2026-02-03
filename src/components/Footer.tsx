import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Visit Our Showhome Section */}
      <div className="bg-[#f5f5f5] py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Showhome Info */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
                Visit Our Showhome
              </h3>

              {/* Address */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0d9488] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black text-sm sm:text-base">123 Sample Street</p>
                    <p className="text-[#4a4a4a] text-sm sm:text-base">Regina, SK S4S 0A0</p>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="mb-5 sm:mb-6">
                <h4 className="font-bold text-black mb-2 sm:mb-3 text-sm sm:text-base">Regular Hours</h4>
                <table className="w-full text-xs sm:text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-[#4a4a4a]">Monday - Thursday</td>
                      <td className="py-2 text-right font-medium text-black">By Appointment</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-[#4a4a4a]">Friday</td>
                      <td className="py-2 text-right font-medium text-black">12:00 PM - 5:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 text-[#4a4a4a]">Saturday - Sunday</td>
                      <td className="py-2 text-right font-medium text-black">12:00 PM - 5:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#4a4a4a]">Holidays</td>
                      <td className="py-2 text-right font-medium text-black">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <a href="tel:3061231234" className="flex items-center gap-3 text-[#4a4a4a] hover:text-[#0d9488] active:text-[#0d9488] transition-colors py-1 touch-manipulation">
                  <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-base">(306) 123-1234</span>
                </a>
                <a href="mailto:info@bisonproperties.ca" className="flex items-center gap-3 text-[#4a4a4a] hover:text-[#0d9488] active:text-[#0d9488] transition-colors py-1 touch-manipulation">
                  <svg className="w-5 h-5 text-[#0d9488] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base">info@bisonproperties.ca</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl sm:rounded-2xl h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center p-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-gray-500 font-medium text-sm sm:text-base">Map Location</p>
                <p className="text-gray-400 text-xs sm:text-sm">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-100">
        <div className="container-custom">
          <p className="text-[10px] sm:text-xs text-[#4a4a4a] leading-relaxed">
            Prices, specifications, and availability are subject to change without notice. Renderings and
            images are artist&apos;s concept only. Floor plans may vary. Please contact our sales team for
            the most current information. Bison Properties Limited reserves the right to make modifications
            to building plans, specifications, and features at any time.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-5 sm:py-6 px-4 sm:px-6">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            {/* Logo & Copyright - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link href="/" className="flex items-center gap-2 touch-manipulation">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M24 4L4 20h6v20h28V20h6L24 4z"
                    fill="#0d9488"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
                  <rect x="20" y="28" width="8" height="12" fill="white" />
                  <rect x="12" y="24" width="6" height="6" fill="white" />
                  <rect x="30" y="24" width="6" height="6" fill="white" />
                </svg>
                <span className="font-bold text-white text-sm sm:text-base">BISON PROPERTIES</span>
              </Link>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-last sm:order-none">
              &copy; {currentYear} Bison Properties Limited. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0d9488] active:bg-[#0d9488] text-white transition-all duration-300 touch-manipulation"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0d9488] active:bg-[#0d9488] text-white transition-all duration-300 touch-manipulation"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0d9488] active:bg-[#0d9488] text-white transition-all duration-300 touch-manipulation"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
