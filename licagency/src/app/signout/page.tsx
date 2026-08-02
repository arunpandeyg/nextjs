"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignoutPage() {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", { method: "POST" });
      if (!res.ok) throw new Error("Failed to sign out");

      toast.success("✅ Signed out successfully");
      router.push("/");
      router.refresh();
    } catch (err: any) {
      toast.error("❌ " + err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Are you sure you want to sign out?</h2>
        <button
          onClick={handleSignout}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
