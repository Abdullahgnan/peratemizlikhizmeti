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
      {/* Boş Alan */}
      <div className="h-20" /> {/* Header'dan sonra daha az boşluk */}
      
      {/* Fiyat Hesaplama Bölümü */}
      <div className="py-12"> {/* Padding'i azalttık */}
        <PriceCalculator />
      </div>

      {/* Hizmet Kapsamı */}
      <section aria-label="Hizmet Kapsamı" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ev Temizliği Hizmet Kapsamı
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
                <h3 className="text-2xl font-bold mb-6">Ev Temizliği Hakkında</h3>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    PeraHizmet olarak, işletmenizin ihtiyaçlarına özel profesyonel ev temizlik hizmetleri sunuyoruz. 
                    Deneyimli ekibimiz ve modern ekipmanlarımızla, evinizi her zaman temiz ve düzenli tutuyoruz.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-4">Standart Temizlik Paketi</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Tüm ev alanlarının genel temizliği</span>
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
                        <p className="text-gray-700">Ev alanınızı inceleriz ve ihtiyaçlarınızı belirleriz</p>
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
                      {bolge} ve çevresinde profesyonel ev temizlik hizmeti
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sss" className="mt-8">
              <Accordion type="single" collapsible>
                {faqs.map((faq: FAQ, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
