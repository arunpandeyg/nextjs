import React from 'react'
import LIC from '@/data/LIC'
import Image from 'next/image'

const PolicyPage = () => {
  return (
    <div>
      {LIC.map((policy) => (
        <div key={policy.id}>
          <Image src={policy.image} alt={policy.name} width={500} height={300} />
          <h2>{policy.name}</h2>
          <p>{policy.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PolicyPage

