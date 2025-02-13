import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteHeader() {
  return (
    <header role="banner" className="fixed w-full z-50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-95" />
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300" 
            aria-label="Ana Sayfa"
          >
            <Image 
              src="/logo.svg" 
              alt="PeraHizmet Logo"
              width={40}
              height={40}
              priority
              className="brightness-110 hover:brightness-125 transition-all"
            />
            <span className="text-xl font-bold text-white">PeraHizmet</span>
          </Link>
          
          {/* Navigation ve Sosyal Medya */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <nav aria-label="Ana Menü" className="hidden md:flex items-center gap-6">
              {[
                { href: "/hizmetler/ev-temizligi", label: "Ev Temizliği" },
                { href: "/hizmetler/ofis-temizligi", label: "Ofis Temizliği" },
                { href: "/hizmetler/bos-ev-temizligi", label: "Boş Ev Temizliği" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/iletisim", label: "İletişim" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg
                    hover:bg-white/10 transition-all duration-300 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-400 
                    group-hover:w-4/5 transition-all duration-300 -translate-x-1/2" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 
              hover:to-emerald-700 text-white px-6 py-5 rounded-full shadow-lg hover:shadow-xl 
              transform hover:-translate-y-0.5 transition-all duration-300 font-semibold
              border border-emerald-400/20 hover:border-emerald-400/40">
              <Link href="/hizmetler/ev-temizligi">Teklif Al</Link>
            </Button>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-4 ml-5">
              <a
                href="https://instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 bg-gradient-to-br from-[#FF3880] to-[#C13584] text-white 
                  hover:scale-110 transition-all duration-300 p-2.5 rounded-full 
                  hover:shadow-lg hover:shadow-[#C13584]/30 cursor-pointer"
                aria-label="Instagram'da Bizi Takip Edin"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 bg-gradient-to-br from-[#1877F2] to-[#166BDA] text-white 
                  hover:scale-110 transition-all duration-300 p-2.5 rounded-full 
                  hover:shadow-lg hover:shadow-[#1877F2]/30 cursor-pointer"
                aria-label="Facebook'ta Bizi Takip Edin"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 bg-gradient-to-br from-[#1DA1F2] to-[#19A1F7] text-white 
                  hover:scale-110 transition-all duration-300 p-2.5 rounded-full 
                  hover:shadow-lg hover:shadow-[#1DA1F2]/30 cursor-pointer"
                aria-label="Twitter'da Bizi Takip Edin"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
        from-transparent via-white/20 to-transparent" />
    </header>
  )
} 