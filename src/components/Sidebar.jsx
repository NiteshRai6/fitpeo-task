import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { BiTask } from "react-icons/bi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";

export default function Sidebar({ isSidebarOpen }) {
    return (
        <div className={`hideen xl:block h-[40vh] xl:h-screen bg-primary text-[gray] 
        sticky top-0 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`}>

            <div className='flex justify-center pt-2 pr-2'>
                <MdDashboard className='text-bar text-4xl' />
            </div>

            <div className='flex flex-col items-center gap-2 xl:gap-8 pr-3 pt-10'>

                <div className='border-l-4 border-bar'>
                    <IoMdHome className='text-bar text-3xl ml-1' />
                </div>

                <SiSimpleanalytics className='text-xl' />
                <BiTask className='text-3xl' />
                <MdOutlineFeaturedPlayList className='text-3xl' />
                <BsBagCheck className='text-3xl' />

            </div>
        </div>
    )
}
