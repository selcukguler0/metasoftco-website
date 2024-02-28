import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#1c1f21] text-white">
            <div className='container py-12'>
                <div className='text-center space-y-3'>
                    <p className='text-xl'>Bir proje fikriniz mi var?</p>
                    <h3 className='text-metasoftco-red text-5xl'>İletişime geçin</h3>
                    <p className='text-xl'><a href='mailto:info@metasoftco.com' className='text-metasoftco-red'>info@metasoftco.com</a>{" "} adresine mail atın veya aşağıdaki formu doldurun.</p>
                    <p className='text-lg'>Daha hızlı yardımamı ihtiyacınız var? Bizi arayın {" "}<a href='tel:+905342334051' className='text-metasoftco-red'>+90 534 233 40 51</a></p>
                </div>
                <form action="" className='max-w-[700px] mx-auto mt-16'>
                    <div className='space-y-1'>
                        <label htmlFor="name">İsminiz*</label>
                        <input type="text" id="name" className='w-full border-2 bg-metasoftco-bg/80 border-gray-300 p-3' />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <label htmlFor="email">E-posta Adresiniz*</label>
                        <input type="email" id="email" className='w-full border-2 bg-metasoftco-bg/80 border-gray-300 p-3' />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <label htmlFor="message">Mesajınız*</label>
                        <textarea id="message" className='w-full border-2 bg-metasoftco-bg/80 border-gray-300 p-3' />
                    </div>
                    <div className='w-full text-center'>
                        <button className='rounded-full bg-metasoftco-red text-white mt-4 px-8 py-3 font-bold transition-all delay-100 hover:scale-110'>Gönder</button>
                    </div>
                </form>
                <div className='container flex justify-between'>
                    <div></div>
                    <div className='grid grid-cols-4'>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}
