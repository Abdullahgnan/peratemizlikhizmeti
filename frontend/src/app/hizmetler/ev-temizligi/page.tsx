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
    <main className="container mx-auto px-3">
      {/* Header ile Hero Section arası boşluk */}
      <div className="h-24" /> {/* Bu div header ile içerik arasında boşluk oluşturacak */}

      {/* Hero Section */}
      <section className="pt-8 pb-3 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Sol Taraf - Ana Bilgiler */}
            <div className="space-y-4">
              {/* Üst Badge */}
              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-xs">
                ⭐ 4.9/5 (500+ Değerlendirme)
              </div>

              {/* Ana Başlık */}
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  Eviniz İçin <span className="text-blue-600">Profesyonel</span> Temizlik Hizmeti
                </h1>
                <p className="text-gray-600 text-sm">
                  Deneyimli ekibimizle evinizi pırıl pırıl yapıyor, size temiz ve ferah bir yaşam alanı sunuyoruz.
                </p>
              </div>

              {/* Özellikler - Minimal Liste */}
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">⚡</span>
                  <span className="text-gray-600">Aynı gün temizlik hizmeti</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">🏆</span>
                  <span className="text-gray-600">%100 Memnuniyet garantisi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-600">1000+ Mutlu müşteri</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">💎</span>
                  <span className="text-gray-600">Düzenli temizlikte %25'e varan indirim</span>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex gap-3 pt-2">
                <Button size="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Hemen Fiyat Al
                </Button>
                <Button size="default" variant="outline">
                  Detaylı Bilgi
                </Button>
              </div>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="relative w-full h-[280px] lg:h-[320px]">
              <Image
                src="/images/ev-temizligi-hero.jpg"
                alt="Profesyonel ev temizlik hizmeti"
                fill
                className="object-cover rounded-lg shadow-md"
                priority
              />
              {/* Görsel üzerinde fiyat badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md">
                <p className="text-xs font-medium text-blue-600">Başlayan Fiyatlarla</p>
                <p className="text-sm font-bold">₺1250'den itibaren</p>
              </div>
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

      {/* Hizmet Bölgeleri - Zarif Tasarım */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* İstanbul */}
            <div className="p-4 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-blue-50">
                <span className="text-lg">🏙️</span>
                <div>
                  <h3 className="text-sm font-medium">İstanbul</h3>
                  <p className="text-xs text-gray-600">Tüm ilçelerde hizmet</p>
                </div>
              </div>
              <div className="space-y-1.5 pl-6">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Avrupa Yakası tüm merkezi ilçeler</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Anadolu Yakası tüm merkezi ilçeler</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-blue-500">✓</span>
                  <span>Aynı gün randevu imkanı</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-yellow-500">⭐</span>
                  <span>Özel durumlar için esnek çalışma saatleri</span>
                </div>
              </div>
            </div>

            {/* Çok Yakında */}
            <div className="p-4 border border-blue-100 rounded-lg bg-gradient-to-br from-blue-50/50 to-white hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-blue-50">
                <span className="text-lg">🚀</span>
                <div>
                  <h3 className="text-sm font-medium">Çok Yakında</h3>
                  <p className="text-xs text-gray-600">Yeni bölgelerde hizmetinizdeyiz</p>
                </div>
              </div>
              <div className="space-y-1.5 pl-6">
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-yellow-500">⭐</span>
                  <span>Kocaeli (Çok Yakında)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-yellow-500">⭐</span>
                  <span>Gebze ve çevresi</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="text-yellow-500">⭐</span>
                  <span>Ön kayıt için bizi arayın</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temizlenen Alanlar - Zarif Tasarım */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-base font-medium mb-6 text-center">Temizlenen Alanlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Oturma Odası */}
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-50">
                <span className="text-lg">🛋️</span>
                <h3 className="text-sm font-medium">Oturma Odası</h3>
              </div>
              <ul className="space-y-1 text-xs text-gray-600 pl-5">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Mobilya temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Halı yıkama</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Cam silme</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Toz alma</span>
                </li>
              </ul>
            </div>

            {/* Yatak Odası */}
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-50">
                <span className="text-lg">🛏️</span>
                <h3 className="text-sm font-medium">Yatak Odası</h3>
              </div>
              <ul className="space-y-1 text-xs text-gray-600 pl-5">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Yatak ve çarşaf temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Gardırop düzenleme</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Zemin temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Pencere temizliği</span>
                </li>
              </ul>
            </div>

            {/* Banyo */}
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-50">
                <span className="text-lg">🚽</span>
                <h3 className="text-sm font-medium">Banyo</h3>
              </div>
              <ul className="space-y-1 text-xs text-gray-600 pl-5">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Derin hijyen temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Fayans temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Duşakabin temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Lavabo ve armatür parlatma</span>
                </li>
              </ul>
            </div>

            {/* Mutfak */}
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-blue-50">
                <span className="text-lg">🍳</span>
                <h3 className="text-sm font-medium">Mutfak</h3>
              </div>
              <ul className="space-y-1 text-xs text-gray-600 pl-5">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Dolap içi temizlik</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Fırın temizliği</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Tezgah parlatma</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500 text-[10px]">•</span>
                  <span>Yüzey dezenfektasyonu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Avantajları - Zarif Tasarım */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">✨</span>
                <div>
                  <h3 className="text-sm font-medium">Garantili Hizmet</h3>
                  <p className="text-xs text-gray-600">Memnun kalmazsanız tekrar ücretsiz temizlik.</p>
                </div>
              </div>
            </div>
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">🔒</span>
                <div>
                  <h3 className="text-sm font-medium">Güvenilir Ekip</h3>
                  <p className="text-xs text-gray-600">Referanslı ve deneyimli temizlik ekibi.</p>
                </div>
              </div>
            </div>
            <div className="p-3 border border-blue-100 rounded-lg bg-white/50 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">⚡</span>
                <div>
                  <h3 className="text-sm font-medium">Hızlı Hizmet</h3>
                  <p className="text-xs text-gray-600">Aynı gün temizlik imkanı.</p>
                </div>
              </div>
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
    </main>
  )
}
