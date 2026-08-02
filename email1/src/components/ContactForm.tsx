"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

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
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Input type="file" name="files" multiple />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Sending..." : "Submit"}
        </Button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
