import React from 'react';

export default function OrderTable() {
    return (
        <div className='bg-primary rounded-lg xl:mx-16'>
            <h1 className='text-xl xl:text-2xl font-bold pt-3 xl:pt-5 pl-3 xl:pl-5'>Recent Orders</h1>

            <div className='p-3 xl:p-5'>
                <table className='xl:w-full text-center text-xs xl:text-base'>

                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Order No.</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Wade Warren</td>
                            <td>15478256</td>
                            <td>$124.00</td>
                            <td>
                                <button className='px-3 py-1 bg-[#155449] 
                            text-[#28a987] font-bold rounded-full'>
                                    Delivered
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Jane Cooper</td>
                            <td>48965786</td>
                            <td>$365.02</td>
                            <td>
                                <button className='px-3 py-1 bg-[#155449] 
                            text-[#28a987] font-bold rounded-full'>
                                    Delivered
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Guy Hawkins</td>
                            <td>78958215</td>
                            <td>$45.88</td>
                            <td>
                                <button className='px-3 py-1 bg-[#542d15] 
                            text-[red] font-bold rounded-full'>
                                    Cancelled
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Kristin Watson</td>
                            <td>20965732</td>
                            <td>$65.00</td>
                            <td>
                                <button className='px-3 py-1 bg-[#542d15] 
                            text-[red] font-bold rounded-full'>
                                    Pending
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Cody Fisher</td>
                            <td>95715620</td>
                            <td>$545.00</td>
                            <td>
                                <button className='px-3 py-1 bg-[#155449] 
                            text-[#28a987] font-bold rounded-full'>
                                    Delivered
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='5' className='xl:px-10'>
                                <hr className="border-t-2 border-[#2d2d37]" />
                            </td>
                        </tr>

                        <tr>
                            <td className='flex justify-end items-center'>
                                <img src='/user.png' alt='user'
                                    className='w-10 h-10 rounded-full' />
                            </td>
                            <td>Savannah Nguyen</td>
                            <td>78514568</td>
                            <td>$128.20</td>
                            <td>
                                <button className='px-3 py-1 bg-[#155449] 
                            text-[#28a987] font-bold rounded-full'>
                                    Delivered
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}
