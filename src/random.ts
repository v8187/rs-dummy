import { swapNumbers, randomNum, randomItem } from '@v8187/rs-utils'
import { ALPHAS, DUMMY_TEXT_MIN_4 } from './static/common';

/**
 * Generates the random single Alphabet (a - z) in lowercase
 * 
 * @returns { string }
 */
export const randomAlphabet = (): string => {
    return randomItem(ALPHAS.toLowerCase().split(''));
};

/**
 * Generates the random Words based on given parameters
 * 
 * @param min { number } 
 * @param max { number } 
 * @returns { string }
 */
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

/**
 * Generates the random Date between 2 dates based on given parameters
 * 
 * @param start { Date }
 * @param end { Date }
 * @returns { Date }
 */
export const randomDate = (start: Date = new Date(), end: Date = new Date()): Date => {
    let startTime = start.getTime(),
        endTime = end.getTime();

    if (startTime > endTime) {
        const { a, b } = swapNumbers(startTime, endTime);
        startTime = a;
        endTime = b;
    }

    return new Date(startTime + Math.random() * (endTime - startTime));
};