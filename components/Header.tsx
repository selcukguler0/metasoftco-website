"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

interface HeaderProps {
    page: string
}

export default function Header({ page }: HeaderProps) {
    const headerRef = React.createRef<HTMLHeadElement>();

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) {
                return;
            }
            if (window.scrollY > 0) {
                headerRef.current.classList.add('shadow-md');
            } else {
                headerRef.current.classList.remove('shadow-md');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerRef]);

    return (
        <header ref={headerRef} className={classNames('bg-metasoftco-bg sticky w-full top-0 z-50 mb-24')}>
            <div className='container flex justify-between items-center py-3 md:py-6 '>
                <Link href='/'>
                    <Image className='w-40' src='/blackLogo.png' alt='Metasoft' width={160} height={160} />
                </Link>
                <nav className='hidden md:block'>
                    <ul className='flex items-center space-x-10'>
                        <li className={classNames("text-sm", page == "Ana Sayfa" && "underline underline-offset-8")}>
                            <Link href='/'>
                                Ana Sayfa
                            </Link>
                        </li>
                        <li className={classNames("text-sm", page == "Hakkımızda" && "underline underline-offset-8")}>
                            <Link href='/hakkimizda'>
                                Hakkımızda
                            </Link>
                        </li>
                        <li className={classNames("text-sm", page == "Projeler" && "underline underline-offset-8")}>
                            <Link href='/projeler'>
                                Projeler
                            </Link>
                        </li>
                        <li className={classNames("text-sm", page == "İletişim" && "underline underline-offset-4")}>
                            <Link className='text-sm rounded-full bg-metasoftco-red hover:bg-metasoftco-red/90 hover:cursor-pointer px-8 py-3 text-white font-semibold' href='/iletisim'>
                                İletişim
                            </Link>
                        </li>
                    </ul>
                </nav>
                <MobileMenu />
            </div>
        </header>
    )
}
