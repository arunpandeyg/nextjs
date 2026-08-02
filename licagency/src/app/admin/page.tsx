"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (!data?.user || data.user.role !== "admin") {
        router.push("/"); // 👈 client redirect
        router.refresh();
      }
      
    };

    checkAuth();
  }, [router]);

  return <h1 className="p-10">Admin Dashboard</h1>;
}







// "use client";

// // app/admin/page.tsx
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminPage() {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const res = await fetch("/api/auth/me"); // 👈 create this API
//       const data = await res.json();

//       if (!data?.user || data.user.role !== "admin") {
//         router.push("/"); // ✅ client-side redirect to home
//       } else {
//         setAuthorized(true);
//       }
//     };

//     checkAuth();
//   }, [router]);

//   if (!authorized) return <p className="text-center mt-10">Checking access...</p>;

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">Admin Dashboard</h1>
//       <p className="mt-4">Welcome, Admin! 🎉</p>
//     </div>
//   );
// }
