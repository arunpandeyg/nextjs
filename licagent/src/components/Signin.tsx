import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Signin = () => {
  return (
    <div className="flex space-x-4 text-white ">
      <Link href="/signin" className=" ">
        <LogIn width={32}
          height={32} className="rounded-full cursor-pointer border-2 border-white" />
        {/* <Button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 ease-in-out">
          Sign In
        </Button> */}
      </Link>
      <Link href="/signout" className=" mr-3">
        <LogOut width={32}
          height={32} className="rounded-full cursor-pointer border-2 border-white" />
        {/* <Button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 ease-in-out">
          Sign In
        </Button> */}
      </Link>
    </div>
  );
};

export default Signin;
