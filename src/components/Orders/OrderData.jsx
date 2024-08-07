import React from 'react';
import { IoBagAdd } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCartXFill } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

export default function OrderData() {
    return (
        <div className='flex flex-wrap justify-center items-center gap-3 xl:gap-5'>

            <div className='w-40 h-36 bg-primary rounded-lg p-3'>
                <div className='bg-[#273566] w-10 h-10 flex justify-center items-center rounded-lg'>
                    <IoBagAdd className='text-4xl text-[#3e68ff] p-1' />
                </div>
                <h5 className='p-1 text-sm'>Total Orders</h5>
                <div className='flex justify-between p-1 mt-3'>
                    <h2 className='text-3xl font-bold'>75</h2>
                    <div className='flex gap-1 items-center text-[#10c28f] font-bold'>
                        <TiArrowSortedUp className='text-xl' />
                        <span className='text-sm'>3%</span>
                    </div>
                </div>

            </div>

            <div className='w-40 h-36 bg-primary rounded-lg p-3'>
                <div className='bg-[#155247] w-10 h-10 flex justify-center items-center rounded-lg'>
                    <BsCartCheckFill className='text-4xl text-[#00c88c] p-1' />
                </div>
                <h5 className='p-1 text-sm'>Total Delivered</h5>
                <div className='flex justify-between p-1 mt-3'>
                    <h2 className='text-3xl font-bold'>70</h2>
                    <div className='flex gap-1 items-center text-[#e74b53] font-bold'>
                        <TiArrowSortedDown className='text-xl' />
                        <span className='text-sm'>3%</span>
                    </div>
                </div>

            </div>

            <div className='w-40 h-36 bg-primary rounded-lg p-3'>
                <div className='bg-[#633237] w-10 h-10 flex justify-center items-center rounded-lg'>
                    <BsCartXFill className='text-4xl text-[#f35c5f] p-1' />
                </div>
                <h5 className='p-1 text-sm'>Total Cancelled</h5>
                <div className='flex justify-between p-1 mt-3'>
                    <h2 className='text-3xl font-bold'>05</h2>
                    <div className='flex gap-1 items-center text-[#10c28f] font-bold'>
                        <TiArrowSortedUp className='text-xl' />
                        <span className='text-sm'>3%</span>
                    </div>
                </div>

            </div>

            <div className='w-40 h-36 bg-primary rounded-lg p-3'>
                <div className='bg-[#602b4b] w-10 h-10 flex justify-center items-center rounded-lg'>
                    <BsCartCheckFill className='text-4xl text-[#e243a1] p-1' />
                </div>
                <h5 className='p-1 text-sm'>Total Revenue</h5>
                <div className='flex justify-between p-1 mt-3'>
                    <h2 className='text-3xl font-bold'>$12K</h2>
                    <div className='flex gap-1 items-center text-[#e74b53] font-bold'>
                        <TiArrowSortedDown className='text-xl' />
                        <span className='text-sm'>3%</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
