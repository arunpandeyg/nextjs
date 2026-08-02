import EditProfileForm from '@/components/EditProfileForm'
import mongodb from '@/libs/mongodb';
import React from 'react'

async function getProfileById(id: string) {
  const res = await fetch(`http://localhost:3000/api/profiles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch profile:", res.status);
    return null;
  }

  return res.json(); // ✅ will work because API sends JSON
}


// const getProfileById = async (id: string) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/profiles/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default async function EditProfilePage ({ params }) {
//   const { id } =await params;
//   const {profile} =  await getProfileById(id); 
  
//   const {name, email, phoneNumber, description} = profile; 

  
//   return (
//     <div className='w-full h-[476px] bg-gray-800 flex pt-10 justify-center text-white font-bold'>
//       <EditProfileForm  id={id} name={name} email={email} phoneNumber={phoneNumber} description={description}/>
//     </div>
//   )
// }


export default async function EditProfilePage ({ params }) {
  const { id } =await params;
  const {profile} =  await getProfileById(id); 
  const {name, email, phoneNumber, description} = profile; 
  return (
    <div className='w-full h-[476px] bg-gray-800 flex pt-10 justify-center text-white font-bold'>
      <EditProfileForm  id={id} name={name} email={email} phoneNumber={phoneNumber} description={description}/>
    </div>
  )
}