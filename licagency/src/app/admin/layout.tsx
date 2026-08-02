import Sidebar from "@/components/admin-components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* <div className="flex items-center justify-between w-full py-3 max-[60px] px-12 border border-b border-gray-600 bg-gradient-to-b from-gray-400 to-gray-300">
            <h3 className="text-xl font-bold">Admin Page</h3>
            <Link href="/signin">
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              className="cursor-pointer rounded-full"
            /></Link>
          </div> */}
          {children}
          <Toaster />
        </div>
      </div>
      <div></div>
    </>
  );
}
