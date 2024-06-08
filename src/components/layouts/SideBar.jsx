import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  const menuItems = [
    { name: "Dashboard", icon: <FiHome className="m-1 text-primary dark:text-dark-primary" />, url: "/dashboard" },
    { section: "Client Facing" },
    { name: "Products", icon: <FiShoppingCart className="m-1 text-primary dark:text-dark-primary" />, url: "/products" },
    { name: "Customers", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/customers" },
    { name: "Transactions", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/transactions" },
    { name: "Geography", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/geography" },
    { section: "Sales" },
    { name: "Overview", icon: <FiShoppingCart className="m-1 text-primary dark:text-dark-primary" />, url: "/overview" },
    { name: "Daily", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/daily" },
    { name: "Monthly", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/monthly" },
    { name: "Breakdown", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/breakdown" },
    { section: "Management" },
    { name: "Admin", icon: <FiShoppingCart className="m-1 text-primary dark:text-dark-primary" />, url: "/admin" },
    { name: "Performance", icon: <FiUsers className="m-1 text-primary dark:text-dark-primary" />, url: "/performance" },
  ];

  return (
    <div className={`bg-gray-200 dark:bg-secondary-dark-background h-screen fixed top-0 bottom-0 left-0 overflow-y-auto z-50 transform ${isSidebarOpen ? '-translate-x-0 w-64' : '-translate-x-full'}`}>
      <div className="">
        <div className="flex flex-items pl-10 pt-5 pb-5">
          <h1 className="text-xl text-primary dark:text-dark-primary">LAVONTECH</h1>
          <button onClick={closeSidebar} className="block lg:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-300">
            <FaAngleLeft />
          </button>
        </div>
        <ul>
          {menuItems.map((item, index) => (
            item.section ? (
              <h2 key={index} className="text-sm text-left pl-10 pt-8 pb-8 text-primary dark:text-dark-primary">{item.section}</h2>
            ) : (
              <li key={index} className="hover:bg-hover-bg">
                <Link to={item.url} className="flex items-left pl-10 pt-4 pb-4 text-decoration-none hover:text-primary dark:hover:text-dark-primary">
                  {item.icon}
                  <span className="pl-5 text-primary dark:text-dark-primary">{item.name}</span>
                </Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;