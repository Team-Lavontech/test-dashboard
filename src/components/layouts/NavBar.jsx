import { useState } from 'react';
import { motion } from "framer-motion";
import useDarkMode from "./UseDarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdOutlineSettings, MdArrowDropDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Navbar = ( {toggleSidebar, isSidebarOpen} ) => {
  const [mode, toggleMode] = useDarkMode("JobIt-Next-theme-mode");
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 ${isSidebarOpen ? 'lg:left-64 sm:left-0' : 'left-0'}  right-0 ${mode === 'dark' ? 'bg-dark-background text-white' : 'bg-background text-black'} p-4 flex justify-between`}>
      <div className="flex items-center gap-10">
        <button type="button" onClick={toggleSidebar} ><GiHamburgerMenu className="w-4 h-4 text-gray-500 dark:text-gray-100"  /></button>
        <form className="max-w-2xl mx-auto">
          <div className="flex">
            <div className="relative w-full">
              <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm bg-sidebar-bg dark:bg-secondary-dark-background dark:placeholder-gray-400 rounded-md focus:outline-none" placeholder="Search..." required />
              <button type="submit" className="absolute top-0 end-0 h-full p-2.5">
                <IoMdSearch className="w-4 h-4 text-gray-500 dark:text-gray-100" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-10">
        <motion.div
          className="icon-box mr-2 cursor-pointer"
          onClick={toggleMode}
          whileTap={{ scale: 0.5 }}
        >
          {mode === "dark" ? <FiMoon className="w-6 h-6 text-gray-500 dark:text-gray-100" /> : <FiSun className="w-6 h-6 text-gray-500 dark:text-gray-100" />}
        </motion.div>
        <MdOutlineSettings className="w-6 h-6 text-gray-500 dark:text-gray-100" />
        <img className="h-8 w-8 rounded-full object-cover" src="src/assets/profile.jpg" alt="" />
        <div className="relative inline-block">
          <MdArrowDropDown
            type="button"
            className="w-8 h-8 text-gray-500 dark:text-gray-100"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="absolute right-0 w-26 mt-2 origin-top-right rounded-md shadow-lg">
              <div className="py-1 bg-white dark:bg-secondary-dark-background rounded-md shadow-xs">
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none border-none"
                  onClick={() => {
                    console.log('Logout clicked');
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
