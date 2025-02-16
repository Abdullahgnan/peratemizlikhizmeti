"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { aboutJsonLd } from "./metadata";
import { useState } from "react"

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

// Referanslar verisi
const references = [
  {
    company: "Şişli İş Merkezi",
    sector: "İş Merkezi",
    location: "Şişli"
  },
  {
    company: "Mecidiyeköy Plaza",
    sector: "Plaza",
    location: "Mecidiyeköy"
  },
  {
    company: "Levent Ofis Park",
    sector: "İş Merkezi",
    location: "Levent"
  },
  {
    company: "Elit Residence",
    sector: "Residence",
    location: "Beşiktaş"
  },
  {
    company: "Kağıthane AVM",
    sector: "AVM",
    location: "Kağıthane"
  },
  {
    company: "Maslak 1453 Ofisleri",
    sector: "İş Merkezi",
    location: "Maslak"
  },
  {
    company: "Avrupa Residence",
    sector: "Residence",
    location: "Gaziosmanpaşa"
  },
  {
    company: "Beyoğlu İş Hanı",
    sector: "İş Merkezi",
    location: "Beyoğlu"
  },
  {
    company: "Şişli Medical Park",
    sector: "Hastane",
    location: "Şişli"
  },
  {
    company: "Nişantaşı Polikliniği",
    sector: "Sağlık",
    location: "Nişantaşı"
  },
  {
    company: "Pangaltı İş Merkezi",
    sector: "İş Merkezi",
    location: "Pangaltı"
  },
  {
    company: "Fulya Terrace",
    sector: "Residence",
    location: "Fulya"
  }
];

// Sektör etiketlerini de güncelle
const sectors = [
  "İş Merkezi", "Plaza", "Residence", "AVM", 
  "Hastane", "Sağlık", "Ofis", "Site"
];

export default function Hakkimizda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  İstanbul'un Merkezi<br/>
                  <span className="text-primary">Mecidiyeköy'de</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  2019'dan beri Mecidiyeköy merkezli olarak İstanbul'un her noktasına profesyonel temizlik hizmetleri sunuyoruz.
                </p>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  PeraHizmet olarak, modern şehir hayatının temizlik ihtiyaçlarına profesyonel çözümler sunmak için yola çıktık. 
                  Merkezi konumumuz ve deneyimli ekibimizle, İstanbul'un her iki yakasında binlerce müşterimize kesintisiz hizmet veriyoruz.
                </p>
                
                <p className="leading-relaxed">
                  Ev temizliğinden ofis temizliğine, inşaat sonrası temizlikten düzenli apartman temizliğine kadar geniş bir yelpazede 
                  hizmet sunarken, her projede aynı titizlik ve profesyonellikle çalışıyoruz. Kullandığımız son teknoloji ekipmanlar ve 
                  çevre dostu temizlik ürünleriyle, hem etkili hem de sürdürülebilir temizlik çözümleri sağlıyoruz.
                </p>

                <p className="leading-relaxed">
                  Sigortalı ve eğitimli personelimiz, düzenli olarak aldıkları mesleki eğitimlerle kendilerini sürekli geliştiriyor. 
                  Her müşterimizin özel ihtiyaçlarını dinliyor, kişiye özel temizlik planları oluşturuyor ve %100 müşteri memnuniyeti 
                  hedefiyle çalışıyoruz.
                </p>
              </div>

              {/* Öne Çıkan Özellikler */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "✓ 7/24 Müşteri Desteği",
                  "✓ Garantili Hizmet",
                  "✓ Sigortalı Personel",
                  "✓ Yerinde Keşif",
                  "✓ Esnek Ödeme",
                  "✓ Online Randevu"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="PeraHizmet Profesyonel Temizlik Ekibi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Alt bilgi */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-medium">
                  Merkez Ofisimiz
                </p>
                <p className="text-sm opacity-90">
                  Mecidiyeköy, Şişli / İstanbul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Neden PeraHizmet?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Merkezi Konum",
                description: "Mecidiyeköy'den tüm İstanbul'a hızlı ulaşım",
                icon: Shield,
                color: "text-blue-600"
              },
              {
                title: "5 Yıllık Deneyim",
                description: "Binlerce başarılı temizlik projesi",
                icon: Award,
                color: "text-emerald-600"
              },
              {
                title: "Profesyonel Ekip",
                description: "Deneyimli ve sigortalı personel",
                icon: Users,
                color: "text-indigo-600"
              },
              {
                title: "Hızlı Hizmet",
                description: "Aynı gün hizmet imkanı",
                icon: Clock,
                color: "text-cyan-600"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Yıllık Deneyim" },
              { value: "3000+", label: "Tamamlanan İş" },
              { value: "25+", label: "Uzman Personel" },
              { value: "4.8/5", label: "Müşteri Memnuniyeti" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmet Bölgelerimiz */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Hizmet Bölgelerimiz</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Mecidiyeköy'deki merkez ofisimizden İstanbul'un tüm ilçelerine hizmet veriyoruz. 
            Avrupa ve Anadolu yakasında, özellikle Şişli, Beşiktaş, Kağıthane, Beyoğlu, Sarıyer, 
            Kadıköy ve Üsküdar bölgelerinde yoğun olarak çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Referanslar Bölümü */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Referanslarımız</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            İstanbul'un önde gelen kurumlarına düzenli temizlik hizmeti veriyoruz
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg hover:shadow-md transition-all duration-300
                  border border-gray-100 hover:border-primary/20"
              >
                <h3 className="font-medium text-gray-900 text-sm mb-1">{ref.company}</h3>
                <div className="flex flex-col text-xs text-gray-500">
                  <span>{ref.sector}</span>
                  <span className="text-primary/70">{ref.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sektör Bazlı Dağılım */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {sectors.map((sector, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white rounded-full text-sm text-gray-600
                  border border-gray-200 hover:border-primary/30 transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Profesyonel Temizlik Hizmeti Alın
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Mecidiyeköy'deki ofisimize gelebilir veya online teklif alabilirsiniz
          </p>
          <Link href="/iletisim">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Teklif Alın
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
} 