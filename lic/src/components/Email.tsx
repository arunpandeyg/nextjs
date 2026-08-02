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
import { Textarea } from "./ui/textarea"
import Link from "next/link"

const Email = () => {
  return (
    <Card className="w-[444px] h-[445px] shadow-lg bg-gray-500">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center text-white">Contact Us</CardTitle>
        <CardDescription className="text-center text-white">
          Enter your email & personal details to get in touch with us
        </CardDescription>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 text-white">
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
              <div className="flex items-center">
                <Label htmlFor="text">Text/Details</Label>                
              </div>
              <div><Textarea id="text" required maxLength={500} minLength={50} placeholder="meeting time day date address phone number"/>
              </div>
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
        <Link href="/contact" className="text-white text-sm w-full">
         <Button type="submit" className="w-full bg-orange-700 hover:bg-orange-600 cursor-pointer">
          Submit
        </Button>
        </Link>        
        <h3 className="text-white text-bold text-md cursor-pointer pb-6">Call Us <span className="ml-10 text-md text-bold text-white">9810013821</span> </h3>
      </CardFooter>
    </Card>
  )
}

export default Email;
