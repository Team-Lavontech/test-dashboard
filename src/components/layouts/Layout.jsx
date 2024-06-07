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
                <div className="mt-8">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;
