import Image from 'next/image'
import React from 'react'

const OwnerImage = () => {
  return (
   
      <div className="max-w-lg mx-auto">
        <Image src="/hero.png" alt="Logo" width={340} height={340} draggable={false} className="rounded-lg mx-auto drop-shadow-lg select-none pointer-events-none " />
           
    </div>
  )
}

export default OwnerImage
