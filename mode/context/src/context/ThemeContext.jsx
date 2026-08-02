import React, { createContext, useEffect } from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("light");
    const toggleTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark" );
    }
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;
