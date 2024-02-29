import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

export default function MobileMenu() {
  return (
    <div className='block md:hidden'>
      <Drawer >
        <DrawerTrigger><RxHamburgerMenu /></DrawerTrigger>
        <DrawerContent>
          <ul className='flex flex-col gap-3 items-center text-2xl'>
            <li><Link href={"/"}>Ana Sayfa</Link></li>
            <li><Link href={"/hakkimizda"}>Hakkımızda</Link></li>
            <li><Link href={"/"}>Projeler</Link></li>
            <li><Link href={"/iletisim"}>İletişim</Link></li>
          </ul>
          <DrawerFooter>
            <DrawerClose>
              {/* <button className='mt-4 bg-metasoftco-red rounded-full px-8 py-2 text-white font-semibold'>Kapat</button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
