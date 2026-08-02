import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SigninPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[473px] bg-gradient-to-b from-gray-600 to-gray-400">
      <Card className=" w-1/3 h-[[420]] mx-auto bg-gradient-to-b from-gray-600 to-gray-400 p-4 gap-t-5">
        <h1 className="text-2xl text-center  text-white">SignIn</h1>
        <Input type="text" placeholder="Enter your email" />
        <Input type="text" placeholder="Enter your password" />        
        <Button className="bg-gray-700 hover:bg-gray-600 ">SignIn</Button>
        <p className="text-white">Already have an account?<Link className="text-white text-xl" href="/signup">  Sign Up</Link></p>
      </Card>
      <div></div>
    </div>
  )
}

export default SigninPage
