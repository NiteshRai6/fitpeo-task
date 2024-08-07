import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProfitBar({ value }) {
    return (
        <div style={{ width: '100px', height: '100px' }}>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#7196fd',
                    trailColor: '#293262',
                })}
            />
        </div>
    );
};
