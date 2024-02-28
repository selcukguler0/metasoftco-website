import React from 'react'
import EmblaCarousel from './EmblaCarousel/Carousel'
import Link from 'next/link'

interface AktiviteProps {
    title: string
    subtitle: string
    slides: string[]
    links: string[]
}

export default function Aktivite({ title, subtitle, slides, links }: AktiviteProps) {
    return (
        <div className="my-12">
            <div className="flex flex-col md:flex-row md:justify-center">
                <div className="bg-white w-full md:max-w-[330px] md:h-[400px] space-y-8 p-8 shadow-md mt-12 md:-mr-5 mb-4 md:mb-0 z-40">
                    <h2 className="text-5xl font-bold">
                        {title}
                    </h2>
                    <p className="text-lg font-semibold">{subtitle}</p>
                </div>
                <EmblaCarousel slides={slides} />
            </div>
            <div className="mx-auto mt-4 grid grid-cols-2 md:grid-cols-4 md:max-w-[60%]">
                {links.map((link, index) => (
                    <Link key={index} className="rounded-full border-metasoftco-red border-2 max-w-40 text-center px-9 py-4 hover:bg-metasoftco-red hover:text-white transition-all delay-100" href="/">
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    )
}
