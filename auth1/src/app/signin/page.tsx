"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { cookies } from "next/headers";

export default function SigninPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include", // <-- critical
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Signin failed");

      toast.success("Signin successful");
      router.push("/admin");
      router.refresh();
      try { localStorage.setItem("auth-refresh", String(Date.now())); } catch {}
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <input name="email" onChange={handleChange} required placeholder="Email" className="w-full p-3 border rounded mb-3"/>
        <input name="password" type="password" onChange={handleChange} required placeholder="Password" className="w-full p-3 border rounded mb-3"/>
        <button disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-lg">{loading ? "Signing In..." : "Sign In"}</button>
        <p className="mt-4 text-center text-sm">No account? <Link href="/signup" className="text-blue-600">Sign up</Link></p>
      </form>
    </div>
  );
}
