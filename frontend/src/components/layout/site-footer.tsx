import * as React from "react"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-gray-900/95 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Şirket Bilgileri */}
          <section aria-label="Şirket Bilgileri">
            <h2 className="text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              PeraHizmet
            </h2>
            <p className="text-gray-400 text-xs">
              Profesyonel temizlik hizmetlerinde güvenilir çözüm ortağınız.
            </p>
          </section>

          {/* Hızlı Erişim */}
          <section aria-label="Hızlı Erişim">
            <h2 className="text-base font-semibold mb-2 text-blue-400">Hızlı Erişim</h2>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/hizmetler/ev-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Ev Temizliği
                  </Link>
                </li>
                <li><Link href="/hizmetler/ofis-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors">Ofis Temizliği</Link></li>
                <li><Link href="/hizmetler/bos-ev-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors">Boş Ev Temizliği</Link></li>
                <li><Link href="/hakkimizda" className="text-gray-400 hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
                <li><Link href="/iletisim" className="text-gray-400 hover:text-blue-400 transition-colors">İletişim</Link></li>
              </ul>
            </nav>
          </section>

          {/* İletişim */}
          <section aria-label="İletişim Bilgileri">
            <h2 className="text-base font-semibold mb-2 text-blue-400">İletişim</h2>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li className="flex items-center gap-1.5">
                <span>📞</span>
                <a href="tel:05435819688" className="hover:text-blue-400 transition-colors">
                  0543 581 96 88
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <span>📧</span>
                <a href="mailto:info@perahizmet.com" className="hover:text-blue-400 transition-colors">
                  info@perahizmet.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <span>📍</span>
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </section>

          {/* Sosyal Medya */}
          <section aria-label="Sosyal Medya">
            <h2 className="text-base font-semibold mb-2 text-blue-400">Sosyal Medya</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </section>
        </div>

        {/* Telif Hakkı */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-500">&copy; 2025 PeraHizmet. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
} 