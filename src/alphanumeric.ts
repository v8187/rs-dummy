import { randomAlphaNum } from './random';

export interface IAlphanumericOptions {
    format?: string;
};

const DEFAULTS: TRequired<IAlphanumericOptions> = {
    format: ''
};

/**
 * This method generates the random Alphanumeric string based on
 * given string containing "x", "a" and "A". 
 * - "x" will be replaced by digits
 * - "a" will be replaced by lowercase alphabets
 * - "A" will be replaced by uppercase alphabets
 * - Rest all characters will be returned as it is.
 * - Empty string will be returned if no options are provided
 * 
 * @param options { IAlphanumericOptions }
 * @returns string
 */
export const alphanumeric = (options: IAlphanumericOptions = DEFAULTS): string => {
    return randomAlphaNum(options.format || DEFAULTS.format);
};