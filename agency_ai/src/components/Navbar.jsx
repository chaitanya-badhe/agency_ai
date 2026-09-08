import React, { useState } from "react";
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import close_icon from "../assets/close_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import menu_icon_dark from "../assets/menu_icon_dark.svg";
import ThemeToggleButton from "./ThemeToggleButton";
import {easeOut, motion} from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    
    <motion.nav
    initial ={{opacity:0 ,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6 , ease:easeOut}}
    className="flex items-center justify-between sticky top-0 z-20 py-4 px-4 sm:px-12 lg:px-24 xl:px-14 backdrop-blur-xl bg-blue-900  dark:bg-gray-900/70 font-medium">

      <a href="#home">
        <img
          src={theme === "dark" ? logo_dark : logo}
          alt="Logo"
          className="w-32 sm:w-40"
        />
      </a>

      <div
        className={`
          relative
          flex items-center gap-8
          text-gray-700 dark:text-white
          text-sm
          max-sm:fixed
          max-sm:top-0
          max-sm:right-0
          max-sm:min-h-screen
          max-sm:flex-col
          max-sm:items-start  
          max-sm:gap-6
          max-sm:pt-24
          max-sm:bg-primary
          max-sm:text-white
          transition-all duration-300
          ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}
        `}
      >
        <img
          src={close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#home" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Work</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</a>
      </div>

      <ThemeToggleButton theme={theme} setTheme={setTheme} />

      <img
        src={theme === "dark" ? menu_icon_dark : menu_icon}
        alt="Menu"
        className="w-8 sm:hidden cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      />

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
        <img src={arrow_icon} width={14} alt="Arrow" />
      </a>
    </motion.nav>
  );
};

export default Navbar;
