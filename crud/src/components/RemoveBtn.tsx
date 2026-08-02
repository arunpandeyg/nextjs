"use client"
import React from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'


interface RemoveBtnProps {
  id: string | number;
}
const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
  const router = useRouter();

  const removeProfile = async () => {
    const confirmed = confirm('Are you sure you want to delete this profile?');
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/profiles?id=${id}`, {
          method: 'DELETE',
        });
       
        if (response.ok) {
          console.log('Profile deleted successfully');
          router.refresh();
        } else {
          console.error('Failed to delete profile');
        }
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  }
  return (
    <Button onClick={removeProfile} className='bg-red-400 hover:bg-red-700 rounded-full'>
      <Trash  size={20}/>
    </Button>
  )
}

export default RemoveBtn
