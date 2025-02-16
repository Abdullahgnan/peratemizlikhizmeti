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
      {/* Hero Section */}
      <section className="pt-12 pb-3 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Sol Taraf - Ana Bilgiler */}
            <div className="space-y-6">
              {/* Üst Badge */}
              <div className="inline-block px-3 py-1.5 bg-blue-100 rounded-full text-blue-700 text-sm">
                ⭐ 4.9/5 (500+ Değerlendirme)
              </div>

              {/* Ana Başlık */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  Eviniz İçin <span className="text-blue-600">Profesyonel</span> Temizlik Hizmeti
                </h1>
                <p className="text-gray-600 text-base">
                  Deneyimli ekibimizle evinizi pırıl pırıl yapıyor, size temiz ve ferah bir yaşam alanı sunuyoruz.
                </p>
              </div>

              {/* Özellikler Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-50 rounded-full flex items-center justify-center">
                    ⚡
                  </div>
                  <div>
                    <p className="font-medium">Hızlı Hizmet</p>
                    <p className="text-sm text-gray-500">Aynı gün temizlik</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <p className="font-medium">Garantili</p>
                    <p className="text-sm text-gray-500">%100 Memnuniyet</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium">1000+ Müşteri</p>
                    <p className="text-sm text-gray-500">Mutlu müşteriler</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                    💎
                  </div>
                  <div>
                    <p className="font-medium">Özel Fiyatlar</p>
                    <p className="text-sm text-gray-500">%25'e varan indirim</p>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex gap-3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Hemen Fiyat Al
                </Button>
                <Button size="lg" variant="outline" className="px-6">
                  Detaylı Bilgi
                </Button>
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
              {/* Görsel üzerinde fiyat badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-blue-600">Başlayan Fiyatlarla</p>
                <p className="text-lg font-bold">₺1250'den itibaren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma Section */}
      <section className="py-4 -mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-blue-100">
            <div className="text-center mb-6">
             
           
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri - Yeni Tasarım */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50/70 rounded-full mb-6 backdrop-blur-sm">
       
          </div>
          <div className="absolute left-0 right-0 -z-10">
            <div className="w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* İstanbul Hizmet Alanı */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏙️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">İstanbul</h3>
                <p className="text-gray-600">Tüm ilçelerde hizmet</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Avrupa ve Anadolu yakasının tüm merkezi ilçelerinde, deneyimli ekibimizle 
              hafta içi ve hafta sonu 09:00 - 18:00 saatleri arasında hizmet veriyoruz. 
              Özel durumlar için bu saatler dışında da destek sağlayabiliyoruz.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Avrupa Yakası tüm merkezi ilçeler
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Anadolu Yakası tüm merkezi ilçeler
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Aynı gün randevu imkanı
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Size en yakın ekip yönlendirmesi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">★</span>
                Özel durumlar için esnek çalışma saatleri
              </li>
            </ul>
          </div>

          {/* Yakında Açılacak Bölgeler */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Çok Yakında</h3>
                <p className="text-blue-600">Yeni bölgelerde hizmetinizdeyiz</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Hizmet ağımızı genişletiyoruz! Yakında Kocaeli ve çevre illerde de 
              profesyonel temizlik hizmetimizle yanınızda olacağız.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">⭐</span>
                Kocaeli (Çok Yakında)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">⭐</span>
                Gebze ve çevresi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">⭐</span>
                Ön kayıt için bizi arayın
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Temizlenen Alanlar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Temizlenen Alanlar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🛋️</div>
              <h3 className="text-xl font-semibold mb-2">Oturma Odası</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Mobilya temizliği</li>
                <li>• Halı yıkama</li>
                <li>• Cam silme</li>
                <li>• Toz alma</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🛏️</div>
              <h3 className="text-xl font-semibold mb-2">Yatak Odası</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Yatak ve çarşaf temizliği</li>
                <li>• Gardırop düzenleme</li>
                <li>• Zemin temizliği</li>
                <li>• Pencere temizliği</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-4">🚽</div>
              <h3 className="text-xl font-semibold mb-2">Banyo</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Derin hijyen temizliği</li>
                <li>• Fayans temizliği</li>
                <li>• Duşakabin temizliği</li>
                <li>• Lavabo ve armatür parlatma</li>
              </ul>
            </div>
            {/* Diğer alanlar benzer şekilde eklenebilir */}
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
