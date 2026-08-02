import React, { useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import ContactPage from "./pages/home/ContactPage";
import SigninPage from "./pages/user/SigninPage";
import SignupPage from "./pages/user/SignupPage";
import SignoutPage from "./pages/user/SignoutPage";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";


function App() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // if (theme === "dark") {
    //   setTheme("light");
    // } else {
    //   setTheme("dark");
    // }
    setTheme((prev) => prev === "dark" ? "light" : "dark" );
  }
  return (
    <>
      <div className="w-full  bg-purple-100  dark:bg-gray-900 dark:text-white">
        <Header  theme={theme} toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signout" element={<SignoutPage />} />
        </Routes>
        <Toaster position='top-right' duration={2000} theme='dark' />
        <Footer />
      </div>
    </>
  );
}

export default App;
