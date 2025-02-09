import * as React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header role="banner" className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Ana Sayfa">
          <Image 
            src="/logo.svg" 
            alt="PeraHizmet - Profesyonel Temizlik Hizmetleri Logo"
            width={40} 
            height={40}
            priority
            className="animate-fade-in"
          />
          <span className="text-2xl font-bold text-primary">PeraHizmet</span>
        </Link>
        
        <nav aria-label="Ana Menü" className="hidden md:flex items-center gap-6">
          <Link href="/hizmetler/ev-temizligi" className="hover:text-primary transition-colors">
            <span>Ev Temizliği</span>
          </Link>
          <Link href="/hizmetler/ofis-temizligi" className="hover:text-primary transition-colors">
            <span>Ofis Temizliği</span>
          </Link>
          <Link href="/hizmetler/bos-ev-temizligi" className="hover:text-primary transition-colors">
            <span>Boş Ev Temizliği</span>
          </Link>
          <Link href="/hakkimizda" className="hover:text-primary transition-colors">
            <span>Hakkımızda</span>
          </Link>
          <Link href="/iletisim" className="hover:text-primary transition-colors">
            <span>İletişim</span>
          </Link>
          <Button asChild>
            <Link href="/iletisim">Teklif Al</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 