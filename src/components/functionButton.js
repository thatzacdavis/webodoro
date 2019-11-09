import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const FunctionButton = ({ timeLeft, setTimeLeft }) => {
    const [isTimerOn, setIsTimerOn] = useState(false);
    const [intervalId, setIntervalId] = useState('');

    useEffect(() => {
        if (intervalId === '' && isTimerOn) {
            let timeLeftForInterval = timeLeft;
            const newIntervalId = setInterval(() => {
                timeLeftForInterval -= 1;
                setTimeLeft(timeLeftForInterval);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    }, [intervalId, isTimerOn, setTimeLeft, timeLeft]);

    const handleButtonClick = () => {
        if (isTimerOn) {
            setIsTimerOn(false);
            clearInterval(intervalId);
            setIntervalId('');
        } else {
            setIsTimerOn(true);
        }
    };

    return (
        <Button variant="contained" color="primary" onClick={() => handleButtonClick()}>
            {!isTimerOn ? 'Start Timer' : 'Pause Timer'}
        </Button>
    );
};

export default FunctionButton;
