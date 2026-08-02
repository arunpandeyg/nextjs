// components/WhatsappContact.tsx
// "use client"

// import { Button } from "@/components/ui/button"
// import { MessageCircle } from "lucide-react"
// import Link from "next/link"

export default function WhatsappContact() {
//   const phoneNumber = "919810013821" // Replace with your WhatsApp number (with country code)
//   const message = "Hello! I would like to know more."

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`

  return (
    <div className="fixed pl-140 pt-10 z-50">
      {/* <Link href={whatsappUrl} target="_blank">
        <Button
          size="lg"
          className="rounded-full  items-center justify-center shadow-lg bg-green-500 hover:bg-green-600 text-white p-4"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Contact Us
        </Button>
      </Link> */}
    </div>
  )
}
