import { Metadata } from "next";

export const metadata = {
  title: "İstanbul Boş Ev ve İnşaat Sonrası Temizlik",
  description: "İnşaat sonrası ve taşınma öncesi detaylı temizlik hizmeti. ✓ Profesyonel Ekip ✓ Garantili Hizmet ✓ Uygun Fiyatlar",
  keywords: [
    "inşaat sonrası temizlik",
    "boş ev temizliği",
    "tadilat sonrası temizlik",
    "taşınma öncesi temizlik",
    "detaylı temizlik"
  ],
  openGraph: {
    title: "İstanbul Boş Ev Temizliği - PeraHizmet",
    description: "İnşaat ve tadilat sonrası temizlik hizmeti. ₺1800'den başlayan fiyatlarla",
    images: ['/images/og/bos-ev-temizligi.jpg'],
    type: 'article',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boş Ev ve İnşaat Sonrası Temizlik',
    description: 'Detaylı temizlik hizmeti',
    images: ['/images/twitter/bos-ev-temizligi.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com/hizmetler/bos-ev-temizligi'
  }
}

export const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Anasayfa",
      "item": "https://perahizmet.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hizmetler",
      "item": "https://perahizmet.com/hizmetler"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Boş Ev Temizliği",
      "item": "https://perahizmet.com/hizmetler/bos-ev-temizligi"
    }
  ]
}

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Boş Ev ve İnşaat Sonrası Temizlik",
  "provider": {
    "@type": "LocalBusiness",
    "name": "PeraHizmet"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "priceRange": "₺₺₺",
  "offers": {
    "@type": "Offer",
    "price": "1800",
    "priceCurrency": "TRY"
  }
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "İnşaat sonrası temizlik fiyatları ne kadar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "İnşaat sonrası temizlik fiyatlarımız 1800₺'den başlamaktadır."
    }
  }]
} 