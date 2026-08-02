import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between px-4 py-2  w-full h-15 bg-gradient-to-b from-gray-600 to-gray-400 '>
      <Link href="/" className='flex justify-center items-center text-white'>
        <Image src="/logo.png" alt="Logo" width={24} height={24} className='rounded-full '/>
        <h1>Arun Pandey</h1>
      </Link>
      <div>
        <h1 className='text-white'>© 2025 All right reserved to Arun Pandey</h1>
        </div>
        <Link href="/contact" className='flex justify-center items-center gap-2 text-white'>Contact</Link>
    </div>
  )
}

export default Footer
