"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PriceCalculator } from "@/components/pricing/price-calculator"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DollarSign, Clock, Shield, UserCheck, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react";

// Ofis temizliği için özellikler
const serviceFeatures = [
  {
    title: "Kolay Ödeme",
    description: "Nakit veya kurumsal fatura ile ödeme kolaylığı.",
    icon: DollarSign,
    color: "from-indigo-600 to-indigo-700"
  },
  {
    title: "Esnek Planlama",
    description: "Size uygun saatlerde temizlik hizmeti.",
    icon: Clock,
    color: "from-cyan-600 to-cyan-700"
  },
  {
    title: "Garantili Hizmet",
    description: "Memnun kalmazsanız tekrar temizlik garantisi.",
    icon: Shield,
    color: "from-emerald-600 to-emerald-700"
  },
  {
    title: "Uzman Ekip",
    description: "Deneyimli ve profesyonel temizlik ekibi.",
    icon: UserCheck,
    color: "from-blue-600 to-blue-700"
  }
];

// Ofis temizlik hizmetleri
const cleaningServices = [
  {
    title: "Genel Ofis Alanı",
    description: "Profesyonel ofis temizliği",
    details: [
      "Çalışma masaları ve sandalyelerin detaylı temizliği",
      "Elektronik ekipmanların özel solüsyonlarla temizliği",
      "Halı ve zemin temizliği (vakumlu ve silme)",
      "Toplantı odalarının dezenfektasyonu",
      "Ortak alanların hijyenik temizliği"
    ],
    icon: "💼"
  },
  {
    title: "Mutfak ve Dinlenme Alanları",
    description: "Hijyenik ve ferah ortamlar",
    details: [
      "Mutfak tezgahı ve dolapların detaylı temizliği",
      "Beyaz eşyaların iç ve dış temizliği",
      "İçecek makinelerinin bakımı ve temizliği",
      "Yemek alanlarının dezenfektasyonu",
      "Çöp sistemlerinin temizliği ve değişimi"
    ],
    icon: "☕"
  },
  {
    title: "Banyo ve Lavabolar",
    description: "Sağlıklı ve hijyenik tesisler",
    details: [
      "Klozet ve lavaboların dezenfektasyonu",
      "Fayans ve ayna temizliği",
      "Sarf malzemelerinin kontrolü ve temini",
      "Havalandırma sistemlerinin temizliği",
      "Genel dezenfeksiyon işlemi"
    ],
    icon: "🚽"
  },
  {
    title: "Cam ve Dış Cephe",
    description: "Profesyonel cam temizliği",
    details: [
      "İç ve dış cam yüzeylerin temizliği",
      "Cam çerçevelerinin detaylı temizliği",
      "Panjur ve jaluzi temizliği",
      "Dış cephe silme (opsiyonel)",
      "Bina girişi temizliği"
    ],
    icon: "🪟"
  }
];

// Ofise özel SSS
const faqs = [
  {
    question: "Minimum kaç metrekare için hizmet veriyorsunuz?",
    answer: "50 metrekare ve üzeri ofis alanları için hizmet veriyoruz."
  },
  {
    question: "Temizlik hangi saatlerde yapılıyor?",
    answer: "Mesai saatleri dışında (akşam/gece) veya hafta sonu temizlik hizmeti sunuyoruz. İşyerinizin çalışma düzenine göre program oluşturuyoruz."
  },
  {
    question: "Düzenli temizlik için sözleşme gerekli mi?",
    answer: "Düzenli temizlik hizmetleri için aylık veya yıllık sözleşme yapıyoruz. Bu sayede size özel indirimli fiyatlar sunabiliyoruz."
  },
  {
    question: "Temizlik ekibiniz sigortalı mı?",
    answer: "Tüm ekibimiz sigortalı ve güvenlik soruşturmasından geçmiş profesyonellerden oluşmaktadır."
  },
  {
    question: "Hangi temizlik malzemeleri kullanılıyor?",
    answer: "Profesyonel, çevre dostu ve sertifikalı temizlik ürünleri kullanıyoruz. İsteğe bağlı olarak anti-alerjik ürünler de tercih edilebilir."
  }
];

// Referanslar verisi
const references = [
  {
    name: "Tech İstanbul",
    logo: "/logos/tech-istanbul.png",
    description: "500+ çalışanlı teknoloji şirketi",
    review: "Düzenli olarak ofis temizlik hizmeti alıyoruz. Profesyonel ekip ve kaliteli hizmet.",
    sector: "Teknoloji"
  },
  {
    name: "Finans Plus",
    logo: "/logos/finans-plus.png",
    description: "Finans ve yatırım şirketi",
    review: "Hijyen standartları ve güvenlik protokolleri konusunda tam not veriyoruz.",
    sector: "Finans"
  },
  {
    name: "Media Group",
    logo: "/logos/media-group.png",
    description: "Medya ve reklam ajansı",
    review: "Esnek çalışma saatlerimize uyum sağlayan tek temizlik firması.",
    sector: "Medya"
  },
  {
    name: "Lojistik A.Ş.",
    logo: "/logos/lojistik-as.png",
    description: "Uluslararası lojistik firması",
    review: "7/24 hizmet anlayışları ve acil durum müdahaleleri için teşekkürler.",
    sector: "Lojistik"
  },
  {
    name: "Global Bank",
    logo: "/logos/global-bank.png",
    description: "Uluslararası bankacılık kuruluşu",
    review: "Güvenlik protokollerine tam uyum ve profesyonel hizmet kalitesi.",
    sector: "Bankacılık"
  },
  {
    name: "Yazılım Co.",
    logo: "/logos/yazilim-co.png",
    description: "Kurumsal yazılım şirketi",
    review: "Data center temizliğinde gösterdikleri özen için teşekkürler.",
    sector: "Teknoloji"
  },
  {
    name: "Hukuk & Partners",
    logo: "/logos/hukuk-partners.png",
    description: "Uluslararası hukuk bürosu",
    review: "Gizlilik ve güvenlik konusundaki hassasiyetleri takdire şayan.",
    sector: "Hukuk"
  },
  {
    name: "E-Ticaret Plus",
    logo: "/logos/e-ticaret-plus.png",
    description: "Online alışveriş platformu",
    review: "Açık ofis planımıza uygun özelleştirilmiş temizlik hizmeti sunuyorlar.",
    sector: "E-Ticaret"
  },
  {
    name: "Reklam 360",
    logo: "/logos/reklam-360.png",
    description: "Dijital reklam ajansı",
    review: "Kreatif ofis ortamımızı her zaman tertemiz tutuyorlar.",
    sector: "Reklam"
  },
  {
    name: "Mega Holding",
    logo: "/logos/mega-holding.png",
    description: "Çok uluslu holding",
    review: "Tüm grup şirketlerimizde tercih ettiğimiz tek temizlik firması.",
    sector: "Holding"
  }
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "İstanbul Ofis Temizliği Hizmeti",
  "provider": {
    "@type": "CleaningService",
    "name": "PeraHizmet",
    "image": "https://perahizmet.com/logo.png"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "description": "Profesyonel ofis temizlik hizmeti. Düzenli ve detaylı kurumsal temizlik çözümleri.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "priceRange": "₺1500 - ₺3500",
    "availability": "https://schema.org/InStock"
  },
  "serviceType": "Commercial Cleaning",
  "termsOfService": "https://perahizmet.com/sartlar",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function OfisTemizligi() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('genel');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  return (
    <main role="main" aria-label="Ofis Temizliği Sayfası">
      {/* Header ile içerik arası boşluk - azaltıldı */}
      <div className="h-16" /> {/* 64px'e düşürdük */}

      {/* Hero Section - padding azaltıldı */}
      <section className="pt-8 pb-3"> {/* pt-12'den pt-8'e düşürdük */}
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Sol Taraf - padding azaltıldı */}
            <div className="space-y-8 bg-transparent pt-4"> {/* pt-8'den pt-4'e düşürdük */}
              {/* Üst Başlık */}
              <div className="space-y-2">
                <p className="text-blue-500 font-medium tracking-wide text-sm uppercase">
                  Kurumsal Temizlik Çözümleri
                </p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  İş Yerinizde <br/>
                  <span className="text-blue-500">Kusursuz Temizlik</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  Çalışma alanlarınızı hijyenik ve düzenli tutarak, iş verimliliğinizi artırıyoruz. 
                  Siz işinize odaklanın, temizlik bizim işimiz.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Plaza, ofis ve iş merkezleri için özel olarak tasarlanmış temizlik programları sunuyoruz. 
                  Mesai saatleri dışında da hizmet vererek, iş akışınızı kesintiye uğratmıyoruz.
                </p>
              </div>

              {/* Öne Çıkan Özellikler */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Düzenli Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Gece Temizliği</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Sertifikalı Ekip</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Endüstriyel Ekipman</span>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative w-full h-[480px] mt-8 lg:mt-0">
              <Image
                src="/images/ofis-temizligi-hero.jpg"
                alt="Profesyonel ofis temizlik hizmeti"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Kapsamı */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Ofis Temizliği Hizmet Kapsamı
          </h2>

          {/* Mobil uyumlu tab menüsü */}
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4 mb-6">
            <div className="flex gap-2 mx-auto min-w-max">
              {[
                { id: 'genel', label: 'Genel Bilgi', icon: '📋' },
                { id: 'alanlar', label: 'Alanlar', icon: '🏢' },
                { id: 'bolgeler', label: 'Bölgeler', icon: '📍' },
                { id: 'sss', label: 'SSS', icon: '❓' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                    whitespace-nowrap transition-all
                    ${activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }
                  `}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab içerikleri */}
          <div className="space-y-6">
            {/* Genel Bilgi */}
            {activeTab === 'genel' && (
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">Ofis Temizliği Hakkında</h3>
                  <p className="text-gray-600 mb-6">
                    PeraHizmet olarak, işletmenizin ihtiyaçlarına özel profesyonel ofis temizlik hizmetleri sunuyoruz.
                  </p>
                  
                  {/* Paketler */}
                  <div className="grid gap-4">
                    {/* Standart Paket */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-600 mb-3">Standart Temizlik Paketi</h4>
                      <ul className="grid gap-2">
                        {[
                          "Tüm ofis alanlarının genel temizliği",
                          "Çalışma masaları ve mobilyaların temizliği",
                          "Zemin temizliği ve vakumlama",
                          "Çöp kovalarının boşaltılması",
                          "Mutfak ve lavabo temizliği"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detaylı Paket */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-600 mb-3">Detaylı Temizlik Paketi</h4>
                      <ul className="grid gap-2">
                        {[
                          "Standart temizlik paketi hizmetleri",
                          "Cam ve çerçevelerin detaylı temizliği",
                          "Koltuk ve sandalye yıkama",
                          "Halı ve zemin yıkama",
                          "Derin dezenfeksiyon işlemi"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Alanlar */}
            {activeTab === 'alanlar' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Ofis Alanları", items: ["Çalışma Masaları", "Toplantı Odaları", "Ortak Alanlar"] },
                  { title: "Mutfak", items: ["Tezgah", "Dolap", "Elektrikli Aletler"] },
                  { title: "Lavabolar", items: ["Tuvalet", "Lavabo", "Aynalar"] },
                  { title: "Giriş ve Koridorlar", items: ["Resepsiyon", "Bekleme Alanı", "Koridorlar"] }
                ].map((alan, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium text-gray-900 mb-3">{alan.title}</h3>
                    <ul className="space-y-2">
                      {alan.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Bölgeler */}
            {activeTab === 'bolgeler' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Levent", "Maslak", "Şişli",
                  "Kadıköy", "Ataşehir", "Ümraniye",
                  "Beylikdüzü", "Bakırköy", "Beşiktaş"
                ].map((bolge) => (
                  <div key={bolge} className="bg-white p-3 rounded-lg text-center">
                    <p className="font-medium text-gray-900">{bolge}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SSS */}
            {activeTab === 'sss' && (
              <div className="max-w-3xl mx-auto">
                <div className="divide-y divide-gray-200">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="py-4 cursor-pointer group"
                      onClick={() => {
                        const newExpandedItems = new Set(expandedItems);
                        if (newExpandedItems.has(idx)) {
                          newExpandedItems.delete(idx);
                        } else {
                          newExpandedItems.add(idx);
                        }
                        setExpandedItems(newExpandedItems);
                      }}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </h3>
                        <span className={`
                          text-gray-400 transition-transform duration-200
                          ${expandedItems.has(idx) ? 'rotate-180' : ''}
                        `}>
                          ▼
                        </span>
                      </div>
                      
                      {/* Cevap - Açılır/Kapanır Panel */}
                      <div className={`
                        mt-2 text-sm text-gray-600 leading-relaxed overflow-hidden transition-all duration-200
                        ${expandedItems.has(idx) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        <p className="py-2">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Hizmet Avantajları
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {serviceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white p-4 rounded-lg border border-gray-100 
                  hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} 
                    text-white group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar Bölümü - Slider versiyonu */}
      <section aria-label="Referanslarımız" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Referanslarımız
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Her slayt 4 referans içerecek */}
                {Array.from({ length: Math.ceil(references.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {references.slice(slideIndex * 4, (slideIndex + 1) * 4).map((ref, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                            transition-all duration-300"
                        >
                          <div className="flex items-center justify-center mb-4 h-16">
                            <Image
                              src={ref.logo}
                              alt={`${ref.name} - PeraHizmet Referans`}
                              width={120}
                              height={60}
                              loading="lazy"
                              className="grayscale hover:grayscale-0 transition-all"
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="font-semibold text-lg mb-2">{ref.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{ref.description}</p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm italic text-gray-700">"{ref.review}"</p>
                            </div>
                            <span className="inline-block mt-3 text-xs font-medium text-primary-dark 
                              px-3 py-1 bg-primary-50 rounded-full">
                              {ref.sector}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Kontrolleri */}
            <button
              onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm 
                p-2 rounded-full shadow-lg hover:bg-white transition-colors border border-gray-100"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className={`w-5 h-5 ${
                currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'
              }`} />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => 
                Math.min(Math.ceil(references.length / 4) - 1, prev + 1))}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm 
                p-2 rounded-full shadow-lg hover:bg-white transition-colors border border-gray-100"
              disabled={currentSlide >= Math.ceil(references.length / 4) - 1}
            >
              <ChevronRight className={`w-5 h-5 ${
                currentSlide >= Math.ceil(references.length / 4) - 1 
                  ? 'text-gray-300' 
                  : 'text-gray-600'
              }`} />
            </button>

            {/* Slider Noktaları */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(references.length / 4) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">İşletmeniz İçin En İyi Çözüm</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Profesyonel ofis temizlik hizmetlerimizle tanışın. Hemen teklif alın, 
            işletmenize özel çözümler sunalım.
          </p>
          <div className="flex justify-center">
            <Link href="/iletisim">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Şimdi Teklif Alın
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 