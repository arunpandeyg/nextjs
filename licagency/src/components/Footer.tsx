import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-gradient-to-b from-gray-500 to-gray-300 py-3 items-center'>
     <Image src="/logo.png" alt="logo" width={30} height={30} className="cursor-pointer rounded-full" />
      <p className='text-white'>© {new Date().getFullYear()} Insurance Policies. All rights reserved.</p>
      <Link className='text-white flex gap-2' href="/contact">Arun Pandey 9810013821 <FaWhatsapp className="text-green-700 text-2xl"/></Link>
    </div>
  )
}

export default Footer
