import Header from '@/components/Header'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Metadata } from 'next';
import { sendMail } from '@/app/actions';
import Form from '@/components/Iletisim/Form';

export const metadata: Metadata = {
    title: "MetasoftCo - İletişim",
    description: "İnteraktif Deneyim ve Yazılım Ajansı",
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: "https://metasoftco.com",
      siteName: "MetasoftCo",
      countryName: "Turkey",
      title: "MetasoftCo - İletişim",
      description: "İnteraktif Deneyim ve Yazılım Ajansı",
      images: "https://metasoftco.com/whiteLogo.png",
    },
    metadataBase: new URL("https://metasoftco.com"),
  };

export default async function Iletisim() {
    return (
        <>
            <Header page="İletişim" />
            <main className=''>
                <div className='container max-w-[700px]'>
                    <h1 className='text-center text-5xl'>Bize Ulaşın! <span className='handshake-emoji'>👋</span></h1>
                    <p className='text-lg mt-10'>{"Anlıyoruz, bazen toplantıdan önce sadece hızlı bir fiyata ihtiyacınız oluyor, bazen de A'dan Z'ye tam bir fiyat teklifi istiyorsunuz. Bize istediğiniz kadar az veya çok ayrıntı verin, biz de zaman ayırdığınıza değmesini sağlayalım."}</p>
                    <div className='flex flex-col md:flex-row justify-around mt-6 underline'>
                        <a href="mailto:info@metasoftco.com"><IoIosMail className='inline-block no-underline mr-1' /> info@metasoftco.com</a>
                        <a href="tel:+905342334051"><FaPhone size={14} className='inline-block no-underline mr-1' /> +90 534 233 40 51</a>
                    </div>
                    <Form />
                </div>
                <div className='bg-[url("/warehouse-8589487_1920.jpg")] w-full h-[50vh] bg-fixed'>
                    <div className='w-full h-full bg-black/50 relative'>
                        <h3 className='text-4xl md:text-6xl text-white absolute top-1/2 -translate-y-1/2 ml-[10vw]'>Hayallerinizi <br /> Bizimle Gerçekleştirin</h3>
                    </div>
                </div>
            </main>
        </>
    )
}
