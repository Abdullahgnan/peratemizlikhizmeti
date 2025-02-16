import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - PeraHizmet Temizlik Şirketi",
  description: "2020'den beri İstanbul'da profesyonel temizlik hizmetleri sunuyoruz. Deneyimli ekip, modern ekipman ve müşteri memnuniyeti odaklı hizmet.",
  keywords: [
    "pera hizmet",
    "temizlik şirketi",
    "istanbul temizlik firması",
    "profesyonel temizlik",
    "kurumsal temizlik"
  ],
  openGraph: {
    title: "PeraHizmet Hakkında - Temizlik Şirketi",
    description: "İstanbul'un güvenilir temizlik şirketi. 2020'den beri hizmetinizdeyiz.",
    images: ['/images/og/hakkimizda.jpg'],
    type: 'website',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeraHizmet Hakkında',
    description: 'Profesyonel temizlik şirketi',
    images: ['/images/twitter/hakkimizda.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com/hakkimizda'
  }
};

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
      "name": "Hakkımızda",
      "item": "https://perahizmet.com/hakkimizda"
    }
  ]
};

export const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "PeraHizmet"
  },
  "ratingValue": "4.8",
  "reviewCount": "150"
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PeraHizmet",
  "url": "https://perahizmet.com",
  "logo": "https://perahizmet.com/logo.png",
  "description": "2020'den beri İstanbul'da profesyonel temizlik hizmetleri sunuyoruz.",
  "foundingDate": "2020",
  "founders": [{
    "@type": "Person",
    "name": "PeraHizmet Kurucusu"
  }],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905435819688",
    "contactType": "customer service",
    "areaServed": "İstanbul",
    "availableLanguage": "Turkish"
  }
}; 