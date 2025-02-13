import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      {/* ... diğer footer içeriği ... */}
      
      {/* Sosyal Medya Bölümü */}
      <div className="border-t border-white/10 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-white/60">
              © 2024 PeraHizmet. Tüm hakları saklıdır.
            </div>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#FF3880] to-[#C13584] text-white 
                  hover:scale-110 transition-all duration-300 p-3 rounded-full 
                  hover:shadow-lg hover:shadow-[#C13584]/30"
                aria-label="Instagram'da Bizi Takip Edin"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#1877F2] to-[#166BDA] text-white 
                  hover:scale-110 transition-all duration-300 p-3 rounded-full 
                  hover:shadow-lg hover:shadow-[#1877F2]/30"
                aria-label="Facebook'ta Bizi Takip Edin"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/peratemizlikk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#1DA1F2] to-[#19A1F7] text-white 
                  hover:scale-110 transition-all duration-300 p-3 rounded-full 
                  hover:shadow-lg hover:shadow-[#1DA1F2]/30"
                aria-label="Twitter'da Bizi Takip Edin"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 