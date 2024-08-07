import React from 'react';
import { Rating } from "@material-tailwind/react";

export default function FeedbackRating() {
    return (
        <div>
            <div className='bg-primary p-3 xl:p-5 rounded-lg w-[350px] xl:w-[450px] h-[475px] overflow-y-scroll'>

                <h2 className='text-xl xl:text-2xl p-2 mb-3'>Customer's Feedback</h2>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img src='/user.png' alt='user'
                            className='w-10 h-10 rounded-full' />
                        <span className='text-lg xl:text-xl'>Jenny Wilson</span>
                    </div>
                    <Rating value={4} readonly />

                    <p className='text-[#9899a0]'>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens
                        &#40;gluten-free&#41; which was also very good. They were very conscientious about gluten allergies.</p>
                </div>

                <div className='py-5'>
                    <hr className="border-t-2 border-[#2d2d37]" />
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img src='/user.png' alt='user'
                            className='w-10 h-10 rounded-full' />
                        <span className='text-lg xl:text-xl'>Dianne Russell</span>
                    </div>
                    <Rating value={5} readonly />

                    <p className='text-[#9899a0]'>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                </div>

                <div className='py-5'>
                    <hr className="border-t-2 border-[#2d2d37]" />
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <img src='/user.png' alt='user'
                            className='w-10 h-10 rounded-full' />
                        <span className='text-lg xl:text-xl'>Devon Lane</span>
                    </div>
                    <Rating value={4} readonly />

                    <p className='text-[#9899a0]'>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                </div>
            </div>
        </div>
    )
}
