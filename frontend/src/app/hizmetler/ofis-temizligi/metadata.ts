import { Metadata } from "next";

export const metadata = {
  title: "İstanbul Ofis Temizliği - Kurumsal Temizlik Hizmetleri",
  description: "Profesyonel ofis temizliği hizmeti. ✓ Düzenli Temizlik ✓ Hijyenik Ortam ✓ Kurumsal Çözümler. İşletmeniz için hemen teklif alın!",
  keywords: [
    "istanbul ofis temizliği",
    "kurumsal temizlik",
    "işyeri temizliği",
    "ofis temizlik şirketi",
    "profesyonel ofis temizliği"
  ],
  openGraph: {
    title: "İstanbul Ofis Temizliği - PeraHizmet",
    description: "Profesyonel ofis temizlik hizmeti. ₺1500'den başlayan fiyatlarla",
    images: ['/images/og/ofis-temizligi.jpg'],
    type: 'article',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ofis Temizliği Hizmetleri',
    description: 'Kurumsal ofis temizliği hizmeti',
    images: ['/images/twitter/ofis-temizligi.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com/hizmetler/ofis-temizligi'
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
      "name": "Ofis Temizliği",
      "item": "https://perahizmet.com/hizmetler/ofis-temizligi"
    }
  ]
}

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ofis Temizliği",
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
    "price": "1500",
    "priceCurrency": "TRY"
  }
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Ofis temizliği fiyatları ne kadar?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ofis temizliği fiyatlarımız 1500₺'den başlamaktadır."
    }
  }]
} 