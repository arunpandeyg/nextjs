import { Contact, EqualApproximately, House, TextSelect } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavIcons = () => {
  return (
    <div className="hidden md:flex lg:flex  space-x-4 text-white ">
      <Link href="/">
        <House width={32}
          height={32} className="rounded-full cursor-pointer border-2 border-white" />
      </Link>
      <Link href="/lic">
        <Image
          src="/3.png"
          alt="Description"
          width={30}
          height={30}
          className="rounded-full cursor-pointer"
        />
      </Link>
      <Link href="/uiic">
        <Image
          src="/4.png"
          alt="Description"
          width={30}
          height={30}
          className="rounded-full cursor-pointer"
        />
      </Link>
      <Link href="/star">
        <Image
          src="/5.png"
          alt="Description"
          width={30}
          height={30}
          className="rounded-full cursor-pointer border-2 border-white"
        />
      </Link>
      <Link href="/mf">
        <Image
          src="/7.png"
          alt="Description"
          width={30}
          height={30}
          className="rounded-full cursor-pointer border-2 border-white"
        />
      </Link>      
      <Link href="/select">
        <TextSelect width={30}
          height={30} className="rounded-full cursor-pointer border-2 border-white" />
      </Link>
      <Link href="/about">
        <EqualApproximately width={30}
          height={30} className="rounded-full cursor-pointer border-2 border-white" />
      </Link>
      <Link href="/contact">
        <Contact width={30}
          height={30} className="rounded-full cursor-pointer border-2 border-white" />          
      </Link>
    </div>
  );
};

export default NavIcons;
