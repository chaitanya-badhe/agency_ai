import React from 'react';
import logo from "../assets/logo.svg";
import logo_dark from "../assets/logo_dark.svg";


const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-12 lg:px-24 xl:px-14 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img
        src={theme === 'dark' ? logo_dark : logo}
        alt="Logo"
        className="w-32 sm:w-40"
      />
    </div>
  );
};

export default Navbar;
