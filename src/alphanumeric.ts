import { randomNum } from '@v8187/rs-utils';
import { randomAlphabet } from './random';

export interface IAlphanumericOptions {
    format?: string;
};

export const alphanumericDefaults: TRequired<IAlphanumericOptions> = {
    format: ''
};

/**
 * Generates the random Alphanumeric string based on
 * given string containing "x", "a" and "A". 
 * - "x" will be replaced by digits
 * - "a" will be replaced by lowercase alphabets
 * - "A" will be replaced by uppercase alphabets
 * - Rest all characters will be returned as it is.
 * - Empty string will be returned if no options are provided
 * 
 * @param options { IAlphanumericOptions }
 * @returns { string }
 */
export const alphanumeric = (options: IAlphanumericOptions = alphanumericDefaults): string => {
    return (options.format || alphanumericDefaults.format).replace(/./g, char => {
        if (char === 'a') {
            return randomAlphabet();
        } else if (char === 'A') {
            return randomAlphabet().toUpperCase();
        } else if (char === 'x') {
            return `${randomNum(0, 9)}`;
        } else {
            return char;
        }
    });
};