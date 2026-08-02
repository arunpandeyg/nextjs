import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[473px] bg-gradient-to-b from-gray-600 to-gray-400">
      <Card className=" w-1/3 h-[[420]] mx-auto bg-gradient-to-b from-gray-600 to-gray-400 p-4 gap-t-5">
        <h1 className="text-2xl text-center text-white">Signup</h1>
        <Input type="text" placeholder="Enter your name" />
        <Input type="text" placeholder="Enter your email" />
        <Input type="text" placeholder="Enter your password" />
        <Input
          className="text-white file:text-white file:bg-gray-700 file:border-0 file:rounded-lg file:px-3 file:py-1
             file:cursor-pointer file:hover:bg-gray-600"
          type="file"
        />
        <Button className="bg-gray-700 hover:bg-gray-600 ">Signup</Button>
        <p className="text-white">Already have an account?<Link className="text-white text-xl" href="/signin">  Sign In</Link></p>
      </Card>
      <div></div>
    </div>
  );
};

export default SignupPage;
