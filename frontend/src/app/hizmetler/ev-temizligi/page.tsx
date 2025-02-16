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
      {/* Hero Section - Daha kısa */}
      <section className="pt-16 pb-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
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

      {/* Fiyatlandırma Bölümü - Yeni Tasarım */}
      <section className="py-6 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden">
            {/* Dekoratif arka plan elementleri */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-50 rounded-full -ml-16 -mb-16 z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-3">
                  Özel Fiyatlar 💫
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Fiyatlandırma
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Evinizin büyüklüğüne göre uygun fiyatlar. Haftalık ve aylık temizliklerde özel indirimler!
                </p>
              </div>

              {/* Fiyat Hesaplama */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <PriceCalculator />
              </div>

              {/* Avantajlar */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <span className="text-2xl">💎</span>
                  <div>
                    <h3 className="font-semibold">Uygun Fiyat</h3>
                    <p className="text-sm text-gray-600">Rekabetçi fiyatlar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold">Net Fiyat</h3>
                    <p className="text-sm text-gray-600">Ek ücret yok</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-yellow-50 rounded-lg p-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold">Hızlı Teklif</h3>
                    <p className="text-sm text-gray-600">Anında fiyat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri - Yeni Tasarım */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50/70 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-blue-600 font-medium">Geniş Hizmet Ağı</span>
            <span className="text-lg">🌟</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            İstanbul'un Her Bölgesindeyiz
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Avrupa ve Anadolu yakasının tüm ilçelerinde profesyonel temizlik hizmeti veriyoruz
          </p>

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
