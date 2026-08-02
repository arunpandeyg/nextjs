import React from "react";
import { PenLine } from "lucide-react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";


const getProfiles = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/profiles", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching data:", error);
  }

}
const ProfileList = async () => {

  const{profiles} = await getProfiles();
  return (
    <div className="flex flex-col gap-10  w-[700px] mx-auto text-2xl font-bold text-white p-10 items-center justify-between overflow-y-hidden">
      <h1>Profiles</h1>
      {profiles.map((profile: any) => (
        <div key={profile.name} className="flex justify-between w-full border rounded-lg p-5 gap-3">
        <div className="flex flex-col gap-2">
          <div className="text-sm">{profile.name}</div>
          <div className="text-sm">{profile.email}</div>
          <div className="text-sm">{profile.phone}</div>
           <div className="text-sm">{profile.description}</div>
        </div>
       <div className="gap-5">
        <RemoveBtn id={profile._id}/>
        <Link href={`/editProfile/${profile._id}`}>
          <PenLine
            size={40}
            className="rounded-full bg-green-500 hover:bg-green-700 p-1 text-white mt-4"
          />
        </Link>
      </div>
      </div>
      ))}
      
      {/* <div className="flex justify-between w-full border rounded-lg p-5 gap-3">
        <div className="flex flex-col gap-2">
          <div className="text-sm">Profile Name</div>
          <div className="text-sm">Profile Email</div>
          <div className="text-sm">Profile Phone Number</div>
           <div className="text-sm">Profile Description</div>
        </div>
       <div className="gap-5">
        <RemoveBtn />
        <Link href={"/editProfile/123"}>
          <PenLine
            size={40}
            className="rounded-full bg-green-500 hover:bg-green-700 p-1 text-white mt-4"
          />
        </Link>
      </div>
      </div> */}
      
    </div>
  );
};

export default ProfileList;
