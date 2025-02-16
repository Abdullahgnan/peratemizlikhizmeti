"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PriceCalculator } from "@/components/pricing/price-calculator"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DollarSign, Clock, Shield, UserCheck } from "lucide-react"
import { useState } from "react";

export default function BosEvTemizligi() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('genel');
  const [expandedItems, setExpandedItems] = useState(new Set());

  return (
    <main role="main" aria-label="Boş Ev Temizliği Sayfası">
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
                  Boş Ev Temizlik Hizmeti
                </p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Yeni Eviniz İçin <br/>
                  <span className="text-blue-500">İlk Adım</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  İnşaat sonrası veya taşınma öncesi detaylı temizlik ile evinizi yaşanabilir hale getiriyoruz. 
                  Siz anahtarı alın, gerisini bize bırakın.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  İstanbul'un her bölgesinde, yeni teslim evler, tadilat sonrası temizlik ve taşınma öncesi temizlik hizmeti veriyoruz. 
                  Özel ekipmanlarımız ve uzman kadromuzla, evinizi en ince ayrıntısına kadar temizliyoruz.
                </p>
              </div>

              {/* Öne Çıkan Özellikler */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Aynı Gün Hizmet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Garantili Temizlik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Uzman Ekip</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm font-medium text-gray-700">Özel Ekipman</span>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative w-full h-[480px] mt-8 lg:mt-0">
              <Image
                src="/images/bos-ev-temizligi-hero.jpg"
                alt="Profesyonel boş ev temizlik hizmeti"
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
            Boş Ev Temizliği Hizmet Kapsamı
          </h2>

          {/* Mobil uyumlu tab menüsü */}
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4 mb-6">
            <div className="flex gap-2 mx-auto min-w-max">
              {[
                { id: 'genel', label: 'Genel Bilgi', icon: '📋' },
                { id: 'insaat', label: 'İnşaat Sonrası', icon: '🏗️' },
                { id: 'tadilat', label: 'Tadilat Sonrası', icon: '🔨' },
                { id: 'tasinma', label: 'Taşınma Öncesi', icon: '📦' },
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
                  <h3 className="text-lg font-semibold mb-4">Boş Ev Temizliği Hakkında</h3>
                  <p className="text-gray-600 mb-6">
                    İnşaat sonrası, tadilat sonrası veya taşınma öncesi detaylı temizlik hizmetleri sunuyoruz.
                  </p>
                  
                  {/* Temel Hizmetler */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-600 mb-3">Temel Temizlik</h4>
                      <ul className="grid gap-2">
                        {[
                          "Tüm yüzeylerin tozdan arındırılması",
                          "Kapı ve pencere temizliği",
                          "Zemin temizliği ve cilalama",
                          "Banyo ve mutfak dezenfeksiyonu",
                          "Balkon temizliği"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-600 mb-3">Detaylı Temizlik</h4>
                      <ul className="grid gap-2">
                        {[
                          "İnşaat artıklarının temizlenmesi",
                          "Derin leke çıkarma işlemi",
                          "Tüm dolapların iç temizliği",
                          "Fayans ve seramik temizliği",
                          "Pencere detayları ve raylar"
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

            {/* İnşaat Sonrası */}
            {activeTab === 'insaat' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Kaba Temizlik", items: ["Moloz Toplama", "Kaba Süpürme", "İlk Yıkama"] },
                  { title: "İnce Temizlik", items: ["Detaylı Silme", "Leke Çıkarma", "Cilalama"] },
                  { title: "Son Kontrol", items: ["Detay Temizlik", "Kalite Kontrol", "Teslim"] }
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

            {/* Tadilat Sonrası */}
            {activeTab === 'tadilat' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { 
                    title: "Yüzey Temizliği",
                    icon: "🧹",
                    items: [
                      "Boya Kalıntıları",
                      "Alçı ve Sıva İzleri",
                      "Duvar Lekeleri",
                      "Zemin Temizliği",
                      "Pencere Detayları"
                    ]
                  },
                  { 
                    title: "Detaylı Temizlik",
                    icon: "✨",
                    items: [
                      "Kapı ve Kasalar",
                      "Dolap İçleri",
                      "Tesisat Kontrolleri",
                      "Armatür Temizliği",
                      "Fayans Temizliği"
                    ]
                  },
                  { 
                    title: "Son İşlemler",
                    icon: "🎯",
                    items: [
                      "Genel Dezenfeksiyon",
                      "Parlatma İşlemi",
                      "Havalandırma",
                      "Kalite Kontrol",
                      "Teslim"
                    ]
                  }
                ].map((alan, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">{alan.icon}</span>
                      <h3 className="font-medium text-gray-900">{alan.title}</h3>
                    </div>
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

            {/* Taşınma Öncesi */}
            {activeTab === 'tasinma' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Oda Temizliği",
                        icon: "🛏️",
                        description: "Yatak odası, salon ve diğer odaların detaylı temizliği",
                        items: [
                          "Duvar silme",
                          "Tavan ve köşeler",
                          "Priz ve anahtarlar",
                          "Süpürgelikler",
                          "Kapı ve pencereler"
                        ]
                      },
                      {
                        title: "Islak Alan",
                        icon: "🚿",
                        description: "Banyo ve mutfak alanlarının hijyenik temizliği",
                        items: [
                          "Fayans temizliği",
                          "Vitrifiye temizliği",
                          "Armatür parlatma",
                          "Duşakabin detayı",
                          "Lavabo ve eviyeler"
                        ]
                      },
                      {
                        title: "Genel Alanlar",
                        icon: "🏠",
                        description: "Ortak kullanım alanlarının temizliği",
                        items: [
                          "Koridor temizliği",
                          "Merdiven silme",
                          "Cam temizliği",
                          "Balkon temizliği",
                          "Depo temizliği"
                        ]
                      }
                    ].map((bolum, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{bolum.icon}</span>
                          <div>
                            <h3 className="font-medium text-gray-900">{bolum.title}</h3>
                            <p className="text-sm text-gray-600">{bolum.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {bolum.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ekstra Bilgi */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Taşınma öncesi temizlik hizmetimiz, yeni evinize sorunsuz bir başlangıç yapmanızı sağlar. 
                    Tüm alanlar detaylı temizlenir ve dezenfekte edilir. İsteğe bağlı olarak böcek ilaçlama 
                    hizmeti de sunulmaktadır.
                  </p>
                </div>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Yeni Eviniz İçin En İyi Başlangıç</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Profesyonel boş ev temizlik hizmetlerimizle tanışın.
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

const serviceFeatures = [
  {
    title: "Tek Seferlik Ödeme",
    description: "Ek ücret olmadan, tek seferde ödeme kolaylığı.",
    icon: DollarSign,
    color: "from-indigo-600 to-indigo-700"
  },
  {
    title: "Hızlı Hizmet",
    description: "24 saat içinde temizlik garantisi.",
    icon: Clock,
    color: "from-cyan-600 to-cyan-700"
  },
  {
    title: "Garantili Hizmet",
    description: "Memnun kalmazsanız ücretsiz tekrar temizlik.",
    icon: Shield,
    color: "from-emerald-600 to-emerald-700"
  },
  {
    title: "Uzman Ekip",
    description: "İnşaat sonrası temizlikte uzmanlaşmış ekip.",
    icon: UserCheck,
    color: "from-blue-600 to-blue-700"
  }
]

const cleaningServices = [
  {
    title: "İnşaat Sonrası Temizlik",
    description: "Detaylı inşaat temizliği",
    details: [
      "İnşaat tozlarının özel ekipmanlarla temizliği",
      "Tüm yüzeylerin derinlemesine temizliği",
      "Cam ve çerçevelerin detaylı temizliği",
      "Banyo ve mutfak armatürlerinin parlatılması",
      "Balkon ve teras temizliği"
    ],
    icon: "🏗️"
  },
  {
    title: "Tadilat Sonrası Temizlik",
    description: "Kapsamlı tadilat temizliği",
    details: [
      "Boya ve alçı kalıntılarının temizliği",
      "Zemin temizliği ve cilalama",
      "Kapı ve pencere detay temizliği",
      "Dolap içi temizlik ve dezenfeksiyon",
      "Genel mekan dezenfeksiyonu"
    ],
    icon: "🔨"
  },
  {
    title: "Taşınma Öncesi Temizlik",
    description: "Yeni ev hazırlığı",
    details: [
      "Tüm odaların detaylı temizliği",
      "Dolap ve çekmecelerin dezenfeksiyonu",
      "Duvar ve tavan temizliği",
      "Pencere ve panjur temizliği",
      "Yerleşime hazır teslim"
    ],
    icon: "📦"
  },
  {
    title: "Dış Mekan Temizliği",
    description: "Bahçe ve teras temizliği",
    details: [
      "Balkon ve teras detaylı temizliği",
      "Bahçe mobilyaları temizliği",
      "Dış cephe ön temizlik",
      "Garaj temizliği",
      "Çevre düzenlemesi"
    ],
    icon: "🌳"
  }
]

const faqs = [
  {
    question: "İnşaat sonrası temizlik ne kadar sürer?",
    answer: "100m² bir daire için ortalama 4-6 saat sürer. Ekip sayısı ve kirlilik durumuna göre bu süre değişebilir."
  },
  {
    question: "Hangi temizlik malzemeleri kullanılıyor?",
    answer: "İnşaat sonrası için özel geliştirilmiş profesyonel temizlik ürünleri, endüstriyel makineler ve anti-alerjik solüsyonlar kullanıyoruz."
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer: "Metrekare bazlı fiyatlandırma yapıyoruz. İnşaat/tadilat durumu ve mekan tipine göre fiyat değişebilir."
  },
  {
    question: "Aynı gün hizmet alabilir miyim?",
    answer: "Evet, müsaitlik durumuna göre aynı gün hizmet sunabiliyoruz. Acil talepler için ekstra ücret almıyoruz."
  }
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "İstanbul Boş Ev ve İnşaat Sonrası Temizlik",
  "provider": {
    "@type": "CleaningService",
    "name": "PeraHizmet",
    "image": "https://perahizmet.com/logo.png"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "description": "İnşaat sonrası ve taşınma öncesi detaylı temizlik hizmeti.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "priceRange": "₺1800 - ₺4000",
    "availability": "https://schema.org/InStock"
  },
  "serviceType": "Construction Cleaning",
  "termsOfService": "https://perahizmet.com/sartlar",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "98",
    "bestRating": "5",
    "worstRating": "1"
  }
}