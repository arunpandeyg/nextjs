"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto"; // reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // expand height
      }
    }, [value]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget; // 👈 store reference to form
  const formData = new FormData(form);

  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  setLoading(false);

  if (res.ok) {
    toast.success("Thanks for message and visit.");
    form.reset(); // 👈 reset works safely now
  } else {
    toast.error("Something went wrong. Please try again.");
  }
}


  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-700 text-white shadow rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold text-white text-center">Contact Us</h1>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea 
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="message" placeholder="Your Phone Number Target/Subject for insurance address height weight Income Meeting Date Time" required 
        className="
        w-full resize-none 
        rounded-2xl border border-gray-300 
        p-3 text-base leading-relaxed 
        focus:outline-none focus:ring-2 focus:ring-blue-500
        max-h-40 overflow-y-auto
        [&::-webkit-scrollbar]:hidden
        [-ms-overflow-style:none] [scrollbar-width:none]
        "
        />
        <Input type="file" name="files" multiple />
        <Button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-700">
          {loading ? "Sending..." : "Submit"}
        </Button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
