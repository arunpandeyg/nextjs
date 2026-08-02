// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-gray-700 to-gray-500 shadow-sm ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-sm  text-white">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>
          
          <Link href="/" className="text-white hover:underline">
            Arun Pandey
          </Link>
        </p>
      </div>
    </footer>
  );
}
