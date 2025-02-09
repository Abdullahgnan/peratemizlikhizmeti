import { Metadata } from "next";

export const metadata = {
  title: "İstanbul Ev Temizliği Hizmetleri ve Fiyatları",
  description: "İstanbul'da profesyonel ev temizliği hizmeti. ✓ Günlük Temizlik ✓ Detaylı Temizlik ✓ Avrupa ve Anadolu Yakası. Hemen Teklif Alın!",
  keywords: [
    "istanbul ev temizliği",
    "ev temizlik hizmeti",
    "günlük ev temizliği",
    "detaylı ev temizliği",
    "ev temizliği fiyatları"
  ],
  openGraph: {
    title: "İstanbul Ev Temizliği - PeraHizmet",
    description: "Profesyonel ev temizlik hizmeti. ₺1300'den başlayan fiyatlarla",
    images: ['/images/og/ev-temizligi.jpg'],
    type: 'article',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ev Temizliği Hizmetleri',
    description: 'Detaylı ev temizliği hizmeti',
    images: ['/images/twitter/ev-temizligi.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com/hizmetler/ev-temizligi'
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
      "name": "Ev Temizliği",
      "item": "https://perahizmet.com/hizmetler/ev-temizligi"
    }
  ]
}

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ev Temizliği",
  "provider": {
    "@type": "LocalBusiness",
    "name": "PeraHizmet"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "priceRange": "₺₺",
  "offers": {
    "@type": "Offer",
    "price": "1300",
    "priceCurrency": "TRY"
  }
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Ev temizliği fiyatları ne kadar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ev temizliği fiyatlarımız 1300₺'den başlamaktadır."
    }
  }]
} 