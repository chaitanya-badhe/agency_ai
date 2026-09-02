import React, { useEffect } from "react";
import sun_icon from "../assets/sun_icon.svg";
import moon_icon from "../assets/moon_icon.svg";

const ThemeToggleButton = ({ theme, setTheme }) => {
  // Detect system preference on mount
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(theme ? theme : prefersDarkMode ? "dark" : "light");
  }, []); // run once

  // Apply theme + persist in localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button>
        {theme === "dark" ? (
          <img
            src={sun_icon}
            alt="Sun Icon"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full w-5"
            onClick={() => setTheme("light")}
          />
        ) : (
          <img
            src={moon_icon}
            alt="Moon Icon"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full w-5"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
