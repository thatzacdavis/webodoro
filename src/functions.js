const prettyPrintTime = (string, pad, length) => {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

const convertSecondsToReadableTime = (timeLeft) => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    
    var finalTime = prettyPrintTime(minutes,'0',2) + ':'+ prettyPrintTime(seconds,'0',2);

    return finalTime;
};

export default convertSecondsToReadableTime;