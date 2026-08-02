import Image from "next/image";


export default function Home() {
  return (
    <div className="w-full h-[472px] items-center justify-items-center ">
      <Image src="/i5.png" alt="Hero Image" width={1440} height={472} className="w-full h-[472px] object-cover z-50" /> 
    </div>
  );
}
