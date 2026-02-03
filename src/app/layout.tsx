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
  themeColor: "#0d9488",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bisonproperties.ca"),
  title: {
    default: "Bison Properties Limited | New Homes & Communities in Regina",
    template: "%s | Bison Properties Limited",
  },
  description: "Bold Builds Further. Discover new homes and vibrant communities in Regina. Award-winning builder offering quality craftsmanship and designer interiors.",
  keywords: ["new homes", "property development", "communities", "Regina homes", "home builder", "Saskatchewan real estate", "Harbour Landing", "new construction"],
  authors: [{ name: "Bison Properties Limited" }],
  creator: "Bison Properties Limited",
  publisher: "Bison Properties Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bisonproperties.ca",
    siteName: "Bison Properties Limited",
    title: "Bison Properties Limited | New Homes & Communities in Regina",
    description: "Bold Builds Further. Discover new homes and vibrant communities in Regina. Award-winning builder offering quality craftsmanship.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bison Properties Limited - Bold Builds Further",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bison Properties Limited | New Homes & Communities",
    description: "Bold Builds Further. Discover new homes and vibrant communities in Regina.",
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
        <link rel="canonical" href="https://bisonproperties.ca" />
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
