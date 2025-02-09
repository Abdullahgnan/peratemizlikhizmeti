import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import Link from "next/link"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "PeraHizmet - İstanbul Profesyonel Temizlik Hizmetleri",
    template: "%s | PeraHizmet"
  },
  description: "İstanbul'un her bölgesinde profesyonel ev temizliği, ofis temizliği ve inşaat sonrası temizlik hizmetleri.",
  keywords: [
    "istanbul temizlik",
    "ev temizliği",
    "ofis temizliği",
    "inşaat sonrası temizlik",
    "profesyonel temizlik"
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "name": "PeraHizmet",
  "image": "https://perahizmet.com/logo.png",
  "description": "İstanbul Profesyonel Temizlik Hizmetleri",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.0082",
    "longitude": "28.9784"
  },
  "url": "https://perahizmet.com",
  "telephone": "+905435819688",
  "priceRange": "₺₺",
  "openingHours": "Mo-Sa 09:00-20:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            {children}
          </main>
          <SiteFooter />
          
          {/* WhatsApp Butonu */}
          <Link
            href="https://wa.me/905435819688"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg 
              hover:bg-primary-dark transition-all duration-300 z-50 flex items-center gap-2 
              hover:scale-105 text-sm"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            <span className="font-medium">Mesaj Gönder</span>
          </Link>
        </div>
      </body>
    </html>
  );
}
