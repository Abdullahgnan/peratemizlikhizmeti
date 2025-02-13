import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header role="banner" className="fixed w-full z-50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-95" />
      
      <div className="container mx-auto px-4 py-4 relative">
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
              width={45} 
              height={45}
              priority
              className="brightness-110 hover:brightness-125 transition-all"
            />
            <span className="text-2xl font-bold text-white">PeraHizmet</span>
          </Link>
          
          {/* Navigation */}
          <nav aria-label="Ana Menü" className="hidden md:flex items-center gap-8">
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
            
            {/* CTA Button */}
            <Button asChild className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 
              hover:to-blue-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl 
              transform hover:-translate-y-0.5 transition-all duration-300 font-semibold">
              <Link href="/iletisim">Teklif Al</Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
        from-transparent via-white/20 to-transparent" />
    </header>
  )
} 