import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white min-h-[320px] py-16">
      <div className="container mx-auto px-4">
        {/* Ana Footer İçeriği */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sosyal Medya Kolonu */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Sosyal Medya</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#FF3880] to-[#C13584] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#C13584]/30 transition-all">
                  <Instagram className="w-5 h-5" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
              
              <a
                href="https://facebook.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#1877F2] to-[#166BDA] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#1877F2]/30 transition-all">
                  <Facebook className="w-5 h-5" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
              
              <a
                href="https://twitter.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="bg-gradient-to-br from-[#1DA1F2] to-[#19A1F7] p-2 rounded-full 
                  group-hover:shadow-lg group-hover:shadow-[#1DA1F2]/30 transition-all">
                  <Twitter className="w-5 h-5" />
                </span>
                <span className="text-sm">@peratemizlikk</span>
              </a>
            </div>
          </div>

          {/* Diğer footer kolonları buraya eklenebilir */}
        </div>

        {/* Alt Footer - Copyright */}
        <div className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="text-sm text-white/60 text-center">
              © 2024 PeraHizmet. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 