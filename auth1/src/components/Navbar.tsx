
import { cookies } from "next/headers";
import Link from "next/link";


const Navbar = async () => {
 
  const cookiesPromise = cookies();
  const token = await cookiesPromise.then((cookies) => cookies.get("token"));

 

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">MyApp</Link>

      <div className="space-x-3">
        {token ? (
          <>
            <Link href="/signup" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">Sign Up</Link>
            <Link href="/signout" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition">Sign Out</Link>
          </>
        ) : (<Link href="/signin" className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg transition">Sign In</Link>
          
        )}
      </div>
    </nav>
  );
};

export default Navbar;