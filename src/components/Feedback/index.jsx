import React from 'react';
import OrderTable from './OrderTable';
import FeedbackRating from './FeedbackRating';

export default function Feedback() {
    return (
        <div className='flex flex-col xl:flex-row justify-center items-center gap-3 xl:gap-10 px-3 xl:px-8 mb-3 xl:mb-8'>

            <div className='xl:flex-[2]'>
                <OrderTable />
            </div>

            <div className='xl:flex-[1] flex justify-center items-center'>
                <FeedbackRating />
            </div>
        </div>
    )
}
