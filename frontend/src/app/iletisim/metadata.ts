import { Metadata } from "next";

export const metadata = {
  title: "İletişim - PeraHizmet Temizlik",
  description: "7/24 temizlik hizmeti için bize ulaşın. ☎ 0543 581 96 88 ✉ info@perahizmet.com 📍 İstanbul genelinde hizmet",
  keywords: [
    "temizlik şirketi iletişim",
    "istanbul temizlik firması",
    "temizlik hizmeti al",
    "ev temizliği fiyat"
  ],
  openGraph: {
    title: "PeraHizmet İletişim - Temizlik Hizmeti",
    description: "7/24 profesyonel temizlik hizmeti. Hemen iletişime geçin!",
    images: ['/images/og/iletisim.jpg'],
    type: 'website',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeraHizmet İletişim',
    description: 'Temizlik hizmeti için iletişime geçin',
    images: ['/images/twitter/iletisim.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com/iletisim'
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
      "name": "İletişim",
      "item": "https://perahizmet.com/iletisim"
    }
  ]
} 