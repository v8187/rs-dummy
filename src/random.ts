import { swapNumbers, randomNum, randomItem } from '@v8187/rs-utils';
import { ALPHAS, DUMMY_TEXT_MIN_4 } from './common';

export const randomAlphabet = (): string => {
    return randomItem(ALPHAS.toLowerCase().split(''));
};

export const randomAlphaNum = (format): string => {
    return format.replace(/./g, char => {
        if (char === 'a') {
            return randomAlphabet();
        } else if (char === 'A') {
            return randomAlphabet().toUpperCase();
        } else if (char === 'x') {
            return randomNum(0, 9);
        } else {
            return char;
        }
    });
};

export const randomWords = (min: number = 1, max: number = 1): string => {
    let i = min;
    const words: string[] = [];

    if (min !== max) {
        max = randomNum(min, max);
    }

    while (i <= max) {
        words.push(randomItem(DUMMY_TEXT_MIN_4));
        i++;
    };

    return words.join(' ');
};

export const randomDate = (start, end) => {
    let startTime = start.getTime(),
        endTime = end.getTime();

    if (startTime > endTime) {
        const { a, b } = swapNumbers(startTime, endTime);
        startTime = a;
        endTime = b;
    }

    return new Date(startTime + Math.random() * (endTime - startTime));
};