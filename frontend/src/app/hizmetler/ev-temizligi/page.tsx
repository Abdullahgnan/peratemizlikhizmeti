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
    <main className="container mx-auto px-4">
      {/* Hero Section - Daha etkileyici */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Daha etkileyici metin ve özellikler */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-2">
                %100 Müşteri Memnuniyeti 🌟
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Eviniz İçin <span className="text-blue-600">Profesyonel</span> Temizlik Hizmeti
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Deneyimli ekibimizle evinizi pırıl pırıl yapıyor, size temiz ve ferah bir yaşam alanı sunuyoruz.
              </p>

              {/* Öne Çıkan Özellikler */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Hızlı Hizmet</h3>
                    <p className="text-sm text-gray-600">Aynı gün temizlik</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Garantili</h3>
                    <p className="text-sm text-gray-600">%100 Memnuniyet</p>
                  </div>
                </div>
              </div>

              {/* CTA Butonları */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  Hemen Fiyat Al
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Detaylı Bilgi
                </Button>
              </div>

              {/* Güven Göstergeleri */}
              <div className="flex items-center gap-6 mt-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="font-medium">4.9/5</span>
                  <span className="text-sm">(500+ Değerlendirme)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">1000+ Mutlu Müşteri</span>
                </div>
              </div>
            </div>
            
            {/* Sağ Taraf - Görsel */}
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/images/ev-temizligi-hero.jpg"
                alt="Profesyonel ev temizlik hizmeti"
                fill
                className="object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Özel Fiyatlar</p>
                  <p className="text-blue-600">%25'e varan indirim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma ve Rezervasyon Bölümü */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">
              Hizmet Paketleri ve Fiyatlandırma
            </h2>
            <PriceCalculator />
          </div>
        </div>
      </section>

      {/* Hizmet Avantajları */}
      <section className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">✨ Garantili Hizmet</h3>
            <p className="text-gray-600">Memnun kalmazsanız tekrar ücretsiz temizlik.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">🔒 Güvenilir Ekip</h3>
            <p className="text-gray-600">Referanslı ve deneyimli temizlik ekibi.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">⚡ Hızlı Hizmet</h3>
            <p className="text-gray-600">Aynı gün temizlik imkanı.</p>
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Sıkça Sorulan Sorular
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
