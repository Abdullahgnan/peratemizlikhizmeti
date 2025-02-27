import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Shield, Clock, UserCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      </Head>
      <main role="main" aria-label="Ana Sayfa">
        <div className="min-h-screen relative overflow-hidden">
          {/* Arka plan resmi - tüm sayfa için */}
          <div className="fixed inset-0 z-0">
            <Image
              src="/images/hero-bg.png"
              alt="PeraHizmet - İstanbul'un Önde Gelen Profesyonel Temizlik Şirketi"
              fill
              className="object-cover opacity-75"
              priority
              sizes="100vw"
            />
            {/* Gradient overlay'i daha hafif yaptık */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white/60 backdrop-blur-[0.5px]"></div>
          </div>

          {/* Tüm içeriği z-index ile öne çıkaralım */}
          <div className="relative z-10">
            {/* Hero Section */}
            <section aria-label="Hero Bölümü" className="pt-32 pb-16 relative">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Sol Taraf - Metin İçeriği */}
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                      Profesyonel Temizlik Hizmetleri
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      İstanbul'un her noktasında, uzman kadromuz ve modern ekipmanlarımızla kurumsal temizlik çözümleri sunuyoruz.
                    </p>
                    <div className="flex gap-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="/iletisim">Teklif Alın</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href="/hizmetler/ev-temizligi">Hizmetlerimiz</Link>
                      </Button>
                    </div>
                    {/* Güven Göstergeleri */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">%100</div>
                          <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <UserCheck className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">5+ Yıl</div>
                          <div className="text-sm text-gray-600">Sektör Deneyimi</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                          <Star className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">1000+</div>
                          <div className="text-sm text-gray-600">Mutlu Müşteri</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sağ Taraf - Görsel */}
                  <div className="relative hidden md:block">
                    <Image
                      src="/images/hero-bg-2.png" // Profesyonel temizlik görseli ekleyin
                      alt="Profesyonel Temizlik Hizmetleri"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-2xl"
                      priority
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Tüm İstanbul'da</div>
                          <div className="text-xs text-gray-600">Hizmetinizdeyiz</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hizmet Kapsamı ve Fiyatlar */}
            <section aria-label="Özelliklerimiz" className="py-16 bg-white/50 backdrop-blur-sm">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Sol Taraf - Hizmet Kapsamı */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8">
                      Sizin İçin Neler Yapıyoruz? 🧹
                    </h2>
                    <div className="bg-white/80 p-6 rounded-xl shadow-lg">
                      <div className="space-y-6">
                        {/* Genel Temizlik */}
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                            <span>🧹 Genel Temizlik</span>
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Tüm odaların genel temizliği
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Toz alma ve süpürme
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Paspas ve zemin temizliği
                            </li>
                          </ul>
                        </div>

                        {/* Detaylı Temizlik */}
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                            <span>🚿 Detaylı Temizlik</span>
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Banyo ve mutfak temizliği
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Pencere ve cam temizliği
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Mobilya ve eşya temizliği
                            </li>
                          </ul>
                        </div>

                        {/* Özel Hizmetler */}
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                            <span>✨ Özel Hizmetler</span>
                          </h3>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Koltuk yıkama
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Halı yıkama
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              Dezenfeksiyon işlemleri
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sağ Taraf */}
                  <div>
                    <h2 className="text-3xl font-bold mb-8">
                      Bizi Daha Yakından Tanıyın 🤝
                    </h2>
                    <div className="bg-white/80 p-6 rounded-xl shadow-lg space-y-6">
                      {/* Güvenilir Hizmet */}
                      <div className="flex items-start gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">Güvenilir Hizmet</h3>
                          <p className="text-gray-600">Tüm personelimiz güvenlik araştırmasından geçmiş, deneyimli profesyonellerdir.</p>
                        </div>
                      </div>

                      {/* Uygun Fiyat */}
                      <div className="flex items-start gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-2xl">💰</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">Uygun Fiyatlar</h3>
                          <p className="text-gray-600">Kaliteli hizmeti, bütçe dostu fiyatlarla sunuyoruz.</p>
                        </div>
                      </div>

                      {/* Tecrübeli Ekip */}
                      <div className="flex items-start gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-2xl">👥</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">Tecrübeli Ekip</h3>
                          <p className="text-gray-600">Yıllardır bu işi severek yapan uzman ekibimizle hizmetinizdeyiz.</p>
                        </div>
                      </div>

                      {/* Müşteri Memnuniyeti */}
                      <div className="flex items-start gap-4 p-4 hover:bg-blue-50/50 rounded-lg transition-all">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-2xl">⭐</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">Müşteri Memnuniyeti</h3>
                          <p className="text-gray-600">Mutlu müşterilerimizin tavsiyeleriyle büyüyen bir aileyiz.</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link href="/iletisim">
                          <Button className="w-full" size="lg">
                            Hemen Rezervasyon Yap
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hizmetlerimiz başlığı */}
            <h2 className="text-4xl font-black text-center mb-4">
              Size Nasıl Yardımcı Olabiliriz?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 font-medium">
              Her İhtiyaca Uygun Çözümlerimiz Var!
            </p>

            {/* Hizmetlerimiz */}
            <section aria-label="Hizmetlerimiz" className="py-20 bg-transparent">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <Link href="/hizmetler/ev-temizligi" className="group">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1">
                      <div className="text-4xl mb-4">🏠</div>
                      <h3 className="text-xl font-semibold mb-2">Ev Temizliği</h3>
                      <p className="text-gray-600">Detaylı ev temizliği hizmetleri</p>
                    </div>
                  </Link>
                  <Link href="/hizmetler/ofis-temizligi" className="group">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="text-xl font-semibold mb-2">Ofis Temizliği</h3>
                      <p className="text-gray-600">Profesyonel ofis temizlik çözümleri</p>
                    </div>
                  </Link>
                  <Link href="/hizmetler/bos-ev-temizligi" className="group">
                    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 
                      hover:shadow-xl hover:-translate-y-1">
                      <div className="text-4xl mb-4">🏗️</div>
                      <h3 className="text-xl font-semibold mb-2">İnşaat Sonrası</h3>
                      <p className="text-gray-600">İnşaat ve tadilat sonrası temizlik</p>
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            {/* Neden Biz başlığı */}
            <h2 className="text-4xl font-black text-center mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 font-medium">
              Çünkü İşimizi Seviyoruz ve İyi Yapıyoruz! 💪
            </p>

            {/* Neden Biz */}
            <section aria-label="Hizmet Bölgeleri" className="py-16 bg-white/50 backdrop-blur-sm">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* Deneyimli Ekip */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl 
                      flex items-center justify-center mb-4 transform transition-all duration-300 
                      group-hover:scale-105 group-hover:rotate-2 shadow-md">
                      <Star className="w-6 h-6 text-primary transform transition-all duration-300 
                        group-hover:text-primary-dark" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Deneyimli Ekip</h3>
                    <p className="text-gray-600">Profesyonel ve güvenilir temizlik personeli</p>
                  </div>

                  {/* Garantili Hizmet */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl 
                      flex items-center justify-center mb-4 transform transition-all duration-300 
                      group-hover:scale-105 group-hover:rotate-2 shadow-md">
                      <Shield className="w-6 h-6 text-blue-500 transform transition-all duration-300 
                        group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Garantili Hizmet</h3>
                    <p className="text-gray-600">%100 müşteri memnuniyeti garantisi</p>
                  </div>

                  {/* Hızlı Hizmet */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl 
                      flex items-center justify-center mb-4 transform transition-all duration-300 
                      group-hover:scale-105 group-hover:rotate-2 shadow-md">
                      <Clock className="w-6 h-6 text-cyan-500 transform transition-all duration-300 
                        group-hover:text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Hızlı Hizmet</h3>
                    <p className="text-gray-600">İstanbul'un her noktasına hızlı ulaşım</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section aria-label="İletişim" className="py-20 bg-gradient-to-br from-primary/90 to-primary-dark/90 backdrop-blur-sm">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Profesyonel Temizlik Hizmeti</h2>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                  İstanbul'un her bölgesinde kaliteli ve güvenilir temizlik hizmeti için bize ulaşın.
                </p>
                <Link href="/iletisim">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    İletişime Geçin
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export const metadata = {
  title: "PeraHizmet - İstanbul Profesyonel Temizlik Şirketi",
  description: "İstanbul'un güvenilir temizlik şirketi ✓ Ev Temizliği ✓ Ofis Temizliği ✓ İnşaat Sonrası Temizlik. 7/24 Hizmet!",
  keywords: [
    "istanbul temizlik şirketi",
    "ev temizliği",
    "ofis temizliği",
    "profesyonel temizlik"
  ],
  openGraph: {
    title: "PeraHizmet - Profesyonel Temizlik Hizmetleri",
    description: "İstanbul'un önde gelen temizlik şirketi",
    images: ['/images/og/home.jpg'],
    type: 'website',
    locale: 'tr_TR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeraHizmet Temizlik',
    description: 'Profesyonel Temizlik Hizmetleri',
    images: ['/images/twitter/home.jpg']
  },
  alternates: {
    canonical: 'https://perahizmet.com'
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Anasayfa",
      "item": "https://perahizmet.com"
    }
  ]
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PeraHizmet",
  "url": "https://perahizmet.com",
  "logo": "https://perahizmet.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/peratemizlikk",
    "https://www.facebook.com/perahizmet"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+905435819688",
    "contactType": "customer service",
    "areaServed": "İstanbul",
    "availableLanguage": "Turkish"
  }
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "PeraHizmet"
  },
  "ratingValue": "4.9",
  "reviewCount": "284"
};
