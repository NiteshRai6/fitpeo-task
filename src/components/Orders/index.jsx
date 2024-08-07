import React from 'react';
import Profit from './Profit';
import OrderData from './OrderData';

export default function Orders() {
    return (
        <>
            <h1 className='p-3 pl-8 xl:pl-20 xl:p-8 text-xl xl:text-3xl font-bold'>Dashboard</h1>

            <div className='flex flex-col xl:flex-row justify-center items-center gap-3 xl:gap-10 px-3 xl:px-8'>

                <div className='xl:flex-[2] flex justify-center items-center'>
                    <OrderData />
                </div>

                <div className='xl:flex-[1] flex justify-center items-center'>
                    <Profit />
                </div>


            </div>

        </>

    )
}
