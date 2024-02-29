import Header from '@/components/Header'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "MetasoftCo - Hakkımızda",
    description: "İnteraktif Deneyim ve Yazılım Ajansı",
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: "https://metasoftco.com",
      siteName: "MetasoftCo",
      countryName: "Turkey",
      title: "MetasoftCo - Hakkımızda",
      description: "İnteraktif Deneyim ve Yazılım Ajansı",
      images: "https://metasoftco.com/whiteLogo.png",
    },
    metadataBase: new URL("https://metasoftco.com"),
  };

export default function Hakkimizda() {
    return (
        <>
            <Header page="Hakkımızda" />
            <main className='mt-48'>
                <div className='container max-w-[700px] mt-48 pb-12'>
                    <h1 className='text-center text-5xl'>Hakkımızda</h1>
                    <p className='text-lg mt-10'>{"Yenilikçi fikirleri harika deneyimler yaratacak şekilde hayata geçirmeye tutkunuz."}</p>
                    <p className='text-lg mt-5'>{"Şirketimiz, dijital çözümlerle iş süreçlerinizde dönüşüm yaratıyor. Veri analizinden müşteri yönetimine, pazarlamadan otomasyona kadar geniş bir yelpazede hizmet sunarak işinizi dijitalleştiriyor ve verimliliğinizi artırıyoruz. Yenilikçi yaklaşımlarımız, yaratıcı çözümlerimiz ve ileri teknoloji kullanımımızla her projenin kalbine tasarımı yerleştiriyoruz."}</p>
                    <p className='text-lg mt-5'>{"İşbirliğine dayalı ilişkiler geliştirmek, stratejiler oluşturmak ve güçlü etkilere sahip sonuçlar elde etmek önceliğimiz. Şirketler ve kitleler arasında anlamlı bağlantılar kurarak, teknolojinin insan hayatındaki yerini iyileştirmeye odaklanıyoruz. Analitik yaklaşımımızla mevcut operasyonlarınızı inceleyerek, inovasyon ve stratejik planlama ile başarıya ulaşmanız için en etkili yöntemleri belirliyoruz."}</p>
                </div>
                <div className='bg-[url("/architecture-1868667_1920.jpg")] w-full h-[50vh] bg-fixed'>
                    <div className='w-full h-full bg-black/50 relative'>
                        <h3 className='text-4xl md:text-6xl text-white absolute top-1/2 -translate-y-1/2 ml-[10vw]'>Siz Hayal Edin <br /> Biz Yaratalım</h3>
                    </div>
                </div>
            </main>
        </>
    )
}
