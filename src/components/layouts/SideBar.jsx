import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { FaAngleLeft, FaRegArrowAltCircleDown } from 'react-icons/fa';
import { TbNotes } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { MdTableView, MdToday, MdCalendarMonth, MdOutlineAdminPanelSettings, MdOutlineSettings } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const closeSidebar = () => {
    toggleSidebar(false);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/dashboard' },
    { section: 'Client Facing' },
    { name: 'Products', icon: <FiShoppingCart className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/products' },
    { name: 'Customers', icon: <FiUsers className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/customers' },
    { name: 'Transactions', icon: <TbNotes className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/transactions' },
    { name: 'Geography', icon: <BiWorld className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/geography' },
    { section: 'Sales' },
    { name: 'Overview', icon: <MdTableView className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/overview' },
    { name: 'Daily', icon: <MdToday className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/daily' },
    { name: 'Monthly', icon: <MdCalendarMonth className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/monthly' },
    { name: 'Breakdown', icon: <FaRegArrowAltCircleDown className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/breakdown' },
    { section: 'Management' },
    { name: 'Admin', icon: <MdOutlineAdminPanelSettings className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/admin' },
    { name: 'Performance', icon: <GrDocumentPerformance className="m-1 text-sidebar-link dark:text-dark-sidebar-link" />, url: '/performance' },
  ];

  return (
    <div className={`bg-sidebar-bg dark:bg-secondary-dark-background h-screen fixed top-0 bottom-0 left-0 overflow-y-auto z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center pl-10 pt-5 pb-10">
        <h1 className="text-xl font-bold text-title dark:text-dark-title">LAVONTECH</h1>
        <button onClick={closeSidebar} className="block lg:hidden text-gray-600 dark:text-gray-300">
          <FaAngleLeft />
        </button>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          item.section ? (
            <h2 key={index} className="text-sm text-left pl-10 pt-8 pb-2 text-title dark:text-dark-title">{item.section}</h2>
          ) : (
            <li key={index} className="hover:bg-hover-bg dark:hover:bg-dark-hover-bg">
              <NavLink
                to={item.url}
                className={({ isActive }) => 
                  `flex items-center pl-10 pt-3 pb-3 text-decoration-none hover:text-primary dark:hover:text-dark-primary ${
                    isActive ? 'bg-active-bg dark:bg-dark-active-bg text-sidebar-link rounded-md' : ''
                  }`
                }
              >
                {item.icon}
                <span className="text-sidebar-link dark:text-dark-sidebar-link pl-5">{item.name}</span>
              </NavLink>
            </li>
          )
        ))}
      </ul>
      <div className="flex flex-items items-center p-10 gap-20">
        <MdOutlineSettings className="w-6 h-6 text-gray-500 dark:text-gray-100" />
        <img className="h-8 w-8 rounded-full object-cover" src="src/assets/profile.jpg" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
