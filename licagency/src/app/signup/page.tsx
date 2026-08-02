"use client";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "", password: "" });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phoneNumber", form.phoneNumber);
      fd.append("password", form.password);
      if (image) fd.append("image", image);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: fd,
        credentials: "include", // <-- super important for cookie
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Signup failed");

      toast.success("Signup successful");
      // notify server components (Navbar) to re-render
      router.refresh();
      try { localStorage.setItem("auth-refresh", String(Date.now())); } catch {}
      router.push("/admin");
    } catch (err: any) {
      toast.error(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-500 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-gray-500 to-gray-300 p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-3"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-3"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
