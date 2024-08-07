import React from 'react';
import ActivityBar from './ActivityBar';
import ActivityAside from './ActivityAside';

export default function Activity() {
    return (
        <div className='flex flex-wrap gap-3 xl:gap-10 justify-center items-center m-3 xl:m-8'>

            <div className='flex-[2] flex justify-center items-center'>
                <ActivityBar />
            </div>

            <div className='flex-[1] flex justify-center items-center'>
                <ActivityAside />
            </div>

        </div>
    )
}
