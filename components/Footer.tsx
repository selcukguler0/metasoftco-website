import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Form from './Footer/Form';

export default function Footer() {
    const socialIcons = [
        {
            href: 'https://instagram.com/metasoftco',
            Icon: FaInstagram
        },
        {
            href: 'https://www.linkedin.com/company/metasoftco/',
            Icon: FaLinkedin
        },
        {
            href: 'https://www.facebook.com/people/metasoftco/',
            Icon: FaFacebook
        },
        {
            href: 'https://twitter.com/metasoftco',
            Icon: FaXTwitter
        }
    ]
    return (
        <footer className="bg-[#1c1f21] text-white">
            <div className='container py-12'>
                <div className='text-center space-y-3'>
                    <p className='text-xl'>Bir proje fikriniz mi var?</p>
                    <h3 className='text-metasoftco-red text-5xl'>İletişime geçin</h3>
                    <p className='text-lg md:text-xl'><a href='mailto:info@metasoftco.com' className='text-metasoftco-red'>info@metasoftco.com</a>{" "} adresine mail atın veya aşağıdaki formu doldurun.</p>
                    <p className='text-md md:text-lg'>Daha hızlı yardımamı ihtiyacınız var? <br className='block md:hidden' /> Bizi arayın {" "}<a href='tel:+905342334051' className='text-metasoftco-red'>+90 534 233 40 51</a></p>
                </div>
                <Form />
                <div className='flex justify-between'>
                    <div></div>
                    <div className='grid grid-cols-4'>

                    </div>
                </div>
            </div>
            <div className='container flex flex-col md:flex-row justify-between py-12'>
                <div>
                    <Link href='/'>
                        <Image src='/whiteLogo.png' width={150} height={40} alt='Metasoft Logo' />
                    </Link>
                    <div className='my-8'>
                        <h4 className='text-3xl'>Projeler</h4>
                        <ul className='underline space-y-2 mt-4'>
                            <li><Link href={"/"}>Yapay Zeka Projeleri</Link></li>
                            <li><Link href={"/"}>Fotoğraf Aktiviteleri</Link></li>
                            <li><Link href={"/"}>İnteraktif Makinalar</Link></li>
                            <li><Link href={"/"}>Özel Yazılımlar</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-4 md:gap-3 place-items-center'>
                        {socialIcons.map((social, index) => (
                            <SocialIcons key={index} href={social.href} Icon={social.Icon} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

interface SocialIconsProps {
    href: string
    Icon: IconType
}

function SocialIcons({ href, Icon }: SocialIconsProps) {
    return (
        <a href={href} target='_blank' referrerPolicy='no-referrer' className='bg-white p-2 rounded-full group hover:bg-metasoftco-red transition-all delay-100'>
            <Icon size={22} className='text-[#1c1f21] group-hover:text-white transition-all delay-100' />
        </a>
    )
}