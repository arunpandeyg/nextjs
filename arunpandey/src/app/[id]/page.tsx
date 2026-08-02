import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'


const SigninPage = () => {
  return (
    <div className='w-full h-[477px] flex items-center justify-center bg-gray-600'>
      <Card className="w-[444px] h-[444px] shadow-lg pt-5 pb-5 bg-gray-500">
        <CardHeader>
          <CardTitle className='text-lg font-bold text-center '>Sign In</CardTitle>
          {/* <CardDescription className='text-center text-white'>
            Enter your email 
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
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
                
                <div className="flex items-center">
                  <Label htmlFor="documents">Documents</Label>                
                </div>
                <div><Input id="documents" type="file" multiple required />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full bg-orange-700 hover:bg-orange-600 cursor-pointer">
           <Link href="/message">Submit</Link>
          </Button>
          <p className="text-sm text-center  text-white">
            By clicking submit, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-orange-700">
              Terms of Service
            </Link>
            and
            <Link href="/privacy" className="underline hover:text-orange-700">
              Privacy Policy
            </Link>
            <span className="text-white ml-4">Not a member?<Link href="/signup" className="ml-4 text-sm text-orange-500">
             Sign Up</Link>
          </span>
          </p>
          
        </CardFooter>
      </Card>
    </div>
  )
}

export default SigninPage
