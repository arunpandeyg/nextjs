import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-[477px] flex flex-col items-center justify-center bg-gray-600'>     
      <form className='w-[444px] h-[465px] shadow-lg p-5 bg-gray-500 rounded-lg text-white'>
         <h1 className='text-lg font-bold text-center text-white pb-5'>Signup</h1>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              multiple
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full mt-5 bg-orange-700 hover:bg-orange-600 cursor-pointer text-white p-2 rounded-md text-center ">
          Submit
        </button>
        <p className="text-sm text-center  text-white pb-5">
            By clicking submit, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-orange-700">
              Terms of Service
            </Link>
            and
            <Link href="/privacy" className="underline hover:text-orange-700">
              Privacy Policy
            </Link>
            <span className="text-white ml-4">Not a member?<Link href="/signin" className="ml-4 text-sm text-orange-500">
             Sign In</Link>
          </span>
          </p>
      </form>
    </div>
  )
}

export default Signup
