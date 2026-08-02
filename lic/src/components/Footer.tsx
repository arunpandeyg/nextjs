import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex shadow-lg">
      <p>© {new Date().getFullYear()} Arun Pandey. All rights reserved.</p>
      <h1 className="ml-auto text-lg font-bold text-white bg-gray-700 rounded-md px-2 py-1">
        <Link href="/">Arun Pandey</Link>
      </h1>
    </div>
  )
}

export default Footer
