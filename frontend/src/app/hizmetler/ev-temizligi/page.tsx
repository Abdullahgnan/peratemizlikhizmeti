"use client"

import { PriceCalculator } from "@/components/pricing/price-calculator"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { ChevronRight, ChevronLeft, CreditCard, Calendar, Clock, DollarSign, Shield, Sparkles, UserCheck, Star } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Özellikler için yeni veri yapısı
const serviceFeatures = [
  {
    title: "Nakit Ödeme",
    description: "Temizlik hizmetinin ödemesini temizlik personeline nakit olarak yapabilirsiniz.",
    icon: DollarSign,
    color: "from-indigo-600 to-indigo-700"
  },
  {
    title: "Aynı Gün Hizmet",
    description: "Aynı gün içinde temizlik talebinde bulunabilirsiniz. 1,5-2 saat içinde adresinize ulaşım.",
    icon: Clock,
    color: "from-cyan-600 to-cyan-700"
  },
  {
    title: "Ekstra Ücret Yok",
    description: "Cam, kapı, fayans, ütü gibi işleriniz için ekstra ücret ödemezsiniz.",
    icon: Shield,
    color: "from-emerald-600 to-emerald-700"
  },
  {
    title: "Güvenilir Hizmet",
    description: "Tüm personelimiz kimlik kontrolünden geçmiştir ve sigortalıdır.",
    icon: UserCheck,
    color: "from-blue-600 to-blue-700"
  }
]

// SSS'leri güncelleyelim
const faqs = [
  {
    question: "PeraHizmet nedir?",
    answer: "PeraHizmet, İstanbul'un önde gelen profesyonel temizlik şirketlerinden biridir. 2020'den beri binlerce eve hizmet vermiş, müşteri memnuniyetini her zaman ön planda tutan bir kuruluşuz. Tüm personelimiz profesyonel eğitimli ve tam sigortalıdır."
  },
  {
    question: "Aynı Güne Temizlik Hizmeti Alabilir Miyim?",
    answer: "Evet, PeraHizmet olarak aynı gün temizlik hizmeti sunuyoruz. Sabah 08:00-20:00 saatleri arasında rezervasyon yapabilir, ortalama 1,5-2 saat içinde profesyonel ekibimizi adresinize yönlendirebiliriz."
  },
  {
    question: "Temizlik Malzemelerini Kim Sağlıyor?",
    answer: "PeraHizmet olarak, tüm profesyonel temizlik malzemelerimizi ücretsiz sağlıyoruz. Kullandığımız tüm ürünler A+ kalite, çevre dostu ve anti-alerjik özelliklidir. Tercihe bağlı olarak kendi temizlik malzemelerinizi de kullanabilirsiniz."
  },
  {
    question: "Minimum Kaç Saat Hizmet Almalıyım?",
    answer: "Minimum hizmet süremiz 3 saattir. Bu süre, ortalama bir evin temel temizliği için gereken minimum süredir. Daha kapsamlı temizlikler için süre uzatılabilir."
  },
  {
    question: "Temizlik Personeli Güvenilir Mi?",
    answer: "Tüm personelimiz kapsamlı bir güvenlik soruşturmasından geçer. Kimlik, adres ve referans kontrolleri yapılır. Ayrıca sigortalı çalışırlar ve düzenli performans değerlendirmesine tabi tutulurlar."
  },
  {
    question: "Hangi Ödeme Yöntemlerini Kullanabilirim?",
    answer: "Kredi kartı, havale/EFT ve nakit ödeme seçeneklerimiz mevcuttur. Online ödemelerde 3D Secure güvenlik sistemi kullanılmaktadır."
  },
  {
    question: "İptal ve Değişiklik Politikanız Nedir?",
    answer: "Hizmet başlangıcından 24 saat öncesine kadar ücretsiz iptal ve değişiklik yapabilirsiniz. Daha geç iptallerde hizmet bedelinin %50'si tahsil edilir."
  },
  {
    question: "Memnun Kalmazsam Ne Olur?",
    answer: "Memnuniyet garantisi veriyoruz. Hizmetten memnun kalmamanız durumunda, 24 saat içinde bizi bilgilendirmeniz halinde ücretsiz tekrar temizlik hizmeti sunuyoruz."
  },
  {
    question: "Evcil Hayvanım Var, Sorun Olur Mu?",
    answer: "Hayır, evcil hayvanlar sorun olmaz. Personelimiz evcil hayvan olan evlerde çalışmaya alışkındır. Sadece temizlik sırasında güvenlik için evcil hayvanınızı ayrı bir odada tutmanızı öneririz."
  },
  {
    question: "Özel Temizlik İsteklerimi İletebilir Miyim?",
    answer: "Evet, rezervasyon sırasında özel isteklerinizi belirtebilirsiniz. Alerjiniz varsa kullanılmamasını istediğiniz ürünleri veya ekstra özen gösterilmesini istediğiniz alanları not edebiliriz."
  }
]

// Temizlik hizmetleri detaylarını genişletelim
const cleaningServices = [
  {
    title: "Salon Temizliği",
    description: "Misafir ağırlanan alanların kusursuz temizliği",
    details: [
      "Tüm mobilyaların tozunun alınması ve silinmesi",
      "Halı ve koltukların derinlemesine temizliği",
      "Pencerelerin ve camların detaylı temizliği",
      "Avize ve aydınlatmaların temizliği",
      "Süpürgelik ve köşelerin detaylı temizliği"
    ],
    icon: "🛋️"
  },
  {
    title: "Mutfak Temizliği",
    description: "Hijyenik ve parlak bir mutfak için kapsamlı temizlik",
    details: [
      "Tüm tezgah ve dolapların içi ve dışının silinmesi",
      "Beyaz eşyaların içi ve dışının temizlenmesi",
      "Ocak ve fırının detaylı temizliği",
      "Lavabo ve armatürlerin parlatılması",
      "Çöp kovalarının dezenfekte edilmesi"
    ],
    icon: "🍳"
  },
  {
    title: "Banyo Temizliği",
    description: "Derinlemesine hijyen ve parlaklık",
    details: [
      "Duşakabin/küvet detaylı temizliği",
      "Fayansların kireç sökücü ile temizlenmesi",
      "Klozet ve lavaboların dezenfekte edilmesi",
      "Ayna ve cam yüzeylerin parlatılması",
      "Banyo dolaplarının içi ve dışının silinmesi"
    ],
    icon: "🚿"
  },
  {
    title: "Yatak Odası Temizliği",
    description: "Huzurlu bir uyku için temiz ortam",
    details: [
      "Yatak ve nevresim değişimi",
      "Gardırop ve çekmecelerin düzenlenmesi",
      "Perde ve stor temizliği",
      "Ayna ve cam yüzeylerin temizliği",
      "Halı ve zemin temizliği"
    ],
    icon: "🛏️"
  }
]

// Slider için veri
const slides = [
  {
    title: "Profesyonel Ekip",
    description: "Deneyimli ve güvenilir temizlik ekibi",
    image: "/images/cleaning-team.jpg" // public/images klasöründe
  },
  {
    title: "Modern Ekipmanlar",
    description: "En son teknoloji temizlik ekipmanları",
    image: "/images/cleaning-equipment.jpg"
  },
  {
    title: "Garantili Hizmet",
    description: "Memnuniyet garantili temizlik hizmeti",
    image: "/images/cleaning-service.jpg"
  }
]

// Temizlik personeli verileri
const cleaningStaff = [
  { name: "Esma Y.", service: "Ev Temizliği", rating: 4.9, experience: "3 yıl", image: "/images/staff/1.jpg" },
  { name: "Ayşe K.", service: "Ev & Ofis Temizliği", rating: 4.8, experience: "5 yıl", image: "/images/staff/2.jpg" },
  { name: "Fatma B.", service: "Detaylı Temizlik", rating: 5.0, experience: "4 yıl", image: "/images/staff/3.jpg" },
  { name: "Zeynep M.", service: "Ev Temizliği", rating: 4.7, experience: "2 yıl", image: "/images/staff/4.jpg" },
  { name: "Hatice S.", service: "Ev & Villa Temizliği", rating: 4.9, experience: "6 yıl", image: "/images/staff/5.jpg" },
  { name: "Merve D.", service: "Ev Temizliği", rating: 4.8, experience: "3 yıl", image: "/images/staff/6.jpg" },
  { name: "Seda R.", service: "Detaylı Temizlik", rating: 4.9, experience: "4 yıl", image: "/images/staff/7.jpg" },
  { name: "Elif K.", service: "Ev & Ofis Temizliği", rating: 5.0, experience: "5 yıl", image: "/images/staff/8.jpg" },
  { name: "Melek A.", service: "Villa Temizliği", rating: 4.8, experience: "4 yıl", image: "/images/staff/9.jpg" },
  { name: "Derya Y.", service: "Ev Temizliği", rating: 4.7, experience: "2 yıl", image: "/images/staff/10.jpg" },
  { name: "Sevgi B.", service: "Detaylı Temizlik", rating: 4.9, experience: "5 yıl", image: "/images/staff/11.jpg" },
  { name: "Gülşen M.", service: "Ev Temizliği", rating: 4.8, experience: "3 yıl", image: "/images/staff/12.jpg" },
  { name: "Hülya K.", service: "Ev & Villa Temizliği", rating: 5.0, experience: "6 yıl", image: "/images/staff/13.jpg" },
  { name: "Nurcan D.", service: "Ev Temizliği", rating: 4.9, experience: "4 yıl", image: "/images/staff/14.jpg" },
  { name: "Şerife T.", service: "Detaylı Temizlik", rating: 4.8, experience: "3 yıl", image: "/images/staff/15.jpg" },
  { name: "Emine S.", service: "Ev & Ofis Temizliği", rating: 4.7, experience: "4 yıl", image: "/images/staff/16.jpg" },
  { name: "Aysel R.", service: "Villa Temizliği", rating: 5.0, experience: "5 yıl", image: "/images/staff/17.jpg" },
  { name: "Filiz B.", service: "Ev Temizliği", rating: 4.9, experience: "3 yıl", image: "/images/staff/18.jpg" },
  { name: "Songül M.", service: "Detaylı Temizlik", rating: 4.8, experience: "4 yıl", image: "/images/staff/19.jpg" },
  { name: "Yasemin K.", service: "Ev Temizliği", rating: 4.9, experience: "5 yıl", image: "/images/staff/20.jpg" },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "İstanbul Ev Temizliği Hizmeti",
  "provider": {
    "@type": "CleaningService",
    "name": "PeraHizmet",
    "image": "https://perahizmet.com/logo.png"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "description": "Profesyonel ev temizlik hizmeti. Günlük ve detaylı temizlik seçenekleri.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "priceRange": "₺1300 - ₺2400",
    "availability": "https://schema.org/InStock"
  },
  "serviceType": "Residential Cleaning",
  "termsOfService": "https://perahizmet.com/sartlar",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "284",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function EvTemizligi() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main role="main" aria-label="Ev Temizliği Sayfası">
        <section aria-label="Hero Bölümü" className="relative pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">
                  İstanbul Ev Temizliği Fiyatları
                  <span className="block text-lg font-normal text-gray-600 mt-2">
                    (Tarihe Göre Değişir)
                  </span>
                </h1>
                <p className="text-lg text-gray-700">
                  Uygun fiyatlı ev temizliği hizmeti için sayfamızdan rezervasyon yapabilirsiniz. 
                  Temizlik fiyat belirleme aşamasında saat detayı önemlidir.
                </p>
              </div>
              <div>
                <PriceCalculator />
              </div>
            </div>
          </div>
          <Image
            src="/images/services/ev-temizligi-hero.jpg"
            alt="İstanbul Ev Temizliği Hizmetleri - PeraHizmet"
            width={800}
            height={400}
            priority
            className="rounded-xl shadow-lg"
          />
        </section>

        {/* Hizmet Kapsamı */}
        <section aria-label="Hizmet Kapsamı" className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Ev Temizliği Hizmet Kapsamı
            </h2>
            <Tabs defaultValue="genel" className="w-full">
              <TabsList className="flex flex-wrap md:flex-nowrap gap-4 mb-8 w-full bg-transparent">
                {[
                  { value: "genel", label: "Genel Bilgi", icon: "📋" },
                  { value: "odalar", label: "Odalar", icon: "🏠" },
                  { value: "bolgeler", label: "Bölgeler", icon: "📍" },
                  { value: "sss", label: "SSS", icon: "❓" }
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex-1 min-w-[200px] bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 
                      text-gray-700 hover:text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                      transition-all duration-300 border-2 border-transparent hover:border-blue-200 group"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {tab.icon}
                      </span>
                      <span className="text-lg font-semibold">{tab.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tab içerikleri için animasyon ekleyelim */}
              <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <div className="relative">
                  <TabsContent value="genel" className="mt-6">
                    <Card className="p-8 bg-gradient-to-br from-white to-blue-50">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900">Ev Temizliği Hakkında</h3>
                      <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          Profesyonel ev temizlik hizmetimiz, modern yaşamın getirdiği zaman kısıtlamalarına 
                          pratik bir çözüm sunuyor. Deneyimli ekibimiz, evinizin her köşesini titizlikle 
                          temizlerken, siz değerli zamanınızı sevdiklerinizle geçirebilir veya işlerinize 
                          odaklanabilirsiniz.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">⭐</span>
                              <h4 className="font-semibold text-gray-900">Kalite Standartları</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                              En yüksek temizlik standartlarını uygulayarak evinizi pırıl pırıl yapıyoruz.
                            </p>
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">🌿</span>
                              <h4 className="font-semibold text-gray-900">Çevre Dostu</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                              Doğa dostu temizlik ürünleri kullanarak çevreyi koruyoruz.
                            </p>
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">🔒</span>
                              <h4 className="font-semibold text-gray-900">Güvenli Hizmet</h4>
                            </div>
                            <p className="text-gray-600 text-sm">
                              Sigortalı ve güvenlik kontrolünden geçmiş personel ile çalışıyoruz.
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Neden Bizi Seçmelisiniz?</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              "✓ 7/24 müşteri desteği",
                              "✓ Esnek rezervasyon sistemi",
                              "✓ Profesyonel ekipman kullanımı",
                              "✓ Memnuniyet garantisi",
                              "✓ Uygun fiyat politikası",
                              "✓ Deneyimli temizlik ekibi"
                            ].map((item, index) => (
                              <div key={index} className="bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                                <p className="text-gray-800 font-medium">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                  <TabsContent value="odalar" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {cleaningServices.map((service) => (
                        <div
                          key={service.title}
                          className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary"
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
                  <TabsContent value="bolgeler" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Avrupa Yakası</h3>
                        <ul className="space-y-2">
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Adalar Ev Temizliği
                          </li>
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Bakırköy Ev Temizliği
                          </li>
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Beşiktaş Ev Temizliği
                          </li>
                        </ul>
                      </Card>
                      <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Anadolu Yakası</h3>
                        <ul className="space-y-2">
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Kadıköy Ev Temizliği
                          </li>
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Üsküdar Ev Temizliği
                          </li>
                          <li className="text-sm text-gray-600 hover:text-primary transition-colors">
                            ▸ Maltepe Ev Temizliği
                          </li>
                        </ul>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="sss" className="mt-6">
                    <div className="max-w-3xl mx-auto">
                      <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                          >
                            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                              <div className="flex items-center gap-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  {index + 1}
                                </span>
                                <span className="text-gray-900">{faq.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <div className="pl-11">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Yeni Slider Bölümü */}
        <section className="py-16 bg-gradient-to-br from-rose-50 via-sky-50 to-purple-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Üst Bilgi Kartları */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                <h4 className="text-lg font-semibold">20+ Personel</h4>
                <p className="text-sm opacity-90">Deneyimli Ekip</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg text-white">
                <h4 className="text-lg font-semibold">4.8/5</h4>
                <p className="text-sm opacity-90">Müşteri Memnuniyeti</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-lg text-white">
                <h4 className="text-lg font-semibold">3+ Yıl</h4>
                <p className="text-sm opacity-90">Ortalama Deneyim</p>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-lg text-white">
                <h4 className="text-lg font-semibold">%100</h4>
                <p className="text-sm opacity-90">Güvenilir Hizmet</p>
              </div>
            </div>

            {/* Personel Slider - Yatay Tek Sıra */}
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {cleaningStaff.map((person, idx) => (
                    <div key={idx} className="min-w-full flex-shrink-0 px-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md 
                            transition-all duration-300 border border-gray-100 hover:border-blue-200">
                            <div className="flex items-center gap-3">
                              <Image
                                src={person.image}
                                alt={`${person.name} - PeraHizmet Temizlik Personeli`}
                                width={40}
                                height={40}
                                loading="lazy"
                                className="rounded-full object-cover"
                              />
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-gray-800 truncate">
                                  {person.name}
                                </h3>
                                <p className="text-xs text-purple-600 truncate">
                                  {person.service}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★</span> 
                                {person.rating}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Kontrolleri */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(cleaningStaff.length / 6)) % Math.ceil(cleaningStaff.length / 6))}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm 
                  p-2 rounded-full shadow-lg hover:bg-white transition-colors border border-gray-100"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className={`w-5 h-5 ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(cleaningStaff.length / 6))}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm 
                  p-2 rounded-full shadow-lg hover:bg-white transition-colors border border-gray-100"
                disabled={currentSlide >= Math.ceil(cleaningStaff.length / 6) - 1}
              >
                <ChevronRight className={`w-5 h-5 ${
                  currentSlide >= Math.ceil(cleaningStaff.length / 6) - 1 ? 'text-gray-300' : 'text-gray-600'
                }`} />
              </button>

              {/* Slider Noktaları */}
              <div className="flex justify-center mt-4 gap-1">
                {Array.from({ length: Math.ceil(cleaningStaff.length / 6) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar */}
        <section aria-label="Hizmet Avantajları" className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Ev Temizliği Hizmet Avantajları
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 
                    shadow-sm hover:shadow-md transition-all duration-300"
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
        <section aria-label="İletişim" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Evin Temiz, Kafan Rahat Olsun</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Temizliği profesyonellerine bırak, vaktin sana kalsın.
            </p>
          </div>
        </section>
      </main>
    </>
  )
} 