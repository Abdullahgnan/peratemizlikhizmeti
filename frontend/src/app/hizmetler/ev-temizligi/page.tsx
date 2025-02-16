"use client"

import { PriceCalculator } from "@/components/pricing/price-calculator"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

// Tip tanımlamaları
interface CleaningService {
  title: string
  description: string
  details: string[]
  icon: string
}

interface FAQ {
  question: string
  answer: string
}

// Veri tanımlamaları
const cleaningServices: CleaningService[] = [
  {
    title: "Genel Ev Temizliği",
    description: "Detaylı ev temizliği",
    details: [
      "Tüm odaların genel temizliği",
      "Toz alma ve süpürme",
      "Paspas ve zemin temizliği",
      "Banyo ve mutfak temizliği",
      "Cam silme"
    ],
    icon: "🏠"
  },
  // Diğer servisler...
]

const faqs: FAQ[] = [
  {
    question: "Temizlik ekibiniz güvenilir mi?",
    answer: "Tüm ekip üyelerimiz kapsamlı bir özgeçmiş kontrolünden geçirilir, deneyimlidir ve sigortalıdır. Ayrıca düzenli eğitimlerle hizmet kalitemizi sürekli yüksek tutuyoruz."
  },
  {
    question: "Temizlik malzemeleri konusunda ne yapmalıyım?",
    answer: "Temizlik malzemelerini (deterjan, çamaşır suyu, yüzey temizleyici, süpürge, paspas, bez vb.) siz temin etmelisiniz. Eğer isterseniz, ek ücret karşılığında temizlik malzemelerini biz de temin edebiliriz. Bu hizmeti rezervasyon sırasında belirtmeniz yeterlidir."
  },
  {
    question: "Evde evcil hayvanım var, bu bir sorun oluşturur mu?",
    answer: "Hayır, evcil hayvanlarla çalışmaya alışkınız. Sadece temizlik sırasında evcil hayvanınızın güvenliği için ayrı bir odada tutulmasını öneririz."
  },
  {
    question: "Temizlik sırasında evde bulunmak zorunda mıyım?",
    answer: "Hayır, evde bulunmak zorunda değilsiniz. Güvenilir anahtar teslim sistemiyle hizmet verebiliriz. Ancak ilk temizlikte evde bulunmanızı öneriyoruz."
  },
  {
    question: "Memnun kalmazsam ne yapabilirim?",
    answer: "Müşteri memnuniyeti bizim için çok önemli. Eğer temizlikten memnun kalmazsanız, 24 saat içinde bizi bilgilendirmeniz durumunda ücretsiz olarak tekrar temizlik yapıyoruz."
  },
  {
    question: "Minimum kaç saatlik hizmet almalıyım?",
    answer: "Standart ev temizliği için minimum 3 saatlik hizmet sunuyoruz. Bu süre, temel temizlik işlemlerinin düzgün yapılabilmesi için gereken minimum süredir."
  },
  {
    question: "Temizlik için randevu değişikliği yapabilir miyim?",
    answer: "Evet, randevunuzu 24 saat öncesinden haber vermeniz durumunda ücretsiz olarak değiştirebilirsiniz."
  },
  {
    question: "Özel temizlik isteklerimi nasıl belirtebilirim?",
    answer: "Rezervasyon sırasında özel isteklerinizi belirtebilirsiniz. Ayrıca temizlik ekibimiz geldiğinde de özel taleplerinizi iletebilirsiniz."
  }
]

export default function EvTemizligiPage() {
  return (
    <main className="relative min-h-screen">
      {/* Daha Soft Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ana gradient background - daha yumuşak tonlar */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40" />
        
        {/* Soft Damla Desenleri - opaklık azaltıldı */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 20c-22 0-40 35-40 65 0 22 18 40 40 40s40-18 40-40c0-30-18-65-40-65zm0 90c-13.8 0-25-11.2-25-25 0-21.9 11.2-46.5 25-46.5s25 24.6 25 46.5c0 13.8-11.2 25-25 25z' fill='%234B75FF'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundPosition: '0 0, 100px 100px'
          }} 
        />
        
        {/* Yumuşak Işık Efektleri - blur artırıldı */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-100/10 rounded-full blur-[150px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-blue-50/20 rounded-full blur-[150px] -ml-40 -mb-40" />
        
        {/* İnce Damla Desenleri - opaklık azaltıldı */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15c-11 0-20 17.5-20 32.5 0 11 9 20 20 20s20-9 20-20C70 32.5 61 15 50 15zm0 45c-6.9 0-12.5-5.6-12.5-12.5 0-11 5.6-23.2 12.5-23.2s12.5 12.3 12.5 23.2c0 6.9-5.6 12.5-12.5 12.5z' fill='%234B75FF'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            backgroundPosition: '50px 50px'
          }} 
        />
      </div>

      {/* Mevcut içerik */}
      <div className="relative z-10">
        {/* Header ile Hero Section arası boşluk */}
        <div className="h-24" /> {/* Bu div header ile içerik arasında boşluk oluşturacak */}

        {/* Hero Section */}
        <section className="pt-12 pb-3">
          <div className="container mx-auto px-3">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Sol Taraf - Ana Bilgiler */}
              <div className="space-y-6 bg-transparent">
            
                {/* Ana Başlık */}
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Eviniz İçin <span className="text-blue-600">Profesyonel</span> Temizlik Hizmeti
                  </h1>
                  <p className="text-gray-600 text-base">
                    Deneyimli ekibimizle evinizi pırıl pırıl yapıyor, size temiz ve ferah bir yaşam alanı sunuyoruz.
                  </p>
                </div>

                {/* Özellikler Listesi */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                    <span className="text-yellow-500 text-xl">⚡</span>
                    <span className="text-gray-700 font-medium">Aynı gün temizlik hizmeti</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                    <span className="text-yellow-500 text-xl">🏆</span>
                    <span className="text-gray-700 font-medium">%100 Memnuniyet garantisi</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">1000+ Mutlu müşteri</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                    <span className="text-blue-500 text-xl">💎</span>
                    <span className="text-gray-700 font-medium">Düzenli temizlikte %25'e varan indirim</span>
                  </div>
                </div>

                {/* Butonlar */}
                <div className="flex gap-3">
                  <Link href="/iletisim">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                      Hemen Fiyat Al
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sağ Taraf - Görsel */}
              <div className="relative w-full h-[320px] lg:h-[400px]">
                <Image
                  src="/images/ev-temizligi-hero.jpg"
                  alt="Profesyonel ev temizlik hizmeti"
                  fill
                  className="object-cover rounded-xl shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fiyatlandırma Section */}
        <section className="py-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/50 p-6 rounded-lg border border-blue-50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-3">
                  <span className="text-blue-600 text-sm font-medium">Özel Fiyatlar</span>
                  <span className="text-blue-500">💎</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Fiyat Hesaplama</h2>
                <p className="text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  Size en uygun paketi seçin, ihtiyacınıza özel fiyat hesaplayalım
                </p>
              </div>
              
              <div className="bg-transparent">
                <PriceCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Bölgeleri */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* İstanbul */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🏙️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">İstanbul</h3>
                    <p className="text-sm text-gray-600">Tüm ilçelerde hizmet</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span>Avrupa Yakası tüm merkezi ilçeler</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span>Anadolu Yakası tüm merkezi ilçeler</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span>
                    <span>Aynı gün randevu imkanı</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500">⭐</span>
                    <span>Özel durumlar için esnek çalışma saatleri</span>
                  </li>
                </ul>
              </div>

              {/* Çok Yakında */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🚀</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Çok Yakında</h3>
                    <p className="text-sm text-gray-600">Yeni bölgelerde hizmetinizdeyiz</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500">⭐</span>
                    <span>Kocaeli (Çok Yakında)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500">⭐</span>
                    <span>Gebze ve çevresi</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-yellow-500">⭐</span>
                    <span>Ön kayıt için bizi arayın</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Temizlenen Alanlar */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Temizlenen Alanlar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Oturma Odası */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🛋️</span>
                  <h3 className="font-semibold text-gray-900">Oturma Odası</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Mobilya temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Halı yıkama</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Cam silme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Toz alma</span>
                  </li>
                </ul>
              </div>

              {/* Yatak Odası */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🛏️</span>
                  <h3 className="font-semibold text-gray-900">Yatak Odası</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Yatak ve çarşaf temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Gardırop düzenleme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Zemin temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Pencere temizliği</span>
                  </li>
                </ul>
              </div>

              {/* Banyo */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🚽</span>
                  <h3 className="font-semibold text-gray-900">Banyo</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Derin hijyen temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Fayans temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Duşakabin temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Lavabo ve armatür parlatma</span>
                  </li>
                </ul>
              </div>

              {/* Mutfak */}
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🍳</span>
                  <h3 className="font-semibold text-gray-900">Mutfak</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Dolap içi temizlik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Fırın temizliği</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Tezgah parlatma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span>Yüzey dezenfektasyonu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Özellikleri */}
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">✨</span>
                  <h3 className="font-semibold text-gray-900">Garantili Hizmet</h3>
                </div>
                <p className="text-gray-600">Kalite ve memnuniyet garantisi.</p>
              </div>
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">🔒</span>
                  <h3 className="font-semibold text-gray-900">Güvenilir Ekip</h3>
                </div>
                <p className="text-gray-600">Referanslı ve deneyimli temizlik ekibi.</p>
              </div>
              <div className="p-6 border-2 border-blue-100 rounded-lg bg-white/50 backdrop-blur-sm hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">⚡</span>
                  <h3 className="font-semibold text-gray-900">Hızlı Hizmet</h3>
                </div>
                <p className="text-gray-600">Aynı gün temizlik imkanı.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS - Zarif Tasarım */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-base font-medium mb-4 text-center">Sıkça Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-blue-100 rounded-lg px-4 bg-white/50 hover:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-sm py-3">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 pb-3">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>


      </div>
    </main>
  )
}
