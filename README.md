# Şanmad Hastanesi Web Sitesi

Modern ve duyarlı (responsive) bir hastane web sitesi. Next.js ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- **Modern Arayüz Tasarımı**: Sağlık hizmetleri için temiz ve profesyonel bir arayüz
- **Tamamen Duyarlı**: Mobilden masaüstüne tüm cihazlarda optimize edilmiş görünüm
- **Bileşen Tabanlı Mimari**: Bakımı kolay, tekrar kullanılabilir React bileşenleriyle inşa edildi
- **Etkileşimli Öğeler**: Kullanıcı dostu formlar, kartlar ve gezinme menüleri
- **Optimize Performans**: Next.js ile hızlı yükleme ve render

## Sayfalar ve Bölümler

- **Navigasyon**: Mobil uyumlu, duyarlı üst menü
- **Hero Bölümü**: Etkileyici giriş ve harekete geçirici butonlar
- **Hizmetler Tanıtımı**: Temel tıbbi branşlar ve hizmetler
- **Doktor Profilleri**: Öne çıkan doktorlar ve bilgileri
- **Hasta Yorumları**: Güven artırıcı hasta değerlendirmeleri
- **Randevu Alma**: Kullanıcı dostu randevu formu
- **Haberler ve Duyurular**: Hastaneye dair güncel haberler ve etkinlikler
- **Harekete Geçirici Alanlar**: Kullanıcı etkileşimini artıran bölümler
- **Alt Bilgi (Footer)**: Kapsamlı hastane bilgileri ve gezinme

## Teknoloji Yığını

- **Next.js**: Üretim için React framework’ü
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Tutarlı arayüz bileşenleri için component kütüphanesi
- **TypeScript**: Tip güvenliği ve gelişmiş geliştirme deneyimi
- **Bun**: JavaScript çalışma zamanı ve paket yöneticisi

## Başlarken

### Gereksinimler

- Bilgisayarınızda Node.js 18+ veya Bun kurulu olmalı

### Kurulum

1. Depoyu klonlayın
   ```bash
   git clone https://github.com/your-username/hospital-website.git
   cd hospital-website
   ```

2. Bağımlılıkları yükleyin
   ```bash
   bun install
   # veya npm install
   ```

3. Geliştirme sunucusunu başlatın
   ```bash
   bun run dev
   # veya npm run dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak siteyi görüntüleyin

## Proje Yapısı

```
hospital-website/
├── src/
│   ├── app/           # Next.js sayfaları ve layout’lar
│   ├── components/    # Tekrar kullanılabilir arayüz bileşenleri
│   │   ├── home/      # Ana sayfa bileşenleri
│   │   ├── layout/    # Layout bileşenleri (navbar, footer, vb.)
│   │   └── ui/        # Shadcn UI bileşenleri
│   └── lib/           # Yardımcı fonksiyonlar ve yardımcılar
├── public/            # Statik dosyalar
└── ... yapılandırma dosyaları
```

## Daha Fazla Bilgi

Next.js hakkında daha fazla bilgi edinmek için:

- [Next.js Dokümantasyonu](https://nextjs.org/docs) – Next.js’in özellikleri ve API’leri
- [Next.js Öğren](https://nextjs.org/learn) – Etkileşimli Next.js eğitimi

Ayrıca [Next.js GitHub deposunu](https://github.com/vercel/next.js) inceleyebilir, geri bildirimde bulunabilir ve katkı sağlayabilirsiniz!

## Yayınlama (Deployment)

Bu web sitesi, Next.js’i destekleyen Netlify, Vercel veya diğer platformlara kolayca deploy edilebilir.

En kolay yol, Next.js’in geliştiricileri tarafından sunulan [Vercel Platformu](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) ile deploy etmektir.

Daha fazla bilgi için [Next.js deployment dokümantasyonuna](https://nextjs.org/docs/app/building-your-application/deploying) göz atabilirsiniz.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır – detaylar için LICENSE dosyasına bakınız.

## Teşekkürler

- Tasarım, modern sağlık web sitelerinden ilham alınmıştır
- Görseller Unsplash’tan alınmıştır
- İkonlar Lucide React’tan alınmıştır
