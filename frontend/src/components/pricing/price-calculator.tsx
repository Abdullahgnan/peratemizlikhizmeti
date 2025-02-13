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
import { Check } from "lucide-react"

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
  { hours: "5", price: "1850", note: "" },
  { hours: "6", price: "2100", note: "1+1 Evler için önerilir" },
  { hours: "7", price: "2350", note: "2+1 Evler için önerilir" },
  { hours: "8", price: "2600", note: "3+1 Evler için önerilir" },
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

  return (
    <Card className="p-8 shadow-blue hover-shadow-blue transition-all duration-300 
      border-4 border-primary/80 rounded-xl w-[70%] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-primary animate-slide-in">
        Fiyat Hesapla
      </h2>
      
      <div className="space-y-4">
        {/* Şehir Seçimi */}
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

        {/* İlçe Seçimi */}
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

        {/* Süre Seçimi */}
        <div className="animate-slide-in" style={{ animationDelay: '300ms' }}>
          <label className="block text-sm font-medium mb-3 text-gray-600">Süre Belirle:</label>
          <div className="grid grid-cols-6 gap-1">
            {hourlyPrices.map((item) => (
              <div
                key={item.hours}
                onClick={() => setHours(item.hours)}
                className="relative cursor-pointer"
              >
                <div className={`
                  p-1.5 text-center rounded-lg transition-all duration-300
                  ${hours === item.hours 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-white hover:border-primary border border-gray-200'
                  }
                `}>
                  <div className="text-sm font-semibold">{item.hours} SAAT</div>
                  <div className={`text-xs mt-1 ${hours === item.hours ? 'text-white' : 'text-gray-500'}`}>
                    ₺{item.price}
                  </div>
                  {item.note && hours === item.hours && (
                    <div className="text-[9px] text-emerald-400 font-bold mt-1">
                      {item.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-500 mt-8 animate-pulse-slow">
            * Bu hizmet boş ev veya ofis temizliğini kapsamaz.
          </p>
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

        {/* Ekstra Hizmetler */}
        <div className="animate-slide-in" style={{ animationDelay: '500ms' }}>
          <label className="block text-sm font-medium mb-3 text-gray-600">
            Ekstra Hizmetler
          </label>
          <div className="space-y-2">
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
        </div>

        {/* Promosyon Kodu */}
        <div className="animate-slide-in" style={{ animationDelay: '600ms' }}>
          <label className="block text-sm font-medium mb-2 text-gray-600">
            Promosyon Kodu
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value.toUpperCase());
                setIsPromoValid(false);
              }}
              placeholder="Promosyon kodunuz"
              className="flex-1 px-3 py-2 border-2 rounded-lg focus:border-primary outline-none transition-colors"
            />
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                validatePromoCode(promoCode);
              }}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2"
            >
              UYGULA
            </Button>
          </div>
          {isPromoValid && (
            <div className="text-green-500 flex items-center animate-slide-in mt-2">
              <Check className="w-5 h-5 mr-1" /> Promosyon Kodunuz Onaylandı.
            </div>
          )}
          {!isPromoValid && promoCode && (
            <div className="text-red-500 flex items-center animate-slide-in mt-2 text-sm">
              Yeni promosyon kodu uygulamak için UYGULA'ya basın.
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">
            Örnek kodlar: YENI2024 (%10), BAHAR (%15), TEMIZ50 (50 TL)
          </p>
        </div>

        {/* Fiyat ve Devam Et */}
        <div className="flex items-center justify-between pt-4 border-t mt-4">
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
    </Card>
  )
} 