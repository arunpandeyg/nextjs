// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser({}); // simulate auth; ideally decode JWT
  }, []);

  const handleSignout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/signin");
  };

  return (
    <nav className="w-full border-b bg-gradient-to-b from-gray-700 to-gray-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex flex-col gap-3 items-center justify-center sm:flex-row text-xl font-bold text-white">
          <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full " />
          Arun Pandey
        </Link>

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link href="/signin">
                <Button className="text-white bg-orange-600 hover:bg-amber-700 hover:underline">Sign In</Button>
              </Link><div></div>
            </>
          ) : (
            <>
              <Link href="/products" className={pathname === "/products" ? "text-blue-600 font-medium" : "text-gray-600"}>
                Products
              </Link>
              <Link href="/profile" className={pathname === "/profile" ? "text-blue-600 font-medium" : "text-gray-600"}>
                Profile
              </Link>
              <Button onClick={handleSignout} variant="destructive">Sign Out</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
