const doubleNumbers = (val: number): string => {
    return val < 10 ? `0${val}` : `${val}`;
};

export const secondsToTime = (secondsTime: number): string => {
    let microseconds: number, seconds: number, minutes: number, hours: number;

    hours = Math.floor(secondsTime / 3600);
    minutes = Math.floor((secondsTime - hours * 3600) / 60);
    seconds = Math.floor(secondsTime - (hours * 3600 + minutes * 60));
    microseconds = 0;
    return `${doubleNumbers(hours)}:${doubleNumbers(minutes)}:${doubleNumbers(
        seconds
    )}:${doubleNumbers(microseconds)}`;
};
