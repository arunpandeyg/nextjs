import ContactForm from '@/components/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='w-full h-[542px] flex flex-col md:flex-row lg:flex-row items-center justify-between bg-gradient-to-b from-gray-500 to-gray-300 text-white '>
      <ContactForm />
    </div>
  )
}

export default ContactPage
