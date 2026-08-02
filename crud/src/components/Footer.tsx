import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between px-8 py-3 h-15 bg-gray-700 text-white font-bold shadow-2xl sticky z-50'>
      <Link href="/" className='flex items-center gap-2'>
      <Image src="/lic/logo.png" alt="logo" width={30} height={30} className='rounded-full '/>
      <h1>Arun Pandey</h1>
      </Link>
    </footer>
  )
}

export default Footer
