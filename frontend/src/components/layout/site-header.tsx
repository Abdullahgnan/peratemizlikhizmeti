import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export function SiteHeader() {
  return (
    <header role="banner" className="fixed w-full z-[100]">
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
          
          {/* Navigation ve Instagram */}
          <div className="flex items-center gap-6">
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

            {/* Instagram İkonu */}
            <a
              href="https://instagram.com/peratemizlikk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 bg-white text-black
                hover:scale-110 transition-all duration-300 p-1.5 rounded-full 
                hover:shadow-lg hover:shadow-white/30 cursor-pointer"
              aria-label="Instagram'da Bizi Takip Edin"
            >
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
        from-transparent via-white/20 to-transparent" />
    </header>
  )
} 