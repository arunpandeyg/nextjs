import { CirclePlus, List } from "lucide-react";
import { MdSubscriptions } from "react-icons/md";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-400 to-gray-300">
      {/* <Link href="/" className="px-2 sm:pl-14 py-3 border border-gray-600">
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
      </Link> */}
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-gray-600">
        <div className="w-[50%] sm:w-[80%] absolute right-0 ">
          <Link href="/admin/addpolicy" className="flex items-center border border-gray-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_0px_0px_#00000] rounded-l-lg  mb-4">
            <CirclePlus />
            <p>Add Policy</p>
          </Link>
          <Link href="/admin/policylist" className="flex items-center border border-gray-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_0px_0px_#00000] rounded-l-lg mb-4">
            <List />
            <p>Policy List</p>
          </Link>
          <Link href="/admin/subscriptions" className="flex items-center border border-gray-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_0px_0px_#00000] rounded-l-lg">
           <MdSubscriptions />
            <p>Subscriptions</p>
          </Link>
          <Link href="/admin/policy-register" className="flex items-center border border-gray-600 gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_0px_0px_#00000] rounded-l-lg mb-4">
            <List />
            <p>Policy Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
