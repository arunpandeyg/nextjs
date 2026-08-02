import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isSignedIn = false;
  return (
    <div className="flex justify-between p-2 bg-purple-100 dark:bg-gray-900  text-gray-800 text-2xl font-black">
      <Link to="/">
        <img
          src="rtk.png"
          alt="redux toolkit"
          className="w-30 h-10 rounded-lg"
        />
      </Link>
      <div className="flex gap-4 dark:text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex gap-4">
        <div>
          <button onClick={toggleTheme} className="flex items-center justify-center gap-4 dark:text-white pt-2">
           {theme === "dark" ? <SunIcon /> : <MoonIcon />} 
          </button>
        </div>
        <div className="flex gap-4 dark:text-white">
          {isSignedIn ? (
            <Link to="/signup">Signup</Link>
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
