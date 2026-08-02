import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Title = () => {
  return (
    <Link href="/" className='flex items-center space-x-4 ml-2'>
      <Image src="/logo.png" alt="Description" width={30} height={30} className='rounded-full '/>
      <h1 className="text-2xl font-bold">Arun Pandey</h1>
    </Link>
  )
}

export default Title
