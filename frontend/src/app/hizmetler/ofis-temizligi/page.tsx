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
    question: "Mesai saatleri dışında temizlik yapıyor musunuz?",
    answer: "Evet, ofislerinizin iş akışını etkilememek için mesai saatleri dışında hizmet veriyoruz."
  },
  {
    question: "Düzenli temizlik anlaşması yapabilir miyiz?",
    answer: "Evet, günlük, haftalık veya aylık periyotlarda düzenli temizlik hizmeti sunuyoruz. Düzenli hizmet alımlarında özel indirimler uyguluyoruz."
  },
  {
    question: "Özel ekipman gerektiren temizlikler yapıyor musunuz?",
    answer: "Evet, yüksek tavanlı ofisler ve özel alanlara uygun ekipmanlarımızla profesyonel temizlik hizmeti veriyoruz."
  },
  {
    question: "Acil temizlik ihtiyacında ne yapmalıyım?",
    answer: "Müşteri hizmetlerimizi arayarak acil temizlik talebinde bulunabilirsiniz."
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

  return (
    <main role="main" aria-label="Ofis Temizliği Sayfası">
      {/* Hero Section */}
      <section className="pt-12 pb-3">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Sol Taraf - Ana Bilgiler */}
            <div className="space-y-8 bg-transparent pt-8">
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
            <div className="relative w-full h-[480px] -mt-12">
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
      <section aria-label="Hizmet Kapsamı" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ofis Temizliği Hizmet Kapsamı
          </h2>
          <Tabs defaultValue="genel" className="w-full">
            <TabsList className="flex flex-wrap md:flex-nowrap gap-4 mb-8 w-full bg-transparent">
              {[
                { value: "genel", label: "Genel Bilgi", icon: "📋" },
                { value: "odalar", label: "Alanlar", icon: "🏢" },
                { value: "bolgeler", label: "Bölgeler", icon: "📍" },
                { value: "sss", label: "SSS", icon: "❓" }
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 min-w-[200px]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-3xl">{tab.icon}</span>
                    <span className="text-lg font-semibold">{tab.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="genel">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ofis Temizliği Hakkında</h3>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    PeraHizmet olarak, işletmenizin ihtiyaçlarına özel profesyonel ofis temizlik hizmetleri sunuyoruz. 
                    Deneyimli ekibimiz ve modern ekipmanlarımızla, ofisinizi her zaman temiz ve düzenli tutuyoruz.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-4">Standart Temizlik Paketi</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Tüm ofis alanlarının genel temizliği</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Çalışma masaları ve mobilyaların temizliği</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Zemin temizliği ve vakumlama</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Çöp kovalarının boşaltılması</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mutfak ve lavabo temizliği</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-4">Detaylı Temizlik Paketi</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Standart temizlik paketinin tüm hizmetleri</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Cam ve çerçevelerin detaylı temizliği</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Halı ve koltuk yıkama</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Derin dezenfeksiyon işlemi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mobilya cilalama ve bakım</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Neden PeraHizmet?</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h5 className="font-medium mb-2">Profesyonel Ekip</h5>
                        <p className="text-sm text-gray-600">
                          Deneyimli ve uzman temizlik personelimizle kaliteli hizmet sunuyoruz.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h5 className="font-medium mb-2">Modern Ekipman</h5>
                        <p className="text-sm text-gray-600">
                          Son teknoloji temizlik ekipmanlarıyla etkili sonuçlar elde ediyoruz.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                        <h5 className="font-medium mb-2">Uygun Fiyat</h5>
                        <p className="text-sm text-gray-600">
                          Rekabetçi fiyatlarla kaliteli temizlik hizmeti sağlıyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mt-8">
                    <h4 className="text-lg font-semibold mb-4">Hizmet Süreci</h4>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary">1.</span>
                        <p className="text-gray-700">Ofis alanınızı inceleriz ve ihtiyaçlarınızı belirleriz</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary">2.</span>
                        <p className="text-gray-700">Size özel temizlik planı ve fiyat teklifi hazırlarız</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary">3.</span>
                        <p className="text-gray-700">Belirlenen gün ve saatte temizlik hizmetini gerçekleştiririz</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary">4.</span>
                        <p className="text-gray-700">Hizmet sonrası memnuniyet kontrolü yaparız</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="odalar">
              <div className="grid md:grid-cols-2 gap-6">
                {cleaningServices.map((service) => (
                  <div 
                    key={service.title} 
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                      transition-all duration-300 border-2 border-transparent hover:border-primary"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <span className="w-4 h-4 mr-2 text-primary">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bolgeler">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Levent", "Maslak", "Şişli",
                  "Kadıköy", "Ataşehir", "Ümraniye",
                  "Beylikdüzü", "Bakırköy", "Beşiktaş"
                ].map((bolge) => (
                  <div 
                    key={bolge} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-lg mb-2">{bolge}</h3>
                    <p className="text-gray-600">
                      {bolge} ve çevresinde profesyonel ofis temizlik hizmeti
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sss">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
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