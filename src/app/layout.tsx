import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#094026",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourcompany.com"),
  title: {
    default: "Company Name | Professional Contracting Services",
    template: "%s | Company Name",
  },
  description: "Your trusted local contractor. Professional residential & commercial services, repairs, renovations. Free estimates. Call (555) 123-4567.",
  keywords: ["contractor", "home improvement", "renovation", "construction", "repairs", "maintenance", "residential", "commercial"],
  authors: [{ name: "Company Name" }],
  creator: "Company Name",
  publisher: "Company Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourcompany.com",
    siteName: "Company Name",
    title: "Company Name | Professional Contracting Services",
    description: "Professional contracting services for residential and commercial properties. 15+ years experience, 500+ projects completed. Free estimates available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Company Name - Professional Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Name | Professional Contracting Services",
    description: "Professional contracting services. Free estimates available.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourcompany.com" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
