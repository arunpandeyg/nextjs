import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  
  return (
    <div className="bg-gray-800 text-white p-2 flex items-center justify-between shadow-md z-50">
      <div>
        <p>© {new Date().getFullYear()} Arun Pandey. All rights reserved.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 pr-40">
        <Link href="/whatsapp">
          <Image
            src="/whatsapp.png"
            alt="Description"
            width={30}
            height={30}
            className="rounded-full cursor-pointer border-2 border-white"
          />
        </Link>
        <Link href="/phone">
          <Image
            src="/phone1.png"
            alt="Description"
            width={30}
            height={30}
            className="rounded-full cursor-pointer border-2 border-white"
          />
        </Link>
        <Link href="/">
          <Image
            src="/x.png"
            alt="Description"
            width={30}
            height={30}
            className="rounded-full cursor-pointer border-2 border-white"
          />
        </Link>
      </div>
      <div>
        <h1 className="ml-auto text-lg font-bold text-white bg-gray-600 rounded-md px-2 py-1">
          <Link href="/contact">Arun Pandey</Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
