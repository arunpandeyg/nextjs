import React from 'react'
import Title from './Title'
import NavIcons from './NavIcons'
import Signin from './Signin'

const Navbar = () => {
  return (
    <div className='w-full h-15 flex items-center justify-between shadow-md bg-gray-800 text-white sticky top-0 z-50'>
      <Title />
      <NavIcons />
      <Signin />
    </div>
  )
}

export default Navbar
