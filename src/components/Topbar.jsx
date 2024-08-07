import React from 'react';
import { IoSearch } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";


export default function Topbar({ isSidebarOpen, toggleSidebar }) {

    return (
        <div className='text-white bg-primary flex justify-between 
        items-center h-16 xl:h-20 sticky top-0 z-50'>

            <div className='flex gap-2 xl:gap-10 items-center'>

                <div className='block xl:hidden'>
                    {isSidebarOpen ?
                        <GiCancel
                            onClick={toggleSidebar}
                            className='text-2xl ml-2 mb-[2px]'
                        />
                        :
                        <RxHamburgerMenu
                            onClick={toggleSidebar}
                            className='text-2xl ml-2 mb-[2px]'
                        />
                    }
                </div>

                <div className='xl:ml-8 ml-2 bg-[#292b2f] border 
            border-[#383840] flex items-center w-[70%] xl:w-[300px] h-7 xl:h-10 rounded-lg'>
                    <IoSearch className='text-4xl p-2' />
                    <input
                        type='text'
                        className='bg-[#292b2f] outline-none w-[70%] xl:w-[300px]'
                        placeholder='Search'
                    />
                </div>

            </div>

            <div className='flex justify-center items-center gap-2 xl:gap-5 text-xl xl:text-2xl mr-2 xl:mr-8'>

                <div className='bg-secondary rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center'>
                    <CiMail />
                </div>

                <div className='bg-secondary rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center'>
                    <CiSettings />
                </div>

                <div className='bg-secondary rounded-full w-8 h-8 xl:w-10 xl:h-10 flex justify-center items-center'>
                    <IoIosNotificationsOutline />
                </div>

                <div>
                    <img
                        src='/user.png'
                        alt='user'
                        className='w-8 h-8 xl:w-10 xl:h-10 rounded-full'
                    />
                </div>

            </div>
        </div>
    )
}
