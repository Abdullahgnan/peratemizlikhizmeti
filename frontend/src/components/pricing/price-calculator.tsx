"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

type FrequencyType = "single" | "weekly" | "monthly"

interface ExtraService {
  id: string
  name: string
  price: number
}

const extraServices: ExtraService[] = [
  { id: "materials", name: "Temizlik Malzemeleri", price: 850 },
  { id: "windows", name: "Dış Cam Temizliği", price: 400 },
  { id: "balcony", name: "Balkon Temizliği", price: 300 },
  { id: "cabinet", name: "Dolap İçi Temizlik", price: 250 },
]

// Promosyon kodları için tip tanımı
type PromoCodeType = {
  [key: string]: number;
}

const promoCodes: PromoCodeType = {
  "YENI2024": 10, // %10 indirim
  "BAHAR": 15,    // %15 indirim
  "TEMIZ50": 50   // 50 TL indirim (sabit)
}

const hourlyPrices = [
  { hours: "3", price: "1250", note: "Aynı gün talep için ideal" },
  { hours: "4", price: "1500", note: "Aynı gün talep için ideal" },
  { hours: "5", price: "1850", note: "Aynı gün talep için ideal" },
  { hours: "6", price: "2100", note: "1+1 Evler için önerilir" },
  { hours: "7", price: "2350", note: "2+1 Evler için önerilir" },
  { hours: "8", price: "2600", note: "3+1 Evler için önerilir" }
]

export function PriceCalculator() {
  const [hours, setHours] = React.useState<string>("4")
  const [district, setDistrict] = React.useState<string>("")
  const [city, setCity] = React.useState<string>("İstanbul")
  const [frequency, setFrequency] = React.useState<FrequencyType>("single")
  const [workers, setWorkers] = React.useState(1)
  const [selectedExtras, setSelectedExtras] = React.useState<string[]>([])
  const [promoCode, setPromoCode] = React.useState("")
  const [isPromoValid, setIsPromoValid] = React.useState(false)
  const [appliedPromoCode, setAppliedPromoCode] = React.useState("")
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false)
  const [isExtraServicesOpen, setIsExtraServicesOpen] = React.useState(false)

  const validatePromoCode = (code: string) => {
    const upperCode = code.toUpperCase();
    if (upperCode in promoCodes) {
      if (upperCode === appliedPromoCode) {
        return;
      }
      setPromoCode(upperCode);
      setAppliedPromoCode(upperCode);
      setIsPromoValid(true);
    } else {
      setIsPromoValid(false);
      setPromoCode("");
      setAppliedPromoCode("");
    }
  }

  const basePrice = 1500
  const calculatePrice = () => {
    let total = basePrice
    // Saat başına fiyat artışı
    total += (parseInt(hours) - 4) * 200
    // Personel sayısına göre artış
    total *= workers
    
    // Ekstra hizmetlerin fiyatları
    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      const extra = extraServices.find(e => e.id === extraId)
      return sum + (extra?.price || 0)
    }, 0)
    total += extrasTotal

    // Sıklığa göre indirim
    switch (frequency) {
      case "weekly":
        total = total * 0.85 // %15 indirim
        break
      case "monthly":
        total = total * 0.75 // %25 indirim
        break
    }

    // Promosyon kodu indirimi
    if (isPromoValid && appliedPromoCode) {
      const discount = promoCodes[appliedPromoCode]
      if (appliedPromoCode === "TEMIZ50") {
        total -= 50
      } else if (discount) {
        total = total * (1 - discount / 100)
      }
    }
    
    return Math.round(total)
  }

  // Checkbox için tip tanımı
  const handleCheckboxChange = (checked: boolean, serviceId: string) => {
    if (checked) {
      setSelectedExtras([...selectedExtras, serviceId])
    } else {
      setSelectedExtras(selectedExtras.filter(id => id !== serviceId))
    }
  }

  const applyPromoCode = () => {
    validatePromoCode(promoCode);
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Fiyat Kartları */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {hourlyPrices.map((item) => (
          <div
            key={item.hours}
            onClick={() => {
              setHours(item.hours)
              setIsDetailsOpen(true)
            }}
            className={`
              p-3 cursor-pointer rounded-lg transition-all duration-300 text-center
              ${hours === item.hours 
                ? 'bg-primary text-white shadow-lg scale-[1.02]' 
                : 'bg-white hover:border-primary border-2 border-gray-200'
              }
            `}
          >
            <div className="text-base font-bold mb-1">{item.hours} SAAT</div>
            <div className={`text-xl font-bold mb-1 ${hours === item.hours ? 'text-white' : 'text-primary'}`}>
              ₺{item.price}
            </div>
            {item.note && (
              <div className={`text-xs ${hours === item.hours ? 'text-white/90' : 'text-emerald-600'}`}>
                {item.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detaylar - Açılır/Kapanır Panel */}
      <div className="mt-8">
        <div className="border-t border-gray-200">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="w-full py-4 px-6 flex items-center justify-between 
              bg-gradient-to-r from-blue-500 to-blue-600 text-white
              hover:from-blue-600 hover:to-blue-700 
              transition-all duration-300 shadow-md hover:shadow-lg
              group"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base">
                Detaylar ve Ek Hizmetler
              </span>
              <span className="text-sm text-blue-100">
                (Adres, İndirimler ve Ek Hizmetler)
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 group-hover:text-white transition-colors">
              <span className="text-sm">
                {isDetailsOpen ? 'Gizle' : 'Göster'}
              </span>
              {isDetailsOpen ? 
                <ChevronUp className="w-5 h-5 animate-bounce" /> : 
                <ChevronDown className="w-5 h-5 animate-bounce" />
              }
            </div>
          </button>

          {isDetailsOpen && (
            <div className="p-4 space-y-4 bg-gray-50 border-t border-blue-100">
              {/* Şehir ve İlçe Seçimi */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="animate-slide-in" style={{ animationDelay: '100ms' }}>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Şehir</label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="bg-white border-2 hover:border-primary transition-colors">
                      <SelectValue placeholder="Şehir seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="İstanbul">İstanbul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="animate-slide-in" style={{ animationDelay: '200ms' }}>
                  <label className="block text-sm font-medium mb-2 text-gray-600">İlçe</label>
                  <Select value={district} onValueChange={setDistrict}>
                    <SelectTrigger className="bg-white border-2 hover:border-primary transition-colors">
                      <SelectValue placeholder="İlçe seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ataşehir (Batı)">Ataşehir (Batı)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Sıklık Seçimi */}
              <div className="animate-slide-in" style={{ animationDelay: '400ms' }}>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  Hangi Sıklıkla Temizlensin:
                </label>
                <div className="flex gap-3">
                  {[
                    { id: "single", label: "TEK SEFERLİK", discount: null },
                    { id: "weekly", label: "HAFTALIK", discount: 15 },
                    { id: "monthly", label: "AYLIK", discount: 25 }
                  ].map((option) => (
                    <Button
                      key={option.id}
                      variant={frequency === option.id ? "default" : "outline"}
                      onClick={() => setFrequency(option.id as FrequencyType)}
                      className={`flex-1 h-14 relative overflow-hidden transition-all duration-300 ${
                        frequency === option.id ? "shadow-lg scale-105" : ""
                      }`}
                    >
                      <div>
                        <div>{option.label}</div>
                        {option.discount && (
                          <div className="text-xs opacity-75 mt-1">
                            %{option.discount} İndirim
                          </div>
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Ek Hizmetler - Açılır/Kapanır */}
              <div>
                <button
                  onClick={() => setIsExtraServicesOpen(!isExtraServicesOpen)}
                  className="w-full p-4 flex items-center justify-between bg-white rounded-lg shadow-sm"
                >
                  <span className="font-medium">Ek Hizmetler</span>
                  {isExtraServicesOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {isExtraServicesOpen && (
                  <div className="mt-2 space-y-2">
                    {extraServices.map((service) => (
                      <div key={service.id} 
                        className="flex items-center space-x-2 p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                        <Checkbox
                          id={service.id}
                          checked={selectedExtras.includes(service.id)}
                          onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, service.id)}
                          className="border-2"
                        />
                        <label htmlFor={service.id} className="flex justify-between w-full text-sm cursor-pointer">
                          <span className="font-medium text-gray-700">{service.name}</span>
                          <span className="text-primary font-medium">+{service.price} TL</span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Promosyon Kodu */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Promosyon Kodu
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    name="promo"
                    id="promo"
                    className="block w-full rounded-l-md border-2 border-gray-300 px-4 py-2 
                    focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-all 
                    placeholder:text-gray-400 hover:border-gray-400"
                    placeholder="Promosyon kodunuz varsa giriniz"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    onClick={applyPromoCode}
                    className="ml-[-2px] px-6 py-2 bg-blue-600 text-white font-medium 
                    rounded-r-md border-2 border-blue-600 hover:bg-blue-700 
                    hover:border-blue-700 transition-all focus:outline-none 
                    focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Uygula
                  </button>
                </div>
              </div>

              {/* Toplam Fiyat ve Devam Et */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-primary animate-pulse-slow">
                      {calculatePrice().toLocaleString("tr-TR")} TL
                    </span>
                    {isPromoValid && (
                      <span className="text-green-500 text-sm animate-slide-in">
                        İndirim Uygulandı!
                      </span>
                    )}
                  </div>
                  {frequency !== "single" && (
                    <p className="text-sm text-gray-500">
                      {frequency === "weekly" ? "Haftalık" : "Aylık"} temizlik ücreti
                    </p>
                  )}
                  {selectedExtras.length > 0 && (
                    <p className="text-sm text-gray-500">
                      {selectedExtras.length} adet ekstra hizmet dahil
                    </p>
                  )}
                </div>
                <Button size="default" className="animate-float">
                  DEVAM ET
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 