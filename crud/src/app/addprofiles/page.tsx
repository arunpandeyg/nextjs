"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'



const AddProfilePage = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [description, setDescription] = useState("")

const router = useRouter();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if(!name || !email || !phoneNumber || !description){
    alert("All fields are required");
    return;
  }
  try {
    const res = await fetch("http://localhost:3000/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, phoneNumber, description}),
    })

    if(res.ok){
      router.push("/");
    }else{
      alert("Failed to create profile");
    }
  } catch (error) {
    console.log(error);
  }
}
  
  return (
    <div className='w-full h-[476px] bg-gray-800 flex pt-10 justify-center text-white font-bold'>
     <form onSubmit={handleSubmit}>
        <Card className='w-[400px] bg-gray-600 p-5 gap-5 items-center text-white'>
            <h1 >Add Profile</h1>
            <Input onChange={(e) => setName(e.target.value)} className='px-8 py-2' type='text' placeholder='Profile Name'/>
            <Input onChange={(e) => setEmail(e.target.value)} className='px-8 py-2' type='email' placeholder='Profile Email'/>
            <Input onChange={(e) => setPhoneNumber(e.target.value)} className='px-8 py-2' type='text' placeholder='Profile Phone Number'/>
            <Textarea onChange={(e) => setDescription(e.target.value)} className='px-8 py-2' placeholder='Profile Descriptions'/>
            <Button type='submit' className='px-8 py-2 bg-gray-500 hover:bg-orange-600'>Add Profile</Button>
        </Card>
        
     </form>
    </div>
  )
}

export default AddProfilePage
