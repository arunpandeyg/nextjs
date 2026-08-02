import ContactForm from '@/components/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='w-full h-[443px] flex flex-col md:flex-row lg:flex-row mt-10 items-center justify-between bg-gray-800 text-white '>
      <ContactForm />
    </div>
  )
}

export default ContactPage
