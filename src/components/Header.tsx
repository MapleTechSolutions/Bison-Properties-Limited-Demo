"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg shadow-black/5 py-2 md:py-3"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group z-50">
              {/* Bison Silhouette */}
              <svg
                className="w-12 h-10 md:w-16 md:h-12 transition-all duration-300"
                viewBox="0 0 80 50"
                fill="none"
              >
                {/* Bison body - charging position facing right */}
                <path
                  d="M68 28c2-1 4-3 4-6 0-2-1-4-3-5l-2-1c0-2-1-4-3-5-1-1-3-2-5-2h-3c-1-2-3-4-6-5-2-1-5-1-7 0l-3 2c-3-1-6-1-9 0-2 1-4 2-5 4l-2-1c-3-1-6 0-8 2-2 1-3 3-3 5l-1 3c-2 1-4 3-5 5-1 3-1 5 1 7l2 2v4c0 2 1 3 2 3h3l1-5h2l1 5h3c1 0 2-1 2-3v-2h8v2c0 2 1 3 2 3h3l1-5h2l1 5h3c1 0 2-1 2-3v-4l4-2c2-1 3-3 3-5l1-2z"
                  className={`transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "fill-[#110a0c]" : "fill-[#110a0c]"}`}
                  stroke="#f04d22"
                  strokeWidth="2"
                />
                {/* Horn */}
                <path
                  d="M62 14c1-2 3-3 5-3 1 0 3 1 3 2 0 2-1 3-3 4l-3 1-2-4z"
                  className={`transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "fill-[#110a0c]" : "fill-[#110a0c]"}`}
                  stroke="#f04d22"
                  strokeWidth="1.5"
                />
                {/* Eye */}
                <circle cx="58" cy="18" r="1.5" fill="#f04d22" />
              </svg>
              <div className="flex flex-col">
                <span className={`text-base md:text-xl font-black tracking-tight transition-colors duration-300 leading-none ${
                  isScrolled || isMobileMenuOpen ? "text-[#f04d22]" : "text-[#f04d22]"
                }`}>
                  BISON
                </span>
                <span className={`text-[8px] md:text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 leading-tight ${
                  isScrolled || isMobileMenuOpen ? "text-[#110a0c]" : "text-white"
                }`}>
                  PROPERTY
                </span>
                <span className={`text-[8px] md:text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 leading-tight ${
                  isScrolled || isMobileMenuOpen ? "text-[#110a0c]" : "text-white"
                }`}>
                  MANAGEMENT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#f04d22]"
                      : isScrolled
                        ? "text-[#110a0c] hover:text-[#f04d22]"
                        : "text-white/90 hover:text-[#f04d22]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Phone (Desktop) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                href="tel:3437000770"
                className={`flex items-center gap-2 font-bold transition-all duration-300 ${
                  isScrolled ? "text-[#110a0c] hover:text-[#f04d22]" : "text-white hover:text-[#f04d22]"
                }`}
              >
                <svg
                  className="w-5 h-5 text-[#f04d22]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden xl:inline">343-700-0770</span>
              </a>
              <Link href="/contact" className="btn-primary !py-3 !px-6">
                Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation ${
                isScrolled || isMobileMenuOpen
                  ? "text-[#110a0c] hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center -mt-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-4 text-2xl font-bold uppercase tracking-wider transition-all duration-300 border-b border-gray-100 ${
                  isActive(link.href)
                    ? "text-[#f04d22]"
                    : "text-[#110a0c] active:text-[#f04d22]"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-gray-200">
            <a
              href="tel:3437000770"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-[#110a0c] bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            >
              <svg className="w-5 h-5 text-[#f04d22]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              343-700-0770
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-4"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
