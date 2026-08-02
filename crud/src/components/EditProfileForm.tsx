"use client"
import React, { useState } from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const EditProfileForm = ({id, name, email, phoneNumber, description}) => {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/profiles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail, newPhoneNumber, newDescription }),
      });

      if (res.ok) {
        alert("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-[476px] bg-gray-800 flex justify-center text-white font-bold'>
     <form onSubmit={handleSubmit}>
        <Card className='w-[400px] bg-gray-600 p-5 gap-5 items-center text-white'>
            <h1 >Edit Profile</h1>
            <Input onChange={(e) => setNewName(e.target.value)} className='px-8 py-2' type='text' placeholder='Profile Name'/>
            <Input onChange={(e) => setNewEmail(e.target.value)} className='px-8 py-2' type='email' placeholder='Profile Email'/>
            <Input onChange={(e) => setNewPhoneNumber(e.target.value)} className='px-8 py-2' type='text' placeholder='Profile Phone Number'/>
            <Textarea onChange={(e) => setNewDescription(e.target.value)} className='px-8 py-2' placeholder='Profile Descriptions'/>
            <Button className='px-8 py-2 bg-gray-500 hover:bg-orange-600'>Edit Profile</Button>
        </Card>
        
     </form>
    </div>
  )
}

export default EditProfileForm
