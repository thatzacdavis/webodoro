import React from 'react';
import convertSecondsToReadableTime from '../functions';

const Timer = ({ timeLeft }) => { 
    return (
        <h1>{convertSecondsToReadableTime(timeLeft)}</h1>
)};

export default Timer;