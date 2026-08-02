"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";



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
      // redirect based on role
      if (data.user.role === "admin") {        
        router.push("/admin");
        router.refresh();
      } else {
        
        router.push("/");
        router.refresh();
      }
      
      // try { localStorage.setItem("auth-refresh", String(Date.now())); } catch {}
      // router.push("/admin");
      // router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-500 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-2xl shadow-md w-full max-w-md bg-gradient-to-b from-gray-500 to-gray-300"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
