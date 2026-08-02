import { Contact, House, UserPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between px-4 py-2  w-full h-15 bg-gradient-to-b from-gray-600 to-gray-400 '>
      <Link href="/" className='flex justify-center items-center text-white gap-3'>
        <Image src="/logo.png" alt="Logo" width={24} height={24} className='rounded-full '/>
        <h1>Arun Pandey</h1>
      </Link>
      <nav className='flex justify-center items-center gap-5 text-white'>
        <Link href="/">
        <House />
        </Link>
        <Link href="/contact">
        <Contact />
        </Link>
      </nav>
      <div>
        <Link href="/signup" className='flex justify-center items-center gap-2 text-white'><UserPen />Sign Up</Link>
      </div>
    </div>
  )
}

export default Header
