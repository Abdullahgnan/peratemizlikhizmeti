import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white min-h-[200px] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo ve Açıklama */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              PeraHizmet
            </h2>
            <p className="text-gray-400 text-xs">
              İstanbul'un güvenilir temizlik hizmeti. Profesyonel ekip ve modern ekipmanlarla hizmetinizdeyiz.
            </p>
          </div>

          {/* Hizmetlerimiz */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-blue-400">Hizmetlerimiz</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/hizmetler/ev-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Ev Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ofis-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Ofis Temizliği
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bos-ev-temizligi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Boş Ev Temizliği
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-blue-400">İletişim</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">
                📞 0543 581 96 88
              </li>
              <li className="text-gray-400 text-sm">
                📧 info@perahizmet.com
              </li>
              <li className="text-gray-400 text-sm">
                📍 İstanbul, Türkiye
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-blue-400">Sosyal Medya</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#FF3880] to-[#C13584] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#C13584]/30 transition-all">
                  <Instagram className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
              
              <a
                href="https://facebook.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#1877F2] to-[#166BDA] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#1877F2]/30 transition-all">
                  <Facebook className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
              
              <a
                href="https://twitter.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#1DA1F2] to-[#19A1F7] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#1DA1F2]/30 transition-all">
                  <Twitter className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Footer - Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="text-xs text-gray-500 text-center">
            © 2024 PeraHizmet. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  )
} 