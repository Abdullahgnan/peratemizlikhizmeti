import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

// Sertifikalar verisi
const certificates = [
  {
    title: "ISO 9001:2015",
    description: "Kalite Yönetim Sistemi Sertifikası",
    image: "/images/certificates/iso-9001.jpg"
  },
  {
    title: "ISO 14001:2015",
    description: "Çevre Yönetim Sistemi Sertifikası",
    image: "/images/certificates/iso-14001.jpg"
  },
  {
    title: "OHSAS 18001",
    description: "İş Sağlığı ve Güvenliği Yönetim Sistemi",
    image: "/images/certificates/ohsas-18001.jpg"
  }
];

export default function Hakkimizda() {
  return (
    <main role="main" aria-label="Hakkımızda Sayfası">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Hero Section */}
      <section aria-label="Hero Bölümü" className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sol taraf - Metin */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                PeraHizmet Hakkında
              </h1>
              <p className="text-lg text-gray-700">
                2020'den beri İstanbul'da profesyonel temizlik hizmetleri sunuyoruz.
              </p>
            </div>
            
            {/* Sağ taraf - Ekip Görseli */}
            <div className="relative">
              <Image
                src="/images/about/team.jpg"
                alt="PeraHizmet Profesyonel Temizlik Ekibi - İstanbul'un Güvenilir Temizlik Şirketi"
                width={600}
                height={400}
                priority // Hero görsel olduğu için
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Misyonumuz</h2>
              <p className="text-gray-600">
                Yaşam ve çalışma alanlarınızı en üst düzeyde hijyenik standartlara 
                ulaştırırken, çevre dostu ürünler ve sürdürülebilir temizlik 
                yöntemleriyle geleceğe yatırım yapıyoruz.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Vizyonumuz</h2>
              <p className="text-gray-600">
                Türkiye'nin en güvenilir ve tercih edilen temizlik şirketi olarak, 
                sektörde standartları belirleyen, yenilikçi ve örnek alınan bir 
                kuruluş olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Değerlerimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Kalite</h3>
              <p className="text-gray-600">
                Her işimizde en yüksek kalite standartlarını hedefliyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Güven</h3>
              <p className="text-gray-600">
                Güvenlik kontrolünden geçmiş, sigortalı profesyonel kadro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Çevre dostu ürünler ve sürdürülebilir temizlik yöntemleri.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">İnovasyon</h3>
              <p className="text-gray-600">
                Modern ekipman ve yenilikçi temizlik çözümleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlarla Biz */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Rakamlarla PeraHizmet</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <p className="text-gray-600">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Uzman Personel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">%100</div>
              <p className="text-gray-600">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section aria-label="Sertifikalarımız" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">
            Sertifikalarımız ve Belgelerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={cert.image}
                  alt={`${cert.title} - PeraHizmet Sertifika`}
                  width={200}
                  height={150}
                  loading="lazy"
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
                <p className="text-gray-600 text-center text-sm mt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Profesyonel Temizlik Hizmetleri İçin</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Hemen bizimle iletişime geçin, uzman ekibimiz yanınızda!
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white hover:bg-blue-50 border-2 border-blue-400">
            <Link href="/iletisim">Teklif Alın</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Hakkımızda - PeraHizmet Temizlik Şirketi",
  description: "2020'den beri İstanbul'da profesyonel temizlik hizmetleri sunuyoruz. Deneyimli ekip, modern ekipman ve müşteri memnuniyeti odaklı hizmet.",
  keywords: [
    "pera hizmet",
    "temizlik şirketi",
    "istanbul temizlik firması",
    "profesyonel temizlik",
    "kurumsal temizlik"
  ]
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PeraHizmet",
  "url": "https://perahizmet.com",
  "logo": "https://perahizmet.com/logo.png",
  "description": "2020'den beri İstanbul'da profesyonel temizlik hizmetleri sunuyoruz.",
  "foundingDate": "2020",
  "founders": [{
    "@type": "Person",
    "name": "PeraHizmet Kurucusu"
  }],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905435819688",
    "contactType": "customer service",
    "areaServed": "İstanbul",
    "availableLanguage": "Turkish"
  }
} 