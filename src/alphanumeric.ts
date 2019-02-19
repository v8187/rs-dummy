import { randomAlphaNum } from './random';

export interface IAlphanumericOptions {
    format?: string;
};

const DEFAULTS: IAlphanumericOptions = {
    format: ''
};

export const alphanumeric = (options: IAlphanumericOptions = DEFAULTS): string => {
    return randomAlphaNum(options.format || DEFAULTS.format);
};