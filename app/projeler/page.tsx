import Header from '@/components/Header'
import { openGraph } from '@/data/MetaData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "MetasoftCo - Hakkımızda",
    description: "İnteraktif Deneyim ve Yazılım Ajansı",
    openGraph: openGraph,
    keywords: "projeler, yazılım, interaktif deneyim, ajans",
    metadataBase: new URL("https://metasoftco.com"),
};

export default function Projeler() {
    return (
        <>
            <Header page="Projeler" />
            <main className=''>
                <div className='container pb-12'>
                    <h1 className='text-center text-5xl'>Projeler</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-y-16'>
                        {projeler.map((proje, i) => (
                            <ProjeItem key={i} {...proje} />
                        ))}
                    </div>
                </div>
                <div className='bg-[url("/architecture-3095716_1920.jpg")] w-full h-[50vh] bg-fixed'>
                    <div className='w-full h-full bg-black/50 relative'>
                        <h3 className='text-4xl md:text-6xl text-white absolute top-1/2 -translate-y-1/2 ml-[10vw]'>Fikirlerinizi <br /> İnovasyonla Birleştirin</h3>
                    </div>
                </div>
            </main>
        </>
    )
}
const projeler = [
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    },
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    },
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    },
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    },
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    },
    {
        imgSrc: '/projeler/NissanHeroMirrorFormulaE.jpg',
        imgAlt: 'NissanHeroMirrorFormulaE',
        title: 'Nissan Hero Mirror',
        href: '/projeler/nissan-hero-mirror',
    }
]

interface ProjeItemProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    href: string;
}
function ProjeItem({ imgSrc, imgAlt, title, href }: ProjeItemProps) {
    return (
        <div className='flex flex-col md:flex-row'>
            <Image className='w-full md:w-[300px] h-auto' src={imgSrc} alt={imgAlt} width={300} height={300} />
            <div>
                <div className='w-fit md:min-w-[300px] max-w-[400px] ml-4 md:-ml-12 -mt-8 md:mt-5 h-fit bg-white p-1 md:p-2 mb-4 md:mb-12'>
                    <h2 className='text-3xl font-semibold whitespace-pre-wrap'>{title}</h2>
                </div>
                <Link href={href}>
                    <button className='rounded-full bg-black text-white text-lg font-semibold py-3 px-9 md:py-4 ml-4 hover:scale-110 transition-all delay-100'>Projeyi İncele</button>
                </Link>
            </div>
        </div>
    )
}