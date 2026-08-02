import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 bg-gray-800 text-white shadow-lg  transition transform-all duration-300">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full mt-2 mb-2" />
        <h1 className="text-lg font-bold text-white ">Arun Pandey</h1>
      </Link>
      <ul className="flex space-x-4 ">
        <Link href="/">
          <li className="text-lg font-bold text-white ">Home</li>
        </Link>
        {/* <Link href="/policies">
          <li className="text-lg font-bold text-white ">Policies</li>
        </Link> */}
        <Link href="/lic">
          <li className="text-lg font-bold text-white ">LIC</li>
        </Link>
        <Link href="/uiic">
          <li className="text-lg font-bold text-white ">UIIC</li>
        </Link>
        <Link href="/mf">
          <li className="text-lg font-bold text-white ">MFs</li>
        </Link>
        <Link href="/about">
          <li className="text-lg font-bold text-white ">About</li>
        </Link>
        <Link href="/contact">
          <li className="text-lg font-bold text-white ">Contact</li>
        </Link>
        
      </ul>
      <Link href="/signin" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-6 rounded">
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;
