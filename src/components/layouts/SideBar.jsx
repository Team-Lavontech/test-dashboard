import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

  const closeSidebar = () => {
    toggleSidebar(false);
  };
  
  return (
    <div className={`bg-gray-200 dark:bg-secondary-dark-background h-screen fixed top-0 bottom-0 left-0 z-50 transform ${isSidebarOpen ? '-translate-x-0 w-64' : '-translate-x-full'}`}>
      <div className="p-4">
      <button onClick={closeSidebar} className="block lg:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-300">
          Close
        </button>
        <ul>
          <li>
            <Link to="/dashboard" className="flex items-center p-2">
              <FiHome className="mr-2 text-blue-500" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center p-2">
              <FiShoppingCart className="mr-2 text-blue-500" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className="flex items-center p-2">
              <FiUsers className="mr-2 text-blue-500" />
              <span>Customers</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
