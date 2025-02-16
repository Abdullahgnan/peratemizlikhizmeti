"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock } from "lucide-react";
import { aboutJsonLd } from "./metadata";

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
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                İstanbul'un Merkezi<br/>
                <span className="text-primary">Mecidiyeköy'de</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                2019'dan beri Mecidiyeköy merkezli olarak İstanbul'un tüm ilçelerinde profesyonel temizlik hizmetleri sunuyoruz. 
                Ev temizliğinden ofis temizliğine, inşaat sonrası temizlikten boş ev temizliğine kadar geniş bir yelpazede hizmet veriyoruz.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="PeraHizmet Temizlik Ekibi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
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