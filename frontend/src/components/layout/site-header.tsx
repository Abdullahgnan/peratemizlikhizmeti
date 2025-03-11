"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header role="banner" className="fixed w-full z-[100]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-95" />
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300" 
            aria-label="Ana Sayfa"
          >
            <Image 
              src="/logo3.png" 
              alt="PeraHizmet Logo"
              width={36}
              height={36}
              priority
              className="w-8 h-8 md:w-10 md:h-10 brightness-110 hover:brightness-125 transition-all"
            />
            <span className="text-lg md:text-xl font-bold text-white">PeraHizmet</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
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
                className="text-white/90 hover:text-white font-medium px-3 py-2 rounded-lg
                  hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://instagram.com/peratemizlikk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-1.5 rounded-full hover:scale-110 transition-all"
            >
              <Instagram className="w-3 h-3" />
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden fixed inset-0 bg-blue-900/95 z-50 transition-all duration-300
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <nav className="flex flex-col items-center justify-center h-full gap-6">
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
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg font-medium px-4 py-2"
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://instagram.com/peratemizlikk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-white text-black p-2 rounded-full"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
        from-transparent via-white/20 to-transparent" />
    </header>
  )
} 