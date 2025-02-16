import Link from "next/link"
import { Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white min-h-[200px] py-8 relative">
      {/* Hafif overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo ve Açıklama */}
          <div className="space-y-2">
            <h2 className="
              text-lg            // Mobil: Küçük başlık
              font-bold 
              mb-4
              
              sm:text-xl         // Tablet: Orta başlık
              sm:mb-6
              
              lg:text-2xl        // Desktop: Büyük başlık
              lg:mb-8
            ">
              PeraHizmet
            </h2>
            <p className="text-white/80 text-xs">
              İstanbul'un güvenilir temizlik hizmeti. Profesyonel ekip ve modern ekipmanlarla hizmetinizdeyiz.
            </p>
          </div>

          {/* Hizmetlerimiz */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-white">Hizmetlerimiz</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/hizmetler/ev-temizligi" className="text-white/80 hover:text-white transition-colors text-sm">
                  Ev Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ofis-temizligi" className="text-white/80 hover:text-white transition-colors text-sm">
                  Ofis Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bos-ev-temizligi" className="text-white/80 hover:text-white transition-colors text-sm">
                  Boş Ev Temizliği
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-white">İletişim</h3>
            <ul className="space-y-1">
              <li className="text-white/80 text-sm">
                📞 0543 581 96 88
              </li>
              <li className="text-white/80 text-sm">
                📧 info@perahizmet.com
              </li>
              <li className="text-white/80 text-sm">
                📍 İstanbul, Türkiye
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-white">Sosyal Medya</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="bg-white text-black p-1.5 rounded-full 
                  hover:scale-110 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/30">
                  <Instagram className="w-3 h-3" />
                </span>
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  @peratemizlikk
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Footer - Copyright */}
        <div className="border-t border-white/20 mt-6 pt-4">
          <div className="text-xs text-white/60 text-center">
            © 2024 PeraHizmet. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  )
} 