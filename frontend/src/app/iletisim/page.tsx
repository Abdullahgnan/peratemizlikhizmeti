import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";

export default function Iletisim() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          
          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:05435819688" className="hover:text-primary">
                  0543 581 96 88
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@perahizmet.com" className="hover:text-primary">
                  info@perahizmet.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>İstanbul, Türkiye</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "İletişim - PeraHizmet Temizlik",
  description: "7/24 temizlik hizmeti için bize ulaşın. ☎ 0543 581 96 88 ✉ info@perahizmet.com 📍 İstanbul genelinde hizmet",
  keywords: [
    "temizlik şirketi iletişim",
    "istanbul temizlik firması",
    "ev temizliği iletişim",
    "ofis temizliği iletişim",
    "istanbul temizlik hizmetleri"
  ]
};