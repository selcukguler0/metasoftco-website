import Header from '@/components/Header'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Iletisim() {
    return (
        <>
            <Header page="İletişim" />
            <main className='mt-48'>
                <div className='container max-w-[700px] mt-48'>
                    <h1 className='text-center text-5xl'>Bize Ulaşın! <span className='handshake-emoji'>👋</span></h1>
                    <p className='text-lg mt-10'>{"Anlıyoruz, bazen toplantıdan önce sadece hızlı bir fiyata ihtiyacınız oluyor, bazen de A'dan Z'ye tam bir fiyat teklifi istiyorsunuz. Bize istediğiniz kadar az veya çok ayrıntı verin, biz de zaman ayırdığınıza değmesini sağlayalım."}</p>
                    <div className='flex flex-col md:flex-row justify-around mt-6 underline'>
                        <a href="mailto:info@metasoftco.com"><IoIosMail className='inline-block no-underline mr-1' /> info@metasoftco.com</a>
                        <a href="tel:+905342334051"><FaPhone size={14} className='inline-block no-underline mr-1' /> +90 534 233 40 51</a>
                    </div>
                    <form className='my-24'>
                        <div>
                            <label htmlFor="email">E-posta Adresiniz*</label>
                            <input type="email" id="email" className='w-full border-2 bg-metasoftco-bg/80 text-black border-gray-300 p-3' />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="message">Mesajınız*</label>
                            <textarea id="message" className='w-full border-2 bg-metasoftco-bg/80 text-black resize-none border-gray-300 p-3' />
                        </div>
                        <div className='w-full text-center'>
                            <button className='rounded-full bg-metasoftco-red text-white mt-4 px-8 py-3 font-bold transition-all delay-100 hover:scale-110'>Gönder</button>
                        </div>
                    </form>
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
