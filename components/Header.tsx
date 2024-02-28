"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

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
        <header ref={headerRef} className={classNames('bg-metasoftco-bg fixed w-full top-0 mb-48 z-50')}>
            <div className='container flex justify-between items-center py-6 '>
                <Image className='w-40' src='/blackLogo.png' alt='Metasoft' width={160} height={160} />
                <nav className='hidden md:block'>
                    <ul className='flex items-center space-x-10'>
                        <li className={classNames("text-sm", page == "Ana Sayfa" && "underline underline-offset-8")}>
                            <Link href='/'>
                                Ana Sayfa
                            </Link>
                        </li>
                        <li className={classNames("text-sm", page == "Hakkımızda" && "underline underline-offset-2")}>
                            <Link href='/'>
                                Hakkımızda
                            </Link>
                        </li>
                        <li className={classNames("text-sm", page == "Projeler" && "underline underline-offset-2")}>
                            <Link href='/'>
                                Projeler
                            </Link>
                        </li>
                        <li className='text-sm rounded-full bg-metasoftco-red hover:bg-metasoftco-red/90 hover:cursor-pointer px-8 py-3 text-white font-semibold'>İletişim</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
