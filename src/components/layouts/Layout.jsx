import { useState } from 'react';
import Navbar from "./NavBar";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 bg-background dark:bg-dark-background">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <div className={`flex flex-col w-full transition duration-300 ease-in-out`}>
                <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <div className={`fixed top-10 ${isSidebarOpen ? 'lg:left-72 sm:left-0' : 'left-0'} right-0`}>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;
