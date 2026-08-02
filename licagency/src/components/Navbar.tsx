import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRunning, FaWhatsapp } from "react-icons/fa";
import { cookies } from "next/headers";

const Navbar = async () => {
  const cookiesPromise = cookies();
  const token = await cookiesPromise.then((cookies) => cookies.get("token"));
  return (
    <div className="w-full p-2 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-b from-gray-400 to-gray-300 shadow-[-3px_3px_0px_0px_#00000] sticky z-10">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
      </Link>
      <Link
        href="/contact"
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <span>Arun Pandey👋</span> 9810013821{" "}
        <FaWhatsapp className="text-green-700 text-2xl" />
      </Link>

      <div className="space-x-4 text-white flex justify-between items-center">
        {token ? (
          <>
            <Link
              href="/signup"
              className="flex items-center gap-2 hover:underline bg-orange-600 text-white   shadow-[-5px_5px_0px_0px_#00000] rounded-lg px-4 py-2 sm:px-6 sm-py-2"
            >
              Sign Up <FaRunning />
            </Link>
            <Link
              href="/signout"
              className="flex items-center gap-2 hover:underline bg-orange-600 text-white   shadow-[-5px_5px_0px_0px_#00000] rounded-lg px-4 py-2 sm:px-6 sm-py-2"
            >
              Sign Out <FaRunning />
            </Link>
          </>
        ) : (
          <Link
            href="/signin"
            className="flex items-center gap-2 hover:underline bg-orange-600 text-white   shadow-[-5px_5px_0px_0px_#00000] rounded-lg px-4 py-2 sm:px-6 sm-py-2"
          >
            Sign In <FaRunning />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
