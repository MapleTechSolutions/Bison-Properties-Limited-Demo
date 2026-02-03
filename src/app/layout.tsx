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
  themeColor: "#110a0c",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bisonpropertymanagement.ca"),
  title: {
    default: "Bison Property Management | Property Management & Landscaping Services",
    template: "%s | Bison Property Management",
  },
  description: "Client focused, results driven. Professional lawn care, landscaping, snow removal, and rental services. Call 343-700-0770 for a free quote.",
  keywords: ["property management", "lawn care", "landscaping", "snow removal", "rental services", "lawn mowing", "tree trimming", "plowing"],
  authors: [{ name: "Bison Property Management" }],
  creator: "Bison Property Management",
  publisher: "Bison Property Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bisonpropertymanagement.ca",
    siteName: "Bison Property Management",
    title: "Bison Property Management | Property Management & Landscaping Services",
    description: "Client focused, results driven. Professional lawn care, landscaping, snow removal, and rental services. Free quotes available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bison Property Management - Client Focused, Results Driven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bison Property Management | Property Management & Landscaping Services",
    description: "Professional lawn care, landscaping, snow removal, and rental services. Free quotes available.",
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
        <link rel="canonical" href="https://bisonpropertymanagement.ca" />
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
