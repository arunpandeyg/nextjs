import Image from "next/image";
import  Email  from "@/components/Email";



export default function Home() {
  return (
    <div className="w-full flex justify-between items-center p-2 bg-gray-800 text-white gap-15">
      <div className="w-1/2">
        <Image src="/hero.png" alt="Logo" width={444} height={445} draggable={false} className="rounded-lg ml-20 drop-shadow-lg select-none pointer-events-none " />
      </div>
      <div className="w-1/2  flex flex-col items-center ">
       <Email />
      </div>
    </div>
  );
} 
