// components/AuthButtons.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const router = useRouter();

  const fetchSession = async () => {
    try {
      const res = await fetch("/api/auth/session", { cache: "no-store" });
      const data = await res.json();
      setAuthed(Boolean(data?.authenticated));
    } catch (e) {
      console.error("Failed to fetch session", e);
      setAuthed(false);
    }
  };

  useEffect(() => {
    fetchSession();

    // optional: listen for storage events to respond to sign-in/sign-out in other tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === "auth-refresh") fetchSession();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", { method: "POST" });
      if (!res.ok) throw new Error("Sign out failed");
      setAuthed(false);

      // notify other tabs (optional)
      try {
        localStorage.setItem("auth-refresh", String(Date.now()));
      } catch {}

      router.push("/signup"); // redirect after signout (change as you like)
    } catch (err) {
      console.error(err);
      // you can toast here using sonner if you have it installed
    }
  };

  // while unknown, show placeholder
  if (authed === null) {
    return (
      <div className="w-20 h-8 rounded bg-gray-200/60 animate-pulse" />
    );
  }

  return authed ? (
    <button
      onClick={handleSignout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
    >
      Sign Out
    </button>
  ) : (
    <Link
      href="/signup"
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
    >
      Sign Up
    </Link>
  );
}
