import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 5, activity: 5000 },
    { name: 9, activity: 10000 },
    { name: 11, activity: 7500 },
    { name: 13, activity: 5000 },
    { name: 15, activity: 2000 },
    { name: 17, activity: 5000 },
    { name: 19, activity: 12000 },
    { name: 21, activity: 15000 },
    { name: 23, activity: 10000 },
    { name: 25, activity: 8000 },
    { name: 27, activity: 6000 },
];

export default function ActivityBar() {
    return (
        <div className='bg-primary xl:w-[85%] w-[350px] p-5 rounded-lg'>

            <div className='flex justify-between gap-10 bg-primary pb-5'>
                <h2 className='text-2xl font-bold'>Activity</h2>

                <select className='text-white bg-secondary outline-none p-2 rounded-full'>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Daily</option>
                </select>
            </div>

            <ResponsiveContainer width='100%' height={200}>
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={{ stroke: '#333' }} tick={{ fill: '#fff' }} />
                    <YAxis axisLine={{ stroke: '#333' }} tick={{ fill: '#fff' }} />
                    <Tooltip />
                    <Bar dataKey="activity" fill='#7196fd' barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}