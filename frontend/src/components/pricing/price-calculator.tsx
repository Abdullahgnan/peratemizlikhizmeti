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
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Ana Fiyat Seçimi */}
      <div className="border-2 border-blue-200 rounded-lg p-4 bg-white shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          1. Kaç Saat Temizlik Hizmeti İstiyorsunuz?
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {hourlyPrices.map((item) => (
            <div
              key={item.hours}
              onClick={() => setHours(item.hours)}
              className={`
                p-3 cursor-pointer rounded-md transition-all duration-300
                border-2 ${hours === item.hours 
                  ? 'border-primary bg-primary/5 shadow-md scale-105' 
                  : 'border-gray-200 hover:border-primary/50'
                }
              `}
            >
              <div className="text-center">
                <div className="text-base font-bold mb-0.5">{item.hours} SAAT</div>
                <div className="text-xl font-bold text-primary">₺{item.price}</div>
                {item.note && (
                  <div className="text-xs text-emerald-600 mt-0.5">{item.note}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sıklık Seçimi */}
      <div className="border-2 border-blue-200 rounded-lg p-4 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          2. Temizlik Sıklığını Seçin
        </h3>
        
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { id: "single", label: "TEK SEFERLİK", discount: null },
            { id: "weekly", label: "HAFTALIK", discount: 15 },
            { id: "monthly", label: "AYLIK", discount: 25 }
          ].map((option) => (
            <div
              key={option.id}
              onClick={() => setFrequency(option.id as FrequencyType)}
              className={`
                p-3 cursor-pointer rounded-md text-center
                border-2 transition-all duration-300
                ${frequency === option.id 
                  ? 'border-primary bg-primary/5 shadow-md' 
                  : 'border-gray-200 hover:border-primary/50'
                }
              `}
            >
              <div className="font-bold text-base">{option.label}</div>
              {option.discount && (
                <div className="text-emerald-600 font-medium mt-0.5">
                  %{option.discount} İndirim
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Toplam Fiyat ve Devam Butonu */}
      <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-primary">
            {calculatePrice().toLocaleString("tr-TR")} TL
          </div>
          <div className="text-gray-600 mt-0.5">
            {frequency !== "single" && `${frequency === "weekly" ? "Haftalık" : "Aylık"} ücret`}
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8"
        >
          DEVAM ET
        </Button>
      </div>

      {/* Ek Hizmetler - Renkli ve Dikkat Çekici Buton */}
      <div>
        <button
          onClick={() => setIsExtraServicesOpen(!isExtraServicesOpen)}
          className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 
            hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
        >
          <div className="px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <span className="font-medium">Ek Hizmetleri Göster</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-90">Özel İndirimler</span>
              {isExtraServicesOpen ? 
                <ChevronUp className="w-5 h-5 transition-transform duration-300" /> : 
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              }
            </div>
          </div>
          {/* Animasyonlu arka plan efekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent 
            group-hover:translate-x-full transition-transform duration-500" />
        </button>
        
        {isExtraServicesOpen && (
          <div className="mt-3 space-y-2 animate-slideDown">
            {extraServices.map((service) => (
              <div key={service.id} 
                className="flex items-center space-x-2 p-3 bg-white/80 backdrop-blur-sm 
                  rounded-lg border border-blue-100 hover:border-blue-300 
                  hover:bg-blue-50/50 transition-all duration-200"
              >
                <Checkbox
                  id={service.id}
                  checked={selectedExtras.includes(service.id)}
                  onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, service.id)}
                  className="border-2 border-blue-200"
                />
                <label htmlFor={service.id} 
                  className="flex justify-between w-full text-sm cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">{service.name}</span>
                  </div>
                  <span className="text-blue-600 font-medium">+{service.price} TL</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Promosyon Kodu */}
      <div className="mt-3">
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
    </div>
  )
}

// CSS animasyonu için globals.css'e ekleyin
/*
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
*/ 