"use client"

import { PriceCalculator } from "@/components/pricing/price-calculator"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function EvTemizligiPage() {
  return (
    <main className="container mx-auto px-4">
      {/* Boş Alan */}
      <div className="h-20" /> {/* Header'dan sonra daha az boşluk */}
      
      {/* Fiyat Hesaplama Bölümü */}
      <div className="py-12"> {/* Padding'i azalttık */}
        <PriceCalculator />
      </div>

      {/* Ev Temizliği Hakkında Bilgiler */}
      <section className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ev Temizliği Hizmetimiz</h2>
            <p className="text-gray-600 mb-4">
              Profesyonel ev temizlik hizmetimiz, evinizin her köşesinin detaylı ve özenli bir şekilde temizlenmesini sağlar. 
              Deneyimli ekibimiz, modern ekipmanlar ve etkili temizlik malzemeleri kullanarak evinizi tertemiz ve hijyenik hale getirir.
            </p>
            <ul className="space-y-2">
              {[
                "Tüm odaların detaylı temizliği",
                "Banyo ve mutfak dezenfektasyonu",
                "Toz alma ve süpürme işlemleri",
                "Mobilya temizliği",
                "Pencere ve cam temizliği (iç kısım)",
                "Yer silme ve parlatma"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Profesyonel Ekip",
                  desc: "Deneyimli ve güvenilir temizlik personelimiz"
                },
                {
                  title: "Kaliteli Malzemeler",
                  desc: "Sağlığa ve çevreye duyarlı temizlik ürünleri"
                },
                {
                  title: "Güvenilir Hizmet",
                  desc: "Sigortalı ve referans kontrolü yapılmış personel"
                },
                {
                  title: "Uygun Fiyat",
                  desc: "Rekabetçi fiyatlar ve periyodik temizlik indirimleri"
                }
              ].map((item) => (
                <div key={item.title} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Önemli Notlar */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Önemli Bilgiler</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Minimum hizmet süresi 3 saattir.</li>
            <li>• Temizlik malzemeleri opsiyonel olarak sağlanmaktadır.</li>
            <li>• Haftalık ve aylık düzenli temizlik planlarında indirim uygulanır.</li>
            <li>• Rezervasyon iptali en az 24 saat önceden yapılmalıdır.</li>
            <li>• Fiyatlarımıza KDV dahildir.</li>
          </ul>
        </div>
      </section>
    </main>
  )
} 