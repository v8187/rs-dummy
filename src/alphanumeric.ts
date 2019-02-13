import { randomAlphaNum } from './random';

export interface IAlphanumeric {
    format?: string;
};

export const alphanumeric = (options: IAlphanumeric = {}): string => {
    return randomAlphaNum(options.format || '');
};