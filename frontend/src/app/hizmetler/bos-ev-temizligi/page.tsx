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

  return (
    <main role="main" aria-label="Boş Ev Temizliği Sayfası">
      {/* Hero Section */}
      <section className="pt-12 pb-3">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Sol Taraf - Ana Bilgiler */}
            <div className="space-y-8 bg-transparent pt-8">
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
            <div className="relative w-full h-[480px] -mt-12">
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
      <section aria-label="Hizmet Kapsamı" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Boş Ev Temizliği Hizmet Kapsamı
          </h2>
          <Tabs defaultValue="genel" className="w-full">
            <TabsList className="flex flex-wrap md:flex-nowrap gap-4 mb-8 w-full bg-transparent">
              {[
                { value: "genel", label: "Genel Bilgi", icon: "📋" },
                { value: "odalar", label: "Hizmetler", icon: "🏠" },
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
                <h3 className="text-2xl font-bold mb-6">Boş Ev Temizliği Hakkında</h3>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    PeraHizmet olarak, yeni evinize taşınmadan önce veya inşaat/tadilat sonrası 
                    kapsamlı temizlik hizmetleri sunuyoruz. Özel ekipmanlarımız ve deneyimli 
                    ekibimizle, evinizi yaşanabilir hale getiriyoruz.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-3">İnşaat Sonrası</h4>
                      <p className="text-sm text-gray-600">
                        İnşaat tozları, boya kalıntıları ve diğer inşaat artıklarının 
                        profesyonel temizliği
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold mb-3">Taşınma Öncesi</h4>
                      <p className="text-sm text-gray-600">
                        Yeni evinizin yerleşime hazır hale getirilmesi için detaylı 
                        temizlik ve dezenfeksiyon
                      </p>
                    </div>
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
                  "Kadıköy", "Beşiktaş", "Şişli",
                  "Üsküdar", "Ataşehir", "Maltepe",
                  "Kartal", "Pendik", "Tuzla"
                ].map((bolge) => (
                  <div 
                    key={bolge} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-lg mb-2">{bolge}</h3>
                    <p className="text-gray-600">
                      {bolge} ve çevresinde boş ev temizlik hizmeti
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

      {/* SSS */}
      <section aria-label="Sıkça Sorulan Sorular" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Boş Ev Temizliği Hakkında Sık Sorulan Sorular
          </h2>
          <Accordion type="single" collapsible>
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
    icon: "🏠"
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