import React from 'react';
import { GoGoal } from "react-icons/go";
import { PiCoffeeDuotone } from "react-icons/pi";
import { RiMenuSearchLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";

export default function ActivityAside() {
    return (
        <aside>
            <div className='bg-primary w-[350px] xl:w-[450px] h-[300px] rounded-lg p-5
            flex flex-col gap-5 justify-between'>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='bg-[#5f3336] text-[#e0713d] rounded-full w-16 h-16 flex justify-center items-center text-3xl'>
                            <GoGoal />
                        </div>
                        <h4 className='text-xl'>Goals</h4>
                    </div>
                    <div className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center'>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='bg-[#283266] text-[#7e87db] rounded-full w-16 h-16 flex justify-center items-center text-3xl'>
                            <PiCoffeeDuotone />
                        </div>
                        <h4 className='text-xl'>Popular Dishes</h4>
                    </div>
                    <div className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center'>
                        <MdArrowForwardIos />
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='bg-[#204a60] text-[#39a7cc] rounded-full w-16 h-16 flex justify-center items-center text-3xl'>
                            <RiMenuSearchLine />
                        </div>
                        <h4 className='text-xl'>Menus</h4>
                    </div>
                    <div className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center'>
                        <MdArrowForwardIos />
                    </div>
                </div>

            </div>
        </aside>
    )
}
