import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className='xl:flex'>
            <div className='xl:w-[6%] w-[30%]'>
                <Sidebar isSidebarOpen={isSidebarOpen} />
            </div>

            <div className='xl:w-[94%]'>
                <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {children}
            </div>
        </div>
    )
}
