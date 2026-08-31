
import React from "react";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import arrow_icon from "../assets/arrow_icon.svg";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="flex items-center justify-between sticky top-0 z-20 py-4 px-4 sm:px-12 lg:px-24 xl:px-14 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 font-medium">

      {/* Logo */}
      <a href="#home">
        <img
          src={theme === "dark" ? logo_dark : logo}
          alt="Logo"
          className="w-32 sm:w-40"
        />
      </a>

      {/* Navigation Links */}
      <div
        className="
          flex items-center gap-8
          text-gray-700 dark:text-white
          text-sm
          
          max-sm:fixed
          max-sm:top-0
          max-sm:right-0
          max-sm:w-60
          max-sm:min-h-screen
          max-sm:flex-col
          max-sm:items-start
          max-sm:gap-6
          max-sm:pt-24
          max-sm:pl-8
          max-sm:bg-primary
          max-sm:text-white
        "
      >
        <a
          href="#home"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </a>

        <a
          href="#services"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Services
        </a>

        <a
          href="#our-work"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Our Work
        </a>

        <a
          href="#contact-us"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Connect Button */}
      <a
        href="#contact-us"
        className="
          max-sm:hidden
          flex items-center gap-2
          bg-blue-600
          text-white
          px-6 py-2
          rounded-full
          text-sm
          cursor-pointer
          hover:scale-105
          hover:bg-blue-700
          transition-all
        "
      >
        Connect
        <img
          src={arrow_icon}
          width={14}
          alt="Arrow"
        />
      </a>

    </nav>
  );
};

export default Navbar;

